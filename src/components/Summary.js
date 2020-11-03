import React from 'react';
import styled from '@emotion/styled';
import { getBrandName, getPlanName } from '../helpers';

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
    return null;
  }

  return (
    <SummaryContainer>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {getBrandName(brand)}</li>
        <li>Plan: {getPlanName(plan)}</li>
        <li>Año del automóvil: {year}</li>
      </ul>
    </SummaryContainer>
  );
}

export default Summary;
