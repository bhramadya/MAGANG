import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
<<<<<<< HEAD
      className={cn("animate-pulse bg-muted", className)}
=======
      className={cn("animate-pulse rounded-md bg-accent", className)}
>>>>>>> d2b964f (database)
      {...props}
    />
  )
}

export { Skeleton }
