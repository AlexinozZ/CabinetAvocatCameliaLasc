import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://agsmwxsbdiehmliycxfo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc213eHNiZGllaG1saXljeGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjQ4NDYsImV4cCI6MjA3NDE0MDg0Nn0.AEdYtVpIFT9T8DXJEtzEdeKViKb6FxuSR3lGNr9C6_k';

// Create Supabase client with fallback values
export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
  created_at: string;
  is_active: boolean;
}