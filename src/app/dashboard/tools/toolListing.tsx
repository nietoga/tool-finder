"use client";

import Stack from "@mui/material/Stack";

import { useToolsContext } from "../toolsContext";
import { Tool } from "./tool";

export const ToolListing = () => {
  const { tools } = useToolsContext();

  return (
    <Stack spacing={1}>
      {tools.map((tool, index) => (
        <Tool key={index} {...tool} />
      ))}
    </Stack>
  );
};
