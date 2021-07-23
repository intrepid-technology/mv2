// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Zy0GFm9d9F
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import InputEmailA from "../../InputEmailA"; // plasmic-import: Umu_QfvTrP/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionEmailCta.module.css"; // plasmic-import: Zy0GFm9d9F/css

export const PlasmicSectionEmailCta__VariantProps = new Array();

export const PlasmicSectionEmailCta__ArgProps = new Array("children", "slot");

function PlasmicSectionEmailCta__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
      <div
        data-plasmic-name={"headlineParent"}
        data-plasmic-override={overrides.headlineParent}
        className={classNames(defaultcss.all, sty.headlineParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox___5Q18D)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Start, launch, and grow a scalable & profitable business.",
            value: args.slot,
            className: classNames(sty.slotSlot)
          })}
        </div>
      </div>

      <div
        data-plasmic-name={"subheadParent"}
        data-plasmic-override={overrides.subheadParent}
        className={classNames(defaultcss.all, sty.subheadParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__zmpJ9)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Explore all the specialised tools and services you need to start, run, and grow a global technology and creative services business.",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>
      </div>

      {true ? (
        <InputEmailA
          data-plasmic-name={"inputEmailA"}
          data-plasmic-override={overrides.inputEmailA}
          className={classNames("__wab_instance", sty.inputEmailA)}
          size={
            hasVariant(globalVariants, "screen", "mobile") ? "_360" : "_540"
          }
        />
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "headlineParent", "subheadParent", "inputEmailA"],
  headlineParent: ["headlineParent"],
  subheadParent: ["subheadParent"],
  inputEmailA: ["inputEmailA"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionEmailCta__ArgProps,
      internalVariantPropNames: PlasmicSectionEmailCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionEmailCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionEmailCta";
  } else {
    func.displayName = `PlasmicSectionEmailCta.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionEmailCta = Object.assign(
  // Top-level PlasmicSectionEmailCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineParent: makeNodeComponent("headlineParent"),
    subheadParent: makeNodeComponent("subheadParent"),
    inputEmailA: makeNodeComponent("inputEmailA"),
    // Metadata about props expected for PlasmicSectionEmailCta
    internalVariantProps: PlasmicSectionEmailCta__VariantProps,
    internalArgProps: PlasmicSectionEmailCta__ArgProps
  }
);

export default PlasmicSectionEmailCta;
/* prettier-ignore-end */
