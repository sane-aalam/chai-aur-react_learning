import React from "react";

//* Netflix (front-end developer)
// creating the user interface and experience for the streaming of movies and TV shows on various devices
// ensuring a seamless and engaging experience, with a focus on personalization and usability
//* Object destructuring
// Object destructuring in JavaScript is a powerful feature that allows you to extract values from objects and assign them to variables in a concise and readable way
// const { property1, property2, ... } = object;

// isTreading(button will be RED)
// other button will be GREEN

const Card = (props) => {
  const { title, genre, rating, imageUrl, description, cast, isTrending } =
    props.data;
  return (
    <div className="m-10 border-2 border-black">
      <img src={imageUrl} alt="movie1" className="ml-10 mt-2" />
      <div className="flex flex-col m-2">
        <h1 className="text-lg font-semibold text-black">{title}</h1>
        <p className="text-sm">
          <span className="text-lg">Critics Consensus: </span>
          {description}
        </p>
        <p>
          {" "}
          <span className="text-lg">Ratings</span> {rating}
        </p>
        <p className="text-sm">
          {" "}
          <span className="text-lg">Cast : </span> {cast.join(", ")}
        </p>
        {isTrending ? (
          <button className="bg-red-500">RED TOP</button>
        ) : (
          <button className="bg-green-500">GREEN NOT TOP</button>
        )}
      </div>
    </div>
  );
};

export default Card;
