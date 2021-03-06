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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicButtonLinkPrimary.module.css"; // plasmic-import: d7dGAYuRCt/css

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
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborder]: hasVariant(variants, "border", "border"),
          [sty.rootcolor_blue_type_fill]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "blue"),
          [sty.rootcolor_blue_type_outline]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "blue"),
          [sty.rootcolor_blue_type_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "blue"),
          [sty.rootcolor_dark_type_fill]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "dark"),
          [sty.rootcolor_dark_type_ghost]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "dark"),
          [sty.rootcolor_dark_type_outline]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "dark"),
          [sty.rootcolor_dark_type_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "dark"),
          [sty.rootcolor_green_type_fill]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "green"),
          [sty.rootcolor_green_type_outline]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "green"),
          [sty.rootcolor_green_type_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "green"),
          [sty.rootcolor_pink_type_fill]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "pink"),
          [sty.rootcolor_pink_type_ghost]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "pink"),
          [sty.rootcolor_pink_type_outline]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "pink"),
          [sty.rootcolor_pink_type_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "pink"),
          [sty.rootcolor_yellow_type_fill]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "yellow"),
          [sty.rootcolor_yellow_type_ghost]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "yellow"),
          [sty.rootcolor_yellow_type_outline]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "yellow"),
          [sty.rootcolor_yellow_type_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "yellow"),
          [sty.rootheight__32]: hasVariant(variants, "height", "_32"),
          [sty.rootheight__36]: hasVariant(variants, "height", "_36"),
          [sty.rootheight__40]: hasVariant(variants, "height", "_40"),
          [sty.rootheight__48]: hasVariant(variants, "height", "_48"),
          [sty.rootheight_stretch]: hasVariant(variants, "height", "stretch"),
          [sty.roottype_fill]: hasVariant(variants, "type", "fill"),
          [sty.roottype_fill_color_light]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "light"),
          [sty.roottype_fill_color_magenta]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "magenta"),
          [sty.roottype_fill_color_primary]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "primary"),
          [sty.roottype_fill_color_red]:
            hasVariant(variants, "type", "fill") &&
            hasVariant(variants, "color", "red"),
          [sty.roottype_ghost]: hasVariant(variants, "type", "ghost"),
          [sty.roottype_ghost_color_blue]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "blue"),
          [sty.roottype_ghost_color_green]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "green"),
          [sty.roottype_ghost_color_light]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "light"),
          [sty.roottype_ghost_color_magenta]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "magenta"),
          [sty.roottype_ghost_color_primary]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "primary"),
          [sty.roottype_ghost_color_red]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "red"),
          [sty.roottype_outline]: hasVariant(variants, "type", "outline"),
          [sty.roottype_outline_color_light]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "light"),
          [sty.roottype_outline_color_magenta]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "magenta"),
          [sty.roottype_outline_color_primary]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "primary"),
          [sty.roottype_outline_color_red]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "red"),
          [sty.roottype_primary]: hasVariant(variants, "type", "primary"),
          [sty.roottype_primary_color_light]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "light"),
          [sty.roottype_primary_color_magenta]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "magenta"),
          [sty.roottype_primary_color_primary]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "primary"),
          [sty.roottype_primary_color_red]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "red"),
          [sty.rootwidth__120]: hasVariant(variants, "width", "_120"),
          [sty.rootwidth__140]: hasVariant(variants, "width", "_140"),
          [sty.rootwidth__160]: hasVariant(variants, "width", "_160"),
          [sty.rootwidth__180]: hasVariant(variants, "width", "_180"),
          [sty.rootwidth__270]: hasVariant(variants, "width", "_270"),
          [sty.rootwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.rootwidth__90]: hasVariant(variants, "width", "_90"),
          [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
        }
      )}
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
            [sty.textParentcolor_blue_type_fill]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParentcolor_blue_type_outline]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParentcolor_blue_type_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParentcolor_dark_type_fill]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParentcolor_dark_type_ghost]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParentcolor_dark_type_outline]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParentcolor_dark_type_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParentcolor_green_type_fill]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "green"),
            [sty.textParentcolor_green_type_outline]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "green"),
            [sty.textParentcolor_green_type_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "green"),
            [sty.textParentcolor_magenta]: hasVariant(
              variants,
              "color",
              "magenta"
            ),

            [sty.textParentcolor_pink_type_fill]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParentcolor_pink_type_ghost]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParentcolor_pink_type_outline]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParentcolor_pink_type_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParentcolor_yellow_type_fill]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParentcolor_yellow_type_ghost]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParentcolor_yellow_type_outline]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParentcolor_yellow_type_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParenttype_fill]: hasVariant(variants, "type", "fill"),
            [sty.textParenttype_fill_color_light]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "light"),
            [sty.textParenttype_fill_color_magenta]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParenttype_fill_color_primary]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "primary"),
            [sty.textParenttype_fill_color_red]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "red"),
            [sty.textParenttype_ghost]: hasVariant(variants, "type", "ghost"),
            [sty.textParenttype_ghost_color_blue]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParenttype_ghost_color_green]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "green"),
            [sty.textParenttype_ghost_color_light]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "light"),
            [sty.textParenttype_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParenttype_ghost_color_primary]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "primary"),
            [sty.textParenttype_ghost_color_red]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "red"),
            [sty.textParenttype_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),

            [sty.textParenttype_outline_color_light]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "light"),
            [sty.textParenttype_outline_color_magenta]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParenttype_outline_color_primary]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "primary"),
            [sty.textParenttype_outline_color_red]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "red"),
            [sty.textParenttype_primary_color_light]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "light"),
            [sty.textParenttype_primary_color_magenta]:
              hasVariant(variants, "color", "magenta") &&
              hasVariant(variants, "type", "primary"),
            [sty.textParenttype_primary_color_primary]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "primary"),
            [sty.textParenttype_primary_color_red]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "red")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Link",
            value: args.text,
            className: classNames(sty.slotTargetText, {
              [sty.slotTargetTextcolor_blue_type_fill]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetTextcolor_blue_type_outline]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetTextcolor_blue_type_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetTextcolor_dark_type_fill]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetTextcolor_dark_type_ghost]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetTextcolor_dark_type_outline]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetTextcolor_dark_type_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotTargetTextcolor_green_type_fill]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetTextcolor_green_type_outline]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetTextcolor_green_type_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetTextcolor_magenta]: hasVariant(
                variants,
                "color",
                "magenta"
              ),

              [sty.slotTargetTextcolor_pink_type_fill]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetTextcolor_pink_type_ghost]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetTextcolor_pink_type_outline]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetTextcolor_pink_type_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotTargetTextcolor_yellow_type_fill]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetTextcolor_yellow_type_ghost]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetTextcolor_yellow_type_outline]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetTextcolor_yellow_type_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotTargetTexttype_fill]: hasVariant(
                variants,
                "type",
                "fill"
              ),

              [sty.slotTargetTexttype_fill_color_light]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetTexttype_fill_color_magenta]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetTexttype_fill_color_primary]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "primary"),
              [sty.slotTargetTexttype_fill_color_red]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetTexttype_ghost]: hasVariant(
                variants,
                "type",
                "ghost"
              ),

              [sty.slotTargetTexttype_ghost_color_blue]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotTargetTexttype_ghost_color_green]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetTexttype_ghost_color_light]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetTexttype_ghost_color_magenta]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetTexttype_ghost_color_primary]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "primary"),
              [sty.slotTargetTexttype_ghost_color_red]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetTexttype_outline]: hasVariant(
                variants,
                "type",
                "outline"
              ),

              [sty.slotTargetTexttype_outline_color_light]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetTexttype_outline_color_magenta]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotTargetTexttype_outline_color_primary]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "primary"),
              [sty.slotTargetTexttype_outline_color_red]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "red"),
              [sty.slotTargetTexttype_primary_color_light]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "light"),
              [sty.slotTargetTexttype_primary_color_magenta]:
                hasVariant(variants, "color", "magenta") &&
                hasVariant(variants, "type", "primary"),
              [sty.slotTargetTexttype_primary_color_primary]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "primary"),
              [sty.slotTargetTexttype_primary_color_red]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "red")
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

    return PlasmicButtonLinkPrimary__RenderFunc({
      variants,
      args,
      overrides,
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
