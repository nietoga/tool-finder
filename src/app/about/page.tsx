import { Typography, Link } from "@mui/material";

const AboutPage = () => {
  const myEmail = "anietog1@eafit.edu.co";

  return (
    <main>
      <Typography>
        If you have a suggestion, please get in touch with us at email:
        <Link href={`mailto:${myEmail}`}>{myEmail}</Link>
      </Typography>

      <Typography>
        In case you want to check our database, here it is:
        <Link
          href="https://docs.google.com/spreadsheets/d/1l5E_TxjhjFtqWKD29slE9YzBOd7Y7LO3n2jxNfINlB8/edit?usp=sharing"
          target="_blank"
        >
          Database
        </Link>
      </Typography>
    </main>
  );
};

export default AboutPage;
