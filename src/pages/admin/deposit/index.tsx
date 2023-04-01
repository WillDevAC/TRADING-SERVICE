import React from 'react';

import DashboardLayout from '../../../components/layout/dashboard'

import TableDeposits from '../../../components/dashboard/tables/table-deposits'

const deposit_requests: React.FC = () => {
  return (
      <DashboardLayout title="Solicitações de déposito" isBackButton={true} urlBackButton="/admin">
          <TableDeposits/>
      </DashboardLayout>
  );
}

export default deposit_requests;