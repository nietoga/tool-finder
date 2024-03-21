import Box from "@mui/material/Box";

import { FiltersContextProvider } from "./filtersContext";
import { FilterListing } from "./filters/filterListing";
import { ActiveFilterListing } from "./activeFilters/activeFilterListing";
import { ToolListing } from "./tools/toolListing";
import { ToolsContextProvider } from "./toolsContext";

const DashboardPage = () => {
  return (
    <main>
      <FiltersContextProvider>
        <ToolsContextProvider>
          <Box margin={1}>
            <FilterListing />
          </Box>
          <Box margin={1}>
            <ActiveFilterListing />
          </Box>
          <Box margin={1}>
            <ToolListing />
          </Box>
        </ToolsContextProvider>
      </FiltersContextProvider>
    </main>
  );
};

export default DashboardPage;
