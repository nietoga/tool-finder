"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Tool = {
  name: string;
};

type ToolListingProps = {
  tools: Tool[];
};

export const ToolListing = ({ tools = [] }: ToolListingProps) => {
  return (
    <ul>
      {tools.map((tool, index) => (
        <li key={index}>
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  );
};
