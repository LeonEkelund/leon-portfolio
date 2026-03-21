export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-8 h-14 flex items-center justify-between">
        <span className="font-bold tracking-tight">Leon Ekelund</span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </div>
      </div>
    </nav>
  )
}
