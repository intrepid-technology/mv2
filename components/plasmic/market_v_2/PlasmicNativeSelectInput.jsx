// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6rjTfqGTn_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectInput from "../../SelectInput"; // plasmic-import: 6gReGypE5kO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNativeSelectInput.module.css"; // plasmic-import: 6rjTfqGTn_/css

export const PlasmicNativeSelectInput__VariantProps = new Array("hideLabel");

export const PlasmicNativeSelectInput__ArgProps = new Array(
  "placeholder",
  "label"
);

function PlasmicNativeSelectInput__RenderFunc(props) {
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
      {(hasVariant(variants, "hideLabel", "hideLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelWrapper"}
          data-plasmic-override={overrides.labelWrapper}
          className={classNames(projectcss.all, sty.labelWrapper, {
            [sty.labelWrapperhideLabel]: hasVariant(
              variants,
              "hideLabel",
              "hideLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Field Label",
            value: args.label
          })}
        </div>
      ) : null}

      <SelectInput
        data-plasmic-name={"selectInput"}
        data-plasmic-override={overrides.selectInput}
        className={classNames("__wab_instance", sty.selectInput)}
        placeholder={p.renderPlasmicSlot({
          defaultContents: "Select...",
          value: args.placeholder
        })}
        type={"secondary"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "labelWrapper", "selectInput"],
  labelWrapper: ["labelWrapper"],
  selectInput: ["selectInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNativeSelectInput__ArgProps,
      internalVariantPropNames: PlasmicNativeSelectInput__VariantProps
    });

    return PlasmicNativeSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNativeSelectInput";
  } else {
    func.displayName = `PlasmicNativeSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicNativeSelectInput = Object.assign(
  // Top-level PlasmicNativeSelectInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelWrapper: makeNodeComponent("labelWrapper"),
    selectInput: makeNodeComponent("selectInput"),
    // Metadata about props expected for PlasmicNativeSelectInput
    internalVariantProps: PlasmicNativeSelectInput__VariantProps,
    internalArgProps: PlasmicNativeSelectInput__ArgProps
  }
);

export default PlasmicNativeSelectInput;
/* prettier-ignore-end */
