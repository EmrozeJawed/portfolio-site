import React from 'react';
import NavLink from './NavLink';

interface NavLinkProps {
    href?: string;
    title: string;
  }
  
  const CustomNavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    return <a href={href}>{title}</a>;
  };
  
  interface Link {
    href?: string;
    path?: string;
    title: string;
  }
  
  interface MenuOverlayProps {
    links: Link[];
  }
  
  const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
      <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
          <li key={index} className='text-white'>
            {/* Wrap the NavLink component in curly braces */}
            <CustomNavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default MenuOverlay;
