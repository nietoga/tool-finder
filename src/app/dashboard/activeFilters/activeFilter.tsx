"use client";

import { useCallback } from "react";
import Chip from "@mui/material/Chip";

import { Filter, useFiltersContext } from "../filtersContext";

export const ActiveFilter = ({ filter }: { filter: Filter }) => {
  const { removeFilter } = useFiltersContext();

  const handleDelete = useCallback(() => {
    removeFilter(filter);
  }, [filter]);

  return (
    <Chip label={filter.value} variant="outlined" onDelete={handleDelete} />
  );
};
