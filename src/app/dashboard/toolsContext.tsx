"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

import {
  data,
  ToolData,
  columnsNames,
  filterableColumnsIds,
  NOT_APPLICABLE_VALUE,
  WILDCARD_VALUE,
  columnsPossibleValues,
} from "./data";
import { ColumnFilter, useFiltersContext } from "./filtersContext";

const allTools = data;

export type Tool = ToolData;

export type Column = {
  id: string;
  name: string;
  values: string[];
};

type ToolsContextValue = {
  tools: Tool[];
  columnsData: Column[];
};

const ToolsContext = createContext<ToolsContextValue>({
  tools: [],
  columnsData: [],
});

const applyFilters = (filters: ColumnFilter[], tools: Tool[]) => {
  const filtersToApply: { column: string; values: string[] }[] = [];

  for (const filter of filters) {
    let consolidatedFilter = filtersToApply.find(
      (f) => f.column === filter.column
    );

    const found = !!consolidatedFilter;
    consolidatedFilter ||= { column: filter.column, values: [] };

    consolidatedFilter.values.push(filter.value);

    if (!found) {
      filtersToApply.push(consolidatedFilter);
    }
  }

  for (const filterToApply of filtersToApply) {
    tools = tools.filter((tool) => {
      return filterToApply.values.some((valuesToInclude) => {
        const columnValues = tool[filterToApply.column as keyof Tool];

        //@ts-ignore
        let includesSpecialValue = columnValues.includes(WILDCARD_VALUE);
        //@ts-ignore
        includesSpecialValue ||= columnValues.includes(NOT_APPLICABLE_VALUE);

        if (includesSpecialValue) {
          return true;
        }

        //@ts-ignore
        return columnValues.includes(valuesToInclude);
      });
    });
  }

  return tools;
};

const columnsData = filterableColumnsIds.map((columnId) => {
  return {
    id: columnId,
    name: columnsNames[columnId],
    values: columnsPossibleValues[columnId],
  };
});

export const ToolsContextProvider = ({ children }: PropsWithChildren) => {
  const [tools, setTools] = useState<Tool[]>(allTools);
  const { filters } = useFiltersContext();

  useEffect(() => {
    const currentTools = applyFilters(filters, allTools);
    setTools(currentTools);
  }, [filters]);

  const contextValue = useMemo(() => {
    return {
      tools,
      columnsData,
    };
  }, [tools]);

  return (
    <ToolsContext.Provider value={contextValue}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useToolsContext = () => {
  return useContext(ToolsContext);
};
