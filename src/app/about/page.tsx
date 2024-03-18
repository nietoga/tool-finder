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
        <Box position="relative" width={200} height={200}>
          <Image
            src="/toolbox.webp"
            alt="Image of a simple red toolbox."
            layout="fill"
            objectFit="contain"
          />
        </Box>

        <Typography>
          {"Have a suggestion? Drop us an email at: "}
          <Link href={`mailto:${myEmail}`}>{myEmail}</Link>
        </Typography>

        <Typography>
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
