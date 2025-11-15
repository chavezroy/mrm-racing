"use client";

import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

type PartnerFormProps = {
  className?: string;
  onSuccessStateChange?: (isSuccess: boolean) => void;
};

export default function PartnerForm({ className = "", onSuccessStateChange }: PartnerFormProps) {
  const [state, handleSubmit] = useForm("mjkanpqb");

  // Helper function to check if a field has errors
  const hasFieldError = (fieldName: string): boolean => {
    if (!state.errors) return false;
    // Check if errors is an array
    if (Array.isArray(state.errors)) {
      return state.errors.some((error: any) => error.field === fieldName);
    }
    // Check if errors is an object with field names as keys
    if (typeof state.errors === 'object') {
      return fieldName in state.errors;
    }
    return false;
  };

  // Helper function to get error message for a field
  const getFieldError = (fieldName: string): string | null => {
    if (!state.errors) return null;
    // Check if errors is an array
    if (Array.isArray(state.errors)) {
      const error = state.errors.find((error: any) => error.field === fieldName);
      return error ? error.message : null;
    }
    // Check if errors is an object with field names as keys
    if (typeof state.errors === 'object' && fieldName in state.errors) {
      const error = (state.errors as any)[fieldName];
      // If it's an array, get the first message
      if (Array.isArray(error)) {
        return error[0]?.message || error[0] || null;
      }
      // If it's a string, return it
      if (typeof error === 'string') {
        return error;
      }
      // If it's an object with a message property
      if (error?.message) {
        return error.message;
      }
    }
    return null;
  };

  // Helper function to get general submission error (not field-specific)
  const getGeneralError = (): string | null => {
    if (!state.errors) return null;
    // Check if errors is an array
    if (Array.isArray(state.errors)) {
      // Find errors that don't have a field property (general errors)
      const generalError = state.errors.find((error: any) => !error.field);
      return generalError ? generalError.message : null;
    }
    // Check if errors is an object
    if (typeof state.errors === 'object') {
      // Check for common general error keys
      const generalErrorKeys = ['_form', 'form', 'message', 'error'];
      for (const key of generalErrorKeys) {
        if (key in state.errors) {
          const error = (state.errors as any)[key];
          if (Array.isArray(error)) {
            return error[0]?.message || error[0] || null;
          }
          if (typeof error === 'string') {
            return error;
          }
          if (error?.message) {
            return error.message;
          }
        }
      }
      // If there are errors but no field-specific errors, it might be a general error
      const fieldNames = ['name', 'email', 'company', 'message'];
      const hasFieldErrors = fieldNames.some(field => hasFieldError(field));
      if (!hasFieldErrors && Object.keys(state.errors).length > 0) {
        // Try to get the first error message
        const firstKey = Object.keys(state.errors)[0];
        const error = (state.errors as any)[firstKey];
        if (Array.isArray(error)) {
          return error[0]?.message || error[0] || null;
        }
        if (typeof error === 'string') {
          return error;
        }
        if (error?.message) {
          return error.message;
        }
      }
    }
    return null;
  };

  // Check if there's a general submission error
  const hasGeneralError = (): boolean => {
    if (!state.errors) return false;
    const generalError = getGeneralError();
    if (generalError) return true;
    // If there are errors but no field-specific errors, treat as general error
    const fieldNames = ['name', 'email', 'company', 'message'];
    const hasFieldErrors = fieldNames.some(field => hasFieldError(field));
    if (!hasFieldErrors && state.errors && Object.keys(state.errors).length > 0) {
      return true;
    }
    return false;
  };

  // Notify parent of success state changes
  useEffect(() => {
    if (onSuccessStateChange) {
      onSuccessStateChange(state.succeeded);
    }
  }, [state.succeeded, onSuccessStateChange]);

  // Don't render success message here - it will be rendered in parent
  // But we still need to render something to keep the component mounted
  // so the callback can fire
  if (state.succeeded) {
    return <div style={{ display: 'none' }} />;
  }

  return (
    <ScrollReveal animation="fadeIn" className={className}>
      <motion.form
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
        className="w-full"
      >
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
                    hasFieldError('name') 
                      ? 'bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'bg-white border-gray-300 focus:border-primary focus:ring-primary'
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="text"
                  name="name"
                  required
                />
                {hasFieldError('name') && (
                  <div className="mt-1 p-2 bg-red-50 border border-red-300 rounded">
                    <p className="text-red-700 text-sm font-medium flex items-center gap-1">
                      <span className="text-red-500">✕</span>
                      {getFieldError('name') || 'Name is required'}
                    </p>
                  </div>
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
                    hasFieldError('email') 
                      ? 'bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'bg-white border-gray-300 focus:border-primary focus:ring-primary'
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  required
                />
                {hasFieldError('email') && (
                  <div className="mt-1 p-2 bg-red-50 border border-red-300 rounded">
                    <p className="text-red-700 text-sm font-medium flex items-center gap-1">
                      <span className="text-red-500">✕</span>
                      {getFieldError('email') || 'Email is required'}
                    </p>
                  </div>
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
                    hasFieldError('company') 
                      ? 'bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'bg-white border-gray-300 focus:border-primary focus:ring-primary'
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  type="text"
                  name="company"
                  required
                />
                {hasFieldError('company') && (
                  <div className="mt-1 p-2 bg-red-50 border border-red-300 rounded">
                    <p className="text-red-700 text-sm font-medium flex items-center gap-1">
                      <span className="text-red-500">✕</span>
                      {getFieldError('company') || 'Company is required'}
                    </p>
                  </div>
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
                    hasFieldError('message') 
                      ? 'bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'bg-white border-gray-300 focus:border-primary focus:ring-primary'
                  } text-black focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  name="message"
                  rows={4}
                  required
                />
                {hasFieldError('message') && (
                  <div className="mt-1 p-2 bg-red-50 border border-red-300 rounded">
                    <p className="text-red-700 text-sm font-medium flex items-center gap-1">
                      <span className="text-red-500">✕</span>
                      {getFieldError('message') || 'Message is required'}
                    </p>
                  </div>
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
                    disabled={state.submitting}
                    className="btn btn-primary bg-primary text-white border-primary hover:bg-[#c63615] hover:border-[#c63615] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Submitting..." : "Submit"}
                  </button>
                  {hasGeneralError() && (
                    <div className="mt-2 p-3 bg-red-50 border-2 border-red-500 rounded">
                      <p className="text-red-700 text-sm font-medium flex items-center gap-2">
                        <span className="text-red-500 text-lg">✕</span>
                        {getGeneralError() || 'There was an error submitting your message. Please try again.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.form>
    </ScrollReveal>
  );
}

