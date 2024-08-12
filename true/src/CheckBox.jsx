import React from "react";

const CheckBox = ({ genres }) => {
  return (
    <>
      {genres.map((genre) => (
        <div key={genre.id}>
          <input type="checkbox" id={`genre-${genre.id}`} />
          <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
        </div>
      ))}
    </>
  );
};
export default CheckBox;
