"use client";
import { Button } from "@/components/ui/button";
import { useAuthContextHook } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {};

const ButtonHandler = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues, trigger, clearErrors } =
    useFormContext();
  const { onGenerateOTP } = useSignUpForm();

  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);

  const handleContinue = async (e: React.MouseEvent) => {
    e.preventDefault();

    // Clear any existing errors
    clearErrors();

    // Define fields to validate based on current step
    let fieldsToValidate: string[] = [];

    if (currentStep === 1) {
      // Step 1: Only validate user type selection
      fieldsToValidate = ["type"]; // or whatever field name you use for user type
    } else if (currentStep === 2) {
      // Step 2: Validate account details
      fieldsToValidate = [
        "fullname",
        "email",
        "password",
        "confirmEmail",
        "confirmPassword",
      ];
    }

    // Only trigger validation if there are fields to validate
    let isValid = true;
    if (fieldsToValidate.length > 0) {
      isValid = await trigger(fieldsToValidate);
    }

    if (isValid) {
      if (currentStep === 2 && isName && isEmail && isPassword) {
        // Generate OTP for step 2
        onGenerateOTP(
          getValues("email"),
          getValues("password"),
          setCurrentStep
        );
      } else {
        // Move to next step
        setCurrentStep((prev: number) => prev + 1);
      }
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    clearErrors(); // Clear errors when going back
    setCurrentStep((prev: number) => prev - 1);
  };

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    // This will trigger the form submission
    const form = e.currentTarget.closest("form");
    if (form) {
      form.requestSubmit();
    }
  };

  // Step 3 - Create Account
  if (currentStep === 3) {
    return (
      <div className="w-full space-y-4">
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            type="button"
            onClick={handleCreateAccount}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/sign-in"
              className="font-semibold text-blue-600 hover:text-blue-500 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Step 2 - Continue with OTP
  if (currentStep === 2) {
    return (
      <div className="w-full space-y-4">
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            type="button"
            onClick={handleContinue}
            disabled={!isName || !isEmail || !isPassword}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/sign-in"
              className="font-semibold text-blue-600 hover:text-blue-500 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Step 1 - Initial Continue
  return (
    <div className="w-full space-y-4">
      <Button
        type="button"
        onClick={handleContinue}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-4 h-4" />
      </Button>
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-semibold text-blue-600 hover:text-blue-500 inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ButtonHandler;
