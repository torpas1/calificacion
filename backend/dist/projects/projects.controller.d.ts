import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<{
        proposal: string;
        strategicImpact: number;
        technicalViability: number;
        associatedCost: number;
        implementationTime: number;
        totalScore: number;
        priority: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        proposal: string;
        strategicImpact: number;
        technicalViability: number;
        associatedCost: number;
        implementationTime: number;
        totalScore: number;
        priority: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
