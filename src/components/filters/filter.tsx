"use client";

import { useCallback, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { useFiltersContext } from "./filtersContext";

type FilterProps = {
  id: string;
  label: string;
  values: string[];
};

export const Filter = ({ id, label, values = [] }: FilterProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const { filters, addFilter, removeFilter } = useFiltersContext();

  useEffect(() => {
    const updatedValues: string[] = [];

    for (const filter of filters) {
      if (filter.column == id) {
        updatedValues.push(filter.value);
      }
    }

    setSelectedValues(updatedValues);
  }, [filters, id]);

  const handleChange = useCallback(
    ({ target: { value } }: SelectChangeEvent<typeof selectedValues>) => {
      const newValues = typeof value === "string" ? value.split(",") : value;
      const valuesToRemove = selectedValues;
      const valuesToAdd = newValues;

      for (const valueToRemove of valuesToRemove) {
        removeFilter({ column: id, value: valueToRemove });
      }

      for (const valueToAdd of valuesToAdd) {
        addFilter({ column: id, value: valueToAdd });
      }
    },
    [selectedValues, id, removeFilter, addFilter]
  );

  const labelId = `${id}-label`;
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        multiple
        value={selectedValues}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected: string[]) => selected.join(", ")}
        disabled={values.length === 0}
      >
        {values.map((value) => (
          <MenuItem key={`${value}`} value={value}>
            <Checkbox checked={selectedValues.indexOf(value) > -1} />
            <ListItemText primary={value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
