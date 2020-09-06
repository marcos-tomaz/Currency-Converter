import styled from 'styled-components'
import CurrencyMaskInput from 'react-currency-input'

export const Container = styled.div`
  height: 100%;
  width: 100%;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 40%;
  grid-template-areas:
    'header header'
    'exchange history'
    'footer footer';
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 50px;
  gap: 20px;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 0;
  }
`

export const Waves = styled.svg`
  position: absolute;
  z-index: -1;
`

export const ExchangeBlock = styled.div`
  padding: 30px 20px;
  background-image: linear-gradient(
    to right bottom,
    #0f3460,
    #4c3c79,
    #883c83,
    #bf3a79,
    #e94560
  );
  border-radius: 15px;
  width: auto;
  min-width: 500px;

  @media (max-width: 900px) {
    min-width: unset;
    width: 100%;
  }
`

export const CurrencyInput = styled(CurrencyMaskInput)`
  border: none;
  font-size: 3em;
  width: 100%;
  padding: 30px;
  color: #fff;
  background-color: transparent;

  @media (max-width: 900px) {
    font-size: 1.9em;
  }
`

export const BlockWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  grid-area: exchange;
`

export const ExchangeHistory = styled.div`
  width: 100%;
  height: 90%;
  padding: 15px;
  background-color: #16213e;
  overflow: auto;
  border-radius: 15px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #00000090;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e94560aa;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #e94560;
  }
`

export const ValueInputWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ConvertButton = styled.button`
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover,
  &:focus {
    color: #16213e;
  }
`

export const InvertExchange = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'left button right'
    'empty button empty2';
`

export const InvertButton = styled.button`
  background-color: transparent;
  border: 4px solid #16213e;
  height: 100%;
  width: 100%;
  grid-area: button;
  border-radius: 50%;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  color: #16213e;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #bf3a79;
  }
`

export const RightLine = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 4px solid #16213e;
  grid-area: right;
`

export const LeftLine = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 4px solid #16213e;
  grid-area: left;
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const ExchangeHistoryHeader = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #16213e;
  overflow: auto;
  border-radius: 15px;
  color: #fff;

  h2 {
    text-align: center;
    font-weight: 500;
  }
`

export const AsideContainer = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  grid-area: history;

  @media (max-width: 900px) {
    grid-area: unset;
    position: absolute;
    left: 100%;
  }
`
