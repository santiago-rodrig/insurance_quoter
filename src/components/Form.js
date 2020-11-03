import React from 'react';

const Form = () => {
  return (
    <form>
      <div>
        <label>Marca</label>
        <select>
          <option value="">-- Seleccione --</option>
          <option value="american">Americano</option>
          <option value="european">Europeo</option>
          <option value="asian">Asiático</option>
        </select>
      </div>
      <div>
        <label>Año</label>
        <select>
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
        </select>
      </div>
      <div>
        <label>Plan</label>
        <input type="radio" name="plan" value="basic" />
        <input type="radio" name="plan" value="full" />
      </div>
      <button>Cotizar</button>
    </form>
  );
}

export default Form;
