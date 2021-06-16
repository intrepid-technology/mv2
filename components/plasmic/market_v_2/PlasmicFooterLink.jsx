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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFooterLink.module.css"; // plasmic-import: V79E-hyi-E/css

export const PlasmicFooterLink__VariantProps = new Array("color");

export const PlasmicFooterLink__ArgProps = new Array("slot");

function PlasmicFooterLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_dark]: hasVariant(variants, "color", "dark"),
        [sty.root__color_light]: hasVariant(variants, "color", "light")
      })}
      component={Link}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "link",
        value: args.slot,
        className: classNames(sty.slotSlot, {
          [sty.slotSlot__color_brand]: hasVariant(variants, "color", "brand"),
          [sty.slotSlot__color_dark]: hasVariant(variants, "color", "dark"),
          [sty.slotSlot__color_light]: hasVariant(variants, "color", "light")
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

    const { dataFetches } = props;
    return PlasmicFooterLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
