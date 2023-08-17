import React from "react";
import {
  Container,
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
      <SearchBox />
      <SearchResults />
    </Container>
  );
};

export default Search;
