import { Download } from "lucide-react";
import { APK_URL } from "@/src/data/landing";
import Button from "../ui/Button";
// import icon from "@/assets/soulsync-icon.webp";



export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-center gap-3">
          <img
            // src={icon}
            alt="SoulSync app icon"
            className="h-10 w-10 rounded-xl"
            width={40}
            height={40}
          />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Soul<span className="text-gradient">Sync</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#screens" className="transition-colors hover:text-foreground">
            Screens
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>

        <Button asChild variant="ghost" size="sm">
          <a href={APK_URL} target="_blank" rel="noreferrer">
            <Download className="h-4 w-4" />
            Get the app
          </a>
        </Button>
      </nav>
    </header>
  );
}
