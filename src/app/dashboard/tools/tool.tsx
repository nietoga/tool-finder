import { Typography, Link, Box, Stack, Chip } from "@mui/material";

import { ShowMore } from "./showMore";

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
      <ShowMore>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          interdum nisi. Curabitur vitae pulvinar eros. Nulla facilisi.
          Phasellus pretium malesuada mi, sit amet porttitor erat dapibus in.
          Phasellus nibh mauris, rhoncus rutrum felis sed, ultricies tristique
          felis. Curabitur eu ligula imperdiet tellus dignissim finibus nec at
          purus. Quisque dictum et dolor ultrices rhoncus. Etiam tincidunt nisl
          dui, nec rhoncus quam iaculis sed. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. In hac
          habitasse platea dictumst. Morbi imperdiet luctus orci, feugiat luctus
          tellus vehicula id. In pharetra arcu eget felis mattis hendrerit.
        </Typography>
      </ShowMore>
    </Box>
  );
};
