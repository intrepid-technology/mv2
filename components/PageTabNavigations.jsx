import * as React from "react";

import { PlasmicPageTabNavigations } from "./plasmic/market_v_2/PlasmicPageTabNavigations";
import Tab from "./Tab";
import { useRouter } from "next/router";

function PageTabNavigations_({navLinks=[], ...props}, ref) {
  const router = useRouter()
  if(!navLinks?.length) return null;

  return (
    <PlasmicPageTabNavigations
      root={{
        wrapChildren: (children) => (
          navLinks?.map(link => (
            <Tab label={link.label} destination={link.destination} state={router.pathname === link.destination ? "selected" : ""} />
          ))
        )
      }}
      {...props}
    />
  );
}

const PageTabNavigations = React.forwardRef(PageTabNavigations_);

export default PageTabNavigations;
