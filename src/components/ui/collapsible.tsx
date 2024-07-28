import { cn } from "@/lib/utils";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleTrigger
        ref={ref}
        {...props}
        className={cn(
            "flex w-full items-center justify-between border-b p-7 [&>span>svg]:data-[state=open]:rotate-180",
            className,
        )}
    >
        {children}
        <span className="min-h-7 min-w-7 rounded-full bg-gray-15 p-1">
            <ChevronDown size={20} color="white" className="transition-transform" />
        </span>
    </CollapsiblePrimitive.CollapsibleTrigger>
));

const CollapsibleContent = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
        ref={ref}
        className={cn(
            "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden",
            className,
        )}
        {...props}
    />
));

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
