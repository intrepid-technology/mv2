// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: rvDpPOFOSj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LogoHeader from "../../LogoHeader"; // plasmic-import: 9wNFT5FYWe/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarStatic.module.css"; // plasmic-import: rvDpPOFOSj/css
import SectionDividerIcon from "./icons/PlasmicIcon__SectionDivider"; // plasmic-import: UzRMlTHWYLl/icon

export const PlasmicNavbarStatic__VariantProps = new Array();

export const PlasmicNavbarStatic__ArgProps = new Array();

function PlasmicNavbarStatic__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    hasVariant(globalVariants, "screen", "mobile")
      ? true
      : hasVariant(globalVariants, "screen", "desktop")
      ? true
      : false
  ) ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : hasVariant(globalVariants, "screen", "desktop")
          ? true
          : false
      ) ? (
        <div className={classNames(defaultcss.all, sty.box__gq5Ri)}>
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : false
          ) ? (
            <div className={classNames(defaultcss.all, sty.box__mn6Cy)}>
              <LogoHeader
                data-plasmic-name={"logoHeader"}
                data-plasmic-override={overrides.logoHeader}
              />
            </div>
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : hasVariant(globalVariants, "screen", "desktop")
          ? true
          : false
      ) ? (
        <div className={classNames(defaultcss.all, sty.box__ejVzw)}>
          <SectionDividerIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "logoHeader", "svg"],
  logoHeader: ["logoHeader"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarStatic__ArgProps,
      internalVariantPropNames: PlasmicNavbarStatic__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarStatic__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarStatic";
  } else {
    func.displayName = `PlasmicNavbarStatic.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarStatic = Object.assign(
  // Top-level PlasmicNavbarStatic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoHeader: makeNodeComponent("logoHeader"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNavbarStatic
    internalVariantProps: PlasmicNavbarStatic__VariantProps,
    internalArgProps: PlasmicNavbarStatic__ArgProps
  }
);

export default PlasmicNavbarStatic;
/* prettier-ignore-end */