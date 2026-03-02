"use client";

import Image from "next/image";

interface VectorProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function Vector({
  width = 100,
  height = 100,
  alt = "vector",
    className = "",

}: VectorProps) {
  return (
    <Image
      src="/Vector.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
