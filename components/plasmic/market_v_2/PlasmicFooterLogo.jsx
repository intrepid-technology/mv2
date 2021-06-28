// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Prx2-JKtHL
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
import * as sty from "./PlasmicFooterLogo.module.css"; // plasmic-import: Prx2-JKtHL/css

export const PlasmicFooterLogo__VariantProps = new Array("light", "size");

export const PlasmicFooterLogo__ArgProps = new Array("destination");

function PlasmicFooterLogo__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"footerlogoLink"}
      data-plasmic-override={overrides.footerlogoLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.footerlogoLink
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img, {
          [sty.img__light]: hasVariant(variants, "light", "light"),
          [sty.img__size__16]: hasVariant(variants, "size", "_16"),
          [sty.img__size__24]: hasVariant(variants, "size", "_24"),
          [sty.img__size__32]: hasVariant(variants, "size", "_32")
        })}
        height={hasVariant(variants, "light", "light") ? 83 : 83}
        role={"img"}
        src={
          hasVariant(variants, "light", "light")
            ? "/plasmic/market_v_2/images/intrepidLogo2021V2Lightsvg.svg"
            : "/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"
        }
        width={hasVariant(variants, "light", "light") ? 300 : 300}
      />
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  footerlogoLink: ["footerlogoLink", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterLogo__ArgProps,
      internalVariantPropNames: PlasmicFooterLogo__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooterLogo__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "footerlogoLink") {
    func.displayName = "PlasmicFooterLogo";
  } else {
    func.displayName = `PlasmicFooterLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterLogo = Object.assign(
  // Top-level PlasmicFooterLogo renders the root element
  makeNodeComponent("footerlogoLink"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicFooterLogo
    internalVariantProps: PlasmicFooterLogo__VariantProps,
    internalArgProps: PlasmicFooterLogo__ArgProps
  }
);

export default PlasmicFooterLogo;
/* prettier-ignore-end */
