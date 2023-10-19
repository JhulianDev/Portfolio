import { CardBox, CardLight, Description } from "./CardAboutMeStyles";

const CardAboutMe = ({ description }) => {
  return (
    <CardBox>
      <CardLight $right $top $blue />
      <Description>{description}</Description>
      <CardLight $left $bottom $purple $opacity=".6" />
    </CardBox>
  );
};

export default CardAboutMe;