// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: d7dGAYuRCt
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
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonLinkPrimary.module.css"; // plasmic-import: d7dGAYuRCt/css

export const PlasmicButtonLinkPrimary__VariantProps = new Array(
  "border",
  "type",
  "color",
  "width",
  "height"
);

export const PlasmicButtonLinkPrimary__ArgProps = new Array(
  "destination",
  "id",
  "text"
);

function PlasmicButtonLinkPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.root__border]: hasVariant(variants, "border", "border"),
        [sty.root__height__32]: hasVariant(variants, "height", "_32"),
        [sty.root__height__36]: hasVariant(variants, "height", "_36"),
        [sty.root__height__40]: hasVariant(variants, "height", "_40"),
        [sty.root__height__48]: hasVariant(variants, "height", "_48"),
        [sty.root__type_fill]: hasVariant(variants, "type", "fill"),
        [sty.root__type_fill_color_blue]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_fill_color_brand]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_fill_color_dark]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_fill_color_green]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_fill_color_light]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_fill_color_magenta]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_fill_color_pink]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_fill_color_red]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_fill_color_yellow]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_ghost]: hasVariant(variants, "type", "ghost"),
        [sty.root__type_ghost_color_blue]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_ghost_color_brand]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_ghost_color_dark]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_ghost_color_green]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_ghost_color_light]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_ghost_color_magenta]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_ghost_color_pink]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_ghost_color_red]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_ghost_color_yellow]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_outline]: hasVariant(variants, "type", "outline"),
        [sty.root__type_outline_color_blue]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_outline_color_brand]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_outline_color_dark]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_outline_color_green]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_outline_color_light]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_outline_color_magenta]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_outline_color_pink]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_outline_color_red]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_outline_color_yellow]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_primary_color_blue]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_primary_color_brand]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_primary_color_dark]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_primary_color_green]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_primary_color_light]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_primary_color_magenta]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_primary_color_pink]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_primary_color_red]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_primary_color_yellow]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__width__120]: hasVariant(variants, "width", "_120"),
        [sty.root__width__140]: hasVariant(variants, "width", "_140"),
        [sty.root__width__160]: hasVariant(variants, "width", "_160"),
        [sty.root__width__180]: hasVariant(variants, "width", "_180"),
        [sty.root__width__270]: hasVariant(variants, "width", "_270"),
        [sty.root__width__360]: hasVariant(variants, "width", "_360"),
        [sty.root__width__90]: hasVariant(variants, "width", "_90")
      })}
      component={Link}
      href={args.destination}
      id={args.id}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"textParent"}
          data-plasmic-override={overrides.textParent}
          className={classNames(projectcss.all, sty.textParent, {
            [sty.textParent__color_magenta]: hasVariant(
              variants,
              "color",
              "magenta"
            ),

            [sty.textParent__color_magenta_type_primary]:
              hasVariant(variants, "color", "magenta") &&
              hasVariant(variants, "type", "primary"),
            [sty.textParent__type_fill]: hasVariant(variants, "type", "fill"),
            [sty.textParent__type_fill_color_blue]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_fill_color_brand]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_fill_color_dark]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_fill_color_green]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_fill_color_light]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_fill_color_magenta]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_fill_color_pink]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_fill_color_red]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_fill_color_yellow]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_ghost]: hasVariant(variants, "type", "ghost"),
            [sty.textParent__type_ghost_color_blue]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_ghost_color_dark]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_ghost_color_green]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_ghost_color_light]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_ghost_color_pink]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_ghost_color_red]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_ghost_color_yellow]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),

            [sty.textParent__type_outline_color_blue]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_outline_color_brand]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_outline_color_dark]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_outline_color_green]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_outline_color_light]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_outline_color_magenta]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_outline_color_pink]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_outline_color_red]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_outline_color_yellow]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_primary_color_blue]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_primary_color_brand]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_primary_color_dark]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_primary_color_green]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_primary_color_light]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_primary_color_pink]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_primary_color_red]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_primary_color_yellow]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "yellow")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Hyper Link",
            value: args.text,
            className: classNames(sty.slotTargetText, {
              [sty.slotTargetText__color_magenta]: hasVariant(
                variants,
                "color",
                "magenta"
              ),

              [sty.slotTargetText__color_magenta_type_primary]:
                hasVariant(variants, "color", "magenta") &&
                hasVariant(variants, "type", "primary"),
              [sty.slotTargetText__type_fill]: hasVariant(
                variants,
                "type",
                "fill"
              ),

              [sty.slotTargetText__type_fill_color_blue]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetText__type_fill_color_brand]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotTargetText__type_fill_color_dark]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetText__type_fill_color_green]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetText__type_fill_color_light]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetText__type_fill_color_magenta]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetText__type_fill_color_pink]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetText__type_fill_color_red]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetText__type_fill_color_yellow]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetText__type_ghost]: hasVariant(
                variants,
                "type",
                "ghost"
              ),

              [sty.slotTargetText__type_ghost_color_blue]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetText__type_ghost_color_brand]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotTargetText__type_ghost_color_dark]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetText__type_ghost_color_green]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetText__type_ghost_color_light]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetText__type_ghost_color_magenta]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetText__type_ghost_color_pink]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetText__type_ghost_color_red]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetText__type_ghost_color_yellow]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetText__type_outline]: hasVariant(
                variants,
                "type",
                "outline"
              ),

              [sty.slotTargetText__type_outline_color_blue]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetText__type_outline_color_brand]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotTargetText__type_outline_color_dark]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetText__type_outline_color_green]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetText__type_outline_color_light]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetText__type_outline_color_magenta]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetText__type_outline_color_pink]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetText__type_outline_color_red]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetText__type_outline_color_yellow]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetText__type_primary_color_blue]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetText__type_primary_color_brand]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotTargetText__type_primary_color_dark]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetText__type_primary_color_green]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetText__type_primary_color_light]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetText__type_primary_color_pink]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetText__type_primary_color_red]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetText__type_primary_color_yellow]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "yellow")
            })
          })}
        </div>
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "textParent"],
  freeBox: ["freeBox", "textParent"],
  textParent: ["textParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonLinkPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonLinkPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonLinkPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonLinkPrimary";
  } else {
    func.displayName = `PlasmicButtonLinkPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonLinkPrimary = Object.assign(
  // Top-level PlasmicButtonLinkPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    textParent: makeNodeComponent("textParent"),
    // Metadata about props expected for PlasmicButtonLinkPrimary
    internalVariantProps: PlasmicButtonLinkPrimary__VariantProps,
    internalArgProps: PlasmicButtonLinkPrimary__ArgProps
  }
);

export default PlasmicButtonLinkPrimary;
/* prettier-ignore-end */
