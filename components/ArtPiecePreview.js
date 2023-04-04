import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={alt} />
      <h1>{title}</h1>
      <h2>{artist}</h2>
    </>
  );
}
