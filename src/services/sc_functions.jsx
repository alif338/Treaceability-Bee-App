import { getFromDb } from './getFromDb';

async function getState() {
  const result = await getFromDb('state')
  return result[0];
}

export default function f1_perpindahanProduk() {
  let state = await getState();
}

export default function f2_stupStatusNonPemanenan() {
  let state = await getState();
}

export default function f3_rumahProduksiStatus() {
  let state = await getState();
}

export default async function f4_pemanenan(stup_sumber, id_peternak, data_panen, komposisi_volume) {
  let total_volume = 0;
  let state = await getState();
  let state_t = Object.assign({}, state);
  for (i = 1; i < stup_sumber.length; i++) {
    let today = Math.floor(new Date().getTime()/1000);
    let terakhir_dipanen = state.stups[i].terakhir_dipanen
    state_t.stups[i].produktivitas = komposisi_volume[i]/(today-terakhir_dipanen)*30;
    state_t.stups[i].terakhir_dipanen = today;
    total_volume += komposisi_volume[i];
  }
  state_t.peternaks[id_peternak].jumlah_volume += total_volume;
  state_t.peternaks[id_peternak].products_raw.push(data_panen);

  try {
    const { data, error } = await supabase
      .from('state')
      .update({ stups: state_t.stups, peternaks: state_t.peternaks })
      .eq('id', 1)
    if (error) throw error;
    if (data) return data;
  } catch(error) {
    alert('Data gagal diupdate')
  }
}