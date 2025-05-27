import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Get Started</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
        <p className="text-gray-600">Join thousands of businesses using Dalia</p>
      </div>

      {/* Form */}
      <SignUpFormProvider>
        <div className="space-y-6">
          <RegistrationFormStep />
          <HighLightBar />
          <ButtonHandler />
        </div>
      </SignUpFormProvider>

      {/* Trust indicators */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>SOC2 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;