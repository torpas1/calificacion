import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Evaluación de Proyectos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}