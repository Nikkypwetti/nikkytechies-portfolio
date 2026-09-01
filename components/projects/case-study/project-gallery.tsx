import Image from "next/image";

type Props = {
  gallery: {
    image: string;
    title: string;
    description: string;
  }[];
};

export function ProjectGallery({
  gallery,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Project Gallery
        </h2>

        <p className="mt-2 text-muted-foreground">
          Screenshots from the completed automation system.
        </p>
      </div>

      <div className="grid gap-8">
        {gallery.map((item) => (
          <article
            key={item.image}
            className="overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1600}
              height={900}
              loading="lazy"
              sizes="(min-width: 1152px) 1080px, calc(100vw - 48px)"
              className="w-full object-cover"
            />

            <div className="space-y-2 border-t p-6">
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
