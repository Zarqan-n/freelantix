import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table - keeping the original schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isRead: boolean("is_read").default(false).notNull(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof contactFormSchema>;

// Newsletter subscribers table
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

export const newsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).pick({
  email: true,
});

export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertNewsletterSubscriber = z.infer<typeof newsletterSubscriberSchema>;

// Blog posts schema - for validation purposes
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  categoryColor: z.string(),
  date: z.string(),
  image: z.string().url(),
  excerpt: z.string(),
  readTime: z.number().int().positive(),
  author: z.object({
    name: z.string(),
    title: z.string(),
    avatar: z.string().url(),
    bio: z.string()
  }),
  tags: z.array(z.string()),
  content: z.array(z.object({
    heading: z.string().optional(),
    paragraphs: z.array(z.string()),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
      caption: z.string().optional()
    }).optional()
  }))
});

export type BlogPost = z.infer<typeof blogPostSchema>;
