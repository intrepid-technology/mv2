// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: T-WLdey8LU
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputTextAreaPrimary.module.css"; // plasmic-import: T-WLdey8LU/css

export const PlasmicInputTextAreaPrimary__VariantProps = new Array(
  "type",
  "width",
  "height"
);

export const PlasmicInputTextAreaPrimary__ArgProps = new Array("placeholder");

function PlasmicInputTextAreaPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (hasVariant(variants, "height", "_720") ? true : true) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__height__720]: hasVariant(variants, "height", "_720"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__height__180]: hasVariant(variants, "height", "_180"),
          [sty.parent__height__270]: hasVariant(variants, "height", "_270"),
          [sty.parent__height__360]: hasVariant(variants, "height", "_360"),
          [sty.parent__height__540]: hasVariant(variants, "height", "_540"),
          [sty.parent__height__720]: hasVariant(variants, "height", "_720"),
          [sty.parent__height__720_width__180]:
            hasVariant(variants, "height", "_720") &&
            hasVariant(variants, "width", "_180"),
          [sty.parent__height__720_width__270]:
            hasVariant(variants, "height", "_720") &&
            hasVariant(variants, "width", "_270"),
          [sty.parent__height__720_width__360]:
            hasVariant(variants, "height", "_720") &&
            hasVariant(variants, "width", "_360"),
          [sty.parent__height__720_width__90]:
            hasVariant(variants, "height", "_720") &&
            hasVariant(variants, "width", "_90"),
          [sty.parent__height__90]: hasVariant(variants, "height", "_90"),
          [sty.parent__width__180]: hasVariant(variants, "width", "_180"),
          [sty.parent__width__270]: hasVariant(variants, "width", "_270"),
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720"),
          [sty.parent__width__720_height__90]:
            hasVariant(variants, "width", "_720") &&
            hasVariant(variants, "height", "_90"),
          [sty.parent__width__90]: hasVariant(variants, "width", "_90")
        })}
      >
        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(projectcss.textarea, sty.textarea, {
            [sty.textarea__height__720]: hasVariant(variants, "height", "_720"),
            [sty.textarea__height__90]: hasVariant(variants, "height", "_90"),
            [sty.textarea__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.textarea__width__90]: hasVariant(variants, "width", "_90")
          })}
          placeholder={args.placeholder}
          value={""}
        />
      </div>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "textarea"],
  parent: ["parent", "textarea"],
  textarea: ["textarea"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextAreaPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputTextAreaPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputTextAreaPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextAreaPrimary";
  } else {
    func.displayName = `PlasmicInputTextAreaPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextAreaPrimary = Object.assign(
  // Top-level PlasmicInputTextAreaPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textarea: makeNodeComponent("textarea"),
    // Metadata about props expected for PlasmicInputTextAreaPrimary
    internalVariantProps: PlasmicInputTextAreaPrimary__VariantProps,
    internalArgProps: PlasmicInputTextAreaPrimary__ArgProps
  }
);

export default PlasmicInputTextAreaPrimary;
/* prettier-ignore-end */
