import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RefContext } from '../../../context/RefContext';
import { ArrowIcon, DownloadButton, DownloadText, HeaderContainer, Item, ItemLink, List, Navbar } from "./HeaderStyles";
import DOWNLOAD_ICON from "../../../assets/svg/Download-icon.svg"
import HamburgerButton from '../buttons/hamburguer/HamburgerButton';
import SwitchLanguage from '../switch/SwitchLanguage';

const Header = () => {
  const { refSections } = useContext(RefContext)
  const [sectionActive, setSectionActive] = useState("Home")
  const [openNav, setOpenNav] = useState(false);
  
  const showNav = () => setOpenNav(!openNav);

  const handleNav = (sectionRef, id) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setSectionActive(id);
    setOpenNav(false);
  };

  return (
    <>
      <SwitchLanguage showMobile={openNav} />
      <HamburgerButton $open={openNav} showNav={showNav} />
      <HeaderContainer $open={openNav}>

        <Navbar>
          <List>
            {refSections.map((section) => (
              <Item key={section.name}>
                <ItemLink $active={section.id === sectionActive} onClick={() => handleNav(section.ref, section.id)}>
                  {section.name}
                </ItemLink>
              </Item>
            ))}
          </List>
        </Navbar>

        <DownloadButton>
          <DownloadText>Curriculum</DownloadText>
          <ArrowIcon src={DOWNLOAD_ICON} />
        </DownloadButton>

      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;