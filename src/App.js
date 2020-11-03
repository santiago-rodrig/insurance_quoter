import React, { useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);
  const { quote, data } = summary;

  const dataIsPresent = data.brand.trim() !== '' &&
    data.year.trim() !== '' &&
    data.plan.trim() !== '';

  const quoteIsValid = quote > 0;

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />
        { (!loading && dataIsPresent) ? <Summary data={summary.data} /> : null }
        { loading ? <Spinner /> : null }
        { (!loading && quoteIsValid) ? <Result quote={quote} /> : null }
      </FormContainer>
    </Container>
  );
}

export default App;
