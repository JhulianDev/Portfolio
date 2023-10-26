import { Light, MaxWidth, Section } from "../../general/styles/generalStyles";
import { AstronautImg, BoxButtons, ContainerIcons, BoxIllustrations, EnergyBalls, Icon, LightTurquoiseCentral, BoxIcon, TitleIcon, LightBoxIcons, TitleSection } from "./SkillsStyles";
import ASTRONAUT_LOTUS from "../../../assets/img/AstronautLotus.png";
import INTERNAL_ICONS from "../../../assets/img/Internal-icons.png";
import EXTERNAL_ICONS from "../../../assets/img/External-icons.png";
import LuminousButton from "../../general/buttons/luminousButton/LuminousButton";
import useSkillsHandler from "../../../hooks/useSkillsHandler";
import { useContext } from "react";
import { RefContext } from "../../../context/RefContext";

const Skills = () => {
  const { skillsRef } = useContext(RefContext)
  const { skills, stacks, stackActive, handleSkills } = useSkillsHandler();

  return (
    <Section ref={skillsRef}>
      <Light $size="550px" $turquoise $left $top $opacity=".5" />
      <Light $size="550px" $blue $right $top />
      <Light $size="550px" $blue $left $bottom />
      <TitleSection>My Skills</TitleSection>
      <MaxWidth>

        <ContainerIcons>
          <LightBoxIcons $position="top" $color="turquoise" />

          {skills.map((skill, index) => (
            <BoxIcon key={`${index}_${skill.title}`} $animationDelay={`${index * 0.4}s`}>
              <Icon src={skill.icon} alt={`${skill.title} icon`} />
              <TitleIcon>{skill.title}</TitleIcon>
            </BoxIcon>
          ))}

          <LightBoxIcons $position="bottom" $color="white" />
        </ContainerIcons>

        <BoxIllustrations>
          <AstronautImg src={ASTRONAUT_LOTUS} alt="Astronaut Lotus Position" />
          <EnergyBalls src={INTERNAL_ICONS} alt="Energy Balls" $animation="spinLeft" />
          <EnergyBalls src={EXTERNAL_ICONS} alt="Energy Balls" $animation="spinRight" />
          <LightTurquoiseCentral />
        </BoxIllustrations>

        <BoxButtons>
          {stacks.map((stack, index) => (
            <LuminousButton key={index} text={stack} clickFunction={() => { handleSkills(stack) }} active={stack === stackActive} />
          ))}
        </BoxButtons>

      </MaxWidth>
    </Section>
  );
};

export default Skills;