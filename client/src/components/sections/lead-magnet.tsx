import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  organization: z.string().min(1, "Organization name is required"),
  gdprConsent: z.boolean().refine(val => val === true, "You must consent to proceed"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadMagnetSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      email: "",
      organization: "",
      gdprConsent: false,
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('organization', data.organization);
      formData.append('gdprConsent', data.gdprConsent.toString());

      const response = await fetch('https://formspree.io/f/mvgoywev', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Thank you! We'll email you the download link shortly.",
        });
        form.reset();

        // Provide immediate download link to the PDF
        const link = document.createElement('a');
        link.href = '/CDFI-SPF.pdf';
        link.download = 'CDFI-Security-Privacy-Framework.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-magnet" className="py-20 bg-gradient-to-r from-zen-light to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-zen-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-zen-success" />
              </div>
              <h3 className="text-xl font-semibold text-zen-dark mb-2">Download Sent!</h3>
              <p className="text-zen-muted">
                Please check your email for the download link to the CDFI Security Framework.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-r from-zen-light to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-zen-dark">
            Download the CDFI Cybersecurity Framework
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-4">
            <p className="text-base text-zen-muted leading-relaxed">
              ZenPrivata was commissioned by the African American Alliance of″]CDFI CEOs to develop a security and privacy framework for Community Development Financial Institutions (CDFI) as part of their Women-Led Initiative Technology Enhancement Project.
            </p>
            <p className="text-base text-zen-muted leading-relaxed">
              The CDFI Security and Privacy Framework (CDFI-SPF) was created specifically with the needs and abilities of CDFIs in mind. We met with CDFIs and learned what dangers they face, what risks would be most harmful to CDFIs, what systems CDFIs use and what their attack surface looked like, and what controls CDFIs typically already had in place.
            </p>
            <p className="text-base text-zen-muted leading-relaxed">
              CDFIs can use the Framework, free of charge, to determine which cybersecurity and privacy controls they should implement and to track their progress.
            </p>
          </div>

          {/* Form - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <Card className="shadow-lg max-w-md w-full">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
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
                            <Input placeholder="CDFI Organization Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gdprConsent"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 text-left">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="text-sm text-zen-muted">
                            I consent to receiving communications from ZenPrivata.
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-zen-orange text-white hover:bg-orange-600 transition-colors"
                      disabled={form.formState.isSubmitting}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {form.formState.isSubmitting ? "Sending..." : "Download Free Framework"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}