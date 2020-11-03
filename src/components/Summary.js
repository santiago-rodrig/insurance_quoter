import React, { Fragment } from 'react';

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
    return null;
  }

  let brandName;

  switch (brand) {
    case 'american':
      brandName = 'Americano';
      break;
    case 'european':
      brandName = 'Europeo';
      break;
    case 'asian':
      brandName = 'Asiático';
      break;
    default:
      break;
  }

  let planName;

  switch (plan) {
    case 'basic':
      planName = 'Básico';
      break;
    case 'full':
      planName = 'Completo';
      break;
    default:
      break;
  }

  return (
    <>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {brandName}</li>
        <li>Plan: {planName}</li>
        <li>Año del automóvil: {year}</li>
      </ul>
    </>
  );
}

export default Summary;
