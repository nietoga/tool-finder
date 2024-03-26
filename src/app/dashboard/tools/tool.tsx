import { Typography, Link, Box, Stack, Chip } from "@mui/material";

export type ToolProps = {
  name: string;
  description: string;
  main_url: string;
  tags: string[];
};

export const Tool = ({ name, description, main_url, tags = [] }: ToolProps) => {
  return (
    <Box border={1} borderRadius={2} borderColor="gray" padding={1}>
      <Typography variant="h6">{name}</Typography>
      {tags ? (
        <Stack direction="row" flexWrap="wrap">
          {tags.map((tag) => (
            <Box paddingRight={1} key={tag}>
              <Chip label={tag} variant="outlined" />
            </Box>
          ))}
        </Stack>
      ) : null}
      <Typography variant="body1">
        <Link href={main_url} target="_blank">
          Visit main page
        </Link>
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};
