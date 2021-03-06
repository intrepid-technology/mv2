// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: MorSLptejY
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSearchbarPrimary.module.css"; // plasmic-import: MorSLptejY/css
import Icon174Icon from "./icons/PlasmicIcon__Icon174"; // plasmic-import: yq36rktOQq/icon

export const PlasmicSearchbarPrimary__VariantProps = new Array(
  "type",
  "width",
  "height"
);

export const PlasmicSearchbarPrimary__ArgProps = new Array();

function PlasmicSearchbarPrimary__RenderFunc(props) {
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
          [sty.rootheight__36]: hasVariant(variants, "height", "_36"),
          [sty.rootheight__40]: hasVariant(variants, "height", "_40"),
          [sty.rootwidth__180]: hasVariant(variants, "width", "_180"),
          [sty.rootwidth__270]: hasVariant(variants, "width", "_270"),
          [sty.rootwidth__360]: hasVariant(variants, "width", "_360")
        }
      )}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentheight__36]: hasVariant(variants, "height", "_36"),
          [sty.parentheight__36_width__360]:
            hasVariant(variants, "width", "_360") &&
            hasVariant(variants, "height", "_36"),
          [sty.parentheight__40]: hasVariant(variants, "height", "_40"),
          [sty.parentheight__40_width__360]:
            hasVariant(variants, "width", "_360") &&
            hasVariant(variants, "height", "_40"),
          [sty.parenttype_secondary]: hasVariant(variants, "type", "secondary"),
          [sty.parentwidth__180]: hasVariant(variants, "width", "_180"),
          [sty.parentwidth__270]: hasVariant(variants, "width", "_270"),
          [sty.parentwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.parentwidth__540]: hasVariant(variants, "width", "_540"),
          [sty.parentwidth__720]: hasVariant(variants, "width", "_720")
        })}
      >
        <div
          data-plasmic-name={"searchSvgbg"}
          data-plasmic-override={overrides.searchSvgbg}
          className={classNames(projectcss.all, sty.searchSvgbg, {
            [sty.searchSvgbgheight__36]: hasVariant(variants, "height", "_36"),
            [sty.searchSvgbgheight__40]: hasVariant(variants, "height", "_40"),
            [sty.searchSvgbgtype_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.searchSvgbgwidth__180]: hasVariant(variants, "width", "_180"),
            [sty.searchSvgbgwidth__270]: hasVariant(variants, "width", "_270"),
            [sty.searchSvgbgwidth__360]: hasVariant(variants, "width", "_360")
          })}
        >
          <Icon174Icon
            data-plasmic-name={"searchSvg"}
            data-plasmic-override={overrides.searchSvg}
            className={classNames(projectcss.all, sty.searchSvg, {
              [sty.searchSvgheight__36]: hasVariant(variants, "height", "_36"),
              [sty.searchSvgheight__40]: hasVariant(variants, "height", "_40")
            })}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"textboxParent"}
          data-plasmic-override={overrides.textboxParent}
          className={classNames(projectcss.all, sty.textboxParent, {
            [sty.textboxParenttype_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),

            [sty.textboxParenttype_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.textboxParentwidth__180]: hasVariant(
              variants,
              "width",
              "_180"
            ),

            [sty.textboxParentwidth__270]: hasVariant(
              variants,
              "width",
              "_270"
            ),

            [sty.textboxParentwidth__360]: hasVariant(variants, "width", "_360")
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
                [sty.textInputtype_secondary]: hasVariant(
                  variants,
                  "type",
                  "secondary"
                )
              }
            )}
            placeholder={""}
            size={1}
            type={"text"}
            value={"Search..."}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "searchSvgbg",
    "searchSvg",
    "textboxParent",
    "textInput",
    "textbox"
  ],

  parent: [
    "parent",
    "searchSvgbg",
    "searchSvg",
    "textboxParent",
    "textInput",
    "textbox"
  ],

  searchSvgbg: ["searchSvgbg", "searchSvg"],
  searchSvg: ["searchSvg"],
  textboxParent: ["textboxParent", "textInput", "textbox"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSearchbarPrimary__ArgProps,
      internalVariantPropNames: PlasmicSearchbarPrimary__VariantProps
    });

    return PlasmicSearchbarPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchbarPrimary";
  } else {
    func.displayName = `PlasmicSearchbarPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchbarPrimary = Object.assign(
  // Top-level PlasmicSearchbarPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    searchSvgbg: makeNodeComponent("searchSvgbg"),
    searchSvg: makeNodeComponent("searchSvg"),
    textboxParent: makeNodeComponent("textboxParent"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicSearchbarPrimary
    internalVariantProps: PlasmicSearchbarPrimary__VariantProps,
    internalArgProps: PlasmicSearchbarPrimary__ArgProps
  }
);

export default PlasmicSearchbarPrimary;
/* prettier-ignore-end */
