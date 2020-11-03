import React, { useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
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
  const [summary, setSummary] = useState({});

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form setSummary={setSummary} />
        { summary.data ? <Summary data={summary.data} /> : null }
        <Result quote={summary.quote} />
      </FormContainer>
    </Container>
  );
}

export default App;
