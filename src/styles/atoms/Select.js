import styled from 'styled-components'
import Select from 'react-dropdown-select'

export default styled(Select).attrs({
  className: 'styled-dropdown-select'
})`
  border: 1px #ffffff60 solid !important;
  background-color: #00000060;
  box-shadow: 3px 3px 6px #00000035;
  border-radius: 4px !important;
  margin: 10px 0 !important;
  padding: 0 20px !important;
  font-size: 1em !important;
  color: #fff !important;

  @media (max-width: 900px) {
    font-size: 0.8em !important;
  }

  .react-dropdown-select-input {
    font-size: 1em !important;
    color: #fff;

    @media (max-width: 900px) {
      font-size: 0.8em !important;
    }
  }
  .react-dropdown-select-content {
    color: #fff;
    margin: 0;
    padding: 20px 0;
  }
  .react-dropdown-select-dropdown {
    background-color: #000000dd;
    border: none;
  }

  .react-dropdown-select-item {
    padding: 8px 12px;
    border: none;
  }
  .react-dropdown-select-item-selected {
    background-color: #0f3460 !important;
  }
  .react-dropdown-select-item:hover,
  .react-dropdown-select-item:focus {
    background-color: #0f3460aa;
  }
  .react-dropdown-select-option {
    background-color: 'transparent';
    color: #fff;
  }
`
