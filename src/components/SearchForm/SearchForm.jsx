import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

function SearchForm() {
  const dispatch = useDispatch();

  const [searchToSend, setSearchToSend] = useState("");

  function handleSearch() {
    dispatch({
      type: "FETCH_GIFS",
      payload: searchToSend,
    });
  }

  return (
    <Box sx={{ mb: "50px", mt: "20px" }}>
      <InputBase
        value={searchToSend}
        onChange={(event) => {
          setSearchToSend(`${event.target.value}`);
        }}
        type="text"
        placeholder="Search"
      />
      <IconButton type="button" sx={{ p: 1 }} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchForm;
