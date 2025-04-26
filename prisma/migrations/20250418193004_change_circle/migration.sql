/*
  Warnings:

  - You are about to drop the column `stroke` on the `Circle` table. All the data in the column will be lost.
  - You are about to drop the column `strokeWidth` on the `Circle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Circle" DROP COLUMN "stroke",
DROP COLUMN "strokeWidth";
