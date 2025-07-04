import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col ml-2 items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/mikumimiestu"
            target="_blank"
            rel="noreferrer"
            className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/zaki-mushthafa-billah-1a1762287/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.instagram.com/zakimshbll/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://x.com/Jakiine"
            target="_blank"
            rel="noreferrer"
            className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="mailto:zaki@technovagroupinc.com"
            className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}