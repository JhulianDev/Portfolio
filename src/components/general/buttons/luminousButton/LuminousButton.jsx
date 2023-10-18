import { BoxButton, LightButton, TextButton } from "./LuminousButtonStyles";

const LuminousButton = ({ text, clickFunction, active }) => {
  return (
    <BoxButton onClick={clickFunction} $active={active}>
      <LightButton $position="top" $color="turquoise" />
        <TextButton>{text}</TextButton>
      <LightButton $position="bottom" $color="purple" />
    </BoxButton>
  );
};

export default LuminousButton;