import React from 'react';

import LayoutDashboard from '../../../components/layout/dashboard'
import TableInvitations from '../../../components/dashboard/tables/table-invitations'

const invitations: React.FC = () => {
  return (
      <LayoutDashboard title="Meus convidados" urlBackButton='/admin' isBackButton={true}>
        <TableInvitations/>
      </LayoutDashboard>
  );
}

export default invitations;