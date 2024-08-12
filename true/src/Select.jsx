// import React from "react";

// const Select = (label, optionArray) => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <label htmlFor="colorSort">{label}</label>

{
  /* <select id="colorSort" name="colorSort" onChange={handleChangeValue}>
        {optionArray.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select> */
}

{
  /* <select id="colorSort" name="colorSort">
        {optionArray.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select; */
}

const Select = ({ label, years }) => {
  const optionYears = years.map((year) => {
    return (
      <option style={{ with: "100px" }} key={year.value} value={year.value}>
        {year.value}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="years">{label}</label>
      <select id="years">{optionYears}</select>
    </div>
  );
};

export default Select;
