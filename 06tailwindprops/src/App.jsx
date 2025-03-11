import "./App.css";
import Card from "./components/Card";
import movies from "../mock_data/NETFIX_MOCK_DATA";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 flex-wrap">
      <Card data={movies[0]} />
      <Card data={movies[1]} />
      <Card data={movies[2]} />
      <Card data={movies[3]} />
      <Card data={movies[4]} />
      <Card data={movies[5]} />
      <Card data={movies[6]} />
      <Card data={movies[7]} />
      <Card data={movies[8]} />
      <Card data={movies[9]} />
      {/* {movies.map((movie, id) => {
        <Card data={movie} key={id} />;
      })} */}
    </div>
  );
}

export default App;
