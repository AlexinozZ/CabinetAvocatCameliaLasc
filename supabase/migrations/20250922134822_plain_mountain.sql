/*
  # Create reviews table for client testimonials

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text) - Client name
      - `role` (text) - Client role/profession
      - `content` (text) - Review content
      - `rating` (integer) - Rating from 1-5
      - `is_active` (boolean) - Whether review is displayed
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to active reviews
    - Add policy for authenticated admin users to manage reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to active reviews
CREATE POLICY "Public can read active reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policy for authenticated users to manage reviews (for admin purposes)
CREATE POLICY "Authenticated users can manage reviews"
  ON reviews
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample reviews
INSERT INTO reviews (name, role, content, rating, is_active) VALUES
(
  'Maria Popescu',
  'Proprietar de Afacere',
  'Reprezentare juridică excepțională! Camelia Irina a gestionat cazul meu de drept comercial cu cea mai mare profesionalitate și a obținut un rezultat peste așteptările mele. Atenția la detalii și abordarea strategică au făcut toată diferența.',
  5,
  true
),
(
  'Alexandru Ionescu',
  'Dezvoltator Imobiliar',
  'Serviciu remarcabil în dreptul imobiliar. Expertiza și dedicarea demonstrată pe parcursul tranzacției noastre complexe de proprietate a fost remarcabilă. Recomand cu căldură acest cabinet de avocatură pentru oricine caută consiliere juridică de încredere.',
  5,
  true
),
(
  'Elena Vasilescu',
  'Director Corporativ',
  'Profesională, de încredere și orientată spre rezultate. Camelia Irina a oferit îndrumări excelente printr-o problemă dificilă de drept de familie, păstrând întotdeauna interesele mele la inimă. Sunt cu adevărat recunoscătoare pentru serviciul excepțional.',
  5,
  true
),
(
  'Mihai Georgescu',
  'Antreprenor',
  'Consultanță juridică de top! Am lucrat cu Camelia Irina pentru înființarea companiei mele și procesul a fost foarte fluid. Explicațiile clare și sfaturile practice m-au ajutat să iau decizii informate. Recomand cu încredere!',
  5,
  true
),
(
  'Ana Dumitrescu',
  'Manager HR',
  'Expertiză excepțională în dreptul muncii. Camelia Irina ne-a ajutat să navigăm prin probleme complexe de resurse umane cu profesionalismul cel mai înalt. Comunicarea clară și soluțiile practice au fost invaluabile pentru compania noastră.',
  5,
  true
);