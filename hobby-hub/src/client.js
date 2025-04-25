import { createClient } from '@supabase/supabase-js';
const URL = 'https://losyltzbthtmjuzwgmyu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvc3lsdHpidGh0bWp1endnbXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDI0ODUsImV4cCI6MjA2MDkxODQ4NX0.3aRFZ4WQC-8iYt0xYdnMARUI2CdYbvbWU_HuvEvlB9E';
export const supabase = createClient(URL, API_KEY);
