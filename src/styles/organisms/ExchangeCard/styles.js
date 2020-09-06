import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #0f3460;
  color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid #0f3460;
  transition: all ease-in-out 0.2s;

  &:hover {
    border: 2px solid #e9456050;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ExchangeDataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  margin-top: 10px;
`

export const CloseButton = styled.button`
  color: #e94560;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 2px;

  svg {
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    svg {
      transform: scale(1.5);
    }
  }
`
