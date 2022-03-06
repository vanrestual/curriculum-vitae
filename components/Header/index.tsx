import { FC, HTMLAttributes } from 'react';
import Container from './Container';
import WrapperTop from './WrapperTop';
import Contact from './Contact';
import Profile from './Profile';
import Description from './Description';
import Information from './Information';

const Header: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>
}

export default Object.assign(Header, {
  Container: Container,
  WrapperTop: WrapperTop,
  Profile: Profile,
  Contact: Contact,
  Description: Description,
  Information: Information
});
