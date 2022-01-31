// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: JpZ_1tH-Ag
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
import sty from "./PlasmicButtonUberStyle.module.css"; // plasmic-import: JpZ_1tH-Ag/css

export const PlasmicButtonUberStyle__VariantProps = new Array("size");

export const PlasmicButtonUberStyle__ArgProps = new Array(
  "children",
  "slot",
  "text90",
  "text140",
  "arrow160",
  "arrow270",
  "arrow140",
  "arrow360",
  "arrow320",
  "arrow90",
  "target"
);

function PlasmicButtonUberStyle__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"linkParent"}
      data-plasmic-override={overrides.linkParent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        sty.linkParent,
        {
          [sty.linkParentsize__140]: hasVariant(variants, "size", "_140"),
          [sty.linkParentsize__160]: hasVariant(variants, "size", "_160"),
          [sty.linkParentsize__270]: hasVariant(variants, "size", "_270"),
          [sty.linkParentsize__360]: hasVariant(variants, "size", "_360"),
          [sty.linkParentsize__90]: hasVariant(variants, "size", "_90")
        }
      )}
      component={Link}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"contentParent"}
        data-plasmic-override={overrides.contentParent}
        className={classNames(projectcss.all, sty.contentParent, {
          [sty.contentParentsize__140]: hasVariant(variants, "size", "_140"),
          [sty.contentParentsize__160]: hasVariant(variants, "size", "_160"),
          [sty.contentParentsize__270]: hasVariant(variants, "size", "_270"),
          [sty.contentParentsize__320]: hasVariant(variants, "size", "_320"),
          [sty.contentParentsize__360]: hasVariant(variants, "size", "_360"),
          [sty.contentParentsize__90]: hasVariant(variants, "size", "_90")
        })}
      >
        <div
          data-plasmic-name={"textIconParent"}
          data-plasmic-override={overrides.textIconParent}
          className={classNames(projectcss.all, sty.textIconParent, {
            [sty.textIconParentsize__140]: hasVariant(variants, "size", "_140"),
            [sty.textIconParentsize__360]: hasVariant(variants, "size", "_360")
          })}
        >
          <div
            data-plasmic-name={"textParent"}
            data-plasmic-override={overrides.textParent}
            className={classNames(projectcss.all, sty.textParent, {
              [sty.textParentsize__140]: hasVariant(variants, "size", "_140"),
              [sty.textParentsize__90]: hasVariant(variants, "size", "_90")
            })}
          >
            {(
              hasVariant(variants, "size", "_140")
                ? false
                : hasVariant(variants, "size", "_90")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "click me",
                  value: args.children,
                  className: classNames(sty.slotTargetChildren, {
                    [sty.slotTargetChildrensize__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetChildrensize__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetChildrensize__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetChildrensize__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetChildrensize__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetChildrensize__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(hasVariant(variants, "size", "_90") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: "click me",
                  value: args.text90,
                  className: classNames(sty.slotTargetText90, {
                    [sty.slotTargetText90size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetText90size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetText90size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetText90size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetText90size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_140")
                ? true
                : hasVariant(variants, "size", "_90")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "click me",
                  value: args.text140,
                  className: classNames(sty.slotTargetText140, {
                    [sty.slotTargetText140size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetText140size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetText140size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetText140size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetText140size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetText140size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
          </div>

          <div
            data-plasmic-name={"arrowParent"}
            data-plasmic-override={overrides.arrowParent}
            className={classNames(projectcss.all, sty.arrowParent, {
              [sty.arrowParentsize__140]: hasVariant(variants, "size", "_140"),
              [sty.arrowParentsize__160]: hasVariant(variants, "size", "_160"),
              [sty.arrowParentsize__270]: hasVariant(variants, "size", "_270"),
              [sty.arrowParentsize__320]: hasVariant(variants, "size", "_320"),
              [sty.arrowParentsize__360]: hasVariant(variants, "size", "_360"),
              [sty.arrowParentsize__90]: hasVariant(variants, "size", "_90")
            })}
          >
            {(
              hasVariant(variants, "size", "_360")
                ? false
                : hasVariant(variants, "size", "_320")
                ? false
                : hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_160")
                ? false
                : hasVariant(variants, "size", "_140")
                ? false
                : hasVariant(variants, "size", "_90")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot, {
                    [sty.slotTargetSlotsize__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetSlotsize__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetSlotsize__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetSlotsize__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetSlotsize__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetSlotsize__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(hasVariant(variants, "size", "_160") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow160,
                  className: classNames(sty.slotTargetArrow160, {
                    [sty.slotTargetArrow160size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow160size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow160size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow160size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow160size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_270")
                ? true
                : hasVariant(variants, "size", "_160")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow270,
                  className: classNames(sty.slotTargetArrow270, {
                    [sty.slotTargetArrow270size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow270size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow270size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetArrow270size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow270size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow270size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_160")
                ? false
                : hasVariant(variants, "size", "_140")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow140,
                  className: classNames(sty.slotTargetArrow140, {
                    [sty.slotTargetArrow140size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow140size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow140size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetArrow140size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow140size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow140size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_360")
                ? true
                : hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_160")
                ? false
                : hasVariant(variants, "size", "_140")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow360,
                  className: classNames(sty.slotTargetArrow360, {
                    [sty.slotTargetArrow360size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow360size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow360size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetArrow360size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow360size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow360size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_360")
                ? false
                : hasVariant(variants, "size", "_320")
                ? true
                : hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_160")
                ? false
                : hasVariant(variants, "size", "_140")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow320,
                  className: classNames(sty.slotTargetArrow320, {
                    [sty.slotTargetArrow320size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow320size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow320size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetArrow320size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow320size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow320size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "size", "_360")
                ? false
                : hasVariant(variants, "size", "_320")
                ? false
                : hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_160")
                ? false
                : hasVariant(variants, "size", "_140")
                ? false
                : hasVariant(variants, "size", "_90")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: ">",
                  value: args.arrow90,
                  className: classNames(sty.slotTargetArrow90, {
                    [sty.slotTargetArrow90size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotTargetArrow90size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotTargetArrow90size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotTargetArrow90size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotTargetArrow90size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotTargetArrow90size__90]: hasVariant(
                      variants,
                      "size",
                      "_90"
                    )
                  })
                })
              : null}
          </div>
        </div>
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  linkParent: [
    "linkParent",
    "contentParent",
    "textIconParent",
    "textParent",
    "arrowParent"
  ],

  contentParent: [
    "contentParent",
    "textIconParent",
    "textParent",
    "arrowParent"
  ],

  textIconParent: ["textIconParent", "textParent", "arrowParent"],
  textParent: ["textParent"],
  arrowParent: ["arrowParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonUberStyle__ArgProps,
      internalVariantPropNames: PlasmicButtonUberStyle__VariantProps
    });

    return PlasmicButtonUberStyle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "linkParent") {
    func.displayName = "PlasmicButtonUberStyle";
  } else {
    func.displayName = `PlasmicButtonUberStyle.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonUberStyle = Object.assign(
  // Top-level PlasmicButtonUberStyle renders the root element
  makeNodeComponent("linkParent"),
  {
    // Helper components rendering sub-elements
    contentParent: makeNodeComponent("contentParent"),
    textIconParent: makeNodeComponent("textIconParent"),
    textParent: makeNodeComponent("textParent"),
    arrowParent: makeNodeComponent("arrowParent"),
    // Metadata about props expected for PlasmicButtonUberStyle
    internalVariantProps: PlasmicButtonUberStyle__VariantProps,
    internalArgProps: PlasmicButtonUberStyle__ArgProps
  }
);

export default PlasmicButtonUberStyle;
/* prettier-ignore-end */
