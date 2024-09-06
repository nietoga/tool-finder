import {
  Typography,
  Link,
  Box,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import SourceIcon from "@mui/icons-material/Source";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { ShowMore } from "./showMore";

export type ToolProps = {
  name: string;
  description: string;
  main_url: string;
  tags: string[];
  source_url?: string;
  license?: string;
  docs_url?: string;
  teaching_materials?: string;
  differentiating_factors?: string;
  pros: string[];
  cons: string[];
  reference_papers: string[];
};

export const Tool = ({
  name,
  description,
  main_url,
  tags = [],
  license,
  source_url,
  docs_url,
  teaching_materials,
  differentiating_factors,
  pros,
  cons,
  reference_papers,
}: ToolProps) => {
  const additionalInformation = [];

  if (docs_url) {
    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              {"Documentation is available "}
              <Link href={docs_url} target="_blank">
                here
              </Link>
            </>
          }
        />
      </ListItem>
    );
  }

  if (source_url) {
    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              {"Source code is available "}
              <Link href={source_url} target="_blank">
                here
              </Link>
              {license ? `, under "${license}" license` : ""}
            </>
          }
        ></ListItemText>
      </ListItem>
    );
  }

  if (teaching_materials) {
    if (teaching_materials === "Yes") {
      additionalInformation.push(
        <ListItem disablePadding disableGutters>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              "Teaching materials available (exercises, examples, tutorials, etc.)"
            }
          ></ListItemText>
        </ListItem>
      );
    } else {
      additionalInformation.push(
        <ListItem disablePadding disableGutters>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                {
                  "Teaching materials available (exercises, examples, tutorials, etc.)"
                }
                <Link href={teaching_materials} target="_blank">
                  here
                </Link>
              </>
            }
          ></ListItemText>
        </ListItem>
      );
    }
  }

  if (differentiating_factors) {
    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary={differentiating_factors}></ListItemText>
      </ListItem>
    );
  }

  for (const pro of pros) {
    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <ThumbUpIcon />
        </ListItemIcon>
        <ListItemText primary={pro}></ListItemText>
      </ListItem>
    );    
  }

  for (const con of cons) {
    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <ThumbDownIcon />
        </ListItemIcon>
        <ListItemText primary={con}></ListItemText>
      </ListItem>
    );
  }

  if (reference_papers) {
    const quotedReferences = reference_papers.map(ref => '"' + ref + '"');

    additionalInformation.push(
      <ListItem disablePadding disableGutters>
        <ListItemIcon>
          <FormatQuoteIcon />
        </ListItemIcon>
        <ListItemText primary={"This tool appears on the paper(s) " + quotedReferences.join(",")}></ListItemText>
      </ListItem>
    );
  }

  return (
    <Box border={1} borderRadius={2} borderColor="gray" padding={2}>
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
      {additionalInformation.length > 0 ? (
        <ShowMore>
          <List>{...additionalInformation}</List>
        </ShowMore>
      ) : null}
    </Box>
  );
};
