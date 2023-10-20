import CardAboutMe from "../../general/cards/cardAboutMe/CardAboutMe";
import { Light, MaxWidth, Section } from "../../general/styles/generalStyles";
import ASTRONAUT_PORTRAIT from "../../../assets/img/AstronautPortrait.png";
import { BoxCards, CardPortrait, TitleSection } from "./AboutMeStyles";

const AboutMe = () => {
  return (
    <Section>
      <Light $size="550px" $left $top $blue />
      <Light $size="550px" $right $bottom $blue />
      <TitleSection>About Me</TitleSection>
      <MaxWidth>
        <BoxCards>
          <CardAboutMe
            description="Hello! My name is Jhulian Mérida, a FullStack developer based in Argentina. I'm passionate about creating aesthetically pleasing and functional web interfaces that provide effective solutions. I'm constantly expanding my knowledge with new technologies and tools in order to enhance my technological stack and, in the near future, pass on my knowledge to new developers."
          />

          <CardPortrait src={ASTRONAUT_PORTRAIT} />

          <CardAboutMe
            description="Over the last 3 years, I've had the opportunity to work at a branding agency where my main role has been the comprehensive creation and management of brand identity for entrepreneurs. I'm responsible for designing logos, defining color palettes, selecting typefaces, and essentially bringing to life the visual identity that best represents each brand."
          />
        </BoxCards>
      </MaxWidth>
    </Section>
  );
};

export default AboutMe;