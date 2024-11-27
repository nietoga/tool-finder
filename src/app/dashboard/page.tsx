import Box from "@mui/material/Box";

import { FiltersContextProvider } from "../../components/filters/filtersContext";
import { FilterListing } from "@tool-finder/components/filters/filterListing";
import { ActiveFilterListing } from "@tool-finder/components/filters/activeFilterListing";
import { ToolListing } from "@tool-finder/components/tools/toolListing";
import { ToolsContextProvider } from "../../components/tools/toolsContext";

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
