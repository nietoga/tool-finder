"use client";

import Stack from "@mui/material/Stack";

import { useFiltersContext } from "../filtersContext";
import { ActiveFilter } from "./activeFilter";

export const ActiveFilterListing = () => {
  const { filters } = useFiltersContext();

  return (
    <Stack spacing={1} direction="row" flexWrap="wrap">
      {filters.map((filter, index) => {
        return <ActiveFilter key={index} filter={filter} />;
      })}
    </Stack>
  );
};
