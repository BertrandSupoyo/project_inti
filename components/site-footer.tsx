import Link from "next/link";
import { BookOpen } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-center ml-auto">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-4">
          <BookOpen className="h-6 w-6" />
          <p className="text-sm text-muted-foreground">
            © 2025 Biblily. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
