import { PrismaClient } from '@prisma/client';
import { dataProducts } from './data';


// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const programs = await prisma.product.createMany({
    data: dataProducts,
  });
 
  console.log('seeded');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });