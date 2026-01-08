import { notFound } from 'next/navigation';
import { getProjectById, projectToData } from '@/lib/projects';
import ProjectDetail from '@/components/projects/ProjectDetail';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));
  
  if (!project) {
    return {
      title: 'Project Not Found | Ginastarr Company',
    };
  }

  return {
    title: `${project.title} | Projects | Ginastarr Company`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));

  if (!project) {
    notFound();
  }

  // Convert to serializable data (remove icon component)
  const projectData = projectToData(project);

  return <ProjectDetail project={projectData} />;
}
