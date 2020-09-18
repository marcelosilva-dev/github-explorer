import React from 'react';

import PieChart from '../../components/Charts/Pie';
import ColumnChart from '../../components/Charts/ColumnModel';
import { Container, ChartContainer, Title } from './styles';

const Charts: React.FC = () => {
  return (
    <Container>
      <Title>Charts</Title>
      <ChartContainer>
        <PieChart />
      </ChartContainer>
      <ChartContainer>
        <ColumnChart />
      </ChartContainer>
      <ChartContainer>
        <PieChart />
      </ChartContainer>
      <ChartContainer>
        <ColumnChart />
      </ChartContainer>
    </Container>
  );
};

export default Charts;
