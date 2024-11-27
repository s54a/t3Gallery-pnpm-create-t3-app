import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

const Images = async () => {
  const image = await db.query.images.findMany({
    // Below Code to reverse the order of the images
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {image.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please Sign In</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
