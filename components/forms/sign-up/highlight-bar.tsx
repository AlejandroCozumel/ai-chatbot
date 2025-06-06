'use client'
import { useAuthContextHook } from '@/context/use-auth-context'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const HighLightBar = (props: Props) => {
  const { currentStep } = useAuthContextHook()
  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        className={cn(
          'rounded-full h-2 col-span-1 transition-colors duration-300',
          currentStep == 1 ? 'bg-primary' : 'bg-muted'
        )}
      ></div>
      <div
        className={cn(
          'rounded-full h-2 col-span-1 transition-colors duration-300',
          currentStep == 2 ? 'bg-primary' : 'bg-muted'
        )}
      ></div>
      <div
        className={cn(
          'rounded-full h-2 col-span-1 transition-colors duration-300',
          currentStep == 3 ? 'bg-primary' : 'bg-muted'
        )}
      ></div>
    </div>
  )
}

export default HighLightBar