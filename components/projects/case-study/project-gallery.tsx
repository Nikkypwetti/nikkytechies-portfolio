import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in"; // 1. Add this import

type Props = {
  gallery: {
    image: string;
    title: string;
    description: string;
  }[];
};

export function ProjectGallery({ gallery }: Props) {
  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Project Gallery</h2>

        <p className="mt-2 text-muted-foreground">
          Screenshots and implementation evidence from the project.
        </p>
      </div>

      <div className="grid gap-8">
        {/* 2. Add (item, index) and wrap the article in FadeIn */}
        {gallery.map((item, index) => (
          <FadeIn key={item.image} delay={index * 0.1}>
            <article
              className="overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1600}
                height={900}
                loading="lazy"
                sizes="(min-width: 1152px) 1080px, calc(100vw - 48px)"
                unoptimized={item.image.startsWith("/")}
                className="h-auto w-full object-contain"
              />

              <div className="space-y-2 border-t p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}