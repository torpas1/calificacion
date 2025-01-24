// "use client";

// import { useEffect, useState } from 'react';
// import { toast } from 'sonner';

// interface Project {
//   id: number;
//   proposal: string;
//   strategicImpact: number;
//   technicalViability: number;
//   associatedCost: number;
//   implementationTime: number;
//   totalScore: number;
//   priority: string;
// }

// export default function ProjectList() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/projects`);
//       if (!response.ok) {
//         throw new Error('Error al obtener los proyectos');
//       }
//       const data = await response.json();
//       setProjects(data);
//     } catch (error) {
//       toast.error('Error al cargar los proyectos');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-6 bg-white rounded-lg shadow-md">
//         <p className="text-center">Cargando proyectos...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Proyectos Evaluados</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propuesta</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntaje Total</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridad</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {projects.map((project) => (
//               <tr key={project.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{project.proposal}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{project.totalScore.toFixed(2)}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     project.priority === 'alto' ? 'bg-green-100 text-green-800' :
//                     project.priority === 'medio' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {project.priority}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Project {
  id: number;
  proposal: { id: string } | string; // Ahora refleja los datos del endpoint
  strategicImpact: number;
  technicalViability: number;
  associatedCost: number;
  implementationTime: number;
  totalScore: number;
  priority: string;
}

const propuestas = [
  { id: "1", name: "Propuesta 1" },
  { id: "2", name: "Propuesta 2" },
  { id: "3", name: "Propuesta 3" },
  { id: "4", name: "Propuesta 4" },
  { id: "5", name: "Propuesta 5" },
  { id: "6", name: "Propuesta 6" },
  { id: "7", name: "Propuesta 7" },
  { id: "8", name: "Propuesta 8" },
  { id: "9", name: "Propuesta 9" },
  { id: "10", name: "Propuesta 10" },
];

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`http://localhost:3001/projects`);
      if (!response.ok) {
        throw new Error("Error al obtener los proyectos");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      toast.error("Error al cargar los proyectos");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-center">Cargando proyectos...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Proyectos Evaluados</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propuesta</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntaje Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridad</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => {
              const propuesta = 
              typeof project.proposal === "object" && "id" in project.proposal && project.proposal.id
              ? propuestas.find((prop) => prop.id === project.proposal)
              : null;

              return (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {propuesta ? propuesta.name : "Desconocida"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.totalScore.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        project.priority === "alto"
                          ? "bg-green-100 text-green-800"
                          : project.priority === "medio"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {project.priority}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
