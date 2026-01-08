import * as React from "react";
import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "flex h-9 w-full min-w-0 rounded-md border-b border-gray px-3 py-1 text-base bg-input-background placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground outline-none transition-[color,box-shadow] file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        // Focus styles
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // Error styles
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:text-destructive aria-invalid:placeholder:text-muted-foreground dark:aria-invalid:border-destructive/40 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:text-destructive",

        // Dark mode background
        "dark:bg-input/30",

        className
      )}
      {...props}
    />
  );
}

export { Input };
