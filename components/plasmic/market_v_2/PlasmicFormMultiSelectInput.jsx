// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: eTIpxqMjYo
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MultiSelectInput from "../../MultiSelectInput"; // plasmic-import: hjWInH_vco/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFormMultiSelectInput.module.css"; // plasmic-import: eTIpxqMjYo/css

export const PlasmicFormMultiSelectInput__VariantProps = new Array("isOpen");

export const PlasmicFormMultiSelectInput__ArgProps = new Array("name");

function PlasmicFormMultiSelectInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <MultiSelectInput
        data-plasmic-name={"multiSelectInput"}
        data-plasmic-override={overrides.multiSelectInput}
        className={classNames("__wab_instance", sty.multiSelectInput, {
          [sty.multiSelectInput__isOpen]: hasVariant(
            variants,
            "isOpen",
            "isOpen"
          )
        })}
        isOpen={hasVariant(variants, "isOpen", "isOpen") ? "isOpen" : undefined}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "multiSelectInput"],
  multiSelectInput: ["multiSelectInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFormMultiSelectInput__ArgProps,
      internalVariantPropNames: PlasmicFormMultiSelectInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFormMultiSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormMultiSelectInput";
  } else {
    func.displayName = `PlasmicFormMultiSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicFormMultiSelectInput = Object.assign(
  // Top-level PlasmicFormMultiSelectInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    multiSelectInput: makeNodeComponent("multiSelectInput"),
    // Metadata about props expected for PlasmicFormMultiSelectInput
    internalVariantProps: PlasmicFormMultiSelectInput__VariantProps,
    internalArgProps: PlasmicFormMultiSelectInput__ArgProps
  }
);

export default PlasmicFormMultiSelectInput;
/* prettier-ignore-end */