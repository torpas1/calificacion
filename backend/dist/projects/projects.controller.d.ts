import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<{
        id: number;
        proposal: import("@prisma/client/runtime/library").JsonValue;
        strategicImpact: number;
        technicalViability: number;
        associatedCost: number;
        implementationTime: number;
        totalScore: number;
        priority: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        proposal: import("@prisma/client/runtime/library").JsonValue;
        strategicImpact: number;
        technicalViability: number;
        associatedCost: number;
        implementationTime: number;
        totalScore: number;
        priority: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
