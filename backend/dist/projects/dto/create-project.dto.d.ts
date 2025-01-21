declare class Proposal {
    id: string;
    name: string;
}
export declare class CreateProjectDto {
    proposal: Proposal;
    strategicImpact: number;
    technicalViability: number;
    associatedCost: number;
    implementationTime: number;
}
export {};
