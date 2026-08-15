/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `phone` (text, not null) — contact phone
  - `email` (text, not null) — contact email
  - `project_type` (text, not null) — type of interior project
  - `message` (text, not null) — project details / message
  - `status` (text, default 'new') — lead status for follow-up
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT so the public contact form can submit.
- No SELECT/UPDATE/DELETE for anon — only the studio owner (via dashboard / authenticated) reads inquiries.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_inquiries" ON inquiries;
CREATE POLICY "authenticated_read_inquiries" ON inquiries FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_update_inquiries" ON inquiries;
CREATE POLICY "authenticated_update_inquiries" ON inquiries FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_inquiries" ON inquiries;
CREATE POLICY "authenticated_delete_inquiries" ON inquiries FOR DELETE
TO authenticated USING (true);
