-- AlterTable
ALTER TABLE "OwnerRegistrationForm" ALTER COLUMN "restaurantName" DROP NOT NULL,
ALTER COLUMN "restaurantDescription" DROP NOT NULL,
ALTER COLUMN "restaurantAddress" DROP NOT NULL,
ALTER COLUMN "restaurantCity" DROP NOT NULL,
ALTER COLUMN "restaurantState" DROP NOT NULL,
ALTER COLUMN "restaurantZipCode" DROP NOT NULL,
ALTER COLUMN "restaurantPhone" DROP NOT NULL,
ALTER COLUMN "restaurantEmail" DROP NOT NULL,
ALTER COLUMN "restaurantWebsite" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "zipCode" DROP NOT NULL;
