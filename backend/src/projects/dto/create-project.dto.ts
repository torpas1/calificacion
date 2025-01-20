import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  proposal: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  strategicImpact: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  technicalViability: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  associatedCost: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  implementationTime: number;
}