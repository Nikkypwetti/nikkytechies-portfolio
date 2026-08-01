import Image from "next/image";

type Props = {
  gallery: string[];
};

export function ProjectGallery({
  gallery,
}: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        Project Gallery
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {gallery.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={image}
              alt={`Screenshot ${index + 1}`}
              width={1200}
              height={700}
              className="aspect-video w-full object-cover"
            />

            <div className="border-t p-4">
              <p className="font-medium">
                Screenshot {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}