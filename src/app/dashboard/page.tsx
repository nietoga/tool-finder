import * as React from "react";
import Box from "@mui/material/Box";
import { ToolListing } from "./toolListing";
import { FilterListing } from "./filterListing";

const DashboardPage = () => {
  return (
    <main>
      <FilterListing />
      <Box>
        <ToolListing tools={[{ name: "Python" }]} />
      </Box>
    </main>
  );
};

export default DashboardPage;
