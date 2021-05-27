import api from "../../../services/api";
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { addToCartSuccess } from './actions'

//yield=> await
//call executa funções que retorna uma promise
//put => dispara uma ação
//takelatest => ouve uma action

function* addToCart({id}){

  const response = yield call(api.get, `/products/${id}`)

  yield put(addToCartSuccess(response.data))
} 

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart)
])