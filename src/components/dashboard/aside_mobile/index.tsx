import React, { useState } from 'react';

import { 
    TitleAsideMobile,
    AsideMobileActions
} from './styles';

import { FiUsers } from "react-icons/fi";
import { BsChatQuoteFill } from 'react-icons/bs'
import { RiAdminLine } from 'react-icons/ri'
import { CgUserlane } from 'react-icons/cg'
import { MdDashboard } from 'react-icons/md'

import Router from 'next/router'

const aside_mobile: React.FC = () => {
  return (
  <>
    <TitleAsideMobile>Extras</TitleAsideMobile>

    <AsideMobileActions>

      <button onClick={() => Router.push('/admin/investors')}>
        <div>
          <FiUsers size={25} color="black" />
        </div>
        Investidores
      </button>

      <button onClick={() => Router.push('/admin/consultants')} >
        <div>
          <CgUserlane size={25} color="black"/>
        </div>
        Consultores
      </button>

      <button onClick={() => Router.push('/admin/administrators')}>
        <div>
          <RiAdminLine size={25} color="black"/>
        </div>
        Administradores
      </button>

      <button onClick={() => Router.push('/admin/chat')}>
        <div>
          <BsChatQuoteFill size={25} color="black"/>
        </div>
        Chat online
      </button>
      
    </AsideMobileActions>
  </>
  );
}

export default aside_mobile;