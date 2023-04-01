import styled from 'styled-components';

import { MdLogout } from 'react-icons/md'

export const ContainerHeaderDashboard = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
    
  background-color: #0B3B69;
  max-width: 100vw;
  min-height: 5rem;

  padding-right: 2rem;
  padding-left: 2rem;

  position: sticky;
  top: 0;

  img {
    height: 5.5rem;
  }
`;

export const SectionDashboardButtons = styled.div`
  
`;

export const LogoutIcon = styled(MdLogout) `
  padding-top: 0.3rem;
  font-size: 1.5rem;
`

