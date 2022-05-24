import {supabase} from '../supabaseClient'

export default async function getFromDb(tableName) {
  try {
    let { data, error, status } = await supabase
      .from(tableName)
      .select()

    if (error) {
      throw error
    }

    if (data) {
      return data
    }
  } catch (error) {
    return []
  }
}