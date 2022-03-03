// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 7N2UMf446In
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TablePricingElementPercentValueBold from "../../TablePricingElementPercentValueBold"; // plasmic-import: 9E_CoFdNxe/component
import TablePricingElementPercentValue from "../../TablePricingElementPercentValue"; // plasmic-import: _pXR7Qf3J2/component
import TablePricingElementNumberValue from "../../TablePricingElementNumberValue"; // plasmic-import: xX5RC18j8u/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicPricingPageElementServiceBlock.module.css"; // plasmic-import: 7N2UMf446In/css
import Icon164Icon from "./icons/PlasmicIcon__Icon164"; // plasmic-import: ly7C2Lrvqk/icon
import FileInvoiceIcon from "./icons/PlasmicIcon__FileInvoice"; // plasmic-import: 5y-W1ac1tp/icon
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon
import Icon169Icon from "./icons/PlasmicIcon__Icon169"; // plasmic-import: kZwjesU0eU/icon

export const PlasmicPricingPageElementServiceBlock__VariantProps = new Array();

export const PlasmicPricingPageElementServiceBlock__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5",
  "featurevalueText",
  "slot7",
  "slot8",
  "slot9",
  "slot10",
  "slot11",
  "slot6",
  "slot12",
  "slot13",
  "slot14",
  "slot15"
);

function PlasmicPricingPageElementServiceBlock__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__fYLa5)}>
        <div className={classNames(projectcss.all, sty.freeBox__puBl3)}>
          {p.renderPlasmicSlot({
            defaultContents: "Service",
            value: args.slot6,
            className: classNames(sty.slotTargetSlot6)
          })}
        </div>
      </div>

      <TablePricingElementPercentValueBold
        data-plasmic-name={"tablePricingElementPercentValueBold"}
        data-plasmic-override={overrides.tablePricingElementPercentValueBold}
        className={classNames(
          "__wab_instance",
          sty.tablePricingElementPercentValueBold
        )}
        numberValue={p.renderPlasmicSlot({
          defaultContents: "0",
          value: args.children
        })}
        percent={p.renderPlasmicSlot({
          defaultContents: "%",
          value: args.slot9
        })}
        svgIcon={p.renderPlasmicSlot({
          defaultContents: (
            <Icon164Icon
              className={classNames(projectcss.all, sty.svg__hgWzK)}
              role={"img"}
            />
          ),

          value: args.slot12
        })}
        textValueProposition={p.renderPlasmicSlot({
          defaultContents: "Payment processing fees",
          value: args.slot11
        })}
      />

      <TablePricingElementPercentValue
        data-plasmic-name={"tablePricingElementPercentValue"}
        data-plasmic-override={overrides.tablePricingElementPercentValue}
        className={classNames(
          "__wab_instance",
          sty.tablePricingElementPercentValue
        )}
        featureValuePropText={p.renderPlasmicSlot({
          defaultContents: "Service rate on earned income",
          value: args.slot4,
          className: classNames(sty.slotTargetSlot4)
        })}
        numberValue={p.renderPlasmicSlot({
          defaultContents: "5",
          value: args.slot
        })}
        percent={p.renderPlasmicSlot({
          defaultContents: "%",
          value: args.slot8
        })}
        svgIcon={p.renderPlasmicSlot({
          defaultContents: (
            <FileInvoiceIcon
              className={classNames(projectcss.all, sty.svg__xB6Zp)}
              role={"img"}
            />
          ),

          value: args.slot13
        })}
      />

      <TablePricingElementNumberValue
        className={classNames(
          "__wab_instance",
          sty.tablePricingElementNumberValue__jdTps
        )}
        featureValueText={p.renderPlasmicSlot({
          defaultContents: "Standard rate per listing",
          value: args.slot10
        })}
        numberValue={p.renderPlasmicSlot({
          defaultContents: "3",
          value: args.slot2
        })}
        percent={p.renderPlasmicSlot({
          defaultContents: "$",
          value: args.slot7
        })}
        svgIcon={p.renderPlasmicSlot({
          defaultContents: (
            <ListingIcon
              className={classNames(projectcss.all, sty.svg___8SYou)}
              role={"img"}
            />
          ),

          value: args.slot14
        })}
      />

      <TablePricingElementNumberValue
        className={classNames(
          "__wab_instance",
          sty.tablePricingElementNumberValue__mKizU
        )}
        featureValueText={p.renderPlasmicSlot({
          defaultContents: "Priority upgrade per listing",
          value: args.featurevalueText
        })}
        numberValue={p.renderPlasmicSlot({
          defaultContents: "1",
          value: args.slot3
        })}
        percent={p.renderPlasmicSlot({
          defaultContents: "$",
          value: args.slot5
        })}
        svgIcon={p.renderPlasmicSlot({
          defaultContents: (
            <Icon169Icon
              className={classNames(projectcss.all, sty.svg__xGsUp)}
              role={"img"}
            />
          ),

          value: args.slot15
        })}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "tablePricingElementPercentValueBold",
    "tablePricingElementPercentValue"
  ],

  tablePricingElementPercentValueBold: ["tablePricingElementPercentValueBold"],
  tablePricingElementPercentValue: ["tablePricingElementPercentValue"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingPageElementServiceBlock__ArgProps,
      internalVariantPropNames:
        PlasmicPricingPageElementServiceBlock__VariantProps
    });

    return PlasmicPricingPageElementServiceBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingPageElementServiceBlock";
  } else {
    func.displayName = `PlasmicPricingPageElementServiceBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingPageElementServiceBlock = Object.assign(
  // Top-level PlasmicPricingPageElementServiceBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tablePricingElementPercentValueBold: makeNodeComponent(
      "tablePricingElementPercentValueBold"
    ),

    tablePricingElementPercentValue: makeNodeComponent(
      "tablePricingElementPercentValue"
    ),

    // Metadata about props expected for PlasmicPricingPageElementServiceBlock
    internalVariantProps: PlasmicPricingPageElementServiceBlock__VariantProps,
    internalArgProps: PlasmicPricingPageElementServiceBlock__ArgProps
  }
);

export default PlasmicPricingPageElementServiceBlock;
/* prettier-ignore-end */
