/*
  Warnings:

  - Made the column `content` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Chapitre` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Chapitre" DROP CONSTRAINT "Chapitre_authorId_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "Chapitre" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "authorId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Chapitre" ADD CONSTRAINT "Chapitre_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("clerkUserId") ON DELETE NO ACTION ON UPDATE CASCADE;
