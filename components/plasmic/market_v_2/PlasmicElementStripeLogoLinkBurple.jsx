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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementStripeLogoLinkBurple.module.css"; // plasmic-import: EOrI3xKqvN/css

export const PlasmicElementStripeLogoLinkBurple__VariantProps = new Array(
  "size"
);

export const PlasmicElementStripeLogoLinkBurple__ArgProps = new Array();

function PlasmicElementStripeLogoLinkBurple__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"stripeLink"}
      data-plasmic-override={overrides.stripeLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        sty.stripeLink,
        {
          [sty.stripeLinksize__16]: hasVariant(variants, "size", "_16"),
          [sty.stripeLinksize__18]: hasVariant(variants, "size", "_18"),
          [sty.stripeLinksize__24]: hasVariant(variants, "size", "_24"),
          [sty.stripeLinksize__32]: hasVariant(variants, "size", "_32"),
          [sty.stripeLinksize__36]: hasVariant(variants, "size", "_36"),
          [sty.stripeLinksize__40]: hasVariant(variants, "size", "_40"),
          [sty.stripeLinksize__48]: hasVariant(variants, "size", "_48")
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
        className={classNames(projectcss.all, projectcss.img, sty.img, {
          [sty.imgsize__16]: hasVariant(variants, "size", "_16"),
          [sty.imgsize__18]: hasVariant(variants, "size", "_18"),
          [sty.imgsize__24]: hasVariant(variants, "size", "_24"),
          [sty.imgsize__32]: hasVariant(variants, "size", "_32"),
          [sty.imgsize__36]: hasVariant(variants, "size", "_36"),
          [sty.imgsize__40]: hasVariant(variants, "size", "_40"),
          [sty.imgsize__48]: hasVariant(variants, "size", "_48")
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

    return PlasmicElementStripeLogoLinkBurple__RenderFunc({
      variants,
      args,
      overrides,
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
