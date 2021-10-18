import * as React from "react";

import supabase from "../backend/api/supabase";
import { PlasmicLandingPage } from "../components/plasmic/market_v_2/PlasmicLandingPage";

function LandingPage() {
  console.log(supabase.auth.user());
  return <PlasmicLandingPage />;
}

export default LandingPage;
