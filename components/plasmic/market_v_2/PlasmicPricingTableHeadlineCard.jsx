// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: zy3wpM99j_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AccordionTriggerChevron from "../../AccordionTriggerChevron"; // plasmic-import: zUDpW9Kdd4/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPricingTableHeadlineCard.module.css"; // plasmic-import: zy3wpM99j_/css

export const PlasmicPricingTableHeadlineCard__VariantProps = new Array();

export const PlasmicPricingTableHeadlineCard__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicPricingTableHeadlineCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"headlineIconSubhead"}
        data-plasmic-override={overrides.headlineIconSubhead}
        hasGap={true}
        className={classNames(defaultcss.all, sty.headlineIconSubhead)}
      >
        <div
          data-plasmic-name={"headlineIconParent"}
          data-plasmic-override={overrides.headlineIconParent}
          className={classNames(defaultcss.all, sty.headlineIconParent)}
        >
          <div className={classNames(defaultcss.all, sty.box__wGati)}>
            <div className={classNames(defaultcss.all, sty.box__thM8M)}>
              {p.renderPlasmicSlot({
                defaultContents: "Pro",
                value: args.children,
                className: classNames(sty.slotChildren)
              })}
            </div>
          </div>

          <AccordionTriggerChevron
            data-plasmic-name={"accordionTriggerChevron"}
            data-plasmic-override={overrides.accordionTriggerChevron}
            className={classNames(
              "__wab_instance",
              sty.accordionTriggerChevron
            )}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__mywRc)}>
          <div className={classNames(defaultcss.all, sty.box__zoMYs)}>
            {p.renderPlasmicSlot({
              defaultContents: "Partner",
              value: args.slot2,
              className: classNames(sty.slotSlot2)
            })}
          </div>
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"descriptionText"}
        data-plasmic-override={overrides.descriptionText}
        className={classNames(defaultcss.all, sty.descriptionText)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Description",
          value: args.slot,
          className: classNames(sty.slotSlot)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "headlineIconSubhead",
    "headlineIconParent",
    "accordionTriggerChevron",
    "descriptionText"
  ],

  headlineIconSubhead: [
    "headlineIconSubhead",
    "headlineIconParent",
    "accordionTriggerChevron"
  ],

  headlineIconParent: ["headlineIconParent", "accordionTriggerChevron"],
  accordionTriggerChevron: ["accordionTriggerChevron"],
  descriptionText: ["descriptionText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingTableHeadlineCard__ArgProps,
      internalVariantPropNames: PlasmicPricingTableHeadlineCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPricingTableHeadlineCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingTableHeadlineCard";
  } else {
    func.displayName = `PlasmicPricingTableHeadlineCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingTableHeadlineCard = Object.assign(
  // Top-level PlasmicPricingTableHeadlineCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineIconSubhead: makeNodeComponent("headlineIconSubhead"),
    headlineIconParent: makeNodeComponent("headlineIconParent"),
    accordionTriggerChevron: makeNodeComponent("accordionTriggerChevron"),
    descriptionText: makeNodeComponent("descriptionText"),
    // Metadata about props expected for PlasmicPricingTableHeadlineCard
    internalVariantProps: PlasmicPricingTableHeadlineCard__VariantProps,
    internalArgProps: PlasmicPricingTableHeadlineCard__ArgProps
  }
);

export default PlasmicPricingTableHeadlineCard;
/* prettier-ignore-end */