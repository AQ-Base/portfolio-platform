import Image from "next/image";

export function MdxImage(props: any) {
    // collect image properties 
    const { src, alt, width, height } = props;

    //return Image component with these props
    return (
        <Image
            src={src}
            alt={alt ?? ""}
            width={Number(width) || 1200}
            height={Number(height) || 675}
            style={{ height: "auto" }}
        />
    );
}