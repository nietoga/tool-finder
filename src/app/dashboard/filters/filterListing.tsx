"use client";

import Grid from "@mui/material/Grid";

import { Filter } from "./filter";
import { useToolsContext } from "../toolsContext";

export const FilterListing = () => {
  const { columnsData } = useToolsContext();

  return (
    <Grid container spacing={1}>
      {columnsData.map((filter, index) => {
        return (
          <Grid key={index} item xs={2}>
            <Filter id={filter.id} label={filter.name} values={filter.values} />
          </Grid>
        );
      })}
    </Grid>
  );
};
