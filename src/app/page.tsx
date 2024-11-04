import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/vddwlVVnjQOYwjWkEngSi4Yd2o7L5sa69M8ZXAmr1DWnTQNV",
  "https://utfs.io/f/vddwlVVnjQOYgpverm0e6GKvibpd7EcnNy9WDrqkPXJSgl1F",
  "https://utfs.io/f/vddwlVVnjQOYaJjVd6BZcrUY1QCqa3zxLEmPGiFf9jDXHgpW",
  "https://utfs.io/f/vddwlVVnjQOYizvhZBkj8otSV6wLcsUlg32yX0TZQaf9BOqn",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index++,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 align-middle">
        {posts.map((post, index) => (
          <div key={post.id + "-" + index} className="w-48">
            {post.name}
          </div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
