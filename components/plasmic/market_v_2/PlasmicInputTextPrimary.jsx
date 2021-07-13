// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: a2XXnCI4Ss
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputTextPrimary.module.css"; // plasmic-import: a2XXnCI4Ss/css

export const PlasmicInputTextPrimary__VariantProps = new Array(
  "type",
  "width",
  "height",
  "background"
);

export const PlasmicInputTextPrimary__ArgProps = new Array();

function PlasmicInputTextPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__width__90]: hasVariant(variants, "width", "_90")
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__background_white]: hasVariant(
            variants,
            "background",
            "white"
          ),

          [sty.parent__height__32]: hasVariant(variants, "height", "_32"),
          [sty.parent__height__36]: hasVariant(variants, "height", "_36"),
          [sty.parent__height__40]: hasVariant(variants, "height", "_40"),
          [sty.parent__height__48]: hasVariant(variants, "height", "_48"),
          [sty.parent__width__160]: hasVariant(variants, "width", "_160"),
          [sty.parent__width__180]: hasVariant(variants, "width", "_180"),
          [sty.parent__width__270]: hasVariant(variants, "width", "_270"),
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720"),
          [sty.parent__width__90]: hasVariant(variants, "width", "_90")
        })}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox, {
            [sty.textbox__background_black]: hasVariant(
              variants,
              "background",
              "black"
            ),

            [sty.textbox__background_grey]: hasVariant(
              variants,
              "background",
              "grey"
            ),

            [sty.textbox__background_white]: hasVariant(
              variants,
              "background",
              "white"
            ),

            [sty.textbox__height__32]: hasVariant(variants, "height", "_32"),
            [sty.textbox__height__36]: hasVariant(variants, "height", "_36"),
            [sty.textbox__height__40]: hasVariant(variants, "height", "_40"),
            [sty.textbox__height__48]: hasVariant(variants, "height", "_48"),
            [sty.textbox__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.textbox__type_underline]: hasVariant(
              variants,
              "type",
              "underline"
            ),

            [sty.textbox__width__90]: hasVariant(variants, "width", "_90")
          })}
          placeholder={"Enter text"}
          size={1}
          type={"text"}
          value={""}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "textbox"],
  parent: ["parent", "textbox"],
  textbox: ["textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputTextPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputTextPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextPrimary";
  } else {
    func.displayName = `PlasmicInputTextPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextPrimary = Object.assign(
  // Top-level PlasmicInputTextPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicInputTextPrimary
    internalVariantProps: PlasmicInputTextPrimary__VariantProps,
    internalArgProps: PlasmicInputTextPrimary__ArgProps
  }
);

export default PlasmicInputTextPrimary;
/* prettier-ignore-end */