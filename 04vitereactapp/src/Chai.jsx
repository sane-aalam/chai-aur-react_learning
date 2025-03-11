import React from "react";

const course = "chai or code";
const instructor = "Hitesh sir";

// props of object
const obj = {
  courseHindi: "chai or react",
  instructorHindi: "Hitesh sir",
};

// Jsx
// React.createElement(tagName,props,summary[about the tag])
const myElement = React.createElement("h1", {}, "I do not use JSX!");

function Chai() {
  return (
    <div>
      <h1>chai aur react</h1>
      <p>youtube channel name : {course}</p>
      <p>Teacher name : {instructor}</p>
      <p>
        obj : {obj.courseHindi} {obj.instructorHindi}
      </p>
      {myElement}
    </div>
  );
}

export default Chai;
