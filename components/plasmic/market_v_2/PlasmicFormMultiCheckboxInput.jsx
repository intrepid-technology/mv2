// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -o3gl0nF6j
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MultiCheckboxInput from "../../MultiCheckboxInput"; // plasmic-import: 6TMzn6NJGN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFormMultiCheckboxInput.module.css"; // plasmic-import: -o3gl0nF6j/css

export const PlasmicFormMultiCheckboxInput__VariantProps = new Array();

export const PlasmicFormMultiCheckboxInput__ArgProps = new Array("name");

function PlasmicFormMultiCheckboxInput__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
      <MultiCheckboxInput
        data-plasmic-name={"multiCheckboxInput"}
        data-plasmic-override={overrides.multiCheckboxInput}
        className={classNames("__wab_instance", sty.multiCheckboxInput)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "multiCheckboxInput"],
  multiCheckboxInput: ["multiCheckboxInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFormMultiCheckboxInput__ArgProps,
      internalVariantPropNames: PlasmicFormMultiCheckboxInput__VariantProps
    });

    return PlasmicFormMultiCheckboxInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormMultiCheckboxInput";
  } else {
    func.displayName = `PlasmicFormMultiCheckboxInput.${nodeName}`;
  }
  return func;
}

export const PlasmicFormMultiCheckboxInput = Object.assign(
  // Top-level PlasmicFormMultiCheckboxInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    multiCheckboxInput: makeNodeComponent("multiCheckboxInput"),
    // Metadata about props expected for PlasmicFormMultiCheckboxInput
    internalVariantProps: PlasmicFormMultiCheckboxInput__VariantProps,
    internalArgProps: PlasmicFormMultiCheckboxInput__ArgProps
  }
);

export default PlasmicFormMultiCheckboxInput;
/* prettier-ignore-end */
