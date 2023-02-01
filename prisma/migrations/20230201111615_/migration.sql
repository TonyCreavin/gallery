/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Painting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Painting" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT;
