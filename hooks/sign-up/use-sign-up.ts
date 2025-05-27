"use client";
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onCompleteUserRegistration } from "@/actions/auth";
import { toast } from "sonner";

export const useSignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();

  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner",
    },
    mode: "onChange",
  });

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success("Verification code sent!", {
        description: "Please check your email for the verification code.",
        duration: 4000,
      });
      onNext((prev) => prev + 1);
    } catch (error: any) {
      toast.error("Registration failed", {
        description:
          error.errors[0].longMessage ||
          "Something went wrong during registration.",
        duration: 5000,
      });
    }
  };

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        });

        if (completeSignUp.status !== "complete") {
          toast.error("Verification failed", {
            description: "Something went wrong with email verification.",
            duration: 4000,
          });
          setLoading(false);
          return { message: "Something went wrong!" };
        }

        if (completeSignUp.status == "complete") {
          if (!signUp.createdUserId) {
            toast.error("Registration incomplete", {
              description: "User ID not found. Please try again.",
              duration: 4000,
            });
            setLoading(false);
            return;
          }

          const registered = await onCompleteUserRegistration(
            values.fullname,
            signUp.createdUserId,
            values.type
          );

          if (registered?.status == 200 && registered.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            toast.success("Welcome aboard!", {
              description: "Your account has been created successfully.",
              duration: 3000,
            });
            setLoading(false);
            router.push("/dashboard");
          }

          if (registered?.status == 400) {
            toast.error("Registration failed", {
              description: "Something went wrong during account setup.",
              duration: 4000,
            });
            setLoading(false);
          }
        }
      } catch (error: any) {
        toast.error("Verification error", {
          description:
            error.errors[0].longMessage || "Failed to verify your account.",
          duration: 5000,
        });
        setLoading(false);
      }
    }
  );

  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  };
};
