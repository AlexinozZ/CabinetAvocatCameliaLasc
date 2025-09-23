/*
  # Create RLS policies for reviews table

  1. Security
    - Enable RLS on `reviews` table
    - Add policy for public users to insert reviews (will be inactive by default)
    - Add policy for public users to read active reviews
    - Add policy for authenticated users to manage all reviews

  2. Policies
    - `public_can_insert_reviews` - allows anonymous users to submit reviews
    - `public_can_read_active_reviews` - allows everyone to read approved reviews
    - `authenticated_can_manage_reviews` - allows authenticated users full access
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "public_can_insert_reviews" ON reviews;
DROP POLICY IF EXISTS "public_can_read_active_reviews" ON reviews;
DROP POLICY IF EXISTS "authenticated_can_manage_reviews" ON reviews;
DROP POLICY IF EXISTS "Users can insert reviews" ON reviews;
DROP POLICY IF EXISTS "Public can read active reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can read all reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can update reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can delete reviews" ON reviews;

-- Ensure RLS is enabled
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public users to insert reviews (they will be inactive by default)
CREATE POLICY "public_can_insert_reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy 2: Allow public users to read active reviews
CREATE POLICY "public_can_read_active_reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policy 3: Allow authenticated users to manage all reviews
CREATE POLICY "authenticated_can_manage_reviews"
  ON reviews
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create a trigger to automatically set is_active to false for new reviews
CREATE OR REPLACE FUNCTION set_review_inactive()
RETURNS TRIGGER AS $$
BEGIN
  -- Set is_active to false for all new reviews (they need approval)
  NEW.is_active = false;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and create new one
DROP TRIGGER IF EXISTS set_review_inactive_trigger ON reviews;
CREATE TRIGGER set_review_inactive_trigger
  BEFORE INSERT ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION set_review_inactive();