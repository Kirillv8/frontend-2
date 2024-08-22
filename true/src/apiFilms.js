// const accessKey =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJiMDdkNGU3ZTUwMmE5Y2Y5MmIwOTNiZWRiYThkZiIsIm5iZiI6MTcyMjU0NTM3NS42NTA3OCwic3ViIjoiNjZhYmVkMTY1M2VhYTljMGZlNDRhZGUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NbarsKxQAaSkxrss0vbQLdkvxffDhqIxbCLxXALHl6c";
// const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "aplication/json",
//     Authorization: `Bearer ${accessKey}`,
//   },
// };

// const getGenresFilms = async () => {
//   try {
//     const response = await fetch(url, options);
//     const json = await response.json();
//     const genres = await json.genres;
//     console.log(genres);
//     return genres;
//   } catch (error) {
//     console.log(error.message);
//   }
// };


// export default getGenresFilms;
