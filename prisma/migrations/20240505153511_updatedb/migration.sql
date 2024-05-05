/*
  Warnings:

  - Added the required column `sexe` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "sexe" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "restaurantId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sexe" TEXT;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
