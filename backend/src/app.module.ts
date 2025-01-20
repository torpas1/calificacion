import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class AppModule {}