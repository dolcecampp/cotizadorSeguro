/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import cotizadorContext from '../context/CotizadorProvider';

const useCotizador = context => {
  return useContext(cotizadorContext);
};
export default useCotizador;
