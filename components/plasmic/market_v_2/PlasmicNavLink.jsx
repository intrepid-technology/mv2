// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: jGROxaZ_Hy
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
import * as sty from "./PlasmicNavLink.module.css"; // plasmic-import: jGROxaZ_Hy/css

export const PlasmicNavLink__VariantProps = new Array("color");

export const PlasmicNavLink__ArgProps = new Array("children", "target");

function PlasmicNavLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_light]: hasVariant(variants, "color", "light")
      })}
      component={Link}
      platform={"nextjs"}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        platform={"nextjs"}
      >
        <div
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          className={classNames(defaultcss.all, sty.box, {
            [sty.box__color_light]: hasVariant(variants, "color", "light")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "click me",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__color_brand]: hasVariant(
                variants,
                "color",
                "brand"
              ),

              [sty.slotChildren__color_light]: hasVariant(
                variants,
                "color",
                "light"
              )
            })
          })}
        </div>
      </p.PlasmicLink>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "box"],
  link: ["link", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavLink__ArgProps,
      internalVariantPropNames: PlasmicNavLink__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavLink";
  } else {
    func.displayName = `PlasmicNavLink.${nodeName}`;
  }
  return func;
}

export const PlasmicNavLink = Object.assign(
  // Top-level PlasmicNavLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicNavLink
    internalVariantProps: PlasmicNavLink__VariantProps,
    internalArgProps: PlasmicNavLink__ArgProps
  }
);

export default PlasmicNavLink;
/* prettier-ignore-end */
