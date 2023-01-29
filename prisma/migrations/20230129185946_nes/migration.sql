/*
  Warnings:

  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_plan_type_id_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_user_id_fkey";

-- DropTable
DROP TABLE "payment";

-- DropTable
DROP TABLE "plans";
