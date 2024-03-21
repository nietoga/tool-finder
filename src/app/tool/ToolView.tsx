"use client";

import { useSearchParams } from "next/navigation";

import { data } from "../dashboard/data";

export const ToolView = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const toolData = data.find((tool) => tool.name === name) || {};
  return <div>{JSON.stringify(toolData)}</div>;
};
