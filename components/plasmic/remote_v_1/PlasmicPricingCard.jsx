// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: CM_KGGfiH99
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "../market_v_2/PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../market_v_2/plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicPricingCard.module.css"; // plasmic-import: CM_KGGfiH99/css

export const PlasmicPricingCard__VariantProps = new Array();

export const PlasmicPricingCard__ArgProps = new Array(
  "destination",
  "price",
  "duration",
  "category",
  "heading",
  "subHeading"
);

function PlasmicPricingCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

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
        className={classNames(projectcss.all, sty.freeBox__qLp2E)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fL8D5)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__cagx6)}>
            {p.renderPlasmicSlot({
              defaultContents: "$79",
              value: args.price,
              className: classNames(sty.slotTargetPrice)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__khc6U)}>
            {p.renderPlasmicSlot({
              defaultContents: "/month",
              value: args.duration,
              className: classNames(sty.slotTargetDuration)
            })}
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__a2Dw0)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__utgzL)}>
            {p.renderPlasmicSlot({
              defaultContents: "Per remote employee",
              value: args.category,
              className: classNames(sty.slotTargetCategory)
            })}
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qS4D)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__jvIXr)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Everything you need to hire remote employees globally.",
              value: args.heading,
              className: classNames(sty.slotTargetHeading)
            })}
          </div>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__n28GV)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bs0Ks)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__uPea)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Hire a remote team in over 150 countries. Take care of your team with customised benefits and insurance",
              value: args.subHeading,
              className: classNames(sty.slotTargetSubHeading)
            })}
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__xaAfM)}>
          <ButtonPrimary
            data-plasmic-name={"buttonPrimary"}
            data-plasmic-override={overrides.buttonPrimary}
            className={classNames("__wab_instance", sty.buttonPrimary)}
            color={"primary"}
            destination={
              args.destination !== undefined
                ? args.destination
                : "https://intrepidventures.typeform.com/to/MthpVWrA"
            }
            width={"_360"}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Start hiring now"}
            </div>
          </ButtonPrimary>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "buttonPrimary", "text"],
  buttonPrimary: ["buttonPrimary", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingCard__ArgProps,
      internalVariantPropNames: PlasmicPricingCard__VariantProps
    });

    return PlasmicPricingCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingCard";
  } else {
    func.displayName = `PlasmicPricingCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingCard = Object.assign(
  // Top-level PlasmicPricingCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicPricingCard
    internalVariantProps: PlasmicPricingCard__VariantProps,
    internalArgProps: PlasmicPricingCard__ArgProps
  }
);

export default PlasmicPricingCard;
/* prettier-ignore-end */
