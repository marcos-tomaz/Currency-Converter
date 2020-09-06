import React from 'react'
import { FiDollarSign, FiX } from 'react-icons/fi'

import {
  Container,
  FlexContainer,
  ExchangeDataGrid,
  CloseButton
} from './styles'

function ExchangeCard({ exchange, removeExchange, selectExchange }) {
  return (
    <Container>
      <FlexContainer>
        <span>{new Date(exchange.createdAt).toUTCString()}</span>
        <CloseButton onClick={() => removeExchange(exchange)}>
          <FiX />
        </CloseButton>
      </FlexContainer>
      <ExchangeDataGrid onClick={() => selectExchange(exchange)}>
        <div>
          <p style={{ color: '#e94560' }}>{exchange.sourceCurrency.value}</p>
          <p style={{ fontSize: '1.2em' }}>
            {exchange.sourceValue.toFixed(2)}
          </p>
        </div>
        <FlexContainer style={{ alignItems: 'center' }}>
          <FiDollarSign color="#e94560" size={20} />
        </FlexContainer>
        <div>
          <p style={{ textAlign: 'right', color: '#e94560' }}>
            {exchange.destinyCurrency.value}
          </p>
          <p style={{ textAlign: 'right', fontSize: '1.2em' }}>
            {exchange.resultValue.toFixed(2)}
          </p>
        </div>
      </ExchangeDataGrid>
    </Container>
  )
}

export default ExchangeCard
