// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: i_xE2f64UA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicMultiSelectOption.module.css"; // plasmic-import: i_xE2f64UA/css

export const PlasmicMultiSelectOption__VariantProps = new Array(
  "isSelected",
  "isHighlighted",
  "isDisabled"
);

export const PlasmicMultiSelectOption__ArgProps = new Array("children");

function PlasmicMultiSelectOption__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),

        [sty.root__isHighlighted]: hasVariant(
          variants,
          "isHighlighted",
          "isHighlighted"
        ),

        [sty.root__isSelected]: hasVariant(variants, "isSelected", "isSelected")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Option",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.slotTargetChildren__isSelected]: hasVariant(
            variants,
            "isSelected",
            "isSelected"
          )
        })
      })}
    </div>
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
      internalArgPropNames: PlasmicMultiSelectOption__ArgProps,
      internalVariantPropNames: PlasmicMultiSelectOption__VariantProps
    });

    return PlasmicMultiSelectOption__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMultiSelectOption";
  } else {
    func.displayName = `PlasmicMultiSelectOption.${nodeName}`;
  }
  return func;
}

export const PlasmicMultiSelectOption = Object.assign(
  // Top-level PlasmicMultiSelectOption renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicMultiSelectOption
    internalVariantProps: PlasmicMultiSelectOption__VariantProps,
    internalArgProps: PlasmicMultiSelectOption__ArgProps
  }
);

export default PlasmicMultiSelectOption;
/* prettier-ignore-end */
