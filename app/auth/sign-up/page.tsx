import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";
import { Sparkles } from "lucide-react";

const SignUp = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Get Started</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="text-gray-600">
          Join thousands of businesses using Dalia
        </p>
      </div>

      {/* Form */}
      <SignUpFormProvider>
        <div className="flex flex-col gap-4">
          <RegistrationFormStep />
          <ButtonHandler />
          <HighLightBar />
        </div>
      </SignUpFormProvider>
    </div>
  );
};

export default SignUp;
