import { useHistory } from "react-router-dom";

function NavBar() {
  const history = useHistory();

  const toggleView = (path) => {
    history.push(path);
  };
  return (
    <div>
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
  );
}

export default NavBar;
