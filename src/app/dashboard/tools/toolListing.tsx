import { data } from "../data";
import { Tool } from "./tool";

type Tool = {
  name: string;
};

export const ToolListing = () => {
  return (
    <ul>
      {data.map((tool, index) => (
        <li key={index}>
          <Tool tool={tool} />
        </li>
      ))}
    </ul>
  );
};
