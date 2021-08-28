// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Un5cNvAvgb
import * as React from "react";
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
import * as sty from "./PlasmicElementAnalyticsPercentValueChange.module.css"; // plasmic-import: Un5cNvAvgb/css
import OptionalFixedBrandColorIcon from "./icons/PlasmicIcon__OptionalFixedBrandColor"; // plasmic-import: Lsqk-ADBoKU/icon
import MinusBoldIcon from "./icons/PlasmicIcon__MinusBold"; // plasmic-import: AE2h3Tocsq/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicElementAnalyticsPercentValueChange__VariantProps =
  new Array("integer");

export const PlasmicElementAnalyticsPercentValueChange__ArgProps = new Array(
  "numberValueParent",
  "percentParent",
  "svgparent",
  "svgParentMinus",
  "svgParentPlus",
  "numberValueParentPlus",
  "percentParentPlus",
  "numberValueParentMinus",
  "percentParentMinus",
  "numberValueParentNoChange",
  "percentParentNoChange"
);

function PlasmicElementAnalyticsPercentValueChange__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent)}
    >
      {(hasVariant(variants, "integer", "noChange") ? false : true) ? (
        <div
          data-plasmic-name={"svgparent"}
          data-plasmic-override={overrides.svgparent}
          className={classNames(defaultcss.all, sty.svgparent, {
            [sty.svgparent__integer_minus]: hasVariant(
              variants,
              "integer",
              "minus"
            ),

            [sty.svgparent__integer_noChange]: hasVariant(
              variants,
              "integer",
              "noChange"
            ),

            [sty.svgparent__integer_plus]: hasVariant(
              variants,
              "integer",
              "plus"
            )
          })}
        >
          {(
            hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <OptionalFixedBrandColorIcon
                    className={classNames(defaultcss.all, sty.svg__m0IrF)}
                    role={"img"}
                  />
                ),

                value: args.svgparent
              })
            : null}
          {(hasVariant(variants, "integer", "minus") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <MinusBoldIcon
                    className={classNames(defaultcss.all, sty.svg___2OLc)}
                    role={"img"}
                  />
                ),

                value: args.svgParentMinus
              })
            : null}
          {(
            hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <PlusBoldIcon
                    className={classNames(defaultcss.all, sty.svg__aFcD)}
                    role={"img"}
                  />
                ),

                value: args.svgParentPlus
              })
            : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"numberValuePercentParent"}
        data-plasmic-override={overrides.numberValuePercentParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.numberValuePercentParent)}
      >
        <div
          data-plasmic-name={"numberValueParent"}
          data-plasmic-override={overrides.numberValueParent}
          className={classNames(defaultcss.all, sty.numberValueParent, {
            [sty.numberValueParent__integer_minus]: hasVariant(
              variants,
              "integer",
              "minus"
            ),

            [sty.numberValueParent__integer_noChange]: hasVariant(
              variants,
              "integer",
              "noChange"
            ),

            [sty.numberValueParent__integer_plus]: hasVariant(
              variants,
              "integer",
              "plus"
            )
          })}
        >
          {(
            hasVariant(variants, "integer", "noChange")
              ? false
              : hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__nqe9N
                    )}
                  >
                    {"XXXX.XX"}
                  </div>
                ),

                value: args.numberValueParent,
                className: classNames(sty.slotNumberValueParent, {
                  [sty.slotNumberValueParent__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotNumberValueParent__integer_noChange]: hasVariant(
                    variants,
                    "integer",
                    "noChange"
                  ),

                  [sty.slotNumberValueParent__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(hasVariant(variants, "integer", "plus") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___3Hljv
                    )}
                  >
                    {"XXXX.XX"}
                  </div>
                ),

                value: args.numberValueParentPlus,
                className: classNames(sty.slotNumberValueParentPlus, {
                  [sty.slotNumberValueParentPlus__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotNumberValueParentPlus__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "integer", "minus")
              ? true
              : hasVariant(variants, "integer", "plus")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__zcvOc
                    )}
                  >
                    {"XXXX.XX"}
                  </div>
                ),

                value: args.numberValueParentMinus,
                className: classNames(sty.slotNumberValueParentMinus, {
                  [sty.slotNumberValueParentMinus__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotNumberValueParentMinus__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "integer", "noChange")
              ? true
              : hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__inWg
                    )}
                  >
                    {"-"}
                  </div>
                ),

                value: args.numberValueParentNoChange,
                className: classNames(sty.slotNumberValueParentNoChange, {
                  [sty.slotNumberValueParentNoChange__integer_minus]:
                    hasVariant(variants, "integer", "minus"),
                  [sty.slotNumberValueParentNoChange__integer_noChange]:
                    hasVariant(variants, "integer", "noChange"),
                  [sty.slotNumberValueParentNoChange__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
        </div>

        <div
          data-plasmic-name={"percentParent"}
          data-plasmic-override={overrides.percentParent}
          className={classNames(defaultcss.all, sty.percentParent, {
            [sty.percentParent__integer_minus]: hasVariant(
              variants,
              "integer",
              "minus"
            ),

            [sty.percentParent__integer_noChange]: hasVariant(
              variants,
              "integer",
              "noChange"
            ),

            [sty.percentParent__integer_plus]: hasVariant(
              variants,
              "integer",
              "plus"
            )
          })}
        >
          {(
            hasVariant(variants, "integer", "noChange")
              ? false
              : hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__qWu5
                    )}
                  >
                    {"%"}
                  </div>
                ),

                value: args.percentParent,
                className: classNames(sty.slotPercentParent, {
                  [sty.slotPercentParent__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotPercentParent__integer_noChange]: hasVariant(
                    variants,
                    "integer",
                    "noChange"
                  ),

                  [sty.slotPercentParent__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(hasVariant(variants, "integer", "plus") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__rQl
                    )}
                  >
                    {"%"}
                  </div>
                ),

                value: args.percentParentPlus,
                className: classNames(sty.slotPercentParentPlus, {
                  [sty.slotPercentParentPlus__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotPercentParentPlus__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "integer", "minus")
              ? true
              : hasVariant(variants, "integer", "plus")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__ioUwU
                    )}
                  >
                    {"%"}
                  </div>
                ),

                value: args.percentParentMinus,
                className: classNames(sty.slotPercentParentMinus, {
                  [sty.slotPercentParentMinus__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotPercentParentMinus__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "integer", "noChange")
              ? true
              : hasVariant(variants, "integer", "minus")
              ? false
              : hasVariant(variants, "integer", "plus")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___03RQv
                    )}
                  >
                    {"%"}
                  </div>
                ),

                value: args.percentParentNoChange,
                className: classNames(sty.slotPercentParentNoChange, {
                  [sty.slotPercentParentNoChange__integer_minus]: hasVariant(
                    variants,
                    "integer",
                    "minus"
                  ),

                  [sty.slotPercentParentNoChange__integer_noChange]: hasVariant(
                    variants,
                    "integer",
                    "noChange"
                  ),

                  [sty.slotPercentParentNoChange__integer_plus]: hasVariant(
                    variants,
                    "integer",
                    "plus"
                  )
                })
              })
            : null}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "svgparent",
    "numberValuePercentParent",
    "numberValueParent",
    "percentParent"
  ],

  svgparent: ["svgparent"],
  numberValuePercentParent: [
    "numberValuePercentParent",
    "numberValueParent",
    "percentParent"
  ],

  numberValueParent: ["numberValueParent"],
  percentParent: ["percentParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementAnalyticsPercentValueChange__ArgProps,
      internalVariantPropNames:
        PlasmicElementAnalyticsPercentValueChange__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementAnalyticsPercentValueChange__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicElementAnalyticsPercentValueChange";
  } else {
    func.displayName = `PlasmicElementAnalyticsPercentValueChange.${nodeName}`;
  }
  return func;
}

export const PlasmicElementAnalyticsPercentValueChange = Object.assign(
  // Top-level PlasmicElementAnalyticsPercentValueChange renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    svgparent: makeNodeComponent("svgparent"),
    numberValuePercentParent: makeNodeComponent("numberValuePercentParent"),
    numberValueParent: makeNodeComponent("numberValueParent"),
    percentParent: makeNodeComponent("percentParent"),
    // Metadata about props expected for PlasmicElementAnalyticsPercentValueChange
    internalVariantProps:
      PlasmicElementAnalyticsPercentValueChange__VariantProps,
    internalArgProps: PlasmicElementAnalyticsPercentValueChange__ArgProps
  }
);

export default PlasmicElementAnalyticsPercentValueChange;
/* prettier-ignore-end */