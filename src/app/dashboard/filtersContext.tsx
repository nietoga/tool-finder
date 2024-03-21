"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";

export type ColumnFilter = {
  column: string;
  value: string;
};

type FiltersContextValue = {
  filters: ColumnFilter[];
  addFilter: (filter: ColumnFilter) => void;
  removeFilter: (filter: ColumnFilter) => void;
};

const filterEqual = (filterA: ColumnFilter, filterB: ColumnFilter) =>
  filterA.column == filterB.column && filterA.value == filterB.value;

const FiltersContext = createContext<FiltersContextValue>({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
});

export const FiltersContextProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<ColumnFilter[]>([]);

  const addFilter = useCallback((filterToAdd: ColumnFilter) => {
    setFilters((prevFilters) => {
      const isFilterAlreadyApplied = prevFilters.find((filter) =>
        filterEqual(filter, filterToAdd)
      );

      if (!isFilterAlreadyApplied) {
        return [...prevFilters, filterToAdd];
      } else {
        return prevFilters;
      }
    });
  }, []);

  const removeFilter = useCallback((filterToRemove: ColumnFilter) => {
    setFilters((prevFilters) => {
      return prevFilters.filter(
        (filter) => !filterEqual(filter, filterToRemove)
      );
    });
  }, []);

  const contextValue = useMemo(() => {
    return {
      filters,
      addFilter,
      removeFilter,
    };
  }, [filters, addFilter, removeFilter]);

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
