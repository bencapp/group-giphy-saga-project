import SearchForm from "../SearchForm/SearchForm";
import SearchList from "../SearchList/SearchList";
import { Box } from "@mui/system";
import Masonry from "@mui/lab/Masonry";

function SearchView() {
  return (
    <Box
      sx={{
        "& #title": {
          fontSize: "40px",
          fontFamily: "sans-serif",
        },
      }}
    >
      <Box display="flex" justifyContent="space-evenly">
        <h1 id="title">Search View</h1>
        <SearchForm />
      </Box>
      <SearchList />
    </Box>
  );
}

export default SearchView;
