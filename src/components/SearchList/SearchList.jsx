import SearchItem from "../SearchItem/SearchItem";
import { useSelector } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";

function SearchList() {
  const gifList = useSelector((store) => store.gifsToDisplay);
  console.log(gifList);
  return (
    <Box
      id="search-list"
      borderRadius="15px"
      sx={{ width: "90vw", minHeight: 829, m: "auto", p: 2 }}
    >
      <Masonry columns={3} spacing={2}>
        {gifList.map((gif) => (
          <div key={gif.id}>
            <SearchItem gif={gif} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default SearchList;
