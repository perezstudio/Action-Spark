import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data: Sites, error } = await supabase
  .from('Sites')
  .select('*');
}