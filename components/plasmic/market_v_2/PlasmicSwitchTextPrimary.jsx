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
import * as sty from "./PlasmicSwitchTextPrimary.module.css"; // plasmic-import: bTEGL3UXVph/css

export const PlasmicSwitchTextPrimary__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export const PlasmicSwitchTextPrimary__ArgProps = new Array(
  "children",
  "name",
  "value"
);

function PlasmicSwitchTextPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
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
        className={classNames(defaultcss.all, sty.toggle, {
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
          className={classNames(defaultcss.all, sty.track, {
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
          className={classNames(defaultcss.all, sty.thumb, {
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
          className={classNames(defaultcss.all, sty.labelContainer, {
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
            className: classNames(sty.slotChildren, {
              [sty.slotChildren_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotChildren__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  );
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }
  return p.useSwitch(
    PlasmicSwitchTextPrimary,
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
      internalArgPropNames: PlasmicSwitchTextPrimary__ArgProps,
      internalVariantPropNames: PlasmicSwitchTextPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSwitchTextPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitchTextPrimary";
  } else {
    func.displayName = `PlasmicSwitchTextPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitchTextPrimary = Object.assign(
  // Top-level PlasmicSwitchTextPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSwitchTextPrimary
    internalVariantProps: PlasmicSwitchTextPrimary__VariantProps,
    internalArgProps: PlasmicSwitchTextPrimary__ArgProps,
    useBehavior
  }
);

export default PlasmicSwitchTextPrimary;
/* prettier-ignore-end */
