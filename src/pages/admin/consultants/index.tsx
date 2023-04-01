import React from 'react';

import LayoutDashboard from '../../../components/layout/dashboard'

import TableConsultants from '../../../components/dashboard/tables/table-consultants'

const consultants: React.FC = () => {
  return (
      <LayoutDashboard title="Consultores" urlBackButton='/admin' isBackButton={true}>
          <TableConsultants/>
      </LayoutDashboard>
  );
}

export default consultants;