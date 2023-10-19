import { BoxIcon, BoxInfoProyect, CardBox, Description, GitHubIcon, InfoIcon, LightBottom, LightTop, LinkProyect, Logo, Subtitle, Title } from "./CardProyectStyles";
import GITHUB_ICON from "../../../../assets/svg/Github-icon.svg"

const CardProyect = ({ title, subtitle, description, colorTop, colorBottom, logo, pageLink, gitHubLink }) => {
  return (
    <CardBox>
      <LightBottom $color={colorBottom} />

      <Logo src={logo} alt="Logo Proyect" />

      <BoxInfoProyect>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <LinkProyect href={pageLink} target="_blank" rel="noopener noreferrer">Go to proyect</LinkProyect>
      </BoxInfoProyect>

      <BoxIcon href={gitHubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon src={GITHUB_ICON} alt="Github Icon" />
      </BoxIcon>

      <InfoIcon>Details</InfoIcon>

      <LightTop $color={colorTop} />
    </CardBox>
  );
};

export default CardProyect;