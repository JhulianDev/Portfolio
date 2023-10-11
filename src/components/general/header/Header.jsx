import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ArrowIcon, DownloadButton, DownloadText, HeaderContainer, Item, ItemLink, List, Navbar } from "./HeaderStyles";
import Arrow from "../../../assets/svg/arrow.svg"

const Header = () => {
  const [itemActive, setItemActive] = useState("Home")
  // const items = ['Home', 'Proyects', 'Skills', 'About me', 'Contact'];
  const items = ['Home', 'Proyects', 'Skills'];

  return (
    <>
      <HeaderContainer>
        <Navbar>
          <List>
            {items.map((item) => (
              <Item key={item}>
                <ItemLink $active={item === itemActive} onClick={() => setItemActive(item)}>
                  {item}
                </ItemLink>
              </Item>
            ))}
          </List>
        </Navbar>
        
        <DownloadButton>
          <DownloadText>Curriculum</DownloadText>
          <ArrowIcon src={Arrow} />
        </DownloadButton>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;