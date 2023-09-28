import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://qpxptcdeminiebrxkqmr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFweHB0Y2RlbWluaWVicnhrcW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4OTI0NDIsImV4cCI6MjAxMTQ2ODQ0Mn0.zObCECEpOebbBuejyXSlypnkGUuXUC37w3hHkaC7ugc'
export const supabase = createClient(supabaseUrl, supabaseKey)