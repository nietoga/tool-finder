"use client";

import { useMemo } from "react";
import Stack from "@mui/material/Stack";

import { useToolsContext } from "../toolsContext";
import { Tool } from "./tool";

export const ToolListing = () => {
  const { tools } = useToolsContext();

  const toolsTags = useMemo(() => {
    return tools.map((tool) => {
      const tags = tool.tags.map((tag) => {
        return `${tag.name}: ${tag.value}`;
      });

      return tags;
    });
  }, [tools]);

  return (
    <Stack spacing={1}>
      {tools.map((tool, index) => (
        <Tool key={index} {...tool} tags={toolsTags[index]} />
      ))}
    </Stack>
  );
};
