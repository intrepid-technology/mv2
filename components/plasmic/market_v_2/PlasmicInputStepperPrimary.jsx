// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: _G6fbknRaZ
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputStepperPrimary.module.css"; // plasmic-import: _G6fbknRaZ/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon
import MinusBoldIcon from "./icons/PlasmicIcon__MinusBold"; // plasmic-import: AE2h3Tocsq/icon

export const PlasmicInputStepperPrimary__VariantProps = new Array();

export const PlasmicInputStepperPrimary__ArgProps = new Array();

function PlasmicInputStepperPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <button className={classNames(defaultcss.button, sty.button__cGaqh)}>
        <PlusBoldIcon
          className={classNames(defaultcss.all, sty.svg___7TaUz)}
          role={"img"}
        />
      </button>

      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(defaultcss.input, sty.textbox)}
        placeholder={""}
        size={1}
        type={"text"}
        value={""}
      />

      <button className={classNames(defaultcss.button, sty.button__sfUcw)}>
        <MinusBoldIcon
          className={classNames(defaultcss.all, sty.svg___9It4W)}
          role={"img"}
        />
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputStepperPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputStepperPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputStepperPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputStepperPrimary";
  } else {
    func.displayName = `PlasmicInputStepperPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputStepperPrimary = Object.assign(
  // Top-level PlasmicInputStepperPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicInputStepperPrimary
    internalVariantProps: PlasmicInputStepperPrimary__VariantProps,
    internalArgProps: PlasmicInputStepperPrimary__ArgProps
  }
);

export default PlasmicInputStepperPrimary;
/* prettier-ignore-end */
