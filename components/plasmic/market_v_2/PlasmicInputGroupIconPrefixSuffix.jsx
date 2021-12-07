// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: vYaiK3Q0NZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputIconPrefixSuffix from "../../InputIconPrefixSuffix"; // plasmic-import: ri_cIHAAMV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputGroupIconPrefixSuffix.module.css"; // plasmic-import: vYaiK3Q0NZ/css

export const PlasmicInputGroupIconPrefixSuffix__VariantProps = new Array(
  "label",
  "description",
  "prefix",
  "suffix"
);

export const PlasmicInputGroupIconPrefixSuffix__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicInputGroupIconPrefixSuffix__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent)}
      >
        {(hasVariant(variants, "label", "label") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__oQwDj, {
              [sty.freeBox__label__oQwDjhEbzp]: hasVariant(
                variants,
                "label",
                "label"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__udHm3)}>
              {p.renderPlasmicSlot({
                defaultContents: "Label",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>
          </div>
        ) : null}

        <InputIconPrefixSuffix
          data-plasmic-name={"inputIconPrefixSuffix"}
          data-plasmic-override={overrides.inputIconPrefixSuffix}
          className={classNames("__wab_instance", sty.inputIconPrefixSuffix, {
            [sty.inputIconPrefixSuffix__prefix]: hasVariant(
              variants,
              "prefix",
              "prefix"
            ),

            [sty.inputIconPrefixSuffix__suffix]: hasVariant(
              variants,
              "suffix",
              "suffix"
            )
          })}
          prefix={
            hasVariant(variants, "prefix", "prefix") ? "prefix" : undefined
          }
          suffix={
            hasVariant(variants, "suffix", "suffix") ? "suffix" : undefined
          }
          width={"_360"}
        />

        {(hasVariant(variants, "description", "description") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__e7Fb, {
              [sty.freeBox__description__e7FbRxNrc]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.freeBox__label__e7FbHEbzp]: hasVariant(
                variants,
                "label",
                "label"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__jGArw, {
                [sty.freeBox__description__jGArwrxNrc]: hasVariant(
                  variants,
                  "description",
                  "description"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Description",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </div>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "inputIconPrefixSuffix"],
  parent: ["parent", "inputIconPrefixSuffix"],
  inputIconPrefixSuffix: ["inputIconPrefixSuffix"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputGroupIconPrefixSuffix__ArgProps,
      internalVariantPropNames: PlasmicInputGroupIconPrefixSuffix__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputGroupIconPrefixSuffix__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputGroupIconPrefixSuffix";
  } else {
    func.displayName = `PlasmicInputGroupIconPrefixSuffix.${nodeName}`;
  }
  return func;
}

export const PlasmicInputGroupIconPrefixSuffix = Object.assign(
  // Top-level PlasmicInputGroupIconPrefixSuffix renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    inputIconPrefixSuffix: makeNodeComponent("inputIconPrefixSuffix"),
    // Metadata about props expected for PlasmicInputGroupIconPrefixSuffix
    internalVariantProps: PlasmicInputGroupIconPrefixSuffix__VariantProps,
    internalArgProps: PlasmicInputGroupIconPrefixSuffix__ArgProps
  }
);

export default PlasmicInputGroupIconPrefixSuffix;
/* prettier-ignore-end */
