import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ArrowIcon, DownloadButton, DownloadText, HeaderContainer, Item, ItemLink, List, Navbar } from "./HeaderStyles";
import DOWNLOAD_ICON from "../../../assets/svg/Download-icon.svg"
import HamburgerButton from '../buttons/hamburguer/HamburgerButton';

const Header = ({ homeRef, proyectsRef, skillsRef, aboutMeRef, contactRef }) => {
  const [sectionActive, setSectionActive] = useState("Home")
  const [openNav, setOpenNav] = useState(false);
  const itemsMenu = [
    { name: 'Home', ref: homeRef },
    { name: 'Proyects', ref: proyectsRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'About me', ref: aboutMeRef },
    { name: 'Contact', ref: contactRef },
  ];
  
  const showNav = () => setOpenNav(!openNav);

  const handleNav = (sectionRef, item) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setSectionActive(item);
    setOpenNav(false);
  };

  return (
    <>
      <HamburgerButton $open={openNav} showNav={showNav} />
      <HeaderContainer $open={openNav}>

        <Navbar>
          <List>
            {itemsMenu.map((item) => (
              <Item key={item.name}>
                <ItemLink $active={item.name === sectionActive} onClick={() => handleNav(item.ref, item.name)}>
                  {item.name}
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