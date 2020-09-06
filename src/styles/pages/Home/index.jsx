import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import swal from 'sweetalert'
import { FiArrowRight, FiRepeat } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { BsInbox } from 'react-icons/bs'

import useLocalStorage from '../../../hooks/useLocalStorage'
import {
  latestExchange,
  currencies as currenciesService
} from '../../../services/currencyServices'
import { Creators as ExchangesActions } from '../../../store/ducks/exchanges.ducks'
import { Creators as CurrenciesActions } from '../../../store/ducks/currencies.ducks'

import Loading from '../../../assets/loading.svg'

import Select from '../../atoms/Select'
import ExchangeCard from '../../organisms/ExchangeCard'
import {
  Container,
  ContentWrapper,
  Waves,
  ExchangeBlock,
  CurrencyInput,
  BlockWrapper,
  ExchangeHistory,
  ValueInputWrapper,
  ConvertButton,
  InvertExchange,
  RightLine,
  InvertButton,
  LeftLine,
  LoadingWrapper,
  ExchangeHistoryHeader,
  AsideContainer,
  Footer,
  SocialButton
} from './styles'

function Home({
  exchanges,
  loadExchanges,
  currencies,
  loadCurrencies,
  successCurrencies,
  errorCurrencies,
  addExchange,
  removeExchange
}) {
  const [localExchanges, setLocalExchanges] = useLocalStorage('exchanges', [])
  const [sourceCurrency, setSourceCurrency] = useState([])
  const [destinyCurrency, setDestinyCurrency] = useState([])
  const [sourceValue, setSourceValue] = useState(0)
  const [resultValue, setResultValue] = useState(0)

  const convert = (exchange) => {
    const value = Number(
      exchange.sourceValue
        .toString()
        .replace(/\./g, '')
        .replace(/,/g, '.')
        .replace(/[^0-9.-]+/g, '')
    )

    const result =
      (value / exchange.sourceCurrency.rate) * exchange.destinyCurrency.rate

    setResultValue(result)

    addExchange({
      ...exchange,
      sourceValue: value,
      resultValue: result
    })
  }

  const handleRemoveExchange = (exchange) => {
    removeExchange(exchange.id)
  }

  const handleInvertExchange = () => {
    setDestinyCurrency(sourceCurrency)
    setSourceCurrency(destinyCurrency)
    setSourceValue(resultValue.toFixed(2).toString().replace(/\./g, ','))
  }

  const handleSelectHistory = (exchange) => {
    setSourceCurrency([exchange.sourceCurrency])
    setDestinyCurrency([exchange.destinyCurrency])
    setSourceValue(
      exchange.sourceValue.toFixed(2).toString().replace(/\./g, ',')
    )
  }

  const onSubmit = (e) => {
    console.log('submit')
    e.preventDefault()

    const value = Number(
      sourceValue
        .toString()
        .replace(/\./g, '')
        .replace(/,/g, '.')
        .replace(/[^0-9.-]+/g, '')
    )

    if (
      !sourceCurrency ||
      !sourceCurrency[0] ||
      !destinyCurrency ||
      !destinyCurrency[0]
    )
      return swal(
        'Invalid input!',
        'You must select a source and a destiny currency!',
        'error'
      )

    if (value <= 0)
      return swal(
        'Invalid input!',
        'You must provide a non zero positive number!',
        'error'
      )

    convert({
      sourceCurrency: sourceCurrency[0],
      destinyCurrency: destinyCurrency[0],
      sourceValue
    })
  }

  useEffect(() => {
    ;(async () => {
      try {
        loadCurrencies()

        const currenciesResponse = await currenciesService()
        const exchangeResponse = await latestExchange()

        successCurrencies(
          Object.keys(currenciesResponse).map((currency) => ({
            value: currency,
            label: `${currency} - ${currenciesResponse[currency]}`,
            rate: exchangeResponse.rates[currency]
          }))
        )
      } catch (error) {
        errorCurrencies(error.message)
      }
    })()
  }, [errorCurrencies, loadCurrencies, successCurrencies])

  useEffect(() => {
    setResultValue(0)
  }, [destinyCurrency, sourceCurrency, sourceValue])

  useEffect(() => {
    const defaultSource = currencies.currencies.find(
      (currency) => currency.value === 'EUR'
    )
    const defaultDestiny = currencies.currencies.find(
      (currency) => currency.value === 'USD'
    )

    if (defaultSource) setSourceCurrency([defaultSource])
    if (defaultDestiny) setDestinyCurrency([defaultDestiny])
  }, [currencies.currencies])

  useEffect(() => {
    if (!exchanges.exchanges && localExchanges.length > 0) {
      loadExchanges(localExchanges)
    } else if (exchanges.exchanges) {
      setLocalExchanges(exchanges.exchanges)
    }
  }, [exchanges, loadExchanges, localExchanges, setLocalExchanges])

  return (
    <Container>
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#883c83"
          fillOpacity="0.2"
          d="M0,224L30,202.7C60,181,120,139,180,128C240,117,300,139,360,144C420,149,480,139,540,122.7C600,107,660,85,720,101.3C780,117,840,171,900,213.3C960,256,1020,288,1080,288C1140,288,1200,256,1260,229.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </Waves>
      <ContentWrapper>
        <BlockWrapper onSubmit={onSubmit}>
          {currencies.loading ? (
            <LoadingWrapper>
              <img src={Loading} alt="loading icon" />
            </LoadingWrapper>
          ) : (
            <>
              <ExchangeBlock>
                <ValueInputWrapper>
                  <CurrencyInput
                    value={sourceValue}
                    prefix={`${
                      sourceCurrency && sourceCurrency[0]
                        ? sourceCurrency[0].value
                        : '$'
                    } `}
                    decimalSeparator=","
                    thousandSeparator="."
                    onChangeEvent={(e) => setSourceValue(e.target.value)}
                  />
                  <ConvertButton type="submit" tabIndex="-1">
                    <FiArrowRight />
                  </ConvertButton>
                </ValueInputWrapper>
                <Select
                  values={sourceCurrency}
                  onChange={(value) => setSourceCurrency(value)}
                  options={currencies.currencies}
                />
              </ExchangeBlock>
              <InvertExchange>
                <RightLine />
                <InvertButton
                  type="button"
                  onClick={() => handleInvertExchange()}
                >
                  <FiRepeat />
                </InvertButton>
                <LeftLine />
              </InvertExchange>
              <ExchangeBlock>
                <CurrencyInput
                  prefix={`${
                    destinyCurrency && destinyCurrency[0]
                      ? destinyCurrency[0].value
                      : '$'
                  } `}
                  value={resultValue}
                  disabled
                />
                <Select
                  dropdownPosition="auto"
                  decimalSeparator=","
                  thousandSeparator="."
                  values={destinyCurrency}
                  onChange={(value) => setDestinyCurrency(value)}
                  options={currencies.currencies}
                />
              </ExchangeBlock>
            </>
          )}
        </BlockWrapper>
        <AsideContainer>
          <ExchangeHistoryHeader>
            <h2>Exchange History</h2>
          </ExchangeHistoryHeader>
          <ExchangeHistory>
            {!exchanges.exchanges || exchanges.exchanges.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  flexDirection: 'column'
                }}
              >
                <>
                  <BsInbox size={70} color="#e94560" />
                  <p style={{ fontSize: '1.5em', color: '#e94560' }}>
                    No History
                  </p>
                </>
              </div>
            ) : (
              exchanges.exchanges.map((exchange) => (
                <ExchangeCard
                  key={exchange.id}
                  selectExchange={handleSelectHistory}
                  removeExchange={handleRemoveExchange}
                  exchange={exchange}
                />
              ))
            )}
          </ExchangeHistory>
        </AsideContainer>
      </ContentWrapper>
      <Footer>
        <SocialButton
          tabIndex="-1"
          href="https://github.com/marcos-tomaz/Currency-Converter"
        >
          <AiFillGithub />
        </SocialButton>
      </Footer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  exchanges: state.exchanges,
  currencies: state.currencies
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(CurrenciesActions, dispatch),
  ...bindActionCreators(ExchangesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
