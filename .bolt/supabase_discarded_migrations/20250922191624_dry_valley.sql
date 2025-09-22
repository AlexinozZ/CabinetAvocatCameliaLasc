/*
  # Create reviews table for testimonials

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Client name
      - `role` (text, not null) - Client role/position
      - `content` (text, not null) - Testimonial content
      - `rating` (integer, not null) - Rating from 1 to 5
      - `is_active` (boolean, default true) - Whether review is active
      - `created_at` (timestamptz, default now()) - Creation timestamp
      - `updated_at` (timestamptz, default now()) - Last update timestamp

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public to read active reviews
    - Add policy for authenticated users to manage all reviews

  3. Constraints
    - Rating must be between 1 and 5
    - Trigger to automatically update `updated_at` field
*/

-- Create the reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT reviews_rating_check CHECK (rating >= 1 AND rating <= 5)
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can read active reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage reviews"
  ON reviews
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data
INSERT INTO reviews (name, role, content, rating) VALUES
  ('Maria Popescu', 'Proprietar de Afacere', 'Reprezentare juridică excepțională! Camelia Irina a gestionat cazul meu de drept comercial cu cea mai mare profesionalitate și a obținut un rezultat peste așteptările mele.', 5),
  ('Alexandru Ionescu', 'Dezvoltator Imobiliar', 'Serviciu remarcabil în dreptul imobiliar. Expertiza și dedicarea demonstrată pe parcursul tranzacției noastre complexe de proprietate a fost remarcabilă.', 5),
  ('Elena Dumitrescu', 'Director General', 'Consiliere juridică de înaltă calitate pentru restructurarea companiei noastre. Abordarea strategică și atenția la detalii au fost impresionante.', 5);