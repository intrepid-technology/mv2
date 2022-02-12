// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 9E_CoFdNxe
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTablePricingElementPercentValueBold.module.css"; // plasmic-import: 9E_CoFdNxe/css
import Icon164Icon from "./icons/PlasmicIcon__Icon164"; // plasmic-import: ly7C2Lrvqk/icon

export const PlasmicTablePricingElementPercentValueBold__VariantProps =
  new Array();

export const PlasmicTablePricingElementPercentValueBold__ArgProps = new Array(
  "textValueProposition",
  "percent",
  "numberValue",
  "svgIcon"
);

function PlasmicTablePricingElementPercentValueBold__RenderFunc(props) {
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"svgIconParent"}
        data-plasmic-override={overrides.svgIconParent}
        className={classNames(projectcss.all, sty.svgIconParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Icon164Icon
              className={classNames(projectcss.all, sty.svg___9Xm3I)}
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
        className={classNames(projectcss.all, sty.numberValuePercentParent)}
      >
        <div
          data-plasmic-name={"numberValueParent"}
          data-plasmic-override={overrides.numberValueParent}
          className={classNames(projectcss.all, sty.numberValueParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "0",
            value: args.numberValue,
            className: classNames(sty.slotTargetNumberValue)
          })}
        </div>

        <div
          data-plasmic-name={"percentParent"}
          data-plasmic-override={overrides.percentParent}
          className={classNames(projectcss.all, sty.percentParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "%",
            value: args.percent,
            className: classNames(sty.slotTargetPercent)
          })}
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"textValuePropositionParent"}
        data-plasmic-override={overrides.textValuePropositionParent}
        className={classNames(projectcss.all, sty.textValuePropositionParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Payment processing fees",
          value: args.textValueProposition,
          className: classNames(sty.slotTargetTextValueProposition)
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
    "textValuePropositionParent"
  ],

  svgIconParent: ["svgIconParent"],
  numberValuePercentParent: [
    "numberValuePercentParent",
    "numberValueParent",
    "percentParent"
  ],

  numberValueParent: ["numberValueParent"],
  percentParent: ["percentParent"],
  textValuePropositionParent: ["textValuePropositionParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames:
        PlasmicTablePricingElementPercentValueBold__ArgProps,
      internalVariantPropNames:
        PlasmicTablePricingElementPercentValueBold__VariantProps
    });

    return PlasmicTablePricingElementPercentValueBold__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTablePricingElementPercentValueBold";
  } else {
    func.displayName = `PlasmicTablePricingElementPercentValueBold.${nodeName}`;
  }
  return func;
}

export const PlasmicTablePricingElementPercentValueBold = Object.assign(
  // Top-level PlasmicTablePricingElementPercentValueBold renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svgIconParent: makeNodeComponent("svgIconParent"),
    numberValuePercentParent: makeNodeComponent("numberValuePercentParent"),
    numberValueParent: makeNodeComponent("numberValueParent"),
    percentParent: makeNodeComponent("percentParent"),
    textValuePropositionParent: makeNodeComponent("textValuePropositionParent"),
    // Metadata about props expected for PlasmicTablePricingElementPercentValueBold
    internalVariantProps:
      PlasmicTablePricingElementPercentValueBold__VariantProps,
    internalArgProps: PlasmicTablePricingElementPercentValueBold__ArgProps
  }
);

export default PlasmicTablePricingElementPercentValueBold;
/* prettier-ignore-end */
