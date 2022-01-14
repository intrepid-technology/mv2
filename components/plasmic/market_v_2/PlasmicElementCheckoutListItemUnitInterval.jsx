// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: HED2s-i8gO9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementCheckoutListItemUnitInterval.module.css"; // plasmic-import: HED2s-i8gO9/css

export const PlasmicElementCheckoutListItemUnitInterval__VariantProps =
  new Array();

export const PlasmicElementCheckoutListItemUnitInterval__ArgProps = new Array(
  "unitNumber",
  "unitText",
  "timeIntervalText",
  "currencySymbol",
  "totalValueNumber"
);

function PlasmicElementCheckoutListItemUnitInterval__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"unitItemInterval"}
        data-plasmic-override={overrides.unitItemInterval}
        hasGap={true}
        className={classNames(projectcss.all, sty.unitItemInterval)}
      >
        <div
          data-plasmic-name={"unitNumberbackgroundParent"}
          data-plasmic-override={overrides.unitNumberbackgroundParent}
          className={classNames(projectcss.all, sty.unitNumberbackgroundParent)}
        >
          <div
            data-plasmic-name={"unitNumberBackground"}
            data-plasmic-override={overrides.unitNumberBackground}
            className={classNames(projectcss.all, sty.unitNumberBackground)}
          >
            <div
              data-plasmic-name={"unitNumberParent"}
              data-plasmic-override={overrides.unitNumberParent}
              className={classNames(projectcss.all, sty.unitNumberParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "1",
                value: args.unitNumber,
                className: classNames(sty.slotTargetUnitNumber)
              })}
            </div>
          </div>
        </div>

        <div
          data-plasmic-name={"unitTextbackground"}
          data-plasmic-override={overrides.unitTextbackground}
          className={classNames(projectcss.all, sty.unitTextbackground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Service",
            value: args.unitText,
            className: classNames(sty.slotTargetUnitText)
          })}
        </div>

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
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
            {"x"}
          </div>
        </div>

        <div
          data-plasmic-name={"timeIntervalBackgroundParent"}
          data-plasmic-override={overrides.timeIntervalBackgroundParent}
          className={classNames(
            projectcss.all,
            sty.timeIntervalBackgroundParent
          )}
        >
          <div
            data-plasmic-name={"timeIntervalBackground"}
            data-plasmic-override={overrides.timeIntervalBackground}
            className={classNames(projectcss.all, sty.timeIntervalBackground)}
          >
            <div
              data-plasmic-name={"timeIntervalTextParent"}
              data-plasmic-override={overrides.timeIntervalTextParent}
              className={classNames(projectcss.all, sty.timeIntervalTextParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Month",
                value: args.timeIntervalText,
                className: classNames(sty.slotTargetTimeIntervalText)
              })}
            </div>
          </div>
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"currencyTotalValueNumberParent"}
        data-plasmic-override={overrides.currencyTotalValueNumberParent}
        hasGap={true}
        className={classNames(
          projectcss.all,
          sty.currencyTotalValueNumberParent
        )}
      >
        <div
          data-plasmic-name={"currencySymbolParent"}
          data-plasmic-override={overrides.currencySymbolParent}
          className={classNames(projectcss.all, sty.currencySymbolParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "$",
            value: args.currencySymbol,
            className: classNames(sty.slotTargetCurrencySymbol)
          })}
        </div>

        <div
          data-plasmic-name={"totalValueNumberParent"}
          data-plasmic-override={overrides.totalValueNumberParent}
          className={classNames(projectcss.all, sty.totalValueNumberParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "0.00",
            value: args.totalValueNumber,
            className: classNames(sty.slotTargetTotalValueNumber)
          })}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "unitItemInterval",
    "unitNumberbackgroundParent",
    "unitNumberBackground",
    "unitNumberParent",
    "unitTextbackground",
    "freeBox",
    "text",
    "timeIntervalBackgroundParent",
    "timeIntervalBackground",
    "timeIntervalTextParent",
    "currencyTotalValueNumberParent",
    "currencySymbolParent",
    "totalValueNumberParent"
  ],

  unitItemInterval: [
    "unitItemInterval",
    "unitNumberbackgroundParent",
    "unitNumberBackground",
    "unitNumberParent",
    "unitTextbackground",
    "freeBox",
    "text",
    "timeIntervalBackgroundParent",
    "timeIntervalBackground",
    "timeIntervalTextParent"
  ],

  unitNumberbackgroundParent: [
    "unitNumberbackgroundParent",
    "unitNumberBackground",
    "unitNumberParent"
  ],

  unitNumberBackground: ["unitNumberBackground", "unitNumberParent"],
  unitNumberParent: ["unitNumberParent"],
  unitTextbackground: ["unitTextbackground"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  timeIntervalBackgroundParent: [
    "timeIntervalBackgroundParent",
    "timeIntervalBackground",
    "timeIntervalTextParent"
  ],

  timeIntervalBackground: ["timeIntervalBackground", "timeIntervalTextParent"],
  timeIntervalTextParent: ["timeIntervalTextParent"],
  currencyTotalValueNumberParent: [
    "currencyTotalValueNumberParent",
    "currencySymbolParent",
    "totalValueNumberParent"
  ],

  currencySymbolParent: ["currencySymbolParent"],
  totalValueNumberParent: ["totalValueNumberParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames:
        PlasmicElementCheckoutListItemUnitInterval__ArgProps,
      internalVariantPropNames:
        PlasmicElementCheckoutListItemUnitInterval__VariantProps
    });

    return PlasmicElementCheckoutListItemUnitInterval__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementCheckoutListItemUnitInterval";
  } else {
    func.displayName = `PlasmicElementCheckoutListItemUnitInterval.${nodeName}`;
  }
  return func;
}

export const PlasmicElementCheckoutListItemUnitInterval = Object.assign(
  // Top-level PlasmicElementCheckoutListItemUnitInterval renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    unitItemInterval: makeNodeComponent("unitItemInterval"),
    unitNumberbackgroundParent: makeNodeComponent("unitNumberbackgroundParent"),
    unitNumberBackground: makeNodeComponent("unitNumberBackground"),
    unitNumberParent: makeNodeComponent("unitNumberParent"),
    unitTextbackground: makeNodeComponent("unitTextbackground"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    timeIntervalBackgroundParent: makeNodeComponent(
      "timeIntervalBackgroundParent"
    ),

    timeIntervalBackground: makeNodeComponent("timeIntervalBackground"),
    timeIntervalTextParent: makeNodeComponent("timeIntervalTextParent"),
    currencyTotalValueNumberParent: makeNodeComponent(
      "currencyTotalValueNumberParent"
    ),

    currencySymbolParent: makeNodeComponent("currencySymbolParent"),
    totalValueNumberParent: makeNodeComponent("totalValueNumberParent"),
    // Metadata about props expected for PlasmicElementCheckoutListItemUnitInterval
    internalVariantProps:
      PlasmicElementCheckoutListItemUnitInterval__VariantProps,
    internalArgProps: PlasmicElementCheckoutListItemUnitInterval__ArgProps
  }
);

export default PlasmicElementCheckoutListItemUnitInterval;
/* prettier-ignore-end */
