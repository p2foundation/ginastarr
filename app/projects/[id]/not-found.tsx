import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-semibold text-[var(--color-foreground)] mb-4">Project Not Found</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>
    </div>
  );
}
