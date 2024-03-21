"use client";

import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

import { data, ToolData, WILDCARD_VALUE, NOT_APPLICABLE_VALUE } from "../data";
import { useFiltersContext } from "../filtersContext";
import { ToolProps, Tool } from "./tool";

export const ToolListing = () => {
  const [tools, setTools] = useState<ToolProps[]>([]);
  const { filters } = useFiltersContext();

  useEffect(() => {
    let currentTools = data;

    for (const filter of filters) {
      currentTools = currentTools.filter((tool) => {
        const columnData = tool[filter.column as keyof ToolData];

        const ignoreFilter =
          columnData.includes(NOT_APPLICABLE_VALUE) ||
          columnData.includes(WILDCARD_VALUE);

        if (ignoreFilter) {
          return true;
        }

        return columnData.includes(filter.value);
      });
    }

    setTools(currentTools);
  }, [filters]);

  return (
    <Stack spacing={1}>
      {tools.map((tool, index) => (
        <Tool key={index} {...tool} />
      ))}
    </Stack>
  );
};
