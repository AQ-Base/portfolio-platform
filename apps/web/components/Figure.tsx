import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    creditText?: string;
    creditUrl?: string;
};

export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  creditText,
  creditUrl,
}: Props) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 700px"
        style={{height: "auto" }}
      />

      {(caption || creditText) && (
        <figcaption className="mt-2 text-sm opacity-80r">
          {caption ? <span>{caption}</span> : null}
          {caption && creditText ? <span> · </span> : null}
          {creditText ? (
            creditUrl ? (
              <a
                href={creditUrl}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Credit: {creditText}
              </a>
            ) : (
              <span>Credit: {creditText}</span>
            )
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}