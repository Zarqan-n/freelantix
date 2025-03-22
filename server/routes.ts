import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.saveContactSubmission(validatedData);
      
      // In a real-world app, you might want to send an email here
      // using a service like SendGrid or Nodemailer
      
      res.status(201).json({ 
        success: true, 
        message: "Message received! We'll get back to you shortly.",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your message. Please try again later."
        });
      }
    }
  });

  // Blog posts endpoint
  app.get("/api/blog", (_req, res) => {
    try {
      const posts = storage.getBlogPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog posts."
      });
    }
  });

  // Single blog post endpoint
  app.get("/api/blog/:id", (req, res) => {
    try {
      const postId = req.params.id;
      const post = storage.getBlogPostById(postId);
      
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found."
        });
      }
      
      res.status(200).json(post);
    } catch (error) {
      console.error(`Error fetching blog post ${req.params.id}:`, error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog post."
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Validate email
      const validatedData = z.object({
        email: z.string().email("Please enter a valid email address")
      }).parse(req.body);
      
      // Store the subscriber
      const subscriber = await storage.saveNewsletterSubscriber(validatedData.email);
      
      res.status(201).json({
        success: true,
        message: "Thank you for subscribing to our newsletter!",
        id: subscriber.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid email address",
          errors: error.errors
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your subscription. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
