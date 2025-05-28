import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        success:
          "border-success/30 bg-success/10 dark:bg-success/20 text-success dark:text-success-foreground [a&]:hover:bg-success/20 dark:[a&]:hover:bg-success/30",
        info:
          "border-info/30 bg-info/10 dark:bg-info/20 text-info dark:text-info-foreground [a&]:hover:bg-info/20 dark:[a&]:hover:bg-info/30",
        warning:
          "border-warning/30 bg-warning/10 dark:bg-warning/20 text-warning dark:text-warning-foreground [a&]:hover:bg-warning/20 dark:[a&]:hover:bg-warning/30",
        glass:
          "border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 text-white backdrop-blur-sm [a&]:hover:bg-white/20 dark:[a&]:hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }