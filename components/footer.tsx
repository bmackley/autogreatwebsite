export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-light">
              AutoGreat <span className="text-accent font-normal">Consultants</span>
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Transforming businesses with innovative no-code and low-code solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-accent">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>No-Code Development</li>
              <li>Low-Code Solutions</li>
              <li>Database Architecture</li>
              <li>Business Automation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-accent">Technologies</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>V0</li>
              <li>Supabase</li>
              <li>Airtable</li>
              <li>React</li>
              <li>Noloco</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} AutoGreat Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
