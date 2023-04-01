import React from 'react';

import DashboardLayout from '../../../components/layout/dashboard'

import Table_withdrawal from '../../../components/dashboard/tables/table-withdrawal'

const withdrawal_requests: React.FC = () => {
  return (
      <DashboardLayout title="Solicitações de saque" isBackButton={true} urlBackButton="/admin">
        <Table_withdrawal/>
      </DashboardLayout>
  );
}

export default withdrawal_requests;