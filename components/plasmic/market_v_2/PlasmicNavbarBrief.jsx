// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: WoHRRICUYW
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarBrief.module.css"; // plasmic-import: WoHRRICUYW/css
import BriefOrdersIcon from "./icons/PlasmicIcon__BriefOrders"; // plasmic-import: IHBDow0Bv/icon

export const PlasmicNavbarBrief__VariantProps = new Array("color");

export const PlasmicNavbarBrief__ArgProps = new Array();

function PlasmicNavbarBrief__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color]: hasVariant(variants, "color", "color")
      })}
    >
      <BriefOrdersIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg, {
          [sty.svg__color]: hasVariant(variants, "color", "color")
        })}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarBrief__ArgProps,
      internalVariantPropNames: PlasmicNavbarBrief__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarBrief__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarBrief";
  } else {
    func.displayName = `PlasmicNavbarBrief.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarBrief = Object.assign(
  // Top-level PlasmicNavbarBrief renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNavbarBrief
    internalVariantProps: PlasmicNavbarBrief__VariantProps,
    internalArgProps: PlasmicNavbarBrief__ArgProps
  }
);

export default PlasmicNavbarBrief;
/* prettier-ignore-end */
