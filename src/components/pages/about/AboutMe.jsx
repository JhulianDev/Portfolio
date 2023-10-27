import { useContext } from "react";
import CardAboutMe from "../../general/cards/cardAboutMe/CardAboutMe";
import { Light, MaxWidth, Section } from "../../general/styles/generalStyles";
import ASTRONAUT_PORTRAIT from "../../../assets/img/AstronautPortrait.png";
import { BoxCards, CardPortrait, TitleSection } from "./AboutMeStyles";
import { RefContext } from "../../../context/RefContext";
import { LanguageContext } from "../../../context/LanguageContext";

const AboutMe = () => {
  const { aboutMeRef } = useContext(RefContext)
  const { texts } = useContext(LanguageContext)
  const t = texts.aboutMe
  return (
    <Section ref={aboutMeRef}>
      <Light $size="550px" $left $top $blue />
      <Light $size="550px" $right $bottom $blue />
      <TitleSection>{t.titleSection}</TitleSection>
      <MaxWidth>
        <BoxCards>
          <CardAboutMe description={t.descriptionA} />
          <CardPortrait src={ASTRONAUT_PORTRAIT} />
          <CardAboutMe description={t.descriptionB} />
        </BoxCards>
      </MaxWidth>
    </Section>
  );
};

export default AboutMe;