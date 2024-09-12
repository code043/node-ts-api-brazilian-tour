-- CreateTable
CREATE TABLE "tour" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "tour_pkey" PRIMARY KEY ("id")
);
