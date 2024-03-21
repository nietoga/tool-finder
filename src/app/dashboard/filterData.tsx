import { columnNames, columnPossibleValues, filterableColumnIds } from "./data";

export const filterData = filterableColumnIds.map((columnId) => {
  return {
    id: columnId,
    name: columnNames[columnId],
    items: columnPossibleValues[columnId].map((value) => ({
      label: value,
      value,
    })),
  };
});
