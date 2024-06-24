import { dataset } from './seeds';

const relogios = dataset.map((objeto, indice) => ({
  id: indice,
  brand: objeto.brand,
  model: objeto.model,
  caseMaterial: objeto.caseMaterial,
  strapMaterial: objeto.strapMaterial,
  priceUSD: objeto.priceUSD
}));


export {relogios};