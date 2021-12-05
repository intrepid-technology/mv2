// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: xX5RC18j8u
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTablePricingElementNumberValue.module.css"; // plasmic-import: xX5RC18j8u/css
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon

export const PlasmicTablePricingElementNumberValue__VariantProps = new Array();

export const PlasmicTablePricingElementNumberValue__ArgProps = new Array(
  "featureValueText",
  "percent",
  "numberValue",
  "svgIcon"
);

function PlasmicTablePricingElementNumberValue__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"svgIconParent"}
        data-plasmic-override={overrides.svgIconParent}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.svgIconParent
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <ListingIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg___3Ghg2
              )}
              role={"img"}
            />
          ),

          value: args.svgIcon
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"numberValuePercentParent"}
        data-plasmic-override={overrides.numberValuePercentParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.numberValuePercentParent
        )}
      >
        <div
          data-plasmic-name={"numberValueParent"}
          data-plasmic-override={overrides.numberValueParent}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.numberValueParent
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: "3",
            value: args.numberValue,
            className: classNames(sty.slotTargetNumberValue)
          })}
        </div>

        <div
          data-plasmic-name={"percentParent"}
          data-plasmic-override={overrides.percentParent}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.percentParent
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: "$",
            value: args.percent,
            className: classNames(sty.slotTargetPercent)
          })}
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"featurevalueTextParent"}
        data-plasmic-override={overrides.featurevalueTextParent}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.featurevalueTextParent
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Standard rate per listing",
          value: args.featureValueText,
          className: classNames(sty.slotTargetFeatureValueText)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "svgIconParent",
    "numberValuePercentParent",
    "numberValueParent",
    "percentParent",
    "featurevalueTextParent"
  ],

  svgIconParent: ["svgIconParent"],
  numberValuePercentParent: [
    "numberValuePercentParent",
    "numberValueParent",
    "percentParent"
  ],

  numberValueParent: ["numberValueParent"],
  percentParent: ["percentParent"],
  featurevalueTextParent: ["featurevalueTextParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTablePricingElementNumberValue__ArgProps,
      internalVariantPropNames:
        PlasmicTablePricingElementNumberValue__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTablePricingElementNumberValue__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTablePricingElementNumberValue";
  } else {
    func.displayName = `PlasmicTablePricingElementNumberValue.${nodeName}`;
  }
  return func;
}

export const PlasmicTablePricingElementNumberValue = Object.assign(
  // Top-level PlasmicTablePricingElementNumberValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svgIconParent: makeNodeComponent("svgIconParent"),
    numberValuePercentParent: makeNodeComponent("numberValuePercentParent"),
    numberValueParent: makeNodeComponent("numberValueParent"),
    percentParent: makeNodeComponent("percentParent"),
    featurevalueTextParent: makeNodeComponent("featurevalueTextParent"),
    // Metadata about props expected for PlasmicTablePricingElementNumberValue
    internalVariantProps: PlasmicTablePricingElementNumberValue__VariantProps,
    internalArgProps: PlasmicTablePricingElementNumberValue__ArgProps
  }
);

export default PlasmicTablePricingElementNumberValue;
/* prettier-ignore-end */
