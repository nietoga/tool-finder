"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";

export type Filter = {
  column: string;
  value: string;
};

type FiltersContextValue = {
  filters: Filter[];
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
};

const filterEqual = (filterA: Filter, filterB: Filter) =>
  filterA.column == filterB.column && filterA.value == filterB.value;

const FiltersContext = createContext<FiltersContextValue>({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
});

export const FiltersContextProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = useCallback((filterToAdd: Filter) => {
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

  const removeFilter = useCallback((filterToRemove: Filter) => {
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
  }, [filters]);

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
