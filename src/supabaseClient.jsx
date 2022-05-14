import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://awwkuopyydvkhsssgasa.supabase.co"; //Config URL yang tadi di copy
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3d2t1b3B5eWR2a2hzc3NnYXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NjAyMjIsImV4cCI6MTk2MzUzNjIyMn0.MxRurB_qIP7LJydGxYmzeL8_E0SvDPeeL80IB8fUl2g"; //Project Key yang tadi di copy

export const supabase = createClient(supabaseUrl, supabaseAnonKey);