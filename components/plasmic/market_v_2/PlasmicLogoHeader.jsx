// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 9wNFT5FYWe
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicLogoHeader.module.css"; // plasmic-import: 9wNFT5FYWe/css

export const PlasmicLogoHeader__VariantProps = new Array("color");

export const PlasmicLogoHeader__ArgProps = new Array("children");

function PlasmicLogoHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.PlasmicLink
      data-plasmic-name={"logoLink"}
      data-plasmic-override={overrides.logoLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.a,
        projectcss.a,
        projectcss.root_reset,
        sty.logoLink,
        { [sty.logoLink__color]: hasVariant(variants, "color", "color") }
      )}
      component={Link}
      href={
        hasVariant(globalVariants, "screen", "desktop")
          ? "/landingpage-2021"
          : "/app"
      }
      platform={"nextjs"}
    >
      {(hasVariant(variants, "color", "color") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(
                  defaultcss.img,
                  projectcss.img,
                  sty.img__n8PaC
                )}
                src={"/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"}
              />
            ),

            value: args.children
          })
        : null}
      {(hasVariant(variants, "color", "color") ? true : false) ? (
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.img, {
            [sty.img__color]: hasVariant(variants, "color", "color")
          })}
          src={
            hasVariant(variants, "color", "color")
              ? "/plasmic/market_v_2/images/intrepidLogo2021V2Lightsvg.svg"
              : undefined
          }
        />
      ) : null}
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  logoLink: ["logoLink", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLogoHeader__ArgProps,
      internalVariantPropNames: PlasmicLogoHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLogoHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "logoLink") {
    func.displayName = "PlasmicLogoHeader";
  } else {
    func.displayName = `PlasmicLogoHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoHeader = Object.assign(
  // Top-level PlasmicLogoHeader renders the root element
  makeNodeComponent("logoLink"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLogoHeader
    internalVariantProps: PlasmicLogoHeader__VariantProps,
    internalArgProps: PlasmicLogoHeader__ArgProps
  }
);

export default PlasmicLogoHeader;
/* prettier-ignore-end */
