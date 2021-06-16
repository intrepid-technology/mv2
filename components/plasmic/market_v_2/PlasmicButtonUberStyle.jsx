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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonUberStyle.module.css"; // plasmic-import: JpZ_1tH-Ag/css

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
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"linkParent"}
      data-plasmic-override={overrides.linkParent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.linkParent,
        {
          [sty.linkParent__size__140]: hasVariant(variants, "size", "_140"),
          [sty.linkParent__size__160]: hasVariant(variants, "size", "_160"),
          [sty.linkParent__size__270]: hasVariant(variants, "size", "_270"),
          [sty.linkParent__size__360]: hasVariant(variants, "size", "_360"),
          [sty.linkParent__size__90]: hasVariant(variants, "size", "_90")
        }
      )}
      component={Link}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"contentParent"}
        data-plasmic-override={overrides.contentParent}
        className={classNames(defaultcss.all, sty.contentParent, {
          [sty.contentParent__size__140]: hasVariant(variants, "size", "_140"),
          [sty.contentParent__size__160]: hasVariant(variants, "size", "_160"),
          [sty.contentParent__size__270]: hasVariant(variants, "size", "_270"),
          [sty.contentParent__size__320]: hasVariant(variants, "size", "_320"),
          [sty.contentParent__size__360]: hasVariant(variants, "size", "_360"),
          [sty.contentParent__size__90]: hasVariant(variants, "size", "_90")
        })}
      >
        <div
          data-plasmic-name={"textIconParent"}
          data-plasmic-override={overrides.textIconParent}
          className={classNames(defaultcss.all, sty.textIconParent, {
            [sty.textIconParent__size__140]: hasVariant(
              variants,
              "size",
              "_140"
            ),

            [sty.textIconParent__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            )
          })}
        >
          <div
            data-plasmic-name={"textParent"}
            data-plasmic-override={overrides.textParent}
            className={classNames(defaultcss.all, sty.textParent, {
              [sty.textParent__size__140]: hasVariant(variants, "size", "_140"),
              [sty.textParent__size__90]: hasVariant(variants, "size", "_90")
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
                  className: classNames(sty.slotChildren, {
                    [sty.slotChildren__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotChildren__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotChildren__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotChildren__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotChildren__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotChildren__size__90]: hasVariant(
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
                  className: classNames(sty.slotText90, {
                    [sty.slotText90__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotText90__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotText90__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotText90__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotText90__size__90]: hasVariant(
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
                  className: classNames(sty.slotText140, {
                    [sty.slotText140__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotText140__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotText140__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotText140__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotText140__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotText140__size__90]: hasVariant(
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
            className={classNames(defaultcss.all, sty.arrowParent, {
              [sty.arrowParent__size__140]: hasVariant(
                variants,
                "size",
                "_140"
              ),

              [sty.arrowParent__size__160]: hasVariant(
                variants,
                "size",
                "_160"
              ),

              [sty.arrowParent__size__270]: hasVariant(
                variants,
                "size",
                "_270"
              ),

              [sty.arrowParent__size__320]: hasVariant(
                variants,
                "size",
                "_320"
              ),

              [sty.arrowParent__size__360]: hasVariant(
                variants,
                "size",
                "_360"
              ),

              [sty.arrowParent__size__90]: hasVariant(variants, "size", "_90")
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
                  className: classNames(sty.slotSlot, {
                    [sty.slotSlot__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotSlot__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotSlot__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotSlot__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotSlot__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotSlot__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow160, {
                    [sty.slotArrow160__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow160__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow160__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow160__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow160__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow270, {
                    [sty.slotArrow270__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow270__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow270__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotArrow270__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow270__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow270__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow140, {
                    [sty.slotArrow140__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow140__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow140__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotArrow140__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow140__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow140__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow360, {
                    [sty.slotArrow360__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow360__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow360__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotArrow360__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow360__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow360__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow320, {
                    [sty.slotArrow320__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow320__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow320__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotArrow320__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow320__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow320__size__90]: hasVariant(
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
                  className: classNames(sty.slotArrow90, {
                    [sty.slotArrow90__size__140]: hasVariant(
                      variants,
                      "size",
                      "_140"
                    ),

                    [sty.slotArrow90__size__160]: hasVariant(
                      variants,
                      "size",
                      "_160"
                    ),

                    [sty.slotArrow90__size__270]: hasVariant(
                      variants,
                      "size",
                      "_270"
                    ),

                    [sty.slotArrow90__size__320]: hasVariant(
                      variants,
                      "size",
                      "_320"
                    ),

                    [sty.slotArrow90__size__360]: hasVariant(
                      variants,
                      "size",
                      "_360"
                    ),

                    [sty.slotArrow90__size__90]: hasVariant(
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

    const { dataFetches } = props;
    return PlasmicButtonUberStyle__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
