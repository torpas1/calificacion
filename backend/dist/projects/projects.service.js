"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjectsService = class ProjectsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProjectDto) {
        const { proposal, strategicImpact, technicalViability, associatedCost, implementationTime } = createProjectDto;
        // Calculate total score with weights
        const totalScore = (strategicImpact * 0.4 +
            technicalViability * 0.3 +
            associatedCost * 0.2 +
            implementationTime * 0.1);
        // Determine priority
        let priority = "baja";
        if (totalScore >= 8) {
            priority = "alto";
        }
        else if (totalScore >= 6) {
            priority = "medio";
        }
        return this.prisma.project.create({
            data: {
                proposal,
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
                createdAt: 'desc',
            },
        });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map