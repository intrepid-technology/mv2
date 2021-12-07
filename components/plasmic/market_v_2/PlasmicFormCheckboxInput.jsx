// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XuFJ5mD6RY
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CheckboxInput from "../../CheckboxInput"; // plasmic-import: dB2P3uonwOO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFormCheckboxInput.module.css"; // plasmic-import: XuFJ5mD6RY/css

export const PlasmicFormCheckboxInput__VariantProps = new Array(
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export const PlasmicFormCheckboxInput__ArgProps = new Array(
  "name",
  "value",
  "children"
);

function PlasmicFormCheckboxInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <CheckboxInput
        data-plasmic-name={"checkboxInput"}
        data-plasmic-override={overrides.checkboxInput}
        className={classNames("__wab_instance", sty.checkboxInput, {
          [sty.checkboxInput__isChecked]: hasVariant(
            variants,
            "isChecked",
            "isChecked"
          ),

          [sty.checkboxInput__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.checkboxInput__isIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          )
        })}
        defaultChecked={
          hasVariant(variants, "isChecked", "isChecked")
            ? "isChecked"
            : undefined
        }
        isDisabled={
          hasVariant(variants, "isDisabled", "isDisabled")
            ? "isDisabled"
            : undefined
        }
        isIndeterminate={
          hasVariant(variants, "isIndeterminate", "isIndeterminate")
            ? "isIndeterminate"
            : undefined
        }
        name={args.name}
        value={args.value}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.children
        })}
      </CheckboxInput>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "checkboxInput"],
  checkboxInput: ["checkboxInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFormCheckboxInput__ArgProps,
      internalVariantPropNames: PlasmicFormCheckboxInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFormCheckboxInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormCheckboxInput";
  } else {
    func.displayName = `PlasmicFormCheckboxInput.${nodeName}`;
  }
  return func;
}

export const PlasmicFormCheckboxInput = Object.assign(
  // Top-level PlasmicFormCheckboxInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    checkboxInput: makeNodeComponent("checkboxInput"),
    // Metadata about props expected for PlasmicFormCheckboxInput
    internalVariantProps: PlasmicFormCheckboxInput__VariantProps,
    internalArgProps: PlasmicFormCheckboxInput__ArgProps
  }
);

export default PlasmicFormCheckboxInput;
/* prettier-ignore-end */
