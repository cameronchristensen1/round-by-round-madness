import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxwmjuvahbyqtzlphmad.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4d21qdXZhaGJ5cXR6bHBobWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwODQ5NTAsImV4cCI6MjA5MzY2MDk1MH0.eOCNtQ4Sp-OCxESu0c5FAZH6JzA3m22FADei_ToUPC8'

export const supabase = createClient(supabaseUrl, supabaseKey)