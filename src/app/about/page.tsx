import { Typography, Link, Box, Grid } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  const myEmail = "anietog1@eafit.edu.co";

  return (
    <main>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box position="relative" maxWidth={900}>
          <Typography textAlign="center">
            {
                "Tool-Finder is a web application specifically designed to support educators" +
                " in selecting tools that best align with the objectives and content of their" +
                " programming courses. Using an intuitive filtering system, the application leverages " +
                "contextual elements identified through prior research to provide precise and personalized " +
                "recommendations. In this way, Tool-Finder simplifies the search process, helping educators" +
                " find the most suitable options to meet the pedagogical and technical requirements" +
                " of their courses."
            }
          </Typography>
        </Box>
        <Box position="relative" width={200} height={200}>
          <Image
            src="/toolbox.webp"
            alt="Image of a simple red toolbox."
            layout="fill"
            objectFit="contain"
          />
        </Box>

        <Typography textAlign="center">
          {"Have a suggestion? Drop us an email at: "}
          <Link href={`mailto:${myEmail}`}>{myEmail}</Link>
        </Typography>

        <Typography textAlign="center">
          {"Interested in exploring our database? Find it "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1l5E_TxjhjFtqWKD29slE9YzBOd7Y7LO3n2jxNfINlB8/edit?usp=sharing"
            target="_blank"
          >
            here
          </Link>
        </Typography>
      </Grid>
    </main>
  );
};

export default AboutPage;
