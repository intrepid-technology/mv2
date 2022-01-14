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
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectDropdownPrimary__Option.module.css"; // plasmic-import: d0st1V5YiWH/css
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
  const { variants, args, overrides, forNode } = props;
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

        [sty.root__width__120]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_120"
        ),

        [sty.root__width__144]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_144"
        ),

        [sty.root__width__160]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_160"
        ),

        [sty.root__width__180]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_180"
        ),

        [sty.root__width__270]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_270"
        ),

        [sty.root__width__360]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_360"
        ),

        [sty.root__width__540]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_540"
        ),

        [sty.root__width__720]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_720"
        ),

        [sty.root__width__90]: hasVariant(
          (superContexts.SelectDropdownPrimary &&
            superContexts.SelectDropdownPrimary.variants) ||
            {},
          "width",
          "_90"
        )
      })}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer, {
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
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotTargetChildren__isHighlighted]: hasVariant(
              variants,
              "isHighlighted",
              "isHighlighted"
            ),

            [sty.slotTargetChildren__isSelected]: hasVariant(
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
  return pp.useSelectOption(
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

    return PlasmicSelectDropdownPrimary__Option__RenderFunc({
      variants,
      args,
      overrides,
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
