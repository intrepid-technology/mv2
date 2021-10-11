// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: YO302UKdvF
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
import * as sty from "./PlasmicElementCheckoutHeadlineTotal.module.css"; // plasmic-import: YO302UKdvF/css

export const PlasmicElementCheckoutHeadlineTotal__VariantProps = new Array();

export const PlasmicElementCheckoutHeadlineTotal__ArgProps = new Array(
  "children",
  "totalValueNumber"
);

function PlasmicElementCheckoutHeadlineTotal__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__p9DDy)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__gMrSa)}>
          {p.renderPlasmicSlot({
            defaultContents: "Sub Total",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"totalCurrencyNumberValue"}
        data-plasmic-override={overrides.totalCurrencyNumberValue}
        hasGap={true}
        className={classNames(defaultcss.all, sty.totalCurrencyNumberValue)}
      >
        <div
          data-plasmic-name={"currencyParent"}
          data-plasmic-override={overrides.currencyParent}
          className={classNames(defaultcss.all, sty.currencyParent)}
        >
          <div
            data-plasmic-name={"currencyText"}
            data-plasmic-override={overrides.currencyText}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.currencyText
            )}
          >
            {"$"}
          </div>
        </div>

        <div
          data-plasmic-name={"subtotalParent"}
          data-plasmic-override={overrides.subtotalParent}
          className={classNames(defaultcss.all, sty.subtotalParent)}
        >
          <div
            data-plasmic-name={"totalValueNumberParent"}
            data-plasmic-override={overrides.totalValueNumberParent}
            className={classNames(defaultcss.all, sty.totalValueNumberParent)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "0.00",
              value: args.totalValueNumber,
              className: classNames(sty.slotTargetTotalValueNumber)
            })}
          </div>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "totalCurrencyNumberValue",
    "currencyParent",
    "currencyText",
    "subtotalParent",
    "totalValueNumberParent"
  ],

  totalCurrencyNumberValue: [
    "totalCurrencyNumberValue",
    "currencyParent",
    "currencyText",
    "subtotalParent",
    "totalValueNumberParent"
  ],

  currencyParent: ["currencyParent", "currencyText"],
  currencyText: ["currencyText"],
  subtotalParent: ["subtotalParent", "totalValueNumberParent"],
  totalValueNumberParent: ["totalValueNumberParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementCheckoutHeadlineTotal__ArgProps,
      internalVariantPropNames:
        PlasmicElementCheckoutHeadlineTotal__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementCheckoutHeadlineTotal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementCheckoutHeadlineTotal";
  } else {
    func.displayName = `PlasmicElementCheckoutHeadlineTotal.${nodeName}`;
  }
  return func;
}

export const PlasmicElementCheckoutHeadlineTotal = Object.assign(
  // Top-level PlasmicElementCheckoutHeadlineTotal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    totalCurrencyNumberValue: makeNodeComponent("totalCurrencyNumberValue"),
    currencyParent: makeNodeComponent("currencyParent"),
    currencyText: makeNodeComponent("currencyText"),
    subtotalParent: makeNodeComponent("subtotalParent"),
    totalValueNumberParent: makeNodeComponent("totalValueNumberParent"),
    // Metadata about props expected for PlasmicElementCheckoutHeadlineTotal
    internalVariantProps: PlasmicElementCheckoutHeadlineTotal__VariantProps,
    internalArgProps: PlasmicElementCheckoutHeadlineTotal__ArgProps
  }
);

export default PlasmicElementCheckoutHeadlineTotal;
/* prettier-ignore-end */