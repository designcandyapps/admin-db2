import { db,users } from 'lib/db';
export const dynamic = 'force-dynamic';
export async function GET() {
  return Response.json({
    message: 'Uncomment to seed data.'
  });
     await db.insert(users).values([
       {
         id: 1,
         imageUrl:
           'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
         name: 'Pro',
         status: 'active',
         price: '999.00',
         stock: 150,
         availableAt: new Date()
       },
       {
         id: 2,
         imageUrl:
           'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
         name: 'Ultra',
         status: 'active',
         price: '199.00',
         stock: 300,
         availableAt: new Date()
       },
       {
         id: 3,
         imageUrl:
           'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
         name: 'Hub',
         status: 'active',
         price: '149.00',
         stock: 200,
         availableAt: new Date()
       }
     ]);
}
