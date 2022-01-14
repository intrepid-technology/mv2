// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: V3M8MRUkN2Q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TablePricingElementFeatureValueProp from "../../TablePricingElementFeatureValueProp"; // plasmic-import: oaIycARoQY/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicPricingPageElementFeaturesBlock.module.css"; // plasmic-import: V3M8MRUkN2Q/css

export const PlasmicPricingPageElementFeaturesBlock__VariantProps = new Array();

export const PlasmicPricingPageElementFeaturesBlock__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4"
);

function PlasmicPricingPageElementFeaturesBlock__RenderFunc(props) {
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
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Features"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"elementFeatureValueListItems"}
        data-plasmic-override={overrides.elementFeatureValueListItems}
        hasGap={true}
        className={classNames(projectcss.all, sty.elementFeatureValueListItems)}
      >
        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__vkCh6
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mUsKx
                )}
              >
                {"feature value proposition"}
              </div>
            ),

            value: args.children
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp___5F1V7
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fnf3Q
                )}
              >
                {"feature value proposition"}
              </div>
            ),

            value: args.slot
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__fkWe
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot2
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__ej9Xl
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot3
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__lu2Am
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot4
          })}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "elementFeatureValueListItems"],
  text: ["text"],
  elementFeatureValueListItems: ["elementFeatureValueListItems"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingPageElementFeaturesBlock__ArgProps,
      internalVariantPropNames:
        PlasmicPricingPageElementFeaturesBlock__VariantProps
    });

    return PlasmicPricingPageElementFeaturesBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingPageElementFeaturesBlock";
  } else {
    func.displayName = `PlasmicPricingPageElementFeaturesBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingPageElementFeaturesBlock = Object.assign(
  // Top-level PlasmicPricingPageElementFeaturesBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    elementFeatureValueListItems: makeNodeComponent(
      "elementFeatureValueListItems"
    ),

    // Metadata about props expected for PlasmicPricingPageElementFeaturesBlock
    internalVariantProps: PlasmicPricingPageElementFeaturesBlock__VariantProps,
    internalArgProps: PlasmicPricingPageElementFeaturesBlock__ArgProps
  }
);

export default PlasmicPricingPageElementFeaturesBlock;
/* prettier-ignore-end */
