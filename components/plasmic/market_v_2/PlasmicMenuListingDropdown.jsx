// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: IFFoU3tcDj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MenuItem from "../../MenuItem"; // plasmic-import: VVXqLHd1Qa/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicMenuListingDropdown.module.css"; // plasmic-import: IFFoU3tcDj/css

export const PlasmicMenuListingDropdown__VariantProps = new Array();

export const PlasmicMenuListingDropdown__ArgProps = new Array();

function PlasmicMenuListingDropdown__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <MenuItem
        className={classNames("__wab_instance", sty.menuItem___8KKvH)}
        text={"Service"}
      />

      <MenuItem
        className={classNames("__wab_instance", sty.menuItem__kqgky)}
        disabled={true}
        text={"Product"}
      />

      <MenuItem
        className={classNames("__wab_instance", sty.menuItem__pfXm2)}
        disabled={true}
        text={"Event"}
      />

      <MenuItem
        className={classNames("__wab_instance", sty.menuItem__hg2AN)}
        disabled={true}
        text={"Experience"}
      />

      <MenuItem
        className={classNames("__wab_instance", sty.menuItem___8EqeL)}
        disabled={true}
        text={"Workspace"}
      />

      <MenuItem
        className={classNames("__wab_instance", sty.menuItem___1Cggc)}
        disabled={true}
        text={"Livespace"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenuListingDropdown__ArgProps,
      internalVariantPropNames: PlasmicMenuListingDropdown__VariantProps
    });

    return PlasmicMenuListingDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuListingDropdown";
  } else {
    func.displayName = `PlasmicMenuListingDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuListingDropdown = Object.assign(
  // Top-level PlasmicMenuListingDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicMenuListingDropdown
    internalVariantProps: PlasmicMenuListingDropdown__VariantProps,
    internalArgProps: PlasmicMenuListingDropdown__ArgProps
  }
);

export default PlasmicMenuListingDropdown;
/* prettier-ignore-end */
