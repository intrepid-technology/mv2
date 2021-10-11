// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: rDSDf80NUiR
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextAreaInput from "../../TextAreaInput"; // plasmic-import: 0ftTMwkv9kS/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFormTextAreaInput.module.css"; // plasmic-import: rDSDf80NUiR/css

export const PlasmicFormTextAreaInput__VariantProps = new Array(
  "type",
  "adornment"
);

export const PlasmicFormTextAreaInput__ArgProps = new Array(
  "name",
  "placeholder"
);

function PlasmicFormTextAreaInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__adornment_start]: hasVariant(variants, "adornment", "start")
      })}
    >
      <TextAreaInput
        data-plasmic-name={"textAreaInput"}
        data-plasmic-override={overrides.textAreaInput}
        adornment={
          hasVariant(variants, "adornment", "start") &&
          hasVariant(variants, "adornment", "end")
            ? ["end", "start"]
            : hasVariant(variants, "adornment", "end")
            ? ["end"]
            : hasVariant(variants, "adornment", "start")
            ? ["start"]
            : undefined
        }
        className={classNames("__wab_instance", sty.textAreaInput, {
          [sty.textAreaInput__adornment_end]: hasVariant(
            variants,
            "adornment",
            "end"
          ),

          [sty.textAreaInput__adornment_start]: hasVariant(
            variants,
            "adornment",
            "start"
          ),

          [sty.textAreaInput__adornment_start_adornment_end]:
            hasVariant(variants, "adornment", "start") &&
            hasVariant(variants, "adornment", "end"),
          [sty.textAreaInput__type_primary]: hasVariant(
            variants,
            "type",
            "primary"
          ),

          [sty.textAreaInput__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          )
        })}
        name={args.name}
        placeholder={args.placeholder}
        type={
          hasVariant(variants, "type", "secondary")
            ? "secondary"
            : hasVariant(variants, "type", "primary")
            ? "primary"
            : undefined
        }
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textAreaInput"],
  textAreaInput: ["textAreaInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFormTextAreaInput__ArgProps,
      internalVariantPropNames: PlasmicFormTextAreaInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFormTextAreaInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormTextAreaInput";
  } else {
    func.displayName = `PlasmicFormTextAreaInput.${nodeName}`;
  }
  return func;
}

export const PlasmicFormTextAreaInput = Object.assign(
  // Top-level PlasmicFormTextAreaInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textAreaInput: makeNodeComponent("textAreaInput"),
    // Metadata about props expected for PlasmicFormTextAreaInput
    internalVariantProps: PlasmicFormTextAreaInput__VariantProps,
    internalArgProps: PlasmicFormTextAreaInput__ArgProps
  }
);

export default PlasmicFormTextAreaInput;
/* prettier-ignore-end */