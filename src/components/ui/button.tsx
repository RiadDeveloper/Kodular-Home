import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary/90 dark:text-primary-foreground dark:hover:bg-primary/70 shadow-sm dark:shadow-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 dark:bg-destructive/90 dark:text-destructive-foreground dark:hover:bg-destructive/70",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-input/30 dark:bg-background/50 dark:hover:bg-accent/20 dark:hover:text-accent-foreground shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 dark:bg-secondary/80 dark:text-secondary-foreground dark:hover:bg-secondary/60",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/20 dark:hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline dark:text-primary/90 dark:hover:text-primary",
        primary: 
          "bg-[#502ABB] text-white hover:bg-[#502ABB]/90 dark:bg-[#502ABB]/90 dark:hover:bg-[#502ABB]/80 shadow-sm",
        accent: 
          "bg-[#E91E63] text-white hover:bg-[#E91E63]/90 dark:bg-[#E91E63]/90 dark:hover:bg-[#E91E63]/80 shadow-sm",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9 p-0",
        xl: "h-12 rounded-lg px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
