import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();

  const toggleView = (path) => {
    history.push(path);
  };
  return (
    <div id="nav-bar">
      <h1 id="title">🎁 GIFS 🎁</h1>
      <div id="button-group">
        <button onClick={(event) => toggleView(event.target.value)} value="/">
          SEARCH
        </button>
        <button
          onClick={(event) => toggleView(event.target.value)}
          value="/favorites"
        >
          FAVORITES
        </button>
      </div>
    </div>
  );
}

export default NavBar;
