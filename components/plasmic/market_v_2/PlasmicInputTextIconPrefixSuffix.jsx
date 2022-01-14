// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: kgmVBcQ-Bb
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputTextIconPrefixSuffix.module.css"; // plasmic-import: kgmVBcQ-Bb/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicInputTextIconPrefixSuffix__VariantProps = new Array(
  "width"
);

export const PlasmicInputTextIconPrefixSuffix__ArgProps = new Array();

function PlasmicInputTextIconPrefixSuffix__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__width_stretch]: hasVariant(variants, "width", "stretch")
      })}
    >
      <div className={classNames(projectcss.all, sty.freeBox__ikhqW)}>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Short text"}
        </div>
      </div>

      <input
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput ?? overrides.textbox}
        className={classNames(projectcss.input, sty.textInput)}
        placeholder={""}
        size={1}
        type={"text"}
        value={""}
      />

      <div className={classNames(projectcss.all, sty.freeBox__kE6E)}>
        <PlusBoldIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "textInput", "textbox", "svg"],
  text: ["text"],
  textInput: ["textInput", "textbox"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextIconPrefixSuffix__ArgProps,
      internalVariantPropNames: PlasmicInputTextIconPrefixSuffix__VariantProps
    });

    return PlasmicInputTextIconPrefixSuffix__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextIconPrefixSuffix";
  } else {
    func.displayName = `PlasmicInputTextIconPrefixSuffix.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextIconPrefixSuffix = Object.assign(
  // Top-level PlasmicInputTextIconPrefixSuffix renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    textInput: makeNodeComponent("textInput"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicInputTextIconPrefixSuffix
    internalVariantProps: PlasmicInputTextIconPrefixSuffix__VariantProps,
    internalArgProps: PlasmicInputTextIconPrefixSuffix__ArgProps
  }
);

export default PlasmicInputTextIconPrefixSuffix;
/* prettier-ignore-end */
