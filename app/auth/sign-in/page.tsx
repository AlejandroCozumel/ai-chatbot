import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/50 rounded-full">
          <LogIn className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">Welcome Back</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
        <p className="text-gray-600">Continue your journey with Dalia</p>
      </div>

      {/* Form */}
      <SignInFormProvider>
        <div className="space-y-2">
          <LoginForm />

          {/* Submit Section */}
          <div className="space-y-4 mt-6">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">New to Dalia?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors inline-flex items-center gap-1 hover:gap-2 transition-all"
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
      <div className="pt-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-3">Quick access with</p>
          <div className="flex justify-center gap-3">
            {/* These would be your social login buttons */}
            <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
              <span className="text-lg">G</span>
            </div>
            <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
              <span className="text-lg">M</span>
            </div>
            <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
              <span className="text-lg">A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;