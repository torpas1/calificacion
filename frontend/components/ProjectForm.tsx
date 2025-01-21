// "use client";

// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { toast } from 'sonner';

// const projectSchema = z.object({
//   proposal: z.string().min(1, "La propuesta es requerida"),
//   strategicImpact: z.number().min(0).max(10),
//   technicalViability: z.number().min(0).max(10),
//   associatedCost: z.number().min(0).max(10),
//   implementationTime: z.number().min(0).max(10),
// });

// type ProjectFormData = z.infer<typeof projectSchema>;

// export default function ProjectForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [totalScore, setTotalScore] = useState<number | null>(null);
//   const [priority, setPriority] = useState<string>("");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors },
//   } = useForm<ProjectFormData>({
//     resolver: zodResolver(projectSchema),
//   });

//   const strategicImpact = watch('strategicImpact');
//   const technicalViability = watch('technicalViability');
//   const associatedCost = watch('associatedCost');
//   const implementationTime = watch('implementationTime');
//   const propuestas = [
//     { id: '1', name: 'Propuesta 1' },
//     { id: '2', name: 'Propuesta 2' },
//     { id: '3', name: 'Propuesta 3' },
//     { id: '4', name: 'Propuesta 4' },
//     { id: '5', name: 'Propuesta 5' },
//     { id: '6', name: 'Propuesta 6' },
//     { id: '7', name: 'Propuesta 7' },
//     { id: '8', name: 'Propuesta 8' },
//     { id: '9', name: 'Propuesta 9' },
//     { id: '10', name: 'Propuesta 10' },
//   ];

//   const calculateScores = () => {
//     if (strategicImpact && technicalViability && associatedCost && implementationTime) {
//       const score = (
//         strategicImpact * 0.4 +
//         technicalViability * 0.3 +
//         associatedCost * 0.2 +
//         implementationTime * 0.1
//       );
//       setTotalScore(score);

//       let newPriority = "baja";
//       if (score >= 8) {
//         newPriority = "alto";
//       } else if (score >= 6) {
//         newPriority = "medio";
//       }
//       setPriority(newPriority);
//     } else {
//       setTotalScore(null);
//       setPriority("");
//     }
//   };

//   useEffect(() => {
//     calculateScores();
//   }, [strategicImpact, technicalViability, associatedCost, implementationTime]);

//   const onSubmit = async (data: ProjectFormData) => {
//     try {
//       setIsSubmitting(true);
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Error al guardar el proyecto');
//       }

//       toast.success('Proyecto guardado exitosamente');
//       reset();
//       setTotalScore(null);
//       setPriority("");
//     } catch (error) {
//       toast.error('Error al guardar el proyecto');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
//      <div className="space-y-2">
//   <Label htmlFor="proposal">Propuesta</Label>
//   <select
//     id="proposal"
//     {...register('proposal', { required: "Por favor selecciona una propuesta" })}
//     className="w-full"
//   >
//     <option value="">Selecciona una propuesta</option>
//     {propuestas.map((propuesta) => (
//       <option key={propuesta.id} value={propuesta.id}>
//         {propuesta.name}
//       </option>
//     ))}
//   </select>
//   {errors.proposal && (
//     <p className="text-sm text-red-500">{errors.proposal.message}</p>
//   )}
// </div>

//       <div className="space-y-2">
//         <Label htmlFor="strategicImpact">Impacto Estratégico (40%)</Label>
//         <Input
//           id="strategicImpact"
//           type="number"
//           step="0.1"
//           min="0"
//           max="10"
//           {...register('strategicImpact', { valueAsNumber: true })}
//           className="w-full"
//         />
//         {errors.strategicImpact && (
//           <p className="text-sm text-red-500">{errors.strategicImpact.message}</p>
//         )}
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="technicalViability">Viabilidad Técnica (30%)</Label>
//         <Input
//           id="technicalViability"
//           type="number"
//           step="0.1"
//           min="0"
//           max="10"
//           {...register('technicalViability', { valueAsNumber: true })}
//           className="w-full"
//         />
//         {errors.technicalViability && (
//           <p className="text-sm text-red-500">{errors.technicalViability.message}</p>
//         )}
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="associatedCost">Costo Asociado (20%)</Label>
//         <Input
//           id="associatedCost"
//           type="number"
//           step="0.1"
//           min="0"
//           max="10"
//           {...register('associatedCost', { valueAsNumber: true })}
//           className="w-full"
//         />
//         {errors.associatedCost && (
//           <p className="text-sm text-red-500">{errors.associatedCost.message}</p>
//         )}
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="implementationTime">Tiempo de Implementación (10%)</Label>
//         <Input
//           id="implementationTime"
//           type="number"
//           step="0.1"
//           min="0"
//           max="10"
//           {...register('implementationTime', { valueAsNumber: true })}
//           className="w-full"
//         />
//         {errors.implementationTime && (
//           <p className="text-sm text-red-500">{errors.implementationTime.message}</p>
//         )}
//       </div>

//       <div className="space-y-2 border-t pt-4">
//         <div className="flex justify-between items-center">
//           <Label>Puntaje Total:</Label>
//           <span className="text-lg font-semibold">
//             {totalScore !== null ? totalScore.toFixed(2) : '-'}
//           </span>
//         </div>
//         <div className="flex justify-between items-center">
//           <Label>Prioridad:</Label>
//           {priority && (
//             <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
//               priority === 'alto' ? 'bg-green-100 text-green-800' :
//               priority === 'medio' ? 'bg-yellow-100 text-yellow-800' :
//               'bg-red-100 text-red-800'
//             }`}>
//               {priority}
//             </span>
//           )}
//         </div>
//       </div>

//       <Button
//         type="submit"
//         className="w-full"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? 'Guardando...' : 'Guardar Proyecto'}
//       </Button>
//     </form>
//   );
// }

"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const projectSchema = z.object({
  proposal: z.string().min(1, "La propuesta es requerida"),
  strategicImpact: z.number().min(0).max(10),
  technicalViability: z.number().min(0).max(10),
  associatedCost: z.number().min(0).max(10),
  implementationTime: z.number().min(0).max(10),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [priority, setPriority] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const strategicImpact = watch('strategicImpact');
  const technicalViability = watch('technicalViability');
  const associatedCost = watch('associatedCost');
  const implementationTime = watch('implementationTime');
  const propuestas = [
    { id: '1', name: 'Propuesta 1' },
    { id: '2', name: 'Propuesta 2' },
    { id: '3', name: 'Propuesta 3' },
    { id: '4', name: 'Propuesta 4' },
    { id: '5', name: 'Propuesta 5' },
    { id: '6', name: 'Propuesta 6' },
    { id: '7', name: 'Propuesta 7' },
    { id: '8', name: 'Propuesta 8' },
    { id: '9', name: 'Propuesta 9' },
    { id: '10', name: 'Propuesta 10' },
  ];

  const calculateScores = () => {
    if (strategicImpact && technicalViability && associatedCost && implementationTime) {
      const score = (
        strategicImpact * 0.4 +
        technicalViability * 0.3 +
        associatedCost * 0.2 +
        implementationTime * 0.1
      );
      setTotalScore(score);

      let newPriority = "baja";
      if (score >= 8) {
        newPriority = "alto";
      } else if (score >= 6) {
        newPriority = "medio";
      }
      setPriority(newPriority);
    } else {
      setTotalScore(null);
      setPriority("");
    }
  };

  useEffect(() => {
    calculateScores();
  }, [strategicImpact, technicalViability, associatedCost, implementationTime]);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      setIsSubmitting(true);

      // Deserializamos el valor de proposal para obtener el objeto completo
      const proposalObject = JSON.parse(data.proposal);

      // Enviamos el objeto completo de la propuesta al backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data, // Pasamos todo el formulario
          proposal: proposalObject, // Enviamos el objeto completo de la propuesta
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el proyecto');
      }

      toast.success('Proyecto guardado exitosamente');
      reset();
      setTotalScore(null);
      setPriority("");
    } catch (error) {
      toast.error('Error al guardar el proyecto');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <Label htmlFor="proposal">Propuesta</Label>
        <select
          id="proposal"
          {...register('proposal', { required: "Por favor selecciona una propuesta" })}
          className="w-full"
        >
          <option value="">Selecciona una propuesta</option>
          {propuestas.map((propuesta) => (
            <option key={propuesta.id} value={JSON.stringify(propuesta)}>
              {propuesta.name}
            </option>
          ))}
        </select>
        {errors.proposal && (
          <p className="text-sm text-red-500">{errors.proposal.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="strategicImpact">Impacto Estratégico (40%)</Label>
        <Input
          id="strategicImpact"
          type="number"
          step="0.1"
          min="0"
          max="10"
          {...register('strategicImpact', { valueAsNumber: true })}
          className="w-full"
        />
        {errors.strategicImpact && (
          <p className="text-sm text-red-500">{errors.strategicImpact.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="technicalViability">Viabilidad Técnica (30%)</Label>
        <Input
          id="technicalViability"
          type="number"
          step="0.1"
          min="0"
          max="10"
          {...register('technicalViability', { valueAsNumber: true })}
          className="w-full"
        />
        {errors.technicalViability && (
          <p className="text-sm text-red-500">{errors.technicalViability.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="associatedCost">Costo Asociado (20%)</Label>
        <Input
          id="associatedCost"
          type="number"
          step="0.1"
          min="0"
          max="10"
          {...register('associatedCost', { valueAsNumber: true })}
          className="w-full"
        />
        {errors.associatedCost && (
          <p className="text-sm text-red-500">{errors.associatedCost.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="implementationTime">Tiempo de Implementación (10%)</Label>
        <Input
          id="implementationTime"
          type="number"
          step="0.1"
          min="0"
          max="10"
          {...register('implementationTime', { valueAsNumber: true })}
          className="w-full"
        />
        {errors.implementationTime && (
          <p className="text-sm text-red-500">{errors.implementationTime.message}</p>
        )}
      </div>

      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between items-center">
          <Label>Puntaje Total:</Label>
          <span className="text-lg font-semibold">
            {totalScore !== null ? totalScore.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <Label>Prioridad:</Label>
          {priority && (
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              priority === 'alto' ? 'bg-green-100 text-green-800' :
              priority === 'medio' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {priority}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Guardando...' : 'Guardar Proyecto'}
      </Button>
    </form>
  );
}
