// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: tq01IF7a70
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicIconStripeLogo.module.css"; // plasmic-import: tq01IF7a70/css
import StripeWordmarkSlatesvgIcon from "./icons/PlasmicIcon__StripeWordmarkSlatesvg"; // plasmic-import: vDvy1Uh-W/icon

export const PlasmicIconStripeLogo__VariantProps = new Array("size", "color");

export const PlasmicIconStripeLogo__ArgProps = new Array();

function PlasmicIconStripeLogo__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__size__18]: hasVariant(variants, "size", "_18"),
          [sty.parent__size__24]: hasVariant(variants, "size", "_24"),
          [sty.parent__size__32]: hasVariant(variants, "size", "_32")
        })}
      >
        <StripeWordmarkSlatesvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__color_burple]: hasVariant(variants, "color", "burple"),
            [sty.svg__color_darkGrey]: hasVariant(
              variants,
              "color",
              "darkGrey"
            ),

            [sty.svg__color_white]: hasVariant(variants, "color", "white"),
            [sty.svg__size__18]: hasVariant(variants, "size", "_18"),
            [sty.svg__size__24]: hasVariant(variants, "size", "_24"),
            [sty.svg__size__32]: hasVariant(variants, "size", "_32")
          })}
          role={"img"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "svg"],
  parent: ["parent", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconStripeLogo__ArgProps,
      internalVariantPropNames: PlasmicIconStripeLogo__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicIconStripeLogo__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconStripeLogo";
  } else {
    func.displayName = `PlasmicIconStripeLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicIconStripeLogo = Object.assign(
  // Top-level PlasmicIconStripeLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicIconStripeLogo
    internalVariantProps: PlasmicIconStripeLogo__VariantProps,
    internalArgProps: PlasmicIconStripeLogo__ArgProps
  }
);

export default PlasmicIconStripeLogo;
/* prettier-ignore-end */