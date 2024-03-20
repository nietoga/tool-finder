import Grid from "@mui/material/Grid";

import { filterData } from "../filterData";
import { Filter } from "./filter";

export const FilterListing = () => {
  return (
    <Grid container spacing={1}>
      {filterData.map((filter, index) => {
        return (
          <Grid key={index} item xs={2}>
            <Filter
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
