import { Outlet } from 'react-router-dom';
import { HeaderContainer } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;