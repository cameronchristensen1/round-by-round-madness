import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxwmjuvahbyqtzlphmad.supabase.co'
const supabaseKey = 'sb_publishable_7Gl6EWOpcv02y2BH3xr-6w_5dXNB-GU'

export const supabase = createClient(supabaseUrl, supabaseKey)