/*
  Warnings:

  - Changed the type of `proposal` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "proposal",
ADD COLUMN     "proposal" JSONB NOT NULL;
