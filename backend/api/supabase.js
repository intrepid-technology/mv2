import { createClient } from "@supabase/supabase-js";

/*
  TODO: Tried using Supabase URL and key from env:
  - Can console log and see correct values here
  - No error when createClient
  - Supabase client couldn't connect to Supabase server 

  const supabase = createClient(
    `${process.env.REACT_APP_SUPABASE_HOST}`,
    `${process.env.REACT_APP_SUPABASE_KEY}`
  );
*/

const supabase = createClient(
  "https://nrvfgjokkxjitpndrnbt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzOTI4NiwiZXhwIjoxOTI5OTE1Mjg2fQ.AU2SusHkuOKR9sQPEdwlJ2jSRTNBeN_hLX1Qcfe42go"
);

export default supabase;
