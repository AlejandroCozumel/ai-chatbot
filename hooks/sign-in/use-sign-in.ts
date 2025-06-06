import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schema";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useSignInForm = () => {
  const { isLoaded, setActive, signIn } = useSignIn();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserLoginProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        const authenticated = await signIn.create({
          identifier: values.email,
          password: values.password,
        });
        if (authenticated.status === "complete") {
          await setActive({ session: authenticated.createdSessionId });
          toast.success("Welcome back!", {
            description: "You have successfully signed in.",
            duration: 3000,
          });
          router.push("/dashboard");
        }
      } catch (error: any) {
        setLoading(false);
        if (error.errors[0].code === "form_password_incorrect") {
          toast.error("Authentication failed", {
            description: "Email/password is incorrect. Please try again.",
            duration: 4000,
          });
        } else {
          toast.error("Something went wrong", {
            description: "An unexpected error occurred. Please try again.",
            duration: 4000,
          });
        }
      }
    }
  );

  return {
    methods,
    onHandleSubmit,
    loading,
  };
};
