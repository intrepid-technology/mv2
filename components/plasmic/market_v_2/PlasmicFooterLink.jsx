// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: V79E-hyi-E
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicFooterLink.module.css"; // plasmic-import: V79E-hyi-E/css

export const PlasmicFooterLink__VariantProps = new Array("color");

export const PlasmicFooterLink__ArgProps = new Array("slot", "destination");

function PlasmicFooterLink__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_dark]: hasVariant(variants, "color", "dark"),
        [sty.root__color_light]: hasVariant(variants, "color", "light")
      })}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
      target={"_blank"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "link",
        value: args.slot,
        className: classNames(sty.slotTargetSlot, {
          [sty.slotTargetSlot__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),

          [sty.slotTargetSlot__color_dark]: hasVariant(
            variants,
            "color",
            "dark"
          ),

          [sty.slotTargetSlot__color_light]: hasVariant(
            variants,
            "color",
            "light"
          )
        })
      })}
    </p.PlasmicLink>
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
      internalArgPropNames: PlasmicFooterLink__ArgProps,
      internalVariantPropNames: PlasmicFooterLink__VariantProps
    });

    return PlasmicFooterLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterLink";
  } else {
    func.displayName = `PlasmicFooterLink.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterLink = Object.assign(
  // Top-level PlasmicFooterLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFooterLink
    internalVariantProps: PlasmicFooterLink__VariantProps,
    internalArgProps: PlasmicFooterLink__ArgProps
  }
);

export default PlasmicFooterLink;
/* prettier-ignore-end */
