/*
  Warnings:

  - You are about to drop the `Tour` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tour";

-- CreateTable
CREATE TABLE "tour" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "tour_pkey" PRIMARY KEY ("id")
);
