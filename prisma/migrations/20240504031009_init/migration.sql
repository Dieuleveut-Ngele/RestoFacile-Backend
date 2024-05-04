/*
  Warnings:

  - You are about to drop the `ContactFormSubmission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewsletterSubscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OwnerRegistrationForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactFormSubmission";

-- DropTable
DROP TABLE "NewsletterSubscription";

-- DropTable
DROP TABLE "OwnerRegistrationForm";

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "restaurantName" TEXT,
    "restaurantDescription" TEXT,
    "restaurantAddress" TEXT,
    "restaurantCity" TEXT,
    "restaurantState" TEXT,
    "restaurantZipCode" TEXT,
    "restaurantPhone" TEXT,
    "restaurantEmail" TEXT,
    "restaurantWebsite" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");
