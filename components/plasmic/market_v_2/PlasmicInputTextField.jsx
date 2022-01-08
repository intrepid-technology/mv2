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
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputTextField.module.css"; // plasmic-import: ATs3nXJ-Tjc/css

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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size__160]: hasVariant(variants, "size", "_160"),
        [sty.root__size__180]: hasVariant(variants, "size", "_180"),
        [sty.root__size__270]: hasVariant(variants, "size", "_270"),
        [sty.root__size__360]: hasVariant(variants, "size", "_360"),
        [sty.root__size__540]: hasVariant(variants, "size", "_540"),
        [sty.root__size_stretch]: hasVariant(variants, "size", "stretch"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
      })}
    >
      <div
        data-plasmic-name={"inputTextParent"}
        data-plasmic-override={overrides.inputTextParent}
        className={classNames(projectcss.all, sty.inputTextParent, {
          [sty.inputTextParent__size__160]: hasVariant(
            variants,
            "size",
            "_160"
          ),

          [sty.inputTextParent__size__180]: hasVariant(
            variants,
            "size",
            "_180"
          ),

          [sty.inputTextParent__size__270]: hasVariant(
            variants,
            "size",
            "_270"
          ),

          [sty.inputTextParent__size__360]: hasVariant(
            variants,
            "size",
            "_360"
          ),

          [sty.inputTextParent__size__540]: hasVariant(
            variants,
            "size",
            "_540"
          ),

          [sty.inputTextParent__size_stretch]: hasVariant(
            variants,
            "size",
            "stretch"
          )
        })}
      >
        <input
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames(projectcss.input, sty.description, {
            [sty.description__size__160]: hasVariant(variants, "size", "_160"),
            [sty.description__size__180]: hasVariant(variants, "size", "_180"),
            [sty.description__size__270]: hasVariant(variants, "size", "_270"),
            [sty.description__size__540]: hasVariant(variants, "size", "_540"),
            [sty.description__size_stretch]: hasVariant(
              variants,
              "size",
              "stretch"
            ),

            [sty.description__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),

            [sty.description__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })}
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
