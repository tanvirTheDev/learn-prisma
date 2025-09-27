import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("New User:");
  // const result = await prisma.post.create({
  //   data: {
  //     title: "THis is title 1",
  //     content: "basic content",
  //     authorId: 1,
  //     authorName: "author",
  //     comment: "THis is comment",
  //     published: false,
  //     postCategory: {
  //       create: [
  //         {
  //           categoryId: 1,
  //         },
  //         {
  //           categoryId: 2,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // console.log(result);

  // const getALlFromDB = await prisma.post.findMany();
  //   console.log(getALlFromDB);

  //   const findFirsts = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 3,
  //     },
  //   });

  // const findUnique = await prisma.post.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // });

  // console.log(findUnique);

  // const createmanyData = await prisma.post.createMany({
  //   data: [
  //     {
  //       authorName: "1",
  //       comment: "1",
  //     },
  //     {
  //       authorName: "2",
  //       comment: "3",
  //     },
  //     {
  //       authorName: "3",
  //       comment: "3",
  //     },
  //     {
  //       authorName: "4",
  //       comment: "4",
  //     },
  //   ],
  // });
  // console.log(createmanyData);

  //   const updateData = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       comment: "id 4 comment updated",
  //     },
  //   });

  //   console.log(updateData);
  // }

  // const upsertMethod = await prisma.post.upsert({
  //   where: {
  //     id: 7,
  //   },
  //   update: {
  //     comment: "updated data by upsert mehtod",
  //   },
  //   create: {
  //     authorName: "crete author name by upsert",
  //     comment: "this is comment created by upsert",
  //   },
  // });
  // console.log(upsertMethod);

  // pagination
  // const pagination = await prisma.post.findMany({
  //   skip: 2,
  //   take: 2,
  // });

  // const cusorBasedpagination = await prisma.post.findMany({
  //   skip: 2,
  //   take: 2,
  //   cursor: {
  //     id: 3,
  //   },
  // });

  // const sorting = await prisma.post.findMany({
  //   orderBy: {
  //     id: "desc"
  //   },
  // });

  // console.log(sorting);

  // Fluent APi

  // const fluentApi = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   })
  //   .post();

  // console.log(fluentApi);

  // relation filtters
  // const relationFilters = await prisma.user.findMany({
  //   include: {
  //     post: {
  //       where: {
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // console.dir(relationFilters, { depth: Infinity });

  // const andOrFiltering = await prisma.post.findMany({
  //   where: {
  //     AND: [
  //       {
  //         title: {
  //           contains: "title",
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });
  // console.log(andOrFiltering);
  // const avgAge = await prisma.user.aggregate({
  //   _avg: {
  //     age: true,
  //   },
  // });

  // const avgAge2 = await prisma.user.aggregate({
  //   _max: {
  //     age: true,
  //   },
  // });

  // const avgAge3 = await prisma.user.aggregate({
  //   _min: {
  //     age: true,
  //   },
  // });

  // const avgAge4 = await prisma.user.aggregate({
  //   _count: {
  //     age: true,
  //   },
  // });

  // console.log(avgAge);
  // console.log(avgAge2);
  // console.log(avgAge3);
  // console.log(avgAge4);

  // const groupBy = await prisma.post.groupBy({
  //   by: ["published"],
  //   _count: {
  //     title: true,
  //   },
  // });

  // console.log(groupBy);

  // Batch System Tracsition API
  // const userData = prisma.user.create({
  //   data: {
  //     username: "Tanvir",
  //     email: "ahaWg@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const updateUser = prisma.user.update({
  //   where: {
  //     id: 3,
  //   },
  //   data: {
  //     age: 110,
  //   },
  // });

  // const [user, update] = await prisma.$transaction([userData, updateUser]);

  // // intractive system
  // const result = await prisma.$transaction(async (tx) => {
  //   // query 1
  //   const getAllPost = await tx.post.findMany({
  //     where: {
  //       published: true,
  //     },
  //   });
  //   // query 2
  //   const countUser = await tx.user.count();

  //   // query 3
  //   const updateUser = await tx.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       age: 210,
  //     },
  //   });
  //   return {
  //     getAllPost,
  //     countUser,
  //     updateUser,
  //   };
  // });
  // console.log(result);

  // Raw Query
  // const posts = await prisma.$queryRaw`SELECT  * FROM "posts"`;
  // console.log(posts);

  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
