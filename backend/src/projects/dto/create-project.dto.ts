import { IsString, IsNumber, Min, Max, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Proposal {
  @IsString()
  id: string;

  @IsString()
  name: string;
}

export class CreateProjectDto {
  @ValidateNested()
  @Type(() => Proposal)
  proposal: Proposal; // Cambiado para ser un objeto con id y name

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