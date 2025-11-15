"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type PartnerFormProps = {
  className?: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export default function PartnerForm({ className = "" }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollReveal animation="fadeIn" className={className}>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <div className="product-options">
          <div className="selector-wrapper">
            <div className="mb-3 row flex flex-col md:flex-row md:items-center md:justify-end">
              <label htmlFor="name" className="col-sm-4 col-form-label text-left md:text-right mb-2 md:mb-0 md:pr-4">
                Full Name
              </label>
              <div className="col-sm-8 w-full md:max-w-[380px] md:flex-shrink-0">
                <input
                  id="name"
                  className={`form-control border-2 rounded px-3 py-2 w-full transition-colors ${
                    errors.name 
                      ? "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "bg-white border-gray-300 focus:border-primary focus:ring-primary"
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1">
                    <span className="text-red-500">●</span>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="product-quantity inline-input-wrapper">
            <div className="mb-3 row flex flex-col md:flex-row md:items-center md:justify-end">
              <label htmlFor="email" className="col-sm-4 col-form-label text-left md:text-right mb-2 md:mb-0 md:pr-4">
                Your Email
              </label>
              <div className="col-sm-8 w-full md:max-w-[380px] md:flex-shrink-0">
                <input
                  id="email"
                  className={`form-control opacity-change border-2 rounded px-3 py-2 w-full placeholder:text-gray-400 transition-colors ${
                    errors.email 
                      ? "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "bg-white border-gray-300 focus:border-primary focus:ring-primary"
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1">
                    <span className="text-red-500">●</span>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="product-quantity inline-input-wrapper">
            <div className="mb-3 row flex flex-col md:flex-row md:items-center md:justify-end">
              <label htmlFor="company" className="col-sm-4 col-form-label text-left md:text-right mb-2 md:mb-0 md:pr-4">
                Company
              </label>
              <div className="col-sm-8 w-full md:max-w-[380px] md:flex-shrink-0">
                <input
                  id="company"
                  className={`form-control border-2 rounded px-3 py-2 w-full transition-colors ${
                    errors.company 
                      ? "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "bg-white border-gray-300 focus:border-primary focus:ring-primary"
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  aria-invalid={errors.company ? "true" : "false"}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1">
                    <span className="text-red-500">●</span>
                    {errors.company}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="product-quantity inline-input-wrapper">
            <div className="mb-3 row flex flex-col md:flex-row md:items-start md:justify-end">
              <label htmlFor="message" className="col-sm-4 col-form-label text-left md:text-right mb-2 md:mb-0 md:pr-4 md:pt-2">
                Message
              </label>
              <div className="col-sm-8 w-full md:max-w-[380px] md:flex-shrink-0">
                <textarea
                  id="message"
                  className={`form-control border-2 rounded px-3 py-2 w-full transition-colors resize-y ${
                    errors.message 
                      ? "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "bg-white border-gray-300 focus:border-primary focus:ring-primary"
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1">
                    <span className="text-red-500">●</span>
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="add-to-cart">
            <div className="mb-3 row flex flex-col md:flex-row">
              <div className="col-sm-4"></div>
              <div className="col-sm-8 flex-1 flex justify-end">
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary bg-primary text-white border-primary hover:bg-[#c63615] hover:border-[#c63615] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  {submitStatus === "success" && (
                    <div className="mt-2 p-3 bg-green-50 border-2 border-green-500 rounded">
                      <p className="text-green-700 text-sm font-medium flex items-center gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        Thank you! Your message has been submitted successfully.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mt-2 p-3 bg-red-50 border-2 border-red-500 rounded">
                      <p className="text-red-700 text-sm font-medium flex items-center gap-2">
                        <span className="text-red-500 text-lg">✕</span>
                        There was an error submitting your message. Please try again.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ScrollReveal>
  );
}

