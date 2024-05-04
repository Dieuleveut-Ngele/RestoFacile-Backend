/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Restaurant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_ownerId_fkey";

-- DropIndex
DROP INDEX "Restaurant_ownerId_key";

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "ownerId";
