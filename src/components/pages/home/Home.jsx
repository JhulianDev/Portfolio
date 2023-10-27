import { Light, MaxWidth, Section } from '../../general/styles/generalStyles';
import { TextsContainer, Presentation, BoxPresentation, Role, Description, IllustrationsContainer, AstronautImg, MoonImg, LightMoon, StarsImg, LightTurquoise, Name, LinkButton } from './HomeStyles';
import { colors } from '../../../assets/colors/Colors';
import ASTRONAUT from '../../../assets/img/Astronaut.png'
import MOON from '../../../assets/img/Moon.png'
import STARS from '../../../assets/img/Stars.png'
import { RefContext } from '../../../context/RefContext';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

const Home = () => {
  const { homeRef } = useContext(RefContext)
  const { texts } = useContext(LanguageContext)
  const t = texts.home
  return (
    <Section ref={homeRef}>
      <Light $size="500px" $opacity=".8" $purple $left $bottom />
      <Light $size="550px" $blue $right $top />
      <MaxWidth>

        <TextsContainer>
          <BoxPresentation>
            <Presentation>{t.presentation}</Presentation>
            <Name $color={colors.lightPurple}>{t.name}</Name>
          </BoxPresentation>
          <Role>{t.role}</Role>
          <Description>{t.description}</Description>
          <LinkButton>{t.linkedin}</LinkButton>
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