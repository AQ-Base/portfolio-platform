import Image from "next/image";

type GridImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  creditText?: string;
  creditUrl?: string;
};

type Props = {
  images: GridImage[];
  caption?: string;
  maxColumns?: 2 | 3 | 4;
};

export function ImageGrid({ images, caption, maxColumns = 3, }: Props) {

    const desktopCols = Math.min(images.length, maxColumns);

    const gridColsClass = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
    }[desktopCols];

  return (
    <figure className="my-8">
      <div 
      // custom css generator for dynamic width of image grid
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${gridColsClass}`}
    >
        {images.map((img) => (
          <div key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              style={{ height: "auto" }}
            />
            {(img.creditText || img.creditUrl) && (
              <p className="mt-1 text-xs opacity-70">
                Credit:{" "}
                {img.creditUrl ? (
                  <a
                    href={img.creditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {img.creditText}
                  </a>
                ) : (
                  img.creditText
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {caption && (
        <figcaption className="mt-2 text-sm opacity-80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}