"use client";

import { useCallback } from "react";
import Chip from "@mui/material/Chip";

import { ColumnFilter, useFiltersContext } from "../filtersContext";

export const ActiveFilter = ({ filter }: { filter: ColumnFilter }) => {
  const { removeFilter } = useFiltersContext();

  const handleDelete = useCallback(() => {
    removeFilter(filter);
  }, [filter, removeFilter]);

  return (
    <Chip label={filter.value} variant="outlined" onDelete={handleDelete} />
  );
};
