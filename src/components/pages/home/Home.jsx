import { colors } from '../../../assets/colors/Colors';
import { LightBlue, LightPurple, Section, Greeting, TextsContainer, Presentation, BoxPresentation, Role, Description, IllustrationsContainer, AstronautImg, MoonImg, MaxWidth, LightMoon, StarsImg, ContactButton, LightTurquoise } from './HomeStyles';
import ASTRONAUT from '../../../assets/img/Astronaut.png'
import MOON from '../../../assets/img/Moon.png'
import STARS from '../../../assets/img/Stars.png'

const Home = () => {
  return (
    <Section>
      <MaxWidth>
        <LightBlue />

        <TextsContainer>
          <Greeting>Hi!</Greeting>
          <BoxPresentation>
            <Presentation>I'm</Presentation>
            <Presentation $color={colors.lightPurple}>Jhulian</Presentation>
          </BoxPresentation>
          <Role>Full Stack Developer</Role>
          <Description>
            I am a passionate lover of programming and an enthusiastic graphic designer.
          </Description>
          <ContactButton>Let's Talk</ContactButton>
        </TextsContainer>

        <IllustrationsContainer>
          <MoonImg src={MOON} alt='Moon' />
          <LightMoon />
          <StarsImg src={STARS} alt='Stars' />
          <AstronautImg src={ASTRONAUT} alt='Astronaut' />
          <LightTurquoise />
        </IllustrationsContainer>

        <LightPurple />
      </MaxWidth>
    </Section>
  );
};

export default Home;