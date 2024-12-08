import "server-only";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export const getMyImages = async () => {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    // Below Code to reverse the order of the images
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};
