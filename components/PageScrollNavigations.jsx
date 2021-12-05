import * as React from "react";

import { PlasmicPageScrollNavigations } from "./plasmic/market_v_2/PlasmicPageScrollNavigations";
import Tab from "./Tab";
import { usePageLayoutProps } from "hooks/useLayoutTabNavigations";

function PageScrollNavigations_(props, ref) {
  const [hashId, setHashId] = React.useState('')

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const hashId = window.location.hash?.slice(1)
    setHashId(hashId)
  }, [])

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!hashId) return;

    const element = document.getElementById(hashId);
    if(!element) return

    const yOffset = -200; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

  })

  const { scrollNavigations } = usePageLayoutProps();
  if(!scrollNavigations?.length) return null;

  return (
    <PlasmicPageScrollNavigations
      root={{ 
        wrapChildren: (children) => (
          scrollNavigations?.map(link => (
            <Tab
              label={link.label}
              destination={link.destination}
              state={`#${hashId}` === link.destination ? "selected" : ""}
              activeBorder={"left"}
              onClick={() => setHashId(link.destination?.slice(1))}
            />
          ))
        )
       }}
      {...props}
    />
  );
}

const PageScrollNavigations = React.forwardRef(PageScrollNavigations_);

export default PageScrollNavigations;
