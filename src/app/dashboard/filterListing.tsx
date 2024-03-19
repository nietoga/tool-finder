import * as React from "react";
import { Filter } from "./filter";
import Grid from "@mui/material/Grid";

import { filterData } from "./filterData";

export const FilterListing = () => {
  return (
    <Grid container spacing={1}>
      {filterData.map((filter, index) => {
        return (
          <Grid item xs={2}>
            <Filter
              key={index}
              id={filter.name}
              name={filter.name}
              label={filter.label}
              items={filter.items}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
