import { clerkClient } from "@clerk/nextjs/server";
import { getImages } from "~/server/queries";

export default async function fullPageImageView(props: { id: number }) {
  const image = await getImages(props.id);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="fl flex items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By</span>
          <span>{userInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
