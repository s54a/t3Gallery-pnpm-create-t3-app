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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 align-middle">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
