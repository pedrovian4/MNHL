/*
  Warnings:

  - You are about to drop the column `password` on the `auths` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "auths" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;
