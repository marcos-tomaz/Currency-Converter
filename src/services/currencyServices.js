import axios from 'axios'
import { CURRENCIES_API_URL } from '../constant/config'

export const latestExchange = async (sourceCurrency, destinyCurrency, value) => {
  return (
    await axios.get(`${CURRENCIES_API_URL}/latest.json`, {
      params: {
        prettyprint: false,
        show_alternative: false,
        show_inactive: false,
        app_id: '7457cccf3ded4da8b3aba50402f28dbe'
      }
    })
  ).data
}

export const currencies = async () => {
  return (
    await axios.get(`${CURRENCIES_API_URL}/currencies.json`, {
      params: {
        prettyprint: false,
        show_alternative: false,
        show_inactive: false,
        app_id: '7457cccf3ded4da8b3aba50402f28dbe'
      }
    })
  ).data
}
