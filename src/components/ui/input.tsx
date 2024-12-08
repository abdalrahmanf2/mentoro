import * as React from "react";
import { cn } from "@/lib/utils";

const Input = ({
    className,
    type,
    id,
    placeholder,
    value,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="relative">
            <input
                type={type}
                className={cn(
                    "peer flex h-9 w-full border-b border-brand-200 bg-transparent py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-b-brand-200 focus:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                value={value}
                id={id}
                {...props}
            />
            <label
                htmlFor={id}
                className={cn(
                    "text-muted-foreground text-sm cursor-text pointer-events-none absolute top-1 left-0 peer-focus:-top-4 peer-focus:text-black transition-all",
                    value ? "-top-4" : ""
                )}
            >
                {placeholder}
            </label>
        </div>
    );
};

Input.displayName = "Input";

export { Input };
