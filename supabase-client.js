// Reemplaza estos valores con tu URL y KEY de Supabase
const SUPABASE_URL = 'https://lawpjyknenhhvjlztpic.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhd3BqeWtuZW5oaHZqbHp0cGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTYxNjUsImV4cCI6MjA5MzM3MjE2NX0.iX3kd7ZehoszddMa_Gv_sXtPngc_ugwM5S2btiCLCpw';

// Inicializar cliente
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
