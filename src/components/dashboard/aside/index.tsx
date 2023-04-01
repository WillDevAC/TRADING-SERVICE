import React, { useEffect, useState } from "react";

import { Menu, MenuLink } from "./styles";

import { FiUsers } from "react-icons/fi";
import { BsChatQuoteFill } from 'react-icons/bs'
import { RiAdminLine } from 'react-icons/ri'
import { CgUserlane } from 'react-icons/cg'
import { MdDashboard } from 'react-icons/md'

import Router from 'next/router'
 
const aside: React.FC = () => {
  const [GetScreenSize, SetScreenSize] = useState(0);

  useEffect(() => {
    SetScreenSize(window.innerHeight);
  }, []);

  return (
    <>
      <Menu screensize={GetScreenSize}>

        <MenuLink title="Painel interativo" onClick={() => Router.push('/admin')}>
          <MdDashboard size={25} color="#ffff" />
        </MenuLink>

        <MenuLink title="Investidores" onClick={() => Router.push('/admin/investors')}>
          <FiUsers size={25} color="#ffff" />
        </MenuLink>

        <MenuLink title="Consultores" onClick={() => Router.push('/admin/consultants')}>
          <CgUserlane size={25} color="#ffff" />
        </MenuLink>

        <MenuLink title="Administradores" onClick={() => Router.push('/admin/administrators')}>
          <RiAdminLine size={25} color="#ffff" />
        </MenuLink>

        <MenuLink title="Chat" onClick={() => Router.push('/admin/chat')}>
          <BsChatQuoteFill size={25} color="#ffff" />
        </MenuLink>
        
      </Menu>
    </>
  );
};

export default aside;
