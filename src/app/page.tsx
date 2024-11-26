import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/vddwlVVnjQOYAEHWIGmWUl5XHvhoOz0gmbKxDtu2qjp6dTZP",
  "https://utfs.io/f/vddwlVVnjQOYco7aTwJCuRiMj6EODPFYKnqUT89fy5kWpvH7",
  "https://utfs.io/f/vddwlVVnjQOYo3o22uzkm0eZyhAXtMVbBD9IgRr6vLlpN31z",
  "https://utfs.io/f/vddwlVVnjQOY0qYLUmrGVBaq9xtANMPYR6omjE1Tle54ruIb",
  "https://utfs.io/f/vddwlVVnjQOYudWlPTfEyPDbx2Vi76eqLI5vlofH1YGNsnFS",
  "https://utfs.io/f/vddwlVVnjQOYFW9UGAou5ocas8iRUhdWk36tTBHFmXE1DbVI",
  "https://utfs.io/f/vddwlVVnjQOYEpaW3YfvnfQq6vS70DuAlazNKVmTZ1YIOrg5",
  "https://utfs.io/f/vddwlVVnjQOYENeegAvnfQq6vS70DuAlazNKVmTZ1YIOrg54",
  "https://utfs.io/f/vddwlVVnjQOYgpverm0e6GKvibpd7EcnNy9WDrqkPXJSgl1F",
  "https://utfs.io/f/vddwlVVnjQOYaJjVd6BZcrUY1QCqa3zxLEmPGiFf9jDXHgpW",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index++,
  url,
}));

export default async function HomePage() {
  const image = await db.query.images.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}

        {image.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
