import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const { userId } = await auth()
  if (userId) redirect('/')

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Left Panel - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        {/* Floating orbs background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-8 w-24 h-24 bg-pink-200/25 rounded-full blur-lg animate-pulse delay-500"></div>
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

          {/* Form Container with glass morphism */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-black/5">
            {children}
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            <p>Protected by industry-standard encryption</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
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
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                  <span className="text-sm font-medium">AI-Powered Assistant</span>
                </div>

                <h2 className="text-3xl xl:text-4xl font-bold leading-tight">
                  Meet Dalia, your
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    intelligent sales
                  </span>
                  companion
                </h2>

                <p className="text-base text-blue-100 leading-relaxed">
                  Revolutionary lead capture without forms. Experience the future of
                  customer engagement with AI that understands and converts.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  "Zero-form lead capture",
                  "Real-time conversation AI",
                  "Smart analytics dashboard",
                  "Seamless CRM integration"
                ].map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-1/2 flex items-center justify-start overflow-hidden">
            {/* App Preview */}
            <div className="relative -mr-32 xl:-mr-48">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent rounded-l-3xl z-10"></div>
              <Image
                src="/images/app-ui.jpg"
                alt="Dalia Dashboard Preview"
                width={700}
                height={500}
                className="rounded-l-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700 object-cover"
              />
              {/* Floating stats */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-xs text-gray-600">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout