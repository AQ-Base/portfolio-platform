import Image from "next/image";
// new npm module for boolean classNames
import clsx from "clsx";

// choose which type of image we would like
type Mode = "left" | "right" | "centre" | "wide";

// take in our normal properties with new mode arg
type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  mode?: Mode;
  caption?: string;
  creditText?: string;
  creditUrl?: string;
};

export function BlogImage({
  src,
  alt,
  width = 1200,
  height = 675,
  mode = "centre",
  caption,
  creditText,
  creditUrl,
}: Props) {    
    return (
        <figure
            className={clsx("my-8", {
                // conditional statements for all modes
                "mx-auto": mode === "centre",
                "mr-auto": mode === "left",
                "ml-auto": mode === "right",
                "px-6": mode === "wide",
            })}
            style={
                // fixed visual width for left/right/centre
                mode === "wide"
                    ? undefined
                    : { width } 
            }
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={
                mode === "wide"
                    ? { width: "100%", height: "auto" }
                    : undefined
                }
                sizes={mode === "wide" ? "100vw" : undefined}
            />
            {/* return for the caption if there is one */}
            {(caption || creditText) && (
            <figcaption className="mt-2 text-sm opacity-80 text-center">
            {caption && <span>{caption}</span>}
            {caption && creditText && <span> · </span>}
            {creditText && (
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
            )}
            </figcaption>)}
        </figure>
    );
}