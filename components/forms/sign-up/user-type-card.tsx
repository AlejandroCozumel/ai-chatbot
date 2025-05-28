'use client'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  value: string
  title: string
  text: string
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          'w-full cursor-pointer transition-all duration-200 hover:shadow-md bg-card',
          userType == value
            ? 'border-primary shadow-sm ring-1 ring-primary/20'
            : 'border-border hover:border-primary/50'
        )}
      >
        <CardContent className="flex justify-between p-4">
          <div className="flex items-center gap-4">
            <Card
              className={cn(
                'flex justify-center p-3 transition-all duration-200',
                userType == value
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-muted/50'
              )}
            >
              <User
                size={24}
                className={cn(
                  'transition-colors duration-200',
                  userType == value
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              />
            </Card>
            <div className="space-y-2">
              <CardDescription className={cn(
                "font-medium text-sm transition-colors duration-200",
                userType == value
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}>
                {title}
              </CardDescription>
              <CardDescription className="text-xs text-muted-foreground">
                {text}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                'w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center',
                userType == value
                  ? 'bg-primary border-primary'
                  : 'bg-background border-muted-foreground/30'
              )}
            >
              {userType == value && (
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              )}
              <Input
                {...register('type', {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default UserTypeCard