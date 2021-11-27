import * as React from "react";

import Breadcrumb from "./Breadcrumb";
import { PlasmicPageBreadcrumbs } from "./plasmic/market_v_2/PlasmicPageBreadcrumbs";
import { usePageLayoutProps } from "hooks/useLayoutTabNavigations";

function PageBreadcrumbs_({...props}, ref) {
  const { breadcrumbs } = usePageLayoutProps();

  if(!breadcrumbs?.length) return null;
  
  return (
    <PlasmicPageBreadcrumbs
      root={{
        wrapChildren: (children) => (
          breadcrumbs?.map((breadcrumb, index) => (
            <Breadcrumb
              label={breadcrumb.label}
              destination={breadcrumb.destination}
              isSelected={index === breadcrumbs.length - 1}
              isLast={index === breadcrumbs.length - 1}
              hasDestination={Boolean(breadcrumb.destination)}
            />
          ))
        )
      }}
      {...props}
    />
  );
}

const PageBreadcrumbs = React.forwardRef(PageBreadcrumbs_);

export default PageBreadcrumbs;
