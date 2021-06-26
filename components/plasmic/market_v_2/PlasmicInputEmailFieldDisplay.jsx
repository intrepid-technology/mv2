// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: OHtxSIix_r
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputEmailFieldDisplay.module.css"; // plasmic-import: OHtxSIix_r/css

export const PlasmicInputEmailFieldDisplay__VariantProps = new Array();

export const PlasmicInputEmailFieldDisplay__ArgProps = new Array("buttonText");

function PlasmicInputEmailFieldDisplay__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent)}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox)}
          placeholder={"Enter your..."}
          size={1}
          type={"text"}
          value={""}
        />

        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(defaultcss.button, sty.button)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Click Me",
            value: args.buttonText,
            className: classNames(sty.slotButtonText)
          })}
        </button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "textbox", "button"],
  parent: ["parent", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputEmailFieldDisplay__ArgProps,
      internalVariantPropNames: PlasmicInputEmailFieldDisplay__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputEmailFieldDisplay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputEmailFieldDisplay";
  } else {
    func.displayName = `PlasmicInputEmailFieldDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicInputEmailFieldDisplay = Object.assign(
  // Top-level PlasmicInputEmailFieldDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicInputEmailFieldDisplay
    internalVariantProps: PlasmicInputEmailFieldDisplay__VariantProps,
    internalArgProps: PlasmicInputEmailFieldDisplay__ArgProps
  }
);

export default PlasmicInputEmailFieldDisplay;
/* prettier-ignore-end */
