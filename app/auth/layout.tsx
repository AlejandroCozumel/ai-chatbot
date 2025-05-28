import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const { userId } = await auth();
  if (userId) redirect("/");

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Left Panel - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        {/* Enhanced floating orbs background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-blue-300/20 dark:from-primary/20 dark:to-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-purple-300/15 dark:from-accent/15 dark:to-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-8 w-24 h-24 bg-gradient-to-br from-pink-200/35 to-pink-300/20 dark:from-secondary/20 dark:to-secondary/10 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-br from-indigo-200/25 to-indigo-300/15 dark:from-primary/15 dark:to-primary/5 rounded-full blur-lg animate-pulse delay-700"></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Logo Section */}
          <div className="text-center space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/daliaLogo.svg"
                alt="Dalia Logo"
                width={120}
                height={40}
                className="mx-auto"
              />
            </div>
          </div>

          {/* Enhanced Form Container with better glass morphism */}
          <div className="bg-white/80 dark:bg-card/80 backdrop-blur-md border border-white/30 dark:border-border/50 rounded-2xl p-8 shadow-2xl shadow-black/5 dark:shadow-black/25 ring-1 ring-white/20 dark:ring-white/5">
            {children}
          </div>

          {/* Enhanced Footer */}
          <div className="text-center text-xs text-gray-500 dark:text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 dark:bg-success rounded-full animate-pulse"></div>
              <span className="font-medium">Secure & Encrypted</span>
            </div>
            <p>Protected by industry-standard encryption</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-primary dark:via-primary/90 dark:to-primary/80 relative overflow-hidden">
        {/* Enhanced animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 dark:from-primary-foreground/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/5 dark:from-primary-foreground/5 to-transparent"></div>
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 py-16 text-white w-1/2 min-w-0">
            <div className="space-y-6">
              {/* Hero Content */}
              <div className="space-y-4">
                <Badge variant="glass">
                  <span className="w-2 h-2 bg-green-400 dark:bg-success rounded-full animate-pulse"></span>
                  AI-Powered Assistant
                </Badge>

                <h2 className="text-3xl xl:text-4xl font-bold leading-tight">
                  Meet Dalia, your
                  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-200 to-pink-300 dark:from-yellow-200 dark:via-yellow-100 dark:to-pink-200 bg-clip-text text-transparent">
                    intelligent sales
                  </span>
                  companion
                </h2>

                <p className="text-base text-blue-100 dark:text-primary-foreground/80 leading-relaxed">
                  Revolutionary lead capture without forms. Experience the
                  future of customer engagement with AI that understands and
                  converts.
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="space-y-4">
                {[
                  { text: "Zero-form lead capture", delay: 0 },
                  { text: "Real-time conversation AI", delay: 200 },
                  { text: "Smart analytics dashboard", delay: 400 },
                  { text: "Seamless CRM integration", delay: 600 },
                ].map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center space-x-3 animate-fade-in group"
                    style={{ animationDelay: `${feature.delay}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 dark:from-yellow-300 dark:to-pink-300 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-blue-100 dark:text-primary-foreground/80 text-sm font-medium group-hover:text-white dark:group-hover:text-primary-foreground transition-colors duration-200">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-1/2 flex items-center justify-start overflow-hidden">
            {/* App Preview */}
            <div className="relative -mr-32 xl:-mr-48">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 dark:from-primary/30 to-transparent rounded-l-3xl z-10"></div>
              <Image
                src="/images/app-ui.jpg"
                alt="Dalia Dashboard Preview"
                width={700}
                height={500}
                className="rounded-l-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700 object-cover"
              />
              {/* Enhanced Floating stats */}
              <div className="absolute top-8 left-8 bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl z-20 border-0 dark:border dark:border-border/50 ring-1 ring-white/20 dark:ring-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-success">
                    94%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-muted-foreground font-medium">
                    Conversion Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
