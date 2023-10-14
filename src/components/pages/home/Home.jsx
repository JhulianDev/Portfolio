import { MaxWidth, Section } from '../../general/styles/generalStyles';
import { LightBlue, LightPurple, Greeting, TextsContainer, Presentation, BoxPresentation, Role, Description, IllustrationsContainer, AstronautImg, MoonImg, LightMoon, StarsImg, ContactButton, LightTurquoise } from './HomeStyles';
import { colors } from '../../../assets/colors/Colors';
import ASTRONAUT from '../../../assets/img/Astronaut.png'
import MOON from '../../../assets/img/Moon.png'
import STARS from '../../../assets/img/Stars.png'

const Home = () => {
  return (
    <Section>
      
      <LightPurple />
      <LightBlue />

      <MaxWidth>

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


      </MaxWidth>
    </Section>
  );
};

export default Home;