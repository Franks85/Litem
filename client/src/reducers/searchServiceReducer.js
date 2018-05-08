import { makeAsyncReducer } from 'redux-toolbelt'
import { serviceSubmit } from '../actions'

const options = {
    defaultData: { msg: {} },
    dataGetter: (state, {type, payload, meta}) => ({ msg: payload.data })
  }

export const searchServiceReducer = makeAsyncReducer(serviceSubmit, options)
