import Box from "@mui/material/Box";

import { FiltersContextProvider } from "./filtersContext";
import { FilterListing } from "./filters/filterListing";
import { ActiveFilterListing } from "./activeFilters/activeFilterListing";
import { ToolListing } from "./tools/toolListing";

const DashboardPage = () => {
  return (
    <main>
      <FiltersContextProvider>
        <Box margin={1}>
          <FilterListing />
        </Box>
        <Box margin={1}>
          <ActiveFilterListing />
        </Box>
        <Box margin={1}>
          <ToolListing />
        </Box>
      </FiltersContextProvider>
    </main>
  );
};

export default DashboardPage;
