"use client";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { useFiltersContext } from "../filtersContext";
import { ActiveFilter } from "./activeFilter";

export const ActiveFilterListing = () => {
  const { filters } = useFiltersContext();

  return (
    <Stack
      paddingTop={1}
      paddingLeft={2}
      paddingRight={2}
      spacing={1}
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {filters.map((filter, index) => {
        return (
          <Box key={index} paddingBottom={1}>
            <ActiveFilter filter={filter} />
          </Box>
        );
      })}
    </Stack>
  );
};
