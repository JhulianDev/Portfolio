import { MaxWidth, Section, TitleSection } from "../../general/styles/generalStyles";
import { Arrow, BoxArrows, BoxSlider, LightBlue, LightPurple, PlanetBlue, PlanetPurple, Slider } from "./ProyectsStyles";
import { colors } from "../../../assets/colors/Colors";
import AISMABA_LOGO from "../../../assets/img/Aismaba-logo.png"
import PORTFOLIO_LOGO from "../../../assets/img/Portfolio-logo.png"
import NOTESLAB_LOGO from "../../../assets/img/Noteslab-logo1.png"
import PLANET_PURPLE from "../../../assets/img/Planet-purple.png"
import PLANET_BLUE from "../../../assets/img/Planet-blue.png"
import ARROW_ICON from "../../../assets/svg/Arrow-icon.svg"
import CardProyect from "../../general/card/CardProyect";
import useSliderHandler from "../../../hooks/useSliderHandler";

const Proyects = () => {
  const { positionSlider, moveRight, moveLeft } = useSliderHandler();
  return (
    <Section>
      <TitleSection>My Proyects</TitleSection>
      <LightPurple />
      <LightBlue />
      <MaxWidth>
        <PlanetPurple src={PLANET_PURPLE} alt="Planet Purple" />

        <BoxSlider>
          <Slider $position={positionSlider}>
            <CardProyect
              title="Branding Agency"
              subtitle="Online Store"
              description="Web application built with React and Node js. Integration with the Paypal API and MercadoPago API"
              logo={AISMABA_LOGO}
              colorTop={colors.lightPurple}
              pageLink="https://www.aismaba.com/"
              gitHubLink="https://github.com/JhulianDev/Aismaba"
            />

            <CardProyect
              title="Professional Portfolio"
              subtitle="Website Personal"
              description="Web application built with React and Node js. Integration with the Paypal API and MercadoPago API"
              logo={PORTFOLIO_LOGO}
              colorTop={colors.lightBlue}
              colorBottom={colors.lightPurple}
            />

            <CardProyect
              title="Notes Management"
              subtitle="CRUD System"
              description="System built with React, Node js and MySQL. Authentication system managed with JSON Web Token."
              logo={NOTESLAB_LOGO}
              colorTop="white"
              colorBottom={colors.lightBlue}
              pageLink="https://notes-lab-46y6.vercel.app/"
              gitHubLink="https://github.com/JhulianDev/NotesLab"
            />
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