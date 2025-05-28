import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="success" className="px-3 py-1 gap-2">
          <LogIn className="w-4 h-4" />
          Welcome Back
        </Badge>
        <h2 className="text-2xl font-bold text-foreground">
          Sign in to your account
        </h2>
        <p className="text-foreground">Continue your journey with Dalia</p>
      </div>

      {/* Form */}
      <SignInFormProvider>
        <div className="flex flex-col gap-4">
          <LoginForm />

          {/* Submit Section */}
          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-background text-muted-foreground">
                  New to Dalia?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Create one
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SignInFormProvider>

      {/* Quick Access */}
      <div className="pt-6 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-3">Quick access with</p>
          <div className="flex justify-center gap-3">
            <div className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center transition-colors cursor-pointer border border-border">
              <span className="text-lg text-secondary-foreground">G</span>
            </div>
            <div className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center transition-colors cursor-pointer border border-border">
              <span className="text-lg text-secondary-foreground">M</span>
            </div>
            <div className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center transition-colors cursor-pointer border border-border">
              <span className="text-lg text-secondary-foreground">A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;