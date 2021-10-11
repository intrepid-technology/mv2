// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6gReGypE5kO
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
import SelectInput__Overlay from "../../SelectInput__Overlay"; // plasmic-import: 1D4cLPS4qHu/component
import SelectInput__Option from "../../SelectInput__Option"; // plasmic-import: t56z-AA9Ffy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSelectInput.module.css"; // plasmic-import: 6gReGypE5kO/css
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: -Of6sI0cqgk/icon
import ChevronUpIcon from "./icons/PlasmicIcon__ChevronUp"; // plasmic-import: ftv5Hc1dwv3/icon

export const PlasmicSelectInput__VariantProps = new Array(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "type"
);

export const PlasmicSelectInput__ArgProps = new Array(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name"
);

const PlasmicSelectInputContext = React.createContext(undefined);

function PlasmicSelectInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <PlasmicSelectInputContext.Provider value={{ variants, args }}>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
          [sty.root__isOpen]: hasVariant(variants, "isOpen", "isOpen")
        })}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <p.Stack
          as={"button"}
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          hasGap={true}
          className={classNames(defaultcss.button, sty.trigger, {
            [sty.trigger_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.trigger__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.trigger__isOpen]: hasVariant(variants, "isOpen", "isOpen"),
            [sty.trigger__showPlaceholder]: hasVariant(
              variants,
              "showPlaceholder",
              "showPlaceholder"
            ),

            [sty.trigger__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })}
          disabled={
            hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(defaultcss.all, sty.contentContainer, {
              [sty.contentContainer__showPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContent__isOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),

                    [sty.slotTargetSelectedContent__showPlaceholder]:
                      hasVariant(variants, "showPlaceholder", "showPlaceholder")
                  })
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Select...",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholder__showPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant(variants, "isOpen", "isOpen")
                ? ChevronUpIcon
                : ChevronDownIcon
            }
            className={classNames(defaultcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIcon__isOpen]: hasVariant(
                variants,
                "isOpen",
                "isOpen"
              )
            })}
            role={"img"}
          />
        </p.Stack>

        {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
          <SelectInput__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlay__isOpen]: hasVariant(variants, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(defaultcss.all, sty.optionsContainer)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <SelectInput__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__yx01C
                      )}
                      value={"value1"}
                    >
                      {"Option 1"}
                    </SelectInput__Option>

                    <SelectInput__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__hUtZe
                      )}
                      value={"value2"}
                    >
                      {"Option 2"}
                    </SelectInput__Option>
                  </React.Fragment>
                ),

                value: args.children
              })}
            </div>
          </SelectInput__Overlay>
        ) : null}
      </div>
    </PlasmicSelectInputContext.Provider>
  );
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: (
        <React.Fragment>
          <SelectInput__Option
            className={classNames("__wab_instance", sty.option__yx01C)}
            value={"value1"}
          >
            {"Option 1"}
          </SelectInput__Option>

          <SelectInput__Option
            className={classNames("__wab_instance", sty.option__hUtZe)}
            value={"value2"}
          >
            {"Option 2"}
          </SelectInput__Option>
        </React.Fragment>
      )
    };
  }
  return pp.useSelect(
    PlasmicSelectInput,
    props,
    {
      isOpenVariant: { group: "isOpen", variant: "isOpen" },
      placeholderVariant: {
        group: "showPlaceholder",
        variant: "showPlaceholder"
      },

      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      triggerContentSlot: "selectedContent",
      optionsSlot: "children",
      placeholderSlot: "placeholder",
      root: "root",
      trigger: "trigger",
      overlay: "overlay",
      optionsContainer: "optionsContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],

  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectInput__ArgProps,
      internalVariantPropNames: PlasmicSelectInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectInput";
  } else {
    func.displayName = `PlasmicSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectInput = Object.assign(
  // Top-level PlasmicSelectInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelectInput
    internalVariantProps: PlasmicSelectInput__VariantProps,
    internalArgProps: PlasmicSelectInput__ArgProps,
    // Context for sub components
    Context: PlasmicSelectInputContext,
    useBehavior
  }
);

export default PlasmicSelectInput;
/* prettier-ignore-end */