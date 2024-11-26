import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const image = await db.query.images.findMany({
    // Below to reverse the order of the images
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {image.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
