// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: HtA78mOD-bC
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputCounter from "../../InputCounter"; // plasmic-import: e0M1tqOpmZ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputCheckoutItem.module.css"; // plasmic-import: HtA78mOD-bC/css

export const PlasmicInputCheckoutItem__VariantProps = new Array(
  "headline",
  "description"
);

export const PlasmicInputCheckoutItem__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicInputCheckoutItem__RenderFunc(props) {
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
      {(hasVariant(variants, "headline", "headline") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__eGohH, {
            [sty.freeBox__headline__eGohHkEQfN]: hasVariant(
              variants,
              "headline",
              "headline"
            )
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.freeBox__wc9Ah, {
              [sty.freeBox__headline__wc9AhkEQfN]: hasVariant(
                variants,
                "headline",
                "headline"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Headline",
              value: args.slot2,
              className: classNames(sty.slotTargetSlot2)
            })}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___8XZXg)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__tsYuX)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__i32Ns)}
          >
            <div className={classNames(defaultcss.all, sty.freeBox__tbgRc)}>
              {p.renderPlasmicSlot({
                defaultContents: "Item",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </p.Stack>

          <InputCounter
            data-plasmic-name={"inputCounter"}
            data-plasmic-override={overrides.inputCounter}
            className={classNames("__wab_instance", sty.inputCounter)}
          />
        </div>

        {(hasVariant(variants, "description", "description") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox__lfmpq, {
              [sty.freeBox__description__lfmpq0AOtn]: hasVariant(
                variants,
                "description",
                "description"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren__description]: hasVariant(
                  variants,
                  "description",
                  "description"
                )
              })
            })}
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "inputCounter"],
  inputCounter: ["inputCounter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputCheckoutItem__ArgProps,
      internalVariantPropNames: PlasmicInputCheckoutItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputCheckoutItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputCheckoutItem";
  } else {
    func.displayName = `PlasmicInputCheckoutItem.${nodeName}`;
  }
  return func;
}

export const PlasmicInputCheckoutItem = Object.assign(
  // Top-level PlasmicInputCheckoutItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputCounter: makeNodeComponent("inputCounter"),
    // Metadata about props expected for PlasmicInputCheckoutItem
    internalVariantProps: PlasmicInputCheckoutItem__VariantProps,
    internalArgProps: PlasmicInputCheckoutItem__ArgProps
  }
);

export default PlasmicInputCheckoutItem;
/* prettier-ignore-end */