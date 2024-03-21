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
  columnNames,
  filterableColumnIds,
  getColumnsPossibleValues,
  NOT_APPLICABLE_VALUE,
  WILDCARD_VALUE,
} from "./data";
import { useFiltersContext } from "./filtersContext";

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

const calculateColumnsDataFromTools = (tools: Tool[]) => {
  const possibleValues = getColumnsPossibleValues(tools);

  return filterableColumnIds.map((columnId) => {
    return {
      id: columnId,
      name: columnNames[columnId],
      values: possibleValues[columnId],
    };
  });
};

const useColumnsData = (tools: Tool[]) => {
  const [columnsData, setColumnsData] = useState(
    calculateColumnsDataFromTools(tools)
  );

  useEffect(() => {
    setColumnsData(calculateColumnsDataFromTools(tools));
  }, [tools]);

  return columnsData;
};

export const ToolsContextProvider = ({ children }: PropsWithChildren) => {
  const [tools, setTools] = useState<Tool[]>(allTools);
  const { filters } = useFiltersContext();
  const columnsData = useColumnsData(tools);

  useEffect(() => {
    let currentTools = allTools;

    for (const filter of filters) {
      currentTools = currentTools.filter((tool) => {
        const columnData = tool[filter.column as keyof ToolData];

        const ignoreFilter =
          columnData.includes(NOT_APPLICABLE_VALUE) ||
          columnData.includes(WILDCARD_VALUE);

        if (ignoreFilter) {
          return true;
        }

        return columnData.includes(filter.value);
      });
    }

    setTools(currentTools);
  }, [filters]);

  const contextValue = useMemo(() => {
    return {
      tools,
      columnsData,
    };
  }, [tools, columnsData]);

  return (
    <ToolsContext.Provider value={contextValue}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useToolsContext = () => {
  return useContext(ToolsContext);
};
