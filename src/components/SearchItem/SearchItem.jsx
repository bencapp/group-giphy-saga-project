import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { useState } from "react";
function SearchItem({ gif }) {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: gif.images.original.url });

    setIsFavorited(!isFavorited);
  };

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Box
      sx={{
        "& .MuiSvgIcon-root": {
          color: `${isFavorited === true ? "#c62828" : "#e0e0e0"}`,
        },
      }}
    >
      <img
        src={`${gif.images.original.url}?w=162&auto=format`}
        srcSet={`${gif.images.original.url}?w=162&auto=format&dpr=2 2x`}
        loading="lazy"
        style={{
          borderRadius: "15px",
          display: "block",
          width: "100%",
        }}
      />
      <IconButton onClick={handleAddToFavorites}>
        <FavoriteBorderIcon id="favorite-btn">
          Add to Favorites
        </FavoriteBorderIcon>
      </IconButton>
    </Box>
  );
}

export default SearchItem;
