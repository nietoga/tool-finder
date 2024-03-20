type Tool = {
  name: string;
};

type ToolListingProps = {
  tools: Tool[];
};

export const ToolListing = ({ tools = [] }: ToolListingProps) => {
  return (
    <ul>
      {tools.map((tool, index) => (
        <li key={index}>
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  );
};
