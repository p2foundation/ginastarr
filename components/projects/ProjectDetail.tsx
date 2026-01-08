'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Clock, FileText } from 'lucide-react';
import type { ProjectData } from '@/lib/projects';
import { getIconByCategory } from '@/lib/projects';

interface ProjectDetailProps {
  project: ProjectData;
}

const statusConfig = {
  'Completed': { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', label: 'Completed' },
  'In Progress': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', label: 'In Progress' },
  'Planning': { icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50', label: 'Planning' },
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const StatusIcon = statusConfig[project.status].icon;
  const statusStyle = statusConfig[project.status];
  const ProjectIcon = getIconByCategory(project.category);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <div className="border-b border-[var(--color-muted)] bg-white">
        <div className="container py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[var(--color-primary)]">
              <ProjectIcon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-foreground)]">
                {project.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} />
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} />
                  {project.year}
                </span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.color}`}>
                  <StatusIcon size={14} />
                  {statusStyle.label}
                </span>
              </div>
            </div>
            <span className="rounded-md bg-[var(--color-primary)]/10 px-3 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectIcon className="h-24 w-24 text-[var(--color-primary)]/20" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.15),_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">Overview</h2>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Image Gallery Placeholder */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.from({ length: project.images || 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ProjectIcon className="h-12 w-12 text-[var(--color-primary)]/20" />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.1),_transparent_70%)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent">
                      <p className="text-xs text-white/80">Project Image {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] flex items-center justify-center text-sm font-semibold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[var(--color-muted-foreground)] leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center text-sm font-semibold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[var(--color-muted-foreground)] leading-relaxed">{solution}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">Results</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-[var(--color-muted)] bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--color-foreground)] leading-relaxed">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Project Info Card */}
              <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-4">Project Details</h3>
                <dl className="space-y-3">
                  {project.client && (
                    <div>
                      <dt className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">Client</dt>
                      <dd className="mt-1 text-sm text-[var(--color-foreground)]">{project.client}</dd>
                    </div>
                  )}
                  {project.budget && (
                    <div>
                      <dt className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">Budget</dt>
                      <dd className="mt-1 text-sm text-[var(--color-foreground)]">{project.budget}</dd>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <dt className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">Duration</dt>
                      <dd className="mt-1 text-sm text-[var(--color-foreground)]">{project.duration}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">Status</dt>
                    <dd className="mt-1">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${statusStyle.bg} ${statusStyle.color}`}>
                        <StatusIcon size={14} />
                        {statusStyle.label}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">Category</dt>
                    <dd className="mt-1 text-sm text-[var(--color-foreground)]">{project.category}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA Card */}
              <div className="rounded-lg border border-[var(--color-secondary)] bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/5 p-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">Interested in Similar Projects?</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                  Let's discuss how we can help with your next project.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
