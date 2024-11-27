"use client";

import { useCallback } from "react";
import Chip from "@mui/material/Chip";

import { ColumnFilter, useFiltersContext } from "./filtersContext";
import { columnsNames } from "../../data/data";

export const ActiveFilter = ({ filter }: { filter: ColumnFilter }) => {
  const { removeFilter } = useFiltersContext();

  const handleDelete = useCallback(() => {
    removeFilter(filter);
  }, [filter, removeFilter]);

  return (
    <Chip
      label={`${columnsNames[filter.column]}: ${filter.value}`}
      variant="outlined"
      onDelete={handleDelete}
    />
  );
};
