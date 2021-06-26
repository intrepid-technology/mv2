// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: oDDjpt5lQZ
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
import * as sty from "./PlasmicNavbarLogo.module.css"; // plasmic-import: oDDjpt5lQZ/css

export const PlasmicNavbarLogo__VariantProps = new Array("light", "size");

export const PlasmicNavbarLogo__ArgProps = new Array();

function PlasmicNavbarLogo__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__light]: hasVariant(variants, "light", "light"),
        [sty.root__size__18]: hasVariant(variants, "size", "_18")
      })}
    >
      <p.PlasmicLink
        data-plasmic-name={"navBarLogoLinkParent"}
        data-plasmic-override={overrides.navBarLogoLinkParent}
        className={classNames(defaultcss.all, sty.navBarLogoLinkParent, {
          [sty.navBarLogoLinkParent__light]: hasVariant(
            variants,
            "light",
            "light"
          ),

          [sty.navBarLogoLinkParent__size__18]: hasVariant(
            variants,
            "size",
            "_18"
          )
        })}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img, {
            [sty.img__light]: hasVariant(variants, "light", "light"),
            [sty.img__size__16]: hasVariant(variants, "size", "_16"),
            [sty.img__size__18]: hasVariant(variants, "size", "_18"),
            [sty.img__size__24]: hasVariant(variants, "size", "_24"),
            [sty.img__size__32]: hasVariant(variants, "size", "_32"),
            [sty.img__size__36]: hasVariant(variants, "size", "_36"),
            [sty.img__size__40]: hasVariant(variants, "size", "_40"),
            [sty.img__size__48]: hasVariant(variants, "size", "_48")
          })}
          role={"img"}
          src={
            hasVariant(variants, "light", "light")
              ? "/plasmic/market_v_2/images/intrepidLogo2021V2Lightsvg.svg"
              : "/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"
          }
        />
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "navBarLogoLinkParent", "img"],
  navBarLogoLinkParent: ["navBarLogoLinkParent", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarLogo__ArgProps,
      internalVariantPropNames: PlasmicNavbarLogo__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarLogo__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarLogo";
  } else {
    func.displayName = `PlasmicNavbarLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarLogo = Object.assign(
  // Top-level PlasmicNavbarLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarLogoLinkParent: makeNodeComponent("navBarLogoLinkParent"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicNavbarLogo
    internalVariantProps: PlasmicNavbarLogo__VariantProps,
    internalArgProps: PlasmicNavbarLogo__ArgProps
  }
);

export default PlasmicNavbarLogo;
/* prettier-ignore-end */
