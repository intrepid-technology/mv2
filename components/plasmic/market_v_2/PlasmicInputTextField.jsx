// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ATs3nXJ-Tjc
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputTextField.module.css"; // plasmic-import: ATs3nXJ-Tjc/css

export const PlasmicInputTextField__VariantProps = new Array("type", "size");

export const PlasmicInputTextField__ArgProps = new Array("placeholder");

function PlasmicInputTextField__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize__160]: hasVariant(variants, "size", "_160"),
          [sty.rootsize__180]: hasVariant(variants, "size", "_180"),
          [sty.rootsize__270]: hasVariant(variants, "size", "_270"),
          [sty.rootsize__360]: hasVariant(variants, "size", "_360"),
          [sty.rootsize__540]: hasVariant(variants, "size", "_540"),
          [sty.rootsize_stretch]: hasVariant(variants, "size", "stretch"),
          [sty.roottype_secondary]: hasVariant(variants, "type", "secondary")
        }
      )}
    >
      <div
        data-plasmic-name={"inputTextParent"}
        data-plasmic-override={overrides.inputTextParent}
        className={classNames(projectcss.all, sty.inputTextParent, {
          [sty.inputTextParentsize__160]: hasVariant(variants, "size", "_160"),
          [sty.inputTextParentsize__180]: hasVariant(variants, "size", "_180"),
          [sty.inputTextParentsize__270]: hasVariant(variants, "size", "_270"),
          [sty.inputTextParentsize__360]: hasVariant(variants, "size", "_360"),
          [sty.inputTextParentsize__540]: hasVariant(variants, "size", "_540"),
          [sty.inputTextParentsize_stretch]: hasVariant(
            variants,
            "size",
            "stretch"
          )
        })}
      >
        <input
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.description,
            {
              [sty.descriptionsize__160]: hasVariant(variants, "size", "_160"),
              [sty.descriptionsize__180]: hasVariant(variants, "size", "_180"),
              [sty.descriptionsize__270]: hasVariant(variants, "size", "_270"),
              [sty.descriptionsize__540]: hasVariant(variants, "size", "_540"),
              [sty.descriptionsize_stretch]: hasVariant(
                variants,
                "size",
                "stretch"
              ),

              [sty.descriptiontype_primary]: hasVariant(
                variants,
                "type",
                "primary"
              ),

              [sty.descriptiontype_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            }
          )}
          placeholder={args.placeholder}
          size={1}
          type={"text"}
          value={""}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "inputTextParent", "description"],
  inputTextParent: ["inputTextParent", "description"],
  description: ["description"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextField__ArgProps,
      internalVariantPropNames: PlasmicInputTextField__VariantProps
    });

    return PlasmicInputTextField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextField";
  } else {
    func.displayName = `PlasmicInputTextField.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextField = Object.assign(
  // Top-level PlasmicInputTextField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputTextParent: makeNodeComponent("inputTextParent"),
    description: makeNodeComponent("description"),
    // Metadata about props expected for PlasmicInputTextField
    internalVariantProps: PlasmicInputTextField__VariantProps,
    internalArgProps: PlasmicInputTextField__ArgProps
  }
);

export default PlasmicInputTextField;
/* prettier-ignore-end */
