import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/back-to-top";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import { SmoothScrollProvider } from "./contexts/SmoothScrollContext";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize page transition animations
  useEffect(() => {
    // Initial page fade in
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Set up global animation settings
    gsap.config({
      nullTargetWarn: false,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider options={{ 
        smooth: true, 
        smoothMobile: false,
        lerp: 0.1,
        inertia: 0.1,
        getDirection: true,
      }}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <BackToTop />
        </div>
        <Toaster />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
