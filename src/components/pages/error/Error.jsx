import { Light } from "../../general/styles/generalStyles";
import { Astronaut, BoxIllustations, ButtonLink, Icon404, Info, Section404 } from "./ErrorStyles";
import ASTRONAUT_404 from "../../../assets/img/Astronaut404.png";
import ICON_404 from "../../../assets/img/404-icon.png";
import SpaceParticles from "../../general/particles/SpaceParticles";

const Error404 = () => {
  return (
    <>
      <SpaceParticles />
      <Section404>
        <Light $size="550px" $top $right $blue />
        <Light $size="550px" $bottom $left $blue />
        <BoxIllustations>
          <Astronaut src={ASTRONAUT_404} alt="Astronaut Illustration" />
          <Icon404 src={ICON_404} alt="404 Icon" />
          <Info>PAGE LOST IN SPACE</Info>
          <ButtonLink to="/">Go Home</ButtonLink>
          <Light $size="300px" $turquoise />
        </BoxIllustations>
      </Section404>
    </>
  );
};

export default Error404;