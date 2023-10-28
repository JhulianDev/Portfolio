import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RefContext } from '../../../context/RefContext';
import { DownloadText, GitHubIcon, GitHubLink, HeaderContainer, Item, ItemLink, List, Navbar } from "./HeaderStyles";
import GITHUB_ICON from "../../../assets/svg/Github-icon.svg"
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        <GitHubLink to="https://github.com/JhulianDev" target="_blank">
          <DownloadText>GitHub</DownloadText>
          <GitHubIcon src={GITHUB_ICON} />
        </GitHubLink>

      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;