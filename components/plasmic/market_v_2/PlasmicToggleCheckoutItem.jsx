// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: oZVadAmksG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ToggleSubscriptionCard from "../../ToggleSubscriptionCard"; // plasmic-import: 7hi-uHtvzE/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicToggleCheckoutItem.module.css"; // plasmic-import: oZVadAmksG/css

export const PlasmicToggleCheckoutItem__VariantProps = new Array();

export const PlasmicToggleCheckoutItem__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicToggleCheckoutItem__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__owx0Z)}>
        <div className={classNames(projectcss.all, sty.freeBox__vfoqX)}>
          {p.renderPlasmicSlot({
            defaultContents: "Headline",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__shxFa)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0I9Jc)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__zOrO7)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <ToggleSubscriptionCard inactive={"placement"} />
              ),

              value: args.slot2
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__wag3D)}>
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicToggleCheckoutItem__ArgProps,
      internalVariantPropNames: PlasmicToggleCheckoutItem__VariantProps
    });

    return PlasmicToggleCheckoutItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggleCheckoutItem";
  } else {
    func.displayName = `PlasmicToggleCheckoutItem.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleCheckoutItem = Object.assign(
  // Top-level PlasmicToggleCheckoutItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicToggleCheckoutItem
    internalVariantProps: PlasmicToggleCheckoutItem__VariantProps,
    internalArgProps: PlasmicToggleCheckoutItem__ArgProps
  }
);

export default PlasmicToggleCheckoutItem;
/* prettier-ignore-end */
