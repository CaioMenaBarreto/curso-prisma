

import { posts } from "@prisma/client";
import prisma from "./database/database";
import { number } from "joi";

type CreatePost = Omit<posts, "id" | "createdAt">;
type UpdatePost = CreatePost;

async function createPost(post: CreatePost) {
  const result = await prisma.posts.create({
    data: post
  });
  console.log(result)
}

async function updatePost(post: UpdatePost) {
  const result = await prisma.posts.create({
    data: post
  });
  console.log(result)
}

async function getPosts() {
  const result = await prisma.posts.findMany()
  console.log(result);
}

async function getPost(id: number) {
  const result = await prisma.posts.findFirst({
    where: { id }
  });
  console.log(result);
}

async function deletePost(id: number) {
  const result = await prisma.posts.delete({
    where: { id }
  });
}

(async () => {
  await getPosts();
})();