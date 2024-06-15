/*
  Warnings:

  - You are about to drop the column `place_id` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Expense` DROP FOREIGN KEY `Expense_place_id_fkey`;

-- DropIndex
DROP INDEX `Expense_user_id_fkey` ON `Expense`;

-- AlterTable
ALTER TABLE `Expense` DROP COLUMN `place_id`;

-- DropTable
DROP TABLE `Place`;
