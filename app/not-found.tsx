import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">404</h1>
            <h2 className="text-xl font-medium text-muted-foreground">Page Not Found</h2>
          </div>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}