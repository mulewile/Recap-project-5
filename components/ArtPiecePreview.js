import React from "react";
import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist, dimensions }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <div>
        <Image
          src={image}
          width={dimensions.width}
          height={dimensions.height}
          alt={title}
        />
      </div>
    </>
  );
}
