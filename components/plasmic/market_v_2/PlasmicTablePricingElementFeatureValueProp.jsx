// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: oaIycARoQY
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTablePricingElementFeatureValueProp.module.css"; // plasmic-import: oaIycARoQY/css
import Icon129Icon from "./icons/PlasmicIcon__Icon129"; // plasmic-import: 1Q3PXgbL-f/icon

export const PlasmicTablePricingElementFeatureValueProp__VariantProps =
  new Array("size");

export const PlasmicTablePricingElementFeatureValueProp__ArgProps = new Array(
  "featureValueText",
  "svgCheck"
);

function PlasmicTablePricingElementFeatureValueProp__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize__16Px]: hasVariant(variants, "size", "_16Px"),
          [sty.rootsize__24Px]: hasVariant(variants, "size", "_24Px")
        }
      )}
    >
      <div
        data-plasmic-name={"svgIconParent"}
        data-plasmic-override={overrides.svgIconParent}
        className={classNames(projectcss.all, sty.svgIconParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div className={classNames(projectcss.all, sty.freeBox__zo7V)}>
              <Icon129Icon
                className={classNames(projectcss.all, sty.svg___6OINe)}
                role={"img"}
              />
            </div>
          ),

          value: args.svgCheck,
          className: classNames(sty.slotTargetSvgCheck, {
            [sty.slotTargetSvgChecksize__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}
      </div>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxsize__16Px]: hasVariant(variants, "size", "_16Px")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "feature value proposition",
          value: args.featureValueText,
          className: classNames(sty.slotTargetFeatureValueText, {
            [sty.slotTargetFeatureValueTextsize__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svgIconParent", "freeBox"],
  svgIconParent: ["svgIconParent"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames:
        PlasmicTablePricingElementFeatureValueProp__ArgProps,
      internalVariantPropNames:
        PlasmicTablePricingElementFeatureValueProp__VariantProps
    });

    return PlasmicTablePricingElementFeatureValueProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTablePricingElementFeatureValueProp";
  } else {
    func.displayName = `PlasmicTablePricingElementFeatureValueProp.${nodeName}`;
  }
  return func;
}

export const PlasmicTablePricingElementFeatureValueProp = Object.assign(
  // Top-level PlasmicTablePricingElementFeatureValueProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svgIconParent: makeNodeComponent("svgIconParent"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicTablePricingElementFeatureValueProp
    internalVariantProps:
      PlasmicTablePricingElementFeatureValueProp__VariantProps,
    internalArgProps: PlasmicTablePricingElementFeatureValueProp__ArgProps
  }
);

export default PlasmicTablePricingElementFeatureValueProp;
/* prettier-ignore-end */
