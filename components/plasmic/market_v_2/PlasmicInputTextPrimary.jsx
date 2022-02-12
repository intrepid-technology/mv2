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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputTextPrimary.module.css"; // plasmic-import: a2XXnCI4Ss/css

export const PlasmicInputTextPrimary__VariantProps = new Array(
  "type",
  "width",
  "height",
  "background"
);

export const PlasmicInputTextPrimary__ArgProps = new Array();

function PlasmicInputTextPrimary__RenderFunc(props) {
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
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.roottype_underline]: hasVariant(variants, "type", "underline"),
          [sty.rootwidth__90]: hasVariant(variants, "width", "_90"),
          [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
        }
      )}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentbackground_white]: hasVariant(
            variants,
            "background",
            "white"
          ),

          [sty.parentheight__32]: hasVariant(variants, "height", "_32"),
          [sty.parentheight__36]: hasVariant(variants, "height", "_36"),
          [sty.parentheight__40]: hasVariant(variants, "height", "_40"),
          [sty.parentheight__48]: hasVariant(variants, "height", "_48"),
          [sty.parentwidth__160]: hasVariant(variants, "width", "_160"),
          [sty.parentwidth__180]: hasVariant(variants, "width", "_180"),
          [sty.parentwidth__270]: hasVariant(variants, "width", "_270"),
          [sty.parentwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.parentwidth__540]: hasVariant(variants, "width", "_540"),
          [sty.parentwidth__720]: hasVariant(variants, "width", "_720"),
          [sty.parentwidth__90]: hasVariant(variants, "width", "_90"),
          [sty.parentwidth_stretch]: hasVariant(variants, "width", "stretch")
        })}
      >
        <input
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput ?? overrides.textbox}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.textInput,
            {
              [sty.textInputbackground_black]: hasVariant(
                variants,
                "background",
                "black"
              ),

              [sty.textInputbackground_grey]: hasVariant(
                variants,
                "background",
                "grey"
              ),

              [sty.textInputbackground_white]: hasVariant(
                variants,
                "background",
                "white"
              ),

              [sty.textInputheight__32]: hasVariant(variants, "height", "_32"),
              [sty.textInputheight__36]: hasVariant(variants, "height", "_36"),
              [sty.textInputheight__40]: hasVariant(variants, "height", "_40"),
              [sty.textInputheight__44]: hasVariant(variants, "height", "_44"),
              [sty.textInputheight__48]: hasVariant(variants, "height", "_48"),
              [sty.textInputtype_primary]: hasVariant(
                variants,
                "type",
                "primary"
              ),

              [sty.textInputtype_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              ),

              [sty.textInputtype_underline]: hasVariant(
                variants,
                "type",
                "underline"
              ),

              [sty.textInputwidth__90]: hasVariant(variants, "width", "_90"),
              [sty.textInputwidth_stretch]: hasVariant(
                variants,
                "width",
                "stretch"
              )
            }
          )}
          size={1}
          type={"text"}
          value={""}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "textInput", "textbox"],
  parent: ["parent", "textInput", "textbox"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputTextPrimary__VariantProps
    });

    return PlasmicInputTextPrimary__RenderFunc({
      variants,
      args,
      overrides,
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
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicInputTextPrimary
    internalVariantProps: PlasmicInputTextPrimary__VariantProps,
    internalArgProps: PlasmicInputTextPrimary__ArgProps
  }
);

export default PlasmicInputTextPrimary;
/* prettier-ignore-end */
