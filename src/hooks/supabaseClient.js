import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vftyplvlxjwndgqvkvxv.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdHlwbHZseGp3bmRncXZrdnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODY3NjUsImV4cCI6MTk2OTE2Mjc2NX0.fC9bnGx6nhTqU-K__yl3OTWYxJ6v5YI1BqCpIpGpv00'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
