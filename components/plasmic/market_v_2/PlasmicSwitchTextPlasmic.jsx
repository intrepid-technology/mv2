// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: bTEGL3UXVph
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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSwitchTextPlasmic.module.css"; // plasmic-import: bTEGL3UXVph/css

export const PlasmicSwitchTextPlasmic__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export const PlasmicSwitchTextPlasmic__ArgProps = new Array(
  "children",
  "name",
  "value"
);

function PlasmicSwitchTextPlasmic__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
        [sty.root__isChecked]: hasVariant(variants, "isChecked", "isChecked"),
        [sty.root__isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),

        [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel")
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggle_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggle__isChecked]: hasVariant(
            variants,
            "isChecked",
            "isChecked"
          ),

          [sty.toggle__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          )
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.track_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.track__isChecked]: hasVariant(
              variants,
              "isChecked",
              "isChecked"
            ),

            [sty.track__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.track__noLabel]: hasVariant(variants, "noLabel", "noLabel")
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(projectcss.all, sty.thumb, {
            [sty.thumb_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.thumb__isChecked]: hasVariant(
              variants,
              "isChecked",
              "isChecked"
            ),

            [sty.thumb__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.thumb__noLabel]: hasVariant(variants, "noLabel", "noLabel")
          })}
        />
      </div>

      {(hasVariant(variants, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainer__noLabel]: hasVariant(
              variants,
              "noLabel",
              "noLabel"
            )
          })}
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
  return pp.useSwitch(
    PlasmicSwitchTextPlasmic,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSwitchTextPlasmic__ArgProps,
      internalVariantPropNames: PlasmicSwitchTextPlasmic__VariantProps
    });

    return PlasmicSwitchTextPlasmic__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitchTextPlasmic";
  } else {
    func.displayName = `PlasmicSwitchTextPlasmic.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitchTextPlasmic = Object.assign(
  // Top-level PlasmicSwitchTextPlasmic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSwitchTextPlasmic
    internalVariantProps: PlasmicSwitchTextPlasmic__VariantProps,
    internalArgProps: PlasmicSwitchTextPlasmic__ArgProps,
    useBehavior
  }
);

export default PlasmicSwitchTextPlasmic;
/* prettier-ignore-end */
