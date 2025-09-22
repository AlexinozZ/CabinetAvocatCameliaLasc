/*
  # Simplify reviews table structure

  1. Changes to Tables
    - Remove `role` column from `reviews` table
    - Keep only essential columns: id, name, content, rating, is_active, created_at, updated_at

  2. Security
    - Maintain existing RLS policies
    - Keep existing constraints and triggers
*/

-- Remove the role column as it's no longer needed
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'reviews' AND column_name = 'role'
  ) THEN
    ALTER TABLE reviews DROP COLUMN role;
  END IF;
END $$;