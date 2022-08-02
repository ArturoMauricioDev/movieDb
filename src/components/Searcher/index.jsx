import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Searcher(props) {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");
  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  const onSearchValueChange = (event) => {
    setValueInput(event.target.value);
  };
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search a Movie..."
        variant="outlined"
        placeholder="Avengers"
        size="small"
        width="100%"
        fullWidth
        value={valueInput}
        onChange={onSearchValueChange}
      />

      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-25px",
          width: 0,
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export { Searcher };
