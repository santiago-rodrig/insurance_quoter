import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getYearDifference, calculateBrand, calculatePlan } from '../helpers';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoading }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState(false);

  const  { brand, year, plan } = data;

  const getData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const quoteInsurance = e => {
    e.preventDefault();

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);

      return;
    }

    setError(false);

    const difference = getYearDifference(year);
    const basePrice = 2000;
    let result = basePrice;

    result -= (basePrice * 0.03) * difference;
    result += calculateBrand(brand, result);
    result += calculatePlan(plan, result);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSummary({
        quote: result,
        data
      });
    }, 2000);

  }

  return (
    <form onSubmit={quoteInsurance}>
      { error ? <Error>Todos los campos son obligatorios</Error> : null }
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="american">Americano</option>
          <option value="european">Europeo</option>
          <option value="asian">Asiático</option>
        </Select>
      </Field>
      <Field>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" value="basic" checked={plan === 'basic'} onChange={getData} /> Básico
        <InputRadio type="radio" name="plan" value="full" checked={plan === 'full'} onChange={getData} /> Completo
      </Field>
      <Button>Cotizar</Button>
    </form>
  );
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

export default Form;
