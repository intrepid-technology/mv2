// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6TMzn6NJGN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CheckboxInput from "../../CheckboxInput"; // plasmic-import: dB2P3uonwOO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicMultiCheckboxInput.module.css"; // plasmic-import: 6TMzn6NJGN/css

export const PlasmicMultiCheckboxInput__VariantProps = new Array();

export const PlasmicMultiCheckboxInput__ArgProps = new Array();

function PlasmicMultiCheckboxInput__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <CheckboxInput
        className={classNames("__wab_instance", sty.checkboxInput__pUnr)}
      >
        {"Option 1"}
      </CheckboxInput>

      <CheckboxInput
        className={classNames("__wab_instance", sty.checkboxInput__hiYok)}
      >
        {"Option 2"}
      </CheckboxInput>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMultiCheckboxInput__ArgProps,
      internalVariantPropNames: PlasmicMultiCheckboxInput__VariantProps
    });

    return PlasmicMultiCheckboxInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMultiCheckboxInput";
  } else {
    func.displayName = `PlasmicMultiCheckboxInput.${nodeName}`;
  }
  return func;
}

export const PlasmicMultiCheckboxInput = Object.assign(
  // Top-level PlasmicMultiCheckboxInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicMultiCheckboxInput
    internalVariantProps: PlasmicMultiCheckboxInput__VariantProps,
    internalArgProps: PlasmicMultiCheckboxInput__ArgProps
  }
);

export default PlasmicMultiCheckboxInput;
/* prettier-ignore-end */
