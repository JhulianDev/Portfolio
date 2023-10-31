import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RefContext } from '../../../context/RefContext';
import { BoxRedirects, ButtonRedirect, DownloadText, GitHubIcon, HeaderContainer, Item, ItemLink, List, Navbar } from "./HeaderStyles";
import GITHUB_ICON from "../../../assets/svg/Github-icon.svg"
import LINKEDIN_ICON from "../../../assets/svg/LinkedIn-icon.svg"
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
                <ItemLink $open={openNav} $active={section.id === sectionActive} onClick={() => handleNav(section.ref, section.id)}>
                  {section.name}
                </ItemLink>
              </Item>
            ))}
          </List>
        </Navbar>

        <BoxRedirects>

          <ButtonRedirect $open={openNav} to="https://github.com/JhulianDev" target="_blank">
            <DownloadText>GitHub</DownloadText>
            <GitHubIcon src={GITHUB_ICON} alt='GitHub Icon' />
          </ButtonRedirect>

          <ButtonRedirect $open={openNav} to="https://linkedin.com/in/jhuliandev/" target="_blank" $mobile>
            <DownloadText>LinkedIn</DownloadText>
            <GitHubIcon src={LINKEDIN_ICON} alt='LinkedIn Icon' />
          </ButtonRedirect>

        </BoxRedirects>



      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;