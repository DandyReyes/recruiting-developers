import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const [toast, setToast] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors: typeof errors = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateInputs())
      return setToast({
        type: "error",
        message: "Please fix the errors in the form",
      });

    const token = recaptchaRef.current?.getValue();
    if (!token)
      return setToast({
        type: "error",
        message: "Please complete the reCAPTCHA",
      });

    try {
      await emailjs.send(
        (import.meta as any).env.VITE_SERVICE_ID,
        (import.meta as any).env.VITE_TEMPLATE_ID,
        {
          ...formData,
          "g-recaptcha-response": token,
        },
        (import.meta as any).env.VITE_PUBLIC_KEY
      );
      setToast({ type: "success", message: "Message sent successfully!" });

      recaptchaRef.current?.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error("EMAILJS ERROR:", err);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Find Your Next
            <span className="text-secondary"> Great Hire?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your hiring needs and how I can help you build the
            exceptional team your organization deserves. Get in touch today for
            a confidential consultation.
          </p>
        </div>

        <div className="lg:col-span-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Start a Conversation</CardTitle>
              <CardDescription>
                Tell me about your hiring needs and I'll get back to you within
                24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    aria-invalid={!!errors.firstName}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    aria-invalid={!!errors.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    aria-invalid={!!errors.company}
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <p className="text-sm text-muted-foreground mb-1">
                  Technical Recruitment / Contract Staffing
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell me about your hiring needs</Label>
                <Textarea
                  id="message"
                  placeholder="Describe the role(s) you're looking to fill, timeline, and any specific requirements..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={(import.meta as any).env.VITE_RECAPTCHA_SITE_KEY}
              />
              {toast && (
                <div
                  className={`fixed top-4 right-4 z-50 p-4 rounded shadow-lg grid-cols-2 ${
                    toast.type === "error"
                      ? "bg-destructive text-white"
                      : "bg-success text-white"
                  }`}
                  style={{ width: "300px" }}
                >
                  {toast.message}
                  <button
                    onClick={() => setToast(null)}
                    className="ml-2 font-bold"
                  >
                    ✕
                  </button>
                </div>
              )}

              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={handleSubmit}
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
