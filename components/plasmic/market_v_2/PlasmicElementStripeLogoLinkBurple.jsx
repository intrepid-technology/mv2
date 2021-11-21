// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: EOrI3xKqvN
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
import * as sty from "./PlasmicElementStripeLogoLinkBurple.module.css"; // plasmic-import: EOrI3xKqvN/css

export const PlasmicElementStripeLogoLinkBurple__VariantProps = new Array(
  "size"
);

export const PlasmicElementStripeLogoLinkBurple__ArgProps = new Array();

function PlasmicElementStripeLogoLinkBurple__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"stripeLink"}
      data-plasmic-override={overrides.stripeLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.a,
        projectcss.a,
        projectcss.root_reset,
        sty.stripeLink,
        {
          [sty.stripeLink__size__16]: hasVariant(variants, "size", "_16"),
          [sty.stripeLink__size__18]: hasVariant(variants, "size", "_18"),
          [sty.stripeLink__size__24]: hasVariant(variants, "size", "_24"),
          [sty.stripeLink__size__32]: hasVariant(variants, "size", "_32"),
          [sty.stripeLink__size__36]: hasVariant(variants, "size", "_36"),
          [sty.stripeLink__size__40]: hasVariant(variants, "size", "_40"),
          [sty.stripeLink__size__48]: hasVariant(variants, "size", "_48")
        }
      )}
      component={Link}
      href={"https://stripe.com"}
      platform={"nextjs"}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, projectcss.img, sty.img, {
          [sty.img__size__16]: hasVariant(variants, "size", "_16"),
          [sty.img__size__18]: hasVariant(variants, "size", "_18"),
          [sty.img__size__24]: hasVariant(variants, "size", "_24"),
          [sty.img__size__32]: hasVariant(variants, "size", "_32"),
          [sty.img__size__36]: hasVariant(variants, "size", "_36"),
          [sty.img__size__40]: hasVariant(variants, "size", "_40"),
          [sty.img__size__48]: hasVariant(variants, "size", "_48")
        })}
        src={"/plasmic/market_v_2/images/stripeWordmarkBlurpleLgpng.png"}
      />
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  stripeLink: ["stripeLink", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementStripeLogoLinkBurple__ArgProps,
      internalVariantPropNames: PlasmicElementStripeLogoLinkBurple__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementStripeLogoLinkBurple__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "stripeLink") {
    func.displayName = "PlasmicElementStripeLogoLinkBurple";
  } else {
    func.displayName = `PlasmicElementStripeLogoLinkBurple.${nodeName}`;
  }
  return func;
}

export const PlasmicElementStripeLogoLinkBurple = Object.assign(
  // Top-level PlasmicElementStripeLogoLinkBurple renders the root element
  makeNodeComponent("stripeLink"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicElementStripeLogoLinkBurple
    internalVariantProps: PlasmicElementStripeLogoLinkBurple__VariantProps,
    internalArgProps: PlasmicElementStripeLogoLinkBurple__ArgProps
  }
);

export default PlasmicElementStripeLogoLinkBurple;
/* prettier-ignore-end */
