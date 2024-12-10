import { getImages } from "~/server/queries";

export default async function fullPageImageView(props: { id: number }) {
  const image = await getImages(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="fl flex items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
