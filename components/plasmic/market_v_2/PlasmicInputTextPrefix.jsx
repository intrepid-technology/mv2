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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputTextPrefix.module.css"; // plasmic-import: 8Sse2xZ7od/css

export const PlasmicInputTextPrefix__VariantProps = new Array("type");

export const PlasmicInputTextPrefix__ArgProps = new Array("labelHeadline");

function PlasmicInputTextPrefix__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent)}
      >
        <div
          data-plasmic-name={"pretabParent"}
          data-plasmic-override={overrides.pretabParent}
          className={classNames(defaultcss.all, sty.pretabParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "http://",
            value: args.labelHeadline,
            className: classNames(sty.slotLabelHeadline, {
              [sty.slotLabelHeadline__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            })
          })}
        </div>

        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox)}
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
  root: ["root", "parent", "pretabParent", "textbox"],
  parent: ["parent", "pretabParent", "textbox"],
  pretabParent: ["pretabParent"],
  textbox: ["textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextPrefix__ArgProps,
      internalVariantPropNames: PlasmicInputTextPrefix__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputTextPrefix__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextPrefix";
  } else {
    func.displayName = `PlasmicInputTextPrefix.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextPrefix = Object.assign(
  // Top-level PlasmicInputTextPrefix renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    pretabParent: makeNodeComponent("pretabParent"),
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicInputTextPrefix
    internalVariantProps: PlasmicInputTextPrefix__VariantProps,
    internalArgProps: PlasmicInputTextPrefix__ArgProps
  }
);

export default PlasmicInputTextPrefix;
/* prettier-ignore-end */
