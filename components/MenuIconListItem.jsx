import * as React from "react";

import { PlasmicMenuIconListItem } from "./plasmic/market_v_2/PlasmicMenuIconListItem";
import { useRouter } from "next/router";

const RENDER_CONTEXT = {
  SIDEBAR: "sidebar"
}

function MenuIconListItem_({renderContext, switchInputProps, ...props}, ref) {
  const router = useRouter()

  const isSelected = renderContext === RENDER_CONTEXT.SIDEBAR && router.pathname === props.destination

  return (
    <PlasmicMenuIconListItem
      menuIconListItemLink={{ ref }}
      {...props}
      selected={isSelected}
      switchActionButton={switchInputProps}
    />
  );
}

const MenuIconListItem = React.forwardRef(MenuIconListItem_);

export default MenuIconListItem;
