import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email capture endpoint for lead generation
  app.post("/api/capture-email", async (req, res) => {
    try {
      const { email, name } = req.body;
      
      if (!email || !email.includes("@")) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }

      // In a real application, you would save this to a database
      // and integrate with an email marketing service
      console.log("Email captured:", { email, name, timestamp: new Date().toISOString() });
      
      res.json({ 
        message: "Successfully subscribed! Check your email for exclusive bonuses.",
        success: true 
      });
    } catch (error) {
      console.error("Email capture error:", error);
      res.status(500).json({ 
        message: "Something went wrong. Please try again." 
      });
    }
  });

  // Purchase simulation endpoint
  app.post("/api/purchase", async (req, res) => {
    try {
      const { package: packageType, email, name } = req.body;
      
      if (!email || !packageType) {
        return res.status(400).json({ 
          message: "Email and package selection are required" 
        });
      }

      // In a real application, you would:
      // 1. Process payment through a payment gateway
      // 2. Generate download links
      // 3. Send confirmation emails
      // 4. Create user account with access to materials
      
      console.log("Purchase initiated:", { 
        packageType, 
        email, 
        name, 
        timestamp: new Date().toISOString() 
      });
      
      res.json({ 
        message: "Purchase successful! Check your email for download links.",
        success: true,
        downloadLinks: [
          "https://example.com/download/tactical-marketer.pdf",
          "https://example.com/download/ai-automation.pdf", 
          "https://example.com/download/offer-alchemy.pdf"
        ]
      });
    } catch (error) {
      console.error("Purchase error:", error);
      res.status(500).json({ 
        message: "Purchase failed. Please try again or contact support." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
