// import icon from "@/assets/soulsync-icon.webp";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <img
            // src={icon}
            alt=""
            className="h-7 w-7 rounded-lg"
            width={28}
            height={28}
          />
          <span>SoulSync — Together. Always.</span>
        </div>

        <span>© {new Date().getFullYear()} Avinash Shrivastav</span>
      </div>
    </footer>
  );
}
