//@ts-ignore
import tsvFile from "./database.tsv";

export const NOT_APPLICABLE_VALUE = "N/A";

export const WILDCARD_VALUE = "*";

type ToolData = {
  name: string;
  description: string;
  main_url: string;
  cost: string[];
  platform: string[];
  hosting: string[];
  programming_language: string[];
  support: string[];
  documentation: string[];
  extensibility: string[];
  focus: string[];
  additional_features: string[];
};

const singleValuedColumnIds = ["name", "description", "main_url"];

const fileData = tsvFile as Object[];

export const columnNames = fileData[0] as { [k: string]: string };
export const columnIds = Object.keys(columnNames);

export const filterableColumnIds = columnIds.filter(
  (columnId) => !singleValuedColumnIds.includes(columnId)
);

export const data: ToolData[] = fileData.slice(1).map((toolData) => {
  const transformedData = {} as ToolData;

  for (let [column, value] of Object.entries(toolData)) {
    if (singleValuedColumnIds.includes(column)) {
      transformedData[column as keyof ToolData] = value;
    } else {
      //@ts-ignore
      transformedData[column as keyof ToolData] =
        (value as string)?.split(",") || [];
    }
  }

  return transformedData;
});

export const columnPossibleValues = Object.fromEntries(
  columnIds.map((columnId) => {
    if (singleValuedColumnIds.includes(columnId)) {
      return [columnId, []];
    }

    const columnValues: string[] = [];

    data.forEach((row) => {
      const value = row[columnId as keyof ToolData];
      const currentValues = typeof value === "string" ? [value] : value;

      for (const currentValue of currentValues) {
        if (
          !columnValues.includes(currentValue) &&
          ![NOT_APPLICABLE_VALUE, WILDCARD_VALUE].includes(currentValue)
        ) {
          columnValues.push(currentValue);
        }
      }
    });

    return [columnId, columnValues];
  })
);
