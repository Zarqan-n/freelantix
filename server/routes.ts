import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      
      // For each post, add author information
      const postsWithAuthors = await Promise.all(
        posts.map(async (post) => {
          const author = await storage.getUser(post.authorId);
          return {
            ...post,
            author: {
              name: author?.username || "Unknown Author",
              avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                author?.username || "Unknown"
              )}&background=random`
            }
          };
        })
      );
      
      res.json(postsWithAuthors);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  app.get("/api/blog/recent", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const posts = await storage.getRecentBlogPosts(limit);
      
      // For each post, add author information
      const postsWithAuthors = await Promise.all(
        posts.map(async (post) => {
          const author = await storage.getUser(post.authorId);
          return {
            ...post,
            author: {
              name: author?.username || "Unknown Author",
              avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                author?.username || "Unknown"
              )}&background=random`
            }
          };
        })
      );
      
      res.json(postsWithAuthors);
    } catch (error) {
      console.error("Error fetching recent blog posts:", error);
      res.status(500).json({ message: "Error fetching recent blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      const author = await storage.getUser(post.authorId);
      
      res.json({
        ...post,
        author: {
          name: author?.username || "Unknown Author",
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
            author?.username || "Unknown"
          )}&background=random`
        }
      });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  app.get("/api/blog/related/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      const relatedPosts = await storage.getRelatedBlogPosts(post.id, limit);
      
      // For each post, add author information
      const postsWithAuthors = await Promise.all(
        relatedPosts.map(async (post) => {
          const author = await storage.getUser(post.authorId);
          return {
            ...post,
            author: {
              name: author?.username || "Unknown Author",
              avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                author?.username || "Unknown"
              )}&background=random`
            }
          };
        })
      );
      
      res.json(postsWithAuthors);
    } catch (error) {
      console.error("Error fetching related blog posts:", error);
      res.status(500).json({ message: "Error fetching related blog posts" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ message: "Message sent successfully", id: submission.id });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.subscribeToNewsletter(validatedData);
      
      res.status(201).json({ message: "Subscribed successfully", id: subscription.id });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  // Unsubscribe from newsletter
  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const schema = z.object({
        email: z.string().email()
      });
      
      const { email } = schema.parse(req.body);
      const success = await storage.unsubscribeFromNewsletter(email);
      
      if (success) {
        res.json({ message: "Unsubscribed successfully" });
      } else {
        res.status(404).json({ message: "Email not found in subscription list" });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error processing unsubscribe request:", error);
      res.status(500).json({ message: "Failed to unsubscribe" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
