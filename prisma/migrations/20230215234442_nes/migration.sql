/*
  Warnings:

  - Added the required column `contact_group_id` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "contact_group_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "contacts_groups" (
    "id" SERIAL NOT NULL,
    "subject" VARCHAR(25) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_contact_group_id_fkey" FOREIGN KEY ("contact_group_id") REFERENCES "contacts_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
