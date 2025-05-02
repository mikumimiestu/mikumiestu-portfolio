"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Get In Touch
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mb-6 transition-all duration-700 delay-100",
            isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-muted-foreground max-w-3xl transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card 
            className={cn(
              "lg:col-span-1 border bg-card hover:shadow-md transition-all duration-500",
              isInView ? "translate-x-0 opacity-100" : "translate-x-[-20px] opacity-0",
              isInView && "transition-delay-300"
            )}
            style={{
              transitionDelay: isInView ? "300ms" : "0ms"
            }}
          >
            <CardContent className="p-6 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">zaki@technovagroupinc.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+62 81378234772</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Padang, Sumatera Barat, Indonesia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={cn(
              "lg:col-span-2 border bg-card hover:shadow-md transition-all duration-500",
              isInView ? "translate-x-0 opacity-100" : "translate-x-[20px] opacity-0",
              isInView && "transition-delay-400"
            )}
            style={{
              transitionDelay: isInView ? "400ms" : "0ms"
            }}
          >
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}