import React from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import SearchBox from "../component/search/SearchBox";
import SearchResults from "../component/search/SearchResults";

const Search = () => {
  return (
    <Container>
      <Typography varaint="h1">READY TO TAKE OFF</Typography>
      <Box>
      <SearchBox />
      <SearchResults />
      </Box>
    </Container>
  );
};

export default Search;
