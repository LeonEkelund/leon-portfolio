import ytThumbnail from "../assets/images/yt-thumbnail.webp"

const featured = {
  title: "YouTube Project",
  description: "A fullstack project built with modern web technologies. Focused on performance, clean UI, and great user experience.",
  tags: ["React", "TypeScript", "Node.js"],
  year: "2025",
  image: ytThumbnail,
}

const projects = [
  { title: "Project Two", category: "Web App", year: "2025" },
  { title: "Project Three", category: "Design System", year: "2024" },
  { title: "Project Four", category: "Tool", year: "2024" },
  { title: "Project Five", category: "Experiment", year: "2023" },
]

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto px-8 pb-24">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Work</h2>

      {/* Featured */}
      <div className="mb-16">
        <div className="rounded-2xl overflow-hidden mb-6 bg-muted">
          <img src={featured.image} alt={featured.title} className="w-full object-cover" />
        </div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-3xl font-semibold">{featured.title}</h3>
          <span className="text-sm text-muted-foreground shrink-0 mt-2">{featured.year}</span>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">{featured.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {featured.tags.map(tag => (
              <span key={tag} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <a href="#" className="text-sm font-medium hover:underline">View project →</a>
        </div>
      </div>

      {/* List */}
      <ul>
        {projects.map((project, i) => (
          <li key={i} className="flex items-center justify-between py-4 border-t border-border cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">›</span>
              <span
                className="text-base transition-all duration-300"
                style={{ fontVariationSettings: "'wght' 400" }}
                onMouseEnter={e => (e.currentTarget.style.fontVariationSettings = "'wght' 700")}
                onMouseLeave={e => (e.currentTarget.style.fontVariationSettings = "'wght' 400")}
              >
                {project.title}
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
