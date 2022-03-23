import { FC, HTMLAttributes } from 'react';
import Identity from './Identity';
import Description from './Description';
import Information from './Information';

const Header: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>
}

export default Object.assign(Header, {
  Identity: Identity,
  Description: Description,
  Information: Information
});
