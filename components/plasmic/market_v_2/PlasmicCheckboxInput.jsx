// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: dB2P3uonwOO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCheckboxInput.module.css"; // plasmic-import: dB2P3uonwOO/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: qh5y8H009Zz/icon
import Icon50Icon from "./icons/PlasmicIcon__Icon50"; // plasmic-import: 8nDBGRjZh5/icon
import IndeterminateIcon from "./icons/PlasmicIcon__Indeterminate"; // plasmic-import: SAtgjHFRnv-/icon

export const PlasmicCheckboxInput__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export const PlasmicCheckboxInput__ArgProps = new Array(
  "children",
  "name",
  "value"
);

function PlasmicCheckboxInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root__isChecked]: hasVariant(variants, "isChecked", "isChecked"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.root__isIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          ),

          [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox, {
          [sty.freeBox_____focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.freeBox__isChecked]: hasVariant(
            variants,
            "isChecked",
            "isChecked"
          ),

          [sty.freeBox__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.freeBox__isIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          )
        })}
      >
        {(
          hasVariant(variants, "isIndeterminate", "isIndeterminate")
            ? true
            : hasVariant(variants, "isChecked", "isChecked")
            ? true
            : true
        ) ? (
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant(variants, "isIndeterminate", "isIndeterminate")
                ? IndeterminateIcon
                : hasVariant(variants, "isChecked", "isChecked")
                ? Icon50Icon
                : CheckIcon
            }
            className={classNames(defaultcss.all, projectcss.all, sty.svg, {
              [sty.svg_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.svg__isChecked]: hasVariant(
                variants,
                "isChecked",
                "isChecked"
              ),

              [sty.svg__isIndeterminate]: hasVariant(
                variants,
                "isIndeterminate",
                "isIndeterminate"
              ),

              [sty.svg__noLabel]: hasVariant(variants, "noLabel", "noLabel")
            })}
            role={"img"}
          />
        ) : null}
      </div>

      {(hasVariant(variants, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.labelContainer,
            {
              [sty.labelContainer_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.labelContainer__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildren__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }
  return pp.useCheckbox(
    PlasmicCheckboxInput,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },

      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "labelContainer"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCheckboxInput__ArgProps,
      internalVariantPropNames: PlasmicCheckboxInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCheckboxInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckboxInput";
  } else {
    func.displayName = `PlasmicCheckboxInput.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckboxInput = Object.assign(
  // Top-level PlasmicCheckboxInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicCheckboxInput
    internalVariantProps: PlasmicCheckboxInput__VariantProps,
    internalArgProps: PlasmicCheckboxInput__ArgProps,
    useBehavior
  }
);

export default PlasmicCheckboxInput;
/* prettier-ignore-end */
