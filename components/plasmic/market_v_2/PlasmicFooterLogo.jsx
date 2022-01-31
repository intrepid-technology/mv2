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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicFooterLogo.module.css"; // plasmic-import: Prx2-JKtHL/css

export const PlasmicFooterLogo__VariantProps = new Array("light", "size");

export const PlasmicFooterLogo__ArgProps = new Array("destination");

function PlasmicFooterLogo__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"footerlogoLink"}
      data-plasmic-override={overrides.footerlogoLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
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
        className={classNames(projectcss.all, projectcss.img, sty.img, {
          [sty.imglight]: hasVariant(variants, "light", "light"),
          [sty.imgsize__16]: hasVariant(variants, "size", "_16"),
          [sty.imgsize__24]: hasVariant(variants, "size", "_24"),
          [sty.imgsize__32]: hasVariant(variants, "size", "_32")
        })}
        src={
          hasVariant(variants, "light", "light")
            ? "/plasmic/market_v_2/images/intrepidLogo2021V2Lightsvg.svg"
            : "/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"
        }
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

    return PlasmicFooterLogo__RenderFunc({
      variants,
      args,
      overrides,
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
