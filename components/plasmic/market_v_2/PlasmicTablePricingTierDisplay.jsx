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
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTablePricingTierDisplay.module.css"; // plasmic-import: zy3wpM99j_/css

export const PlasmicTablePricingTierDisplay__VariantProps = new Array();

export const PlasmicTablePricingTierDisplay__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicTablePricingTierDisplay__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"headlineIconSubhead"}
        data-plasmic-override={overrides.headlineIconSubhead}
        hasGap={true}
        className={classNames(projectcss.all, sty.headlineIconSubhead)}
      >
        <div
          data-plasmic-name={"headlineIconParent"}
          data-plasmic-override={overrides.headlineIconParent}
          className={classNames(projectcss.all, sty.headlineIconParent)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wGati)}>
            <div className={classNames(projectcss.all, sty.freeBox__thM8M)}>
              {p.renderPlasmicSlot({
                defaultContents: "Pro",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
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

        <div className={classNames(projectcss.all, sty.freeBox__mywRc)}>
          <div className={classNames(projectcss.all, sty.freeBox__zoMYs)}>
            {p.renderPlasmicSlot({
              defaultContents: "Partner",
              value: args.slot2,
              className: classNames(sty.slotTargetSlot2)
            })}
          </div>
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"descriptionText"}
        data-plasmic-override={overrides.descriptionText}
        className={classNames(projectcss.all, sty.descriptionText)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Description",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
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
      internalArgPropNames: PlasmicTablePricingTierDisplay__ArgProps,
      internalVariantPropNames: PlasmicTablePricingTierDisplay__VariantProps
    });

    return PlasmicTablePricingTierDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTablePricingTierDisplay";
  } else {
    func.displayName = `PlasmicTablePricingTierDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicTablePricingTierDisplay = Object.assign(
  // Top-level PlasmicTablePricingTierDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineIconSubhead: makeNodeComponent("headlineIconSubhead"),
    headlineIconParent: makeNodeComponent("headlineIconParent"),
    accordionTriggerChevron: makeNodeComponent("accordionTriggerChevron"),
    descriptionText: makeNodeComponent("descriptionText"),
    // Metadata about props expected for PlasmicTablePricingTierDisplay
    internalVariantProps: PlasmicTablePricingTierDisplay__VariantProps,
    internalArgProps: PlasmicTablePricingTierDisplay__ArgProps
  }
);

export default PlasmicTablePricingTierDisplay;
/* prettier-ignore-end */
