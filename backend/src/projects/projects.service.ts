import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    const { proposal, strategicImpact, technicalViability, associatedCost, implementationTime } = createProjectDto;

    // Calculate total score with weights
    const totalScore = (
      strategicImpact * 0.4 +
      technicalViability * 0.3 +
      associatedCost * 0.2 +
      implementationTime * 0.1
    );

    // Determine priority
    let priority = "baja";
    if (totalScore >= 8) {
      priority = "alto";
    } else if (totalScore >= 6) {
      priority = "medio";
    }

    return this.prisma.project.create({
      data: {
        proposal: 
        { id: proposal.id }, // Aquí se usa la propiedad `id` para conectar con el registro de Proposal
        strategicImpact,
        technicalViability,
        associatedCost,
        implementationTime,
        totalScore,
        priority,
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      orderBy: {
        totalScore: 'desc',
      },
    });
  }
}