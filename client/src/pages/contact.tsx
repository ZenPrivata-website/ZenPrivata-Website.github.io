import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Linkedin, Calendar, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  organization: z.string().min(1, "Organization is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to proceed"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      organization: "",
      message: "",
      consent: false,
    },
  });

  // Check if we're running on GitHub Pages (static environment)
  const isGitHubPages = window.location.hostname.includes('github.io') || 
                        window.location.hostname.includes('pages.github.com') ||
                        !window.location.hostname.includes('replit');

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (isGitHubPages) {
        // Use EmailJS for GitHub Pages (static hosting)
        const templateParams = {
          user_email: data.email,
          organization: data.organization,
          message: data.message,
          form_type: 'Contact Form Submission',
          timestamp: new Date().toLocaleString()
        };

        // EmailJS configuration for GitHub Pages
        const serviceId = 'service_osoudyz';
        const templateId = 'template_ho61775';
        const publicKey = 'tb1C0_QTUVGQNsZ3O';

        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        return { success: true, message: "Thank you for your message! We'll get back to you within 24 hours." };
      } else {
        // Use server API for Replit hosting
        const response = await apiRequest('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.json();
      }
    },
    onSuccess: (response: any) => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      toast({
        title: "Message Sent!",
        description: response.message || "Thank you for your message! We'll get back to you within 24 hours.",
      });
      
      form.reset();
    },
    onError: (error: any) => {
      console.error('Contact form error:', error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error?.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };



  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-zen-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-zen-success" />
              </div>
              <h3 className="text-xl font-semibold text-zen-dark mb-2">Message Sent!</h3>
              <p className="text-zen-muted mb-4">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">Get in Touch</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            Ready to strengthen your CDFI's cybersecurity posture? Contact us to schedule a consultation or learn more about our services.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Form */}
          <Card className="shadow-lg max-w-2xl w-full">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-zen-dark mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us how we can help you..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-zen-muted font-normal">
                            I consent to receiving communications from ZenPrivata.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-zen-orange text-white hover:bg-orange-600 transition-colors"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}