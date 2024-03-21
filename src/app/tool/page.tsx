"use client";

import { useSearchParams } from "next/navigation";

import { data } from "../dashboard/data";

const ToolPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const toolData = data.find((tool) => tool.name === name);
  return <div>{toolData ? JSON.stringify(toolData) : "Not Found"}</div>;
};

export default ToolPage;
