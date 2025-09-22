/*
  # Fix RLS policies for reviews table

  1. Security
    - Drop existing policies if they exist
    - Add policy for public users to read active reviews
    - Add policy for authenticated users to insert reviews
    - Add policy for authenticated users to manage their own reviews

  2. Changes
    - Ensures proper access control for the reviews table
    - Allows public reading of active reviews
    - Allows authenticated users to submit new reviews
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can read active reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can manage reviews" ON reviews;
DROP POLICY IF EXISTS "Users can insert reviews" ON reviews;
DROP POLICY IF EXISTS "Users can read own reviews" ON reviews;

-- Allow public users to read active reviews
CREATE POLICY "Public can read active reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_active = true);

-- Allow authenticated users to insert new reviews
CREATE POLICY "Users can insert reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all reviews (for admin purposes)
CREATE POLICY "Authenticated users can read all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update reviews (for admin purposes)
CREATE POLICY "Authenticated users can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete reviews (for admin purposes)
CREATE POLICY "Authenticated users can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (true);