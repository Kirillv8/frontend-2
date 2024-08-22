import { useEffect, useState } from "react";
import "./filter.css";
import Select from "./Select";
import CheckBox from "./CheckBox";
// import getGenresFilms from "./apiFilms";

const Filter = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [genres, setGenres] = useState([]);

  const years = [
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2021",
      value: "2021",
    },
    {
      label: "2022",
      value: "2022",
    },
  ];

  const handleChangeGenre = (genres) => {
    setSelectedGenre(genres);
  };

  const handleSelectChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleChangeYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const accessKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJiMDdkNGU3ZTUwMmE5Y2Y5MmIwOTNiZWRiYThkZiIsIm5iZiI6MTcyMjU0NTM3NS42NTA3OCwic3ViIjoiNjZhYmVkMTY1M2VhYTljMGZlNDRhZGUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NbarsKxQAaSkxrss0vbQLdkvxffDhqIxbCLxXALHl6c";
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";

  const options = {
    method: "GET",
    headers: {
      accept: "aplication/json",
      Authorization: `Bearer ${accessKey}`,
    },
  };

  useEffect(() => {
    const getGenresFilms = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const genres = data.genres;

        setGenres(genres);
      } catch (error) {
        console.error(error.message);
      }
    };

    handleChangeGenre(genres);
    getGenresFilms();
  }, []);

  return (
    <div className="filter-container">
      <div className="container">
        <h3>Фильтры</h3>
        <button className="button">X</button>
      </div>

      <div className="container-input">
        <Select label={"Год релиза:"} years={years} />
        <CheckBox genres={genres} />
      </div>
      <div className="button-container">
        <button>Назад</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Вперед</button>
      </div>
    </div>
  );
};

export default Filter;
