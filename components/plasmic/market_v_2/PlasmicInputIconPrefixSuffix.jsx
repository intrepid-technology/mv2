// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ri_cIHAAMV
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputIconPrefixSuffix.module.css"; // plasmic-import: ri_cIHAAMV/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicInputIconPrefixSuffix__VariantProps = new Array(
  "prefix",
  "suffix",
  "width",
  "height"
);

export const PlasmicInputIconPrefixSuffix__ArgProps = new Array();

function PlasmicInputIconPrefixSuffix__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentwidth__180]: hasVariant(variants, "width", "_180"),
          [sty.parentwidth__270]: hasVariant(variants, "width", "_270"),
          [sty.parentwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.parentwidth__540]: hasVariant(variants, "width", "_540"),
          [sty.parentwidth__720]: hasVariant(variants, "width", "_720"),
          [sty.parentwidth__90]: hasVariant(variants, "width", "_90")
        })}
      >
        {(hasVariant(variants, "prefix", "prefix") ? true : true) ? (
          <div
            data-plasmic-name={"prefixParent"}
            data-plasmic-override={overrides.prefixParent}
            className={classNames(projectcss.all, sty.prefixParent, {
              [sty.prefixParentprefix]: hasVariant(variants, "prefix", "prefix")
            })}
          >
            <PlusBoldIcon
              className={classNames(projectcss.all, sty.svg__wok5V)}
              role={"img"}
            />
          </div>
        ) : null}

        <input
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput ?? overrides.textbox}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.textInput,
            { [sty.textInputprefix]: hasVariant(variants, "prefix", "prefix") }
          )}
          placeholder={""}
          size={1}
          type={"text"}
          value={""}
        />

        {(hasVariant(variants, "suffix", "suffix") ? true : true) ? (
          <div
            data-plasmic-name={"suffixParent"}
            data-plasmic-override={overrides.suffixParent}
            className={classNames(projectcss.all, sty.suffixParent, {
              [sty.suffixParentsuffix]: hasVariant(variants, "suffix", "suffix")
            })}
          >
            <PlusBoldIcon
              className={classNames(projectcss.all, sty.svg___1W2Uv)}
              role={"img"}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "prefixParent",
    "textInput",
    "textbox",
    "suffixParent"
  ],

  parent: ["parent", "prefixParent", "textInput", "textbox", "suffixParent"],
  prefixParent: ["prefixParent"],
  textInput: ["textInput", "textbox"],
  suffixParent: ["suffixParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputIconPrefixSuffix__ArgProps,
      internalVariantPropNames: PlasmicInputIconPrefixSuffix__VariantProps
    });

    return PlasmicInputIconPrefixSuffix__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputIconPrefixSuffix";
  } else {
    func.displayName = `PlasmicInputIconPrefixSuffix.${nodeName}`;
  }
  return func;
}

export const PlasmicInputIconPrefixSuffix = Object.assign(
  // Top-level PlasmicInputIconPrefixSuffix renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    prefixParent: makeNodeComponent("prefixParent"),
    textInput: makeNodeComponent("textInput"),
    suffixParent: makeNodeComponent("suffixParent"),
    // Metadata about props expected for PlasmicInputIconPrefixSuffix
    internalVariantProps: PlasmicInputIconPrefixSuffix__VariantProps,
    internalArgProps: PlasmicInputIconPrefixSuffix__ArgProps
  }
);

export default PlasmicInputIconPrefixSuffix;
/* prettier-ignore-end */
