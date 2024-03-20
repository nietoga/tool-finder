import Box from "@mui/material/Box";

import { FiltersContextProvider } from "./filtersContext";
import { FilterListing } from "./filters/filterListing";
import { ActiveFilterListing } from "./activeFilters/activeFilterListing";
import { ToolListing } from "./tools/toolListing";

const DashboardPage = () => {
  return (
    <main>
      <FiltersContextProvider>
        <Box>
          <FilterListing />
        </Box>
        <Box>
          <ActiveFilterListing />
        </Box>
        <Box>
          <ToolListing tools={[{ name: "Python" }]} />
        </Box>
      </FiltersContextProvider>
    </main>
  );
};

export default DashboardPage;
