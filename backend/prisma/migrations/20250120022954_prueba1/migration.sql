-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "proposal" TEXT NOT NULL,
    "strategicImpact" DOUBLE PRECISION NOT NULL,
    "technicalViability" DOUBLE PRECISION NOT NULL,
    "associatedCost" DOUBLE PRECISION NOT NULL,
    "implementationTime" DOUBLE PRECISION NOT NULL,
    "totalScore" DOUBLE PRECISION NOT NULL,
    "priority" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
