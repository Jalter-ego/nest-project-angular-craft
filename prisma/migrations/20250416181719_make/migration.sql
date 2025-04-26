-- AlterTable
ALTER TABLE "Figma" ADD COLUMN     "image" TEXT,
ADD COLUMN     "nameFigma" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;
