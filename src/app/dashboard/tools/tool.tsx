import { Typography, Link, Box } from "@mui/material";

type Tool = {
  name: string;
  description: string;
  main_url: string;
};

export const Tool = ({ tool }: { tool: Tool }) => {
  return (
    <Box>
      <Typography variant="h6">{tool.name}</Typography>
      <Typography variant="body1">
        <Link href={tool.main_url} target="_blank">
          Visit main page
        </Link>
      </Typography>
      <Typography variant="body1">{tool.description}</Typography>
    </Box>
  );
};
