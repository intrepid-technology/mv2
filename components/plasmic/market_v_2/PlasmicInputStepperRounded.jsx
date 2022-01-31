// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: n9tjRY9Rdx
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputStepperRounded.module.css"; // plasmic-import: n9tjRY9Rdx/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon
import MinusBoldIcon from "./icons/PlasmicIcon__MinusBold"; // plasmic-import: AE2h3Tocsq/icon

export const PlasmicInputStepperRounded__VariantProps = new Array();

export const PlasmicInputStepperRounded__ArgProps = new Array();

function PlasmicInputStepperRounded__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        className={classNames(
          projectcss.all,
          projectcss.button,
          sty.button___5Xrke
        )}
      >
        <PlusBoldIcon
          className={classNames(projectcss.all, sty.svg___10NR)}
          role={"img"}
        />
      </button>

      <input
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput ?? overrides.textbox}
        className={classNames(projectcss.all, projectcss.input, sty.textInput)}
        placeholder={""}
        size={1}
        type={"text"}
        value={""}
      />

      <button
        className={classNames(
          projectcss.all,
          projectcss.button,
          sty.button__lq38X
        )}
      >
        <MinusBoldIcon
          className={classNames(projectcss.all, sty.svg__pk7Ni)}
          role={"img"}
        />
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputStepperRounded__ArgProps,
      internalVariantPropNames: PlasmicInputStepperRounded__VariantProps
    });

    return PlasmicInputStepperRounded__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputStepperRounded";
  } else {
    func.displayName = `PlasmicInputStepperRounded.${nodeName}`;
  }
  return func;
}

export const PlasmicInputStepperRounded = Object.assign(
  // Top-level PlasmicInputStepperRounded renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicInputStepperRounded
    internalVariantProps: PlasmicInputStepperRounded__VariantProps,
    internalArgProps: PlasmicInputStepperRounded__ArgProps
  }
);

export default PlasmicInputStepperRounded;
/* prettier-ignore-end */
