import React from 'react';

import DashboardLayout from '../../../components/layout/dashboard'

import TableRegisters from '../../../components/dashboard/tables/table-registersAll'

const withdrawal_requests: React.FC = () => {
  return (
      <DashboardLayout title="Solicitações de cadastro" isBackButton={true} urlBackButton="/admin">
        <TableRegisters/>
      </DashboardLayout>
  );
}

export default withdrawal_requests;