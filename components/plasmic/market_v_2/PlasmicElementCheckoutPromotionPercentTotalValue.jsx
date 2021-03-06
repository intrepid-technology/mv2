// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: v-uWcZLOPTn
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementCheckoutPromotionPercentTotalValue.module.css"; // plasmic-import: v-uWcZLOPTn/css

export const PlasmicElementCheckoutPromotionPercentTotalValue__VariantProps =
  new Array();

export const PlasmicElementCheckoutPromotionPercentTotalValue__ArgProps =
  new Array(
    "promotionTitleText",
    "promotionPercentValueNumber",
    "promotionCurrency"
  );

function PlasmicElementCheckoutPromotionPercentTotalValue__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rvDg)}
      >
        <div
          data-plasmic-name={"promotionTitleTextParent"}
          data-plasmic-override={overrides.promotionTitleTextParent}
          className={classNames(projectcss.all, sty.promotionTitleTextParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Promotion",
            value: args.promotionTitleText,
            className: classNames(sty.slotTargetPromotionTitleText)
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"promotionFactorPercentNumberParent"}
          data-plasmic-override={overrides.promotionFactorPercentNumberParent}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.promotionFactorPercentNumberParent
          )}
        >
          <div
            data-plasmic-name={"promotionFactorText"}
            data-plasmic-override={overrides.promotionFactorText}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.promotionFactorText
            )}
          >
            {"%"}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: "0.00",
            value: args.promotionPercentValueNumber,
            className: classNames(sty.slotTargetPromotionPercentValueNumber)
          })}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"promotionCurrencyTotalValueDiscountNumber"}
        data-plasmic-override={
          overrides.promotionCurrencyTotalValueDiscountNumber
        }
        hasGap={true}
        className={classNames(
          projectcss.all,
          sty.promotionCurrencyTotalValueDiscountNumber
        )}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mX4Ny
          )}
        >
          {"-"}
        </div>

        <div
          data-plasmic-name={"promotionCurrencyParent"}
          data-plasmic-override={overrides.promotionCurrencyParent}
          className={classNames(projectcss.all, sty.promotionCurrencyParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "$",
            value: args.promotionCurrency,
            className: classNames(sty.slotTargetPromotionCurrency)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__jPJt)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__clGpn
            )}
          >
            {"0.00"}
          </div>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "promotionTitleTextParent",
    "promotionFactorPercentNumberParent",
    "promotionFactorText",
    "promotionCurrencyTotalValueDiscountNumber",
    "promotionCurrencyParent"
  ],

  promotionTitleTextParent: ["promotionTitleTextParent"],
  promotionFactorPercentNumberParent: [
    "promotionFactorPercentNumberParent",
    "promotionFactorText"
  ],

  promotionFactorText: ["promotionFactorText"],
  promotionCurrencyTotalValueDiscountNumber: [
    "promotionCurrencyTotalValueDiscountNumber",
    "promotionCurrencyParent"
  ],

  promotionCurrencyParent: ["promotionCurrencyParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames:
        PlasmicElementCheckoutPromotionPercentTotalValue__ArgProps,
      internalVariantPropNames:
        PlasmicElementCheckoutPromotionPercentTotalValue__VariantProps
    });

    return PlasmicElementCheckoutPromotionPercentTotalValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementCheckoutPromotionPercentTotalValue";
  } else {
    func.displayName = `PlasmicElementCheckoutPromotionPercentTotalValue.${nodeName}`;
  }
  return func;
}

export const PlasmicElementCheckoutPromotionPercentTotalValue = Object.assign(
  // Top-level PlasmicElementCheckoutPromotionPercentTotalValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    promotionTitleTextParent: makeNodeComponent("promotionTitleTextParent"),
    promotionFactorPercentNumberParent: makeNodeComponent(
      "promotionFactorPercentNumberParent"
    ),

    promotionFactorText: makeNodeComponent("promotionFactorText"),
    promotionCurrencyTotalValueDiscountNumber: makeNodeComponent(
      "promotionCurrencyTotalValueDiscountNumber"
    ),

    promotionCurrencyParent: makeNodeComponent("promotionCurrencyParent"),
    // Metadata about props expected for PlasmicElementCheckoutPromotionPercentTotalValue
    internalVariantProps:
      PlasmicElementCheckoutPromotionPercentTotalValue__VariantProps,
    internalArgProps: PlasmicElementCheckoutPromotionPercentTotalValue__ArgProps
  }
);

export default PlasmicElementCheckoutPromotionPercentTotalValue;
/* prettier-ignore-end */
