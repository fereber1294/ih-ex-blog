import React from "react";
import { useParams } from "react-router-dom";

export default function Article(props) {
  const route = useParams();
  // const {slug} = route

  const singlePost = props.articlesData.filter((elem) => {
    return elem.slug === route.slug;
  });
  console.log(singlePost);

  const { title, description, imageUrl, photoAuthor } = singlePost[0];

  return (
    <div>
      <p> {title} </p> <p> {description} </p>{" "}
      <figure>
        <img src={imageUrl} /> <figcaption> 📸{photoAuthor} </figcaption>{" "}
      </figure>{" "}
    </div>
  );
}
