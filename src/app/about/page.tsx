import { Typography } from "@mui/material";

const AboutPage = () => {
  const myEmail = "anietog1@eafit.edu.co";

  return (
    <main>
      <Typography>
        If you have a suggestion, please get in touch with us at email:
        <a href={`mailto:${myEmail}`}>{myEmail}</a>
      </Typography>

      <Typography>
        In case you want to check our database, here it is:
        <a href="https://docs.google.com/spreadsheets/d/1l5E_TxjhjFtqWKD29slE9YzBOd7Y7LO3n2jxNfINlB8/edit?usp=sharing">
          Database
        </a>
      </Typography>
    </main>
  );
};

export default AboutPage;
