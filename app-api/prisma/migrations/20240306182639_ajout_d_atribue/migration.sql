/*
  Warnings:

  - You are about to drop the column `title` on the `product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Product_title_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `title`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageURL` LONGTEXT NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;
