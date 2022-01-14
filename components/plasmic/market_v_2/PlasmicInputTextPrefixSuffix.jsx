// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 8Sse2xZ7od
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputTextPrefixSuffix.module.css"; // plasmic-import: 8Sse2xZ7od/css

export const PlasmicInputTextPrefixSuffix__VariantProps = new Array(
  "type",
  "width",
  "height",
  "prefix",
  "suffix"
);

export const PlasmicInputTextPrefixSuffix__ArgProps = new Array(
  "prefixLabelHeadline",
  "suffixLabelHeadline"
);

function PlasmicInputTextPrefixSuffix__RenderFunc(props) {
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
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__height__32]: hasVariant(variants, "height", "_32"),
          [sty.parent__height__36]: hasVariant(variants, "height", "_36"),
          [sty.parent__height__40]: hasVariant(variants, "height", "_40"),
          [sty.parent__height__48]: hasVariant(variants, "height", "_48"),
          [sty.parent__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          ),

          [sty.parent__width__120]: hasVariant(variants, "width", "_120"),
          [sty.parent__width__160]: hasVariant(variants, "width", "_160"),
          [sty.parent__width__180]: hasVariant(variants, "width", "_180"),
          [sty.parent__width__270]: hasVariant(variants, "width", "_270"),
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720")
        })}
      >
        <div
          data-plasmic-name={"prefixparent"}
          data-plasmic-override={overrides.prefixparent}
          className={classNames(projectcss.all, sty.prefixparent, {
            [sty.prefixparent__prefix]: hasVariant(
              variants,
              "prefix",
              "prefix"
            ),

            [sty.prefixparent__suffix]: hasVariant(
              variants,
              "suffix",
              "suffix"
            ),

            [sty.prefixparent__suffix_prefix]:
              hasVariant(variants, "suffix", "suffix") &&
              hasVariant(variants, "prefix", "prefix"),
            [sty.prefixparent__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),

            [sty.prefixparent__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Text",
            value: args.prefixLabelHeadline,
            className: classNames(sty.slotTargetPrefixLabelHeadline, {
              [sty.slotTargetPrefixLabelHeadline__suffix]: hasVariant(
                variants,
                "suffix",
                "suffix"
              ),

              [sty.slotTargetPrefixLabelHeadline__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            })
          })}
        </div>

        <input
          data-plasmic-name={"value"}
          data-plasmic-override={overrides.value}
          className={classNames(projectcss.input, sty.value, {
            [sty.value__type_primary]: hasVariant(variants, "type", "primary"),
            [sty.value__width__120]: hasVariant(variants, "width", "_120")
          })}
          placeholder={""}
          size={1}
          type={"text"}
          value={""}
        />

        <div
          data-plasmic-name={"suffixParent"}
          data-plasmic-override={overrides.suffixParent}
          className={classNames(projectcss.all, sty.suffixParent, {
            [sty.suffixParent__suffix]: hasVariant(
              variants,
              "suffix",
              "suffix"
            ),

            [sty.suffixParent__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Text",
            value: args.suffixLabelHeadline,
            className: classNames(sty.slotTargetSuffixLabelHeadline, {
              [sty.slotTargetSuffixLabelHeadline__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            })
          })}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "prefixparent", "value", "suffixParent"],
  parent: ["parent", "prefixparent", "value", "suffixParent"],
  prefixparent: ["prefixparent"],
  value: ["value"],
  suffixParent: ["suffixParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextPrefixSuffix__ArgProps,
      internalVariantPropNames: PlasmicInputTextPrefixSuffix__VariantProps
    });

    return PlasmicInputTextPrefixSuffix__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextPrefixSuffix";
  } else {
    func.displayName = `PlasmicInputTextPrefixSuffix.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextPrefixSuffix = Object.assign(
  // Top-level PlasmicInputTextPrefixSuffix renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    prefixparent: makeNodeComponent("prefixparent"),
    value: makeNodeComponent("value"),
    suffixParent: makeNodeComponent("suffixParent"),
    // Metadata about props expected for PlasmicInputTextPrefixSuffix
    internalVariantProps: PlasmicInputTextPrefixSuffix__VariantProps,
    internalArgProps: PlasmicInputTextPrefixSuffix__ArgProps
  }
);

export default PlasmicInputTextPrefixSuffix;
/* prettier-ignore-end */
