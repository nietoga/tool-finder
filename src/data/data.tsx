//@ts-ignore
import tsvFile from "./database.tsv";

export const NOT_APPLICABLE_VALUE = "N/A";

export const WILDCARD_VALUE = "*";

export const POSITIVE_VALUE = "Yes";

export const NEGATIVE_VALUE = "No";

export type Tag = {
  name: string;
  value: string;
};

export type ToolData = {
  name: string;
  description: string;
  main_url: string;
  license?: string;
  source_url?: string;
  docs_url?: string;
  teaching_materials?: string;
  differentiating_factors?: string;
  pros: string[];
  cons: string[];
  reference_papers: string[];

  cost: string[];
  platform: string[];
  hosting: string[];
  programming_language: string[];
  support: string[];
  documentation: string[];
  extensibility: string[];
  focus: string[];
  additional_features: string[];
  tags: Tag[];
};

export const singleValuedColumnsIds = [
  "name",
  "description",
  "main_url",
  "license",
  "source_url",
  "docs_url",
  "teaching_materials",
  "differentiating_factors",
];

export const filterableColumnsIds = [
  "cost",
  "platform",
  "hosting",
  "programming_language",
  "support",
  "documentation",
  "extensibility",
  "focus",
  "additional_features",
];

export const multiValuedColumnsIds = [
  ...filterableColumnsIds,
  "pros",
  "cons",
  "reference_papers",
];

const fileData = tsvFile as Object[];

export const columnsNames = fileData[0] as { [k: string]: string };

export const columnsIds = Object.keys(columnsNames);

export const data: ToolData[] = fileData
  .slice(1)
  .map((toolData) => {
    const transformedData = {} as ToolData;

    for (const [column, value] of Object.entries(toolData)) {
      if (singleValuedColumnsIds.includes(column)) {
        transformedData[column as keyof ToolData] = value;
      } else if (multiValuedColumnsIds.includes(column)) {
        //@ts-ignore
        transformedData[column as keyof ToolData] =
          (value as string)?.split(",") || [];
      }
    }

    transformedData.tags = [];
    for (const columnId of filterableColumnsIds) {
      const tag = {
        name: columnsNames[columnId],
        //@ts-ignore
        value: transformedData[columnId as keyof ToolData].join(", "),
      };

      if (tag.value) {
        transformedData.tags.push(tag);
      }
    }

    return transformedData;
  })
  .toSorted((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

export const getColumnsPossibleValues = (data: ToolData[]) => {
  return Object.fromEntries(
    filterableColumnsIds.map((columnId) => {
      const columnValues: string[] = [];

      data.forEach((row) => {
        const values = row[columnId as keyof ToolData] as string[];

        for (const value of values) {
          if (
            !columnValues.includes(value) &&
            ![NOT_APPLICABLE_VALUE, WILDCARD_VALUE].includes(value)
          ) {
            columnValues.push(value);
          }
        }
      });

      return [columnId, columnValues.toSorted()];
    })
  );
};

export const columnsPossibleValues = getColumnsPossibleValues(data);
