import { useState } from "react";
import "./filter.css";

const Filter = () => {
  // State to hold the selected genre and sort option
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedGenre(event.target.value);
    }
  };

  // Handler for select change
  const handleSelectChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className="filter-container">
      <div className="container">
        <div className="container-header-left">
          <h3>Фильтры</h3>
        </div>
        <div className="container-button-right">
          <button>X</button>
        </div>
      </div>

      <form>
        <label htmlFor="colorSort">Сортировать по популярности:</label>
        <select id="colorSort" name="colorSort" onChange={handleSelectChange}>
          <option value="">Выберите опцию</option>
        </select>
        <br />

        <label htmlFor="genres">Жанры</label>
        <div>
          <input
            type="checkbox"
            id="comedy"
            name="options"
            value="3"
            checked={selectedGenre === "3"}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="comedy">Комедия</label>
          <br />
          <input
            type="checkbox"
            id="action"
            name="options"
            value="2"
            checked={selectedGenre === "2"}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="action">Боевик</label>
          <br />
          <input
            type="checkbox"
            id="drama"
            name="options"
            value="1"
            checked={selectedGenre === "1"}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="drama">Драма</label>
        </div>
        <button>Назад</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Вперед</button>
      </form>
    </div>
  );
};

export default Filter;
