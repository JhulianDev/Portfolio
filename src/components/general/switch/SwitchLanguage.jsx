import React, { useContext, useState } from 'react';
import { Checkbox, Icon, Label, MainContainer, Slider } from './SwitchLanguageStyles';
import FLAG_UNITED_STATES from "../../../assets/svg/Flag-United-States-icon.svg"
import FLAG_SPAIN from "../../../assets/svg/Flag-Spain-icon.svg"
import { LanguageContext } from '../../../context/LanguageContext';
import { texts_es } from '../../../translations/es';
import { texts_en } from '../../../translations/en';

const SwitchLanguage = ({ showMobile }) => {
  const { setLanguage, setTexts } = useContext(LanguageContext);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    if (!isToggled) {
      setLanguage("es");
      setTexts(texts_es);
    } else {
      setLanguage("en")
      setTexts(texts_en);
    }
  };

  return (
    <MainContainer $showMobile={showMobile} >

      <Icon src={FLAG_UNITED_STATES} alt='Flag United States Icon' />

      <Label>
        <Checkbox type="checkbox" checked={isToggled} onChange={handleToggle} />
        <Slider $isToggle={isToggled} />
      </Label>

      <Icon src={FLAG_SPAIN} alt='Flag United States Icon' />

    </MainContainer>
  );
};

export default SwitchLanguage;