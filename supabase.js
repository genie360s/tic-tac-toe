// supabase config file
console.log("some error")
require('dotenv').config();


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: true,
  storage: window.sessionStorage, // Use localStorage
});

export default supabase;
