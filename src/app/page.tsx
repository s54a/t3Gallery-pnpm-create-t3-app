import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
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
        <div className="h-full w-full pt-4 text-center text-2xl">
          Please Sign In
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
