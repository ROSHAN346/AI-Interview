import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://vzibtrrgqhmphahnrmhg.supabase.co';
const supabaseAnonKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aWJ0cnJncWhtcGhhaG5ybWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTcyMzcsImV4cCI6MjA1OTc5MzIzN30.-rrOYDM0gkGoznKmVmakSZvala_Zlob8GsnT7QBSLnE';
export const supabase = createClient(
   supabaseUrl , 
   supabaseAnonKey ,
)