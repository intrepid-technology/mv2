// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: hjWInH_vco
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: Ss3X7VAgr4Y/component
import MultiSelectOption from "../../MultiSelectOption"; // plasmic-import: i_xE2f64UA/component
import ChipBadgeDisplay from "../../ChipBadgeDisplay"; // plasmic-import: 9_NbJKBtbu/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicMultiSelectInput.module.css"; // plasmic-import: hjWInH_vco/css
import ChevronDownBIcon from "./icons/PlasmicIcon__ChevronDownB"; // plasmic-import: wk3elY0ALL/icon

export const PlasmicMultiSelectInput__VariantProps = new Array("isOpen");

export const PlasmicMultiSelectInput__ArgProps = new Array();

function PlasmicMultiSelectInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
      <div
        data-plasmic-name={"comboBoxWrapper"}
        data-plasmic-override={overrides.comboBoxWrapper}
        className={classNames(projectcss.all, sty.comboBoxWrapper)}
      >
        <div
          data-plasmic-name={"inputContainer"}
          data-plasmic-override={overrides.inputContainer}
          className={classNames(projectcss.all, sty.inputContainer)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
          />

          <div
            data-plasmic-name={"dropdownButtonWrapper"}
            data-plasmic-override={overrides.dropdownButtonWrapper}
            className={classNames(projectcss.all, sty.dropdownButtonWrapper)}
          >
            <ChevronDownBIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </div>
      </div>

      {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
        <div
          data-plasmic-name={"optionGroup"}
          data-plasmic-override={overrides.optionGroup}
          className={classNames(projectcss.all, sty.optionGroup, {
            [sty.optionGroup__isOpen]: hasVariant(variants, "isOpen", "isOpen")
          })}
        >
          <MultiSelectOption
            className={classNames(
              "__wab_instance",
              sty.multiSelectOption__jkAto
            )}
          />

          <MultiSelectOption
            className={classNames(
              "__wab_instance",
              sty.multiSelectOption__yqGX
            )}
          />

          <MultiSelectOption
            className={classNames(
              "__wab_instance",
              sty.multiSelectOption__btGi
            )}
          />
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"selectedOptionsWrapper"}
        data-plasmic-override={overrides.selectedOptionsWrapper}
        hasGap={true}
        className={classNames(projectcss.all, sty.selectedOptionsWrapper)}
      >
        <ChipBadgeDisplay
          className={classNames("__wab_instance", sty.chipBadgeDisplay__ehVxx)}
          color={"brand"}
          trigger={"_delete"}
          type={"ghost"}
        />

        <ChipBadgeDisplay
          className={classNames("__wab_instance", sty.chipBadgeDisplay__vxP3)}
          color={"brand"}
          trigger={"_delete"}
          type={"ghost"}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "comboBoxWrapper",
    "inputContainer",
    "textInput",
    "dropdownButtonWrapper",
    "svg",
    "optionGroup",
    "selectedOptionsWrapper"
  ],

  comboBoxWrapper: [
    "comboBoxWrapper",
    "inputContainer",
    "textInput",
    "dropdownButtonWrapper",
    "svg"
  ],

  inputContainer: [
    "inputContainer",
    "textInput",
    "dropdownButtonWrapper",
    "svg"
  ],

  textInput: ["textInput"],
  dropdownButtonWrapper: ["dropdownButtonWrapper", "svg"],
  svg: ["svg"],
  optionGroup: ["optionGroup"],
  selectedOptionsWrapper: ["selectedOptionsWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMultiSelectInput__ArgProps,
      internalVariantPropNames: PlasmicMultiSelectInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMultiSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMultiSelectInput";
  } else {
    func.displayName = `PlasmicMultiSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicMultiSelectInput = Object.assign(
  // Top-level PlasmicMultiSelectInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    comboBoxWrapper: makeNodeComponent("comboBoxWrapper"),
    inputContainer: makeNodeComponent("inputContainer"),
    textInput: makeNodeComponent("textInput"),
    dropdownButtonWrapper: makeNodeComponent("dropdownButtonWrapper"),
    svg: makeNodeComponent("svg"),
    optionGroup: makeNodeComponent("optionGroup"),
    selectedOptionsWrapper: makeNodeComponent("selectedOptionsWrapper"),
    // Metadata about props expected for PlasmicMultiSelectInput
    internalVariantProps: PlasmicMultiSelectInput__VariantProps,
    internalArgProps: PlasmicMultiSelectInput__ArgProps
  }
);

export default PlasmicMultiSelectInput;
/* prettier-ignore-end */
