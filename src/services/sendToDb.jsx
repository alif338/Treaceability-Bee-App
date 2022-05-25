import {supabase} from "../supabaseClient";

export default async function updateState({data, onSuccess, onError}) {
  console.log(data)
  try {
    const { data, error } = await supabase
      .from('state')
      .update(data)
      .eq('id', 1);
    if (error) throw error
    if (data) onSuccess();
  } catch (error) {
    console.log(error);
    onError();
  }
}