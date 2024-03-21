import { Typography, Link, Box } from "@mui/material";

export type ToolProps = {
  name: string;
  description: string;
  main_url: string;
};

export const Tool = ({ name, description, main_url }: ToolProps) => {
  return (
    <Box border={1} borderRadius={2} borderColor="gray" padding={1}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1">
        <Link href={main_url} target="_blank">
          Visit main page
        </Link>
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};
