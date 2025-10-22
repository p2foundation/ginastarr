export const metadata = {
  title: "Projects | Ginastarr Company",
  description: "Explore featured projects across construction, procurement, logistics, and international trade.",
};
import ProjectsBrowser from "@/components/projects/ProjectsBrowser";

export default function ProjectsPage() {
  return (
    <section className="container py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Projects</h1>
        <p className="mx-auto mt-2 max-w-2xl text-[var(--color-muted-foreground)]">
          A selection of work across infrastructure, supply, logistics, and trade. Filter to explore relevant case studies.
        </p>
      </div>
      <ProjectsBrowser />
    </section>
  );
}
