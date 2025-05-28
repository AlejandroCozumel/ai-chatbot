import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const SignUp = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="info" className="px-3 py-1 gap-2">
          <Sparkles className="w-4 h-4" />
          Get Started
        </Badge>
        <h2 className="text-2xl font-bold text-foreground">
          Create your account
        </h2>
        <p className="text-foreground">
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