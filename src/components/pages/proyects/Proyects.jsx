import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { RefContext } from "../../../context/RefContext";
import { Light, MaxWidth, Section } from "../../general/styles/generalStyles";
import { Arrow, BoxArrows, BoxSlider, PlanetBlue, PlanetPurple, Slider, TitleSection } from "./ProyectsStyles";
import PLANET_PURPLE from "../../../assets/img/Planet-purple.png"
import PLANET_BLUE from "../../../assets/img/Planet-blue.png"
import ARROW_ICON from "../../../assets/svg/Arrow-icon.svg"
import useSliderHandler from "../../../hooks/useSliderHandler";
import CardProyect from "../../general/cards/cardProyect/CardProyect";

const Proyects = () => {
  const { proyectsRef } = useContext(RefContext)
  const { texts } = useContext(LanguageContext)
  const proyects = texts.proyects.cardsProyects
  const t = texts.proyects
  const { positionSlider, moveRight, moveLeft } = useSliderHandler();
  return (
    <Section ref={proyectsRef}>
      <Light $size="500px" $opacity=".8" $purple $left $top />
      <Light $size="550px" $blue $right $bottom />
      <Light $size="550px" $opacity=".5" $turquoise $left $bottom />
      <TitleSection>{t.titleSection}</TitleSection>
      <MaxWidth>
        <PlanetPurple src={PLANET_PURPLE} alt="Planet Purple" />

        <BoxSlider>
          <Slider $position={positionSlider}>
            {proyects.map((proyect) => (
              <CardProyect key={proyect.name}
                title={proyect.title}
                subtitle={proyect.subtitle}
                description={proyect.description}
                pageLink={proyect.pageLink}
                gitHubLink={proyect.gitHubLink}
                textButton={proyect.textButton}
                logo={proyect.logo}
                colorTop={proyect.colorTop}
                colorBottom={proyect.colorBottom}
              />
            ))}
          </Slider>
        </BoxSlider>

        <PlanetBlue src={PLANET_BLUE} alt="Planet Blue" />

      </MaxWidth>

      <BoxArrows>
        <Arrow src={ARROW_ICON} alt="Arrow Icon" $left onClick={moveLeft} />
        <Arrow src={ARROW_ICON} alt="Arrow Icon" onClick={moveRight} />
      </BoxArrows>
    </Section>
  );
};

export default Proyects;