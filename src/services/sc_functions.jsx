import getFromDb from './getFromDb';
import {supabase} from '../supabaseClient';

async function getState() {
  const result = await getFromDb('state')
  return result[0];
}

async function updateState(data_obj) {
  try {
    const { data, error } = await supabase
      .from('state')
      .update(data_obj)
      .eq('id', 1)
    if (error) throw error;
    if (data) return true;
  } catch(error) {
    console.log(error.message);
    return false;
  }
}

export async function f1_perpindahanProduk(src, dest, id) {
  let state = await getState();
  let state_t = Object.assign({}, state);
  if (src > 0) { /* dari peternak ke rumah produksi */
    for (product_raw in state.peternaks[src].products_raw) {
      if (product_raw.no_batch == id) {
        state_t.rumah_produksi.products_raw.push(product_raw);
        state_t.peternaks[src].jumlah_volume -= product_raw.jumlah;
        let idx = state_t.peternaks[src].products.raw.indexOf(product_raw);
        state_t.peternaks[src].products_raw.splice(idx, 1);
      }
    }
  } else { /* dari rumah produksi ke konsumen */
    for (product in state.rumah_produksi.products) {
      if (product.product_id == id) {
        state_t.konsumen.push(product);
        let idx = state_t.rumah_produksi.products.indexOf(product);
        state_t.rumah_produksi.products.splice(idx, 1);
      }
    }
  }

  return updateState({
    rumah_produksi: state_t.rumah_produksi, 
    konsumen: state_t.konsumen,
    peternaks: state_t.peternaks
  })
}

export async function f2_stupStatusNonPemanenan(id_stup, new_data_stup) {
  let state = await getState();
  let state_t = Object.assign({}, state);
  state_t.stups[id_stup] = new_data_stup;

  return updateState({stups: state_t.stups});
}

export async function  f3_rumahProduksiStatus(new_data) {
  let state = await getState();
  let state_t = Object.assign({}, state);
  state_t.rumah_produksi = new_data;

  return updateState({ rumah_produksi: state_t.rumah_produksi })
}

export async function f4_pemanenan(stup_sumber, id_peternak, data_panen, komposisi_volume) {
  let total_volume = 0;
  let state = await getState();
  let state_t = Object.assign({}, state);
  for (let i = 0; i < stup_sumber.length; i++) {
    let today = Math.floor(new Date().getTime()/1000);
    let terakhir_dipanen = state.stups[i].terakhir_dipanen
    state_t.stups[i].produktivitas = komposisi_volume[i]/(today-terakhir_dipanen)*30;
    state_t.stups[i].terakhir_dipanen = today;
    total_volume += komposisi_volume[i];
    console.log(total_volume)
  }
  state_t.peternaks[id_peternak-1].jumlah_volume = parseFloat(state_t.peternaks[id_peternak-1].jumlah_volume) + total_volume;
  state_t.peternaks[id_peternak-1].products_raw.push(data_panen);

  return updateState({ stups: state_t.stups, peternaks: state_t.peternaks })
}
