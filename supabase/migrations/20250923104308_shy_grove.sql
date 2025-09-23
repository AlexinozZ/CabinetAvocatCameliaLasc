/*
  # Auto-publish reviews without verification

  1. Changes
    - Remove trigger that sets reviews as inactive
    - Update default value for is_active to true
    - Reviews will be published immediately

  2. Security
    - Keep RLS policies for public insert and read
    - Authenticated users can still manage all reviews
*/

-- Drop the trigger that sets reviews as inactive
DROP TRIGGER IF EXISTS set_review_inactive_trigger ON reviews;

-- Update the default value for is_active to true
ALTER TABLE reviews ALTER COLUMN is_active SET DEFAULT true;

-- Update the insert policy to ensure reviews are active by default
DROP POLICY IF EXISTS "public_can_insert_reviews" ON reviews;

CREATE POLICY "public_can_insert_reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);