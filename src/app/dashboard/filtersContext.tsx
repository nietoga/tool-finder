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

const compareFilters = (filterA: ColumnFilter, filterB: ColumnFilter) => {
  if (filterA.column < filterB.column) {
    return -1;
  }

  if (filterA.column > filterB.column) {
    return 1;
  }

  if (filterA.value < filterB.value) {
    return -1;
  }

  if (filterA.value > filterB.value) {
    return 1;
  }

  return 0;
};

const FiltersContext = createContext<FiltersContextValue>({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
});

export const FiltersContextProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<ColumnFilter[]>([]);

  const addFilter = useCallback((filterToAdd: ColumnFilter) => {
    setFilters((prevFilters) => {
      const isFilterAlreadyApplied = prevFilters.find(
        (filter) => compareFilters(filter, filterToAdd) === 0
      );

      if (!isFilterAlreadyApplied) {
        return [...prevFilters, filterToAdd].toSorted(compareFilters);
      } else {
        return prevFilters;
      }
    });
  }, []);

  const removeFilter = useCallback((filterToRemove: ColumnFilter) => {
    setFilters((prevFilters) => {
      return prevFilters.filter(
        (filter) => compareFilters(filter, filterToRemove) !== 0
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
