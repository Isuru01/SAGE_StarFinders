import React from "react";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ShuttleCard from "../cards/ShuttleCard";
import { fetchSearch } from "../../api/search.api.mjs";
import { useLocation } from "react-router-dom";

function queryParams() {
  const query = new URLSearchParams(useLocation().search);
  return query;
}

const SearchResults = () => {
  const query = queryParams();

  // console.log(date, from, to, query);

  const { isLoading, data: shuttleData } = useQuery({
    queryKey: ["shuttles", query],
    queryFn: fetchSearch,
  });

  if (isLoading) return <div>Laoding</div>;

  return (
    <Stack>
      {shuttleData.map((shuttle, index) => (
        <ShuttleCard key={shuttle.key} index={index} data={shuttle} />
      ))}
    </Stack>
  );
};

export default SearchResults;
