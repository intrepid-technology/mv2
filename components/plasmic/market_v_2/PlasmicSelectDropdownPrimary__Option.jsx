// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: d0st1V5YiWH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSelectDropdownPrimary__Option.module.css"; // plasmic-import: d0st1V5YiWH/css
import SUPER__PlasmicSelectDropdownPrimary from "./PlasmicSelectDropdownPrimary"; // plasmic-import: T_qFWEqz1I6/render

export const PlasmicSelectDropdownPrimary__Option__VariantProps = new Array(
  "isSelected",
  "isHighlighted",
  "isDisabled"
);

export const PlasmicSelectDropdownPrimary__Option__ArgProps = new Array(
  "children",
  "value",
  "textValue"
);

function PlasmicSelectDropdownPrimary__Option__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const superContexts = {
    SelectDropdownPrimary: React.useContext(
      SUPER__PlasmicSelectDropdownPrimary.Context
    )
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),

        [sty.root__isHighlighted]: hasVariant(
          variants,
          "isHighlighted",
          "isHighlighted"
        )
      })}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(defaultcss.all, sty.labelContainer, {
          [sty.labelContainer__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.labelContainer__isHighlighted]: hasVariant(
            variants,
            "isHighlighted",
            "isHighlighted"
          ),

          [sty.labelContainer__isSelected]: hasVariant(
            variants,
            "isSelected",
            "isSelected"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Option",
          value: args.children,
          className: classNames(sty.slotChildren, {
            [sty.slotChildren__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotChildren__isHighlighted]: hasVariant(
              variants,
              "isHighlighted",
              "isHighlighted"
            ),

            [sty.slotChildren__isSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  );
}

function useBehavior(props, ref) {
  return p.useSelectOption(
    PlasmicSelectDropdownPrimary__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },

      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectDropdownPrimary__Option__ArgProps,
      internalVariantPropNames:
        PlasmicSelectDropdownPrimary__Option__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSelectDropdownPrimary__Option__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectDropdownPrimary__Option";
  } else {
    func.displayName = `PlasmicSelectDropdownPrimary__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectDropdownPrimary__Option = Object.assign(
  // Top-level PlasmicSelectDropdownPrimary__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSelectDropdownPrimary__Option
    internalVariantProps: PlasmicSelectDropdownPrimary__Option__VariantProps,
    internalArgProps: PlasmicSelectDropdownPrimary__Option__ArgProps,
    useBehavior
  }
);

export default PlasmicSelectDropdownPrimary__Option;
/* prettier-ignore-end */
