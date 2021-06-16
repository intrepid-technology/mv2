// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6ydrc2_eg9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementNavCardListItem from "../../ElementNavCardListItem"; // plasmic-import: VVXqLHd1Qa/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSideBarUserSettingsDropdown.module.css"; // plasmic-import: 6ydrc2_eg9/css

export const PlasmicSideBarUserSettingsDropdown__VariantProps = new Array();

export const PlasmicSideBarUserSettingsDropdown__ArgProps = new Array();

function PlasmicSideBarUserSettingsDropdown__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <ElementNavCardListItem
        className={classNames(
          "__wab_instance",
          sty.elementNavCardListItem__itli8
        )}
        text={"Profile"}
      />

      <ElementNavCardListItem
        className={classNames(
          "__wab_instance",
          sty.elementNavCardListItem__fykUm
        )}
        text={"Settings"}
      />

      <ElementNavCardListItem
        className={classNames(
          "__wab_instance",
          sty.elementNavCardListItem__eHqdG
        )}
        text={"Log out"}
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
      internalArgPropNames: PlasmicSideBarUserSettingsDropdown__ArgProps,
      internalVariantPropNames: PlasmicSideBarUserSettingsDropdown__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSideBarUserSettingsDropdown__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarUserSettingsDropdown";
  } else {
    func.displayName = `PlasmicSideBarUserSettingsDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarUserSettingsDropdown = Object.assign(
  // Top-level PlasmicSideBarUserSettingsDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSideBarUserSettingsDropdown
    internalVariantProps: PlasmicSideBarUserSettingsDropdown__VariantProps,
    internalArgProps: PlasmicSideBarUserSettingsDropdown__ArgProps
  }
);

export default PlasmicSideBarUserSettingsDropdown;
/* prettier-ignore-end */
