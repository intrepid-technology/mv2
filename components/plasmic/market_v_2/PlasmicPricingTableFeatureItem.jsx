// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: YQmJm_xVDH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPricingTableFeatureItem.module.css"; // plasmic-import: YQmJm_xVDH/css
import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Ebjr5Ebml/icon

export const PlasmicPricingTableFeatureItem__VariantProps = new Array(
  "checkColor"
);

export const PlasmicPricingTableFeatureItem__ArgProps = new Array("children");

function PlasmicPricingTableFeatureItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___4BgBl, {
            [sty.freeBox__checkColor_brand___4BgBlYkqEy]: hasVariant(
              variants,
              "checkColor",
              "brand"
            ),

            [sty.freeBox__checkColor_green___4BgBlEfoTm]: hasVariant(
              variants,
              "checkColor",
              "green"
            )
          })}
        >
          <CircleCheckedIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg, {
              [sty.svg__checkColor_brand]: hasVariant(
                variants,
                "checkColor",
                "brand"
              ),

              [sty.svg__checkColor_dark]: hasVariant(
                variants,
                "checkColor",
                "dark"
              ),

              [sty.svg__checkColor_green]: hasVariant(
                variants,
                "checkColor",
                "green"
              )
            })}
            role={"img"}
          />
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__agVd)}>
        {p.renderPlasmicSlot({
          defaultContents: "Pricing table feature item",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingTableFeatureItem__ArgProps,
      internalVariantPropNames: PlasmicPricingTableFeatureItem__VariantProps
    });

    return PlasmicPricingTableFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingTableFeatureItem";
  } else {
    func.displayName = `PlasmicPricingTableFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingTableFeatureItem = Object.assign(
  // Top-level PlasmicPricingTableFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicPricingTableFeatureItem
    internalVariantProps: PlasmicPricingTableFeatureItem__VariantProps,
    internalArgProps: PlasmicPricingTableFeatureItem__ArgProps
  }
);

export default PlasmicPricingTableFeatureItem;
/* prettier-ignore-end */
