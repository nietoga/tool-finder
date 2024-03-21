"use client";

import { useCallback } from "react";
import Chip from "@mui/material/Chip";

import { ColumnFilter, useFiltersContext } from "../filtersContext";
import { columnNames } from "../data";

export const ActiveFilter = ({ filter }: { filter: ColumnFilter }) => {
  const { removeFilter } = useFiltersContext();

  const handleDelete = useCallback(() => {
    removeFilter(filter);
  }, [filter, removeFilter]);

  return (
    <Chip
      label={`${columnNames[filter.column]}: ${filter.value}`}
      variant="outlined"
      onDelete={handleDelete}
    />
  );
};
