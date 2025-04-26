/*
  Warnings:

  - The `opacity` column on the `Rectangle` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Rectangle" DROP COLUMN "opacity",
ADD COLUMN     "opacity" INTEGER;
