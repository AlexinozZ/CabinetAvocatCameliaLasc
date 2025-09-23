/*
  # Fix RLS policies for public review submissions

  1. Security Changes
    - Allow public users to insert reviews (they will be inactive by default)
    - Keep existing policies for reading active reviews
    - Maintain admin control over review activation

  2. Changes Made
    - Add policy for public insert of reviews
    - Reviews inserted by public are automatically set to inactive
    - Only authenticated users can activate/deactivate reviews
*/

-- Drop existing insert policy if it exists
DROP POLICY IF EXISTS "Users can insert reviews" ON reviews;
DROP POLICY IF EXISTS "Public can insert reviews" ON reviews;

-- Allow public users to insert reviews (they will be inactive by default)
CREATE POLICY "Public can insert reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Ensure authenticated users can still manage reviews
CREATE POLICY IF NOT EXISTS "Authenticated users can manage reviews"
  ON reviews
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add a trigger to ensure public reviews are always inactive
CREATE OR REPLACE FUNCTION ensure_public_reviews_inactive()
RETURNS TRIGGER AS $$
BEGIN
  -- If the user is not authenticated, force is_active to false
  IF auth.role() = 'anon' THEN
    NEW.is_active = false;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for insert
DROP TRIGGER IF EXISTS ensure_public_reviews_inactive_trigger ON reviews;
CREATE TRIGGER ensure_public_reviews_inactive_trigger
  BEFORE INSERT ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION ensure_public_reviews_inactive();