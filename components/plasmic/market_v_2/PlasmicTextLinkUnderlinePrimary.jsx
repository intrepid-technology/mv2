// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: fFeX6kEAMB
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
import * as sty from "./PlasmicTextLinkUnderlinePrimary.module.css"; // plasmic-import: fFeX6kEAMB/css

export const PlasmicTextLinkUnderlinePrimary__VariantProps = new Array(
  "color",
  "size",
  "state"
);

export const PlasmicTextLinkUnderlinePrimary__ArgProps = new Array(
  "text",
  "destination",
  "id"
);

function PlasmicTextLinkUnderlinePrimary__RenderFunc(props) {
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
        [sty.root__color_headline]: hasVariant(variants, "color", "headline"),
        [sty.root__color_light]: hasVariant(variants, "color", "light"),
        [sty.root__color_light_size__14]:
          hasVariant(variants, "color", "light") &&
          hasVariant(variants, "size", "_14"),
        [sty.root__color_light_size__16]:
          hasVariant(variants, "color", "light") &&
          hasVariant(variants, "size", "_16"),
        [sty.root__color_light_size__18]:
          hasVariant(variants, "color", "light") &&
          hasVariant(variants, "size", "_18"),
        [sty.root__color_light_size__24]:
          hasVariant(variants, "color", "light") &&
          hasVariant(variants, "size", "_24"),
        [sty.root__size__14]: hasVariant(variants, "size", "_14"),
        [sty.root__size__16]: hasVariant(variants, "size", "_16"),
        [sty.root__size__18]: hasVariant(variants, "size", "_18"),
        [sty.root__size__24]: hasVariant(variants, "size", "_24"),
        [sty.root__size__32]: hasVariant(variants, "size", "_32"),
        [sty.root__size__40]: hasVariant(variants, "size", "_40")
      })}
      component={Link}
      href={args.destination}
      id={args.id}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Text link",
          value: args.text,
          className: classNames(sty.slotText, {
            [sty.slotText__color_brand]: hasVariant(variants, "color", "brand"),
            [sty.slotText__color_dark]: hasVariant(variants, "color", "dark"),
            [sty.slotText__color_headline]: hasVariant(
              variants,
              "color",
              "headline"
            ),

            [sty.slotText__color_light]: hasVariant(variants, "color", "light"),
            [sty.slotText__color_light_size__14]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "size", "_14"),
            [sty.slotText__color_light_size__24]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "size", "_24"),
            [sty.slotText__color_light_size__32]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "size", "_32"),
            [sty.slotText__color_light_size__40]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "size", "_40"),
            [sty.slotText__size__10]: hasVariant(variants, "size", "_10"),
            [sty.slotText__size__12]: hasVariant(variants, "size", "_12"),
            [sty.slotText__size__14]: hasVariant(variants, "size", "_14"),
            [sty.slotText__size__16]: hasVariant(variants, "size", "_16"),
            [sty.slotText__size__16_color_light]:
              hasVariant(variants, "size", "_16") &&
              hasVariant(variants, "color", "light"),
            [sty.slotText__size__18]: hasVariant(variants, "size", "_18"),
            [sty.slotText__size__18_color_light]:
              hasVariant(variants, "size", "_18") &&
              hasVariant(variants, "color", "light"),
            [sty.slotText__size__24]: hasVariant(variants, "size", "_24"),
            [sty.slotText__size__32]: hasVariant(variants, "size", "_32"),
            [sty.slotText__size__36]: hasVariant(variants, "size", "_36"),
            [sty.slotText__size__40]: hasVariant(variants, "size", "_40"),
            [sty.slotText__size__8]: hasVariant(variants, "size", "_8")
          })
        })}
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent"],
  parent: ["parent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextLinkUnderlinePrimary__ArgProps,
      internalVariantPropNames: PlasmicTextLinkUnderlinePrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTextLinkUnderlinePrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextLinkUnderlinePrimary";
  } else {
    func.displayName = `PlasmicTextLinkUnderlinePrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicTextLinkUnderlinePrimary = Object.assign(
  // Top-level PlasmicTextLinkUnderlinePrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    // Metadata about props expected for PlasmicTextLinkUnderlinePrimary
    internalVariantProps: PlasmicTextLinkUnderlinePrimary__VariantProps,
    internalArgProps: PlasmicTextLinkUnderlinePrimary__ArgProps
  }
);

export default PlasmicTextLinkUnderlinePrimary;
/* prettier-ignore-end */