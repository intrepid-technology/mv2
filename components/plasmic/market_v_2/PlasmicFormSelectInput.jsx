// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: VSW4TWeqMx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NativeSelectInput from "../../NativeSelectInput"; // plasmic-import: 6rjTfqGTn_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFormSelectInput.module.css"; // plasmic-import: VSW4TWeqMx/css

export const PlasmicFormSelectInput__VariantProps = new Array(
  "type",
  "isOpen",
  "isDisabled",
  "hideLabel"
);

export const PlasmicFormSelectInput__ArgProps = new Array(
  "name",
  "value",
  "placeholder",
  "label"
);

function PlasmicFormSelectInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <NativeSelectInput
        data-plasmic-name={"nativeSelectInput"}
        data-plasmic-override={overrides.nativeSelectInput}
        className={classNames("__wab_instance", sty.nativeSelectInput, {
          [sty.nativeSelectInput__hideLabel]: hasVariant(
            variants,
            "hideLabel",
            "hideLabel"
          ),

          [sty.nativeSelectInput__type_primary]: hasVariant(
            variants,
            "type",
            "primary"
          )
        })}
        hideLabel={
          hasVariant(variants, "hideLabel", "hideLabel")
            ? "hideLabel"
            : undefined
        }
        label={p.renderPlasmicSlot({
          defaultContents: "Field Label",
          value: args.label
        })}
        placeholder={p.renderPlasmicSlot({
          defaultContents: "Select...",
          value: args.placeholder
        })}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "nativeSelectInput"],
  nativeSelectInput: ["nativeSelectInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFormSelectInput__ArgProps,
      internalVariantPropNames: PlasmicFormSelectInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFormSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormSelectInput";
  } else {
    func.displayName = `PlasmicFormSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicFormSelectInput = Object.assign(
  // Top-level PlasmicFormSelectInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nativeSelectInput: makeNodeComponent("nativeSelectInput"),
    // Metadata about props expected for PlasmicFormSelectInput
    internalVariantProps: PlasmicFormSelectInput__VariantProps,
    internalArgProps: PlasmicFormSelectInput__ArgProps
  }
);

export default PlasmicFormSelectInput;
/* prettier-ignore-end */