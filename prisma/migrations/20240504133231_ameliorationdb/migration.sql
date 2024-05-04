/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantAddress` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantCity` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantDescription` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantEmail` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantName` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantPhone` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantState` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantWebsite` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantZipCode` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "createdAt",
DROP COLUMN "password",
DROP COLUMN "restaurantAddress",
DROP COLUMN "restaurantCity",
DROP COLUMN "restaurantDescription",
DROP COLUMN "restaurantEmail",
DROP COLUMN "restaurantName",
DROP COLUMN "restaurantPhone",
DROP COLUMN "restaurantState",
DROP COLUMN "restaurantWebsite",
DROP COLUMN "restaurantZipCode";

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "state",
DROP COLUMN "zipCode";

-- CreateTable
CREATE TABLE "todo" (
    "todo_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("todo_id")
);
