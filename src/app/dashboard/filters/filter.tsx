"use client";

import { ComponentProps, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { useFiltersContext } from "../filtersContext";

type Item = {
  value: string;
  label: string;
};

type FilterProps = {
  id: string;
  name: string;
  label: string;
  additionalProps?: ComponentProps<typeof TextField>;
  items: Item[];
};

export const Filter = ({ id, name, label, items = [] }: FilterProps) => {
  const [values, setValues] = useState<string[]>([]);
  const { filters, addFilter, removeFilter } = useFiltersContext();

  useEffect(() => {
    const updatedValues: string[] = [];
    for (const filter of filters) {
      if (filter.column == name) {
        updatedValues.push(filter.value);
      }
    }

    setValues(updatedValues);
  }, [filters]);

  const handleChange = ({
    target: { value },
  }: SelectChangeEvent<typeof values>) => {
    const newValues = typeof value === "string" ? value.split(",") : value;
    const valuesToRemove = values;
    const valuesToAdd = newValues;

    for (const valueToRemove of valuesToRemove) {
      removeFilter({ column: name, value: valueToRemove });
    }

    for (const valueToAdd of valuesToAdd) {
      addFilter({ column: name, value: valueToAdd });
    }
  };

  const labelId = `${id}-label`;
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        name={name}
        id={id}
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected: string[]) => selected.join(", ")}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            <Checkbox checked={values.indexOf(item.value) > -1} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
