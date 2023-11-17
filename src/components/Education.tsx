import { Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

const Education = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
          background: "black",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          gap: 3,
          paddingY: "60px",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            align="center"
            fontFamily="poppins"
            fontWeight="600"
            letterSpacing={1}
            color="primary"
            marginBottom="30px"
          >
            Education
          </Typography>
        </Container>
        <ExperienceCard
          name="Santa Clara University"
          img="src\assets\Santa_Clara_U_Seal.svg.png"
          dateFrom="2021"
          dateTo="2023"
          degreeName="MS Computer Science & Engineering"
        />
        <ExperienceCard
          name="University of Mumbai"
          img="src\assets\University_of_Mumbai_coat_of_arms.svg.png"
          dateFrom="2021"
          dateTo="2023"
          degreeName="BE Information Technology"
        />
      </Container>
    </>
  );
};

export default Education;
