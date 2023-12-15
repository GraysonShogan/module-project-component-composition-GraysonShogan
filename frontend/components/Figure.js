import React from "react";

export default function Figure(imageURL, caption) {
  return (
    <figure>
      <img src={imageURL} alt="NASA Phot of the Day" />
      <figcaption>Picture taken on {caption}</figcaption>
    </figure>
  );
}
