// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: umGRdihMyi
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicConditionalField.module.css"; // plasmic-import: umGRdihMyi/css

export const PlasmicConditionalField__VariantProps = new Array();

export const PlasmicConditionalField__ArgProps = new Array(
  "children",
  "name",
  "conditionValue",
  "checkType",
  "valueType",
  "visibleIf"
);

function PlasmicConditionalField__RenderFunc(props) {
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
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicConditionalField__ArgProps,
      internalVariantPropNames: PlasmicConditionalField__VariantProps
    });

    return PlasmicConditionalField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConditionalField";
  } else {
    func.displayName = `PlasmicConditionalField.${nodeName}`;
  }
  return func;
}

export const PlasmicConditionalField = Object.assign(
  // Top-level PlasmicConditionalField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicConditionalField
    internalVariantProps: PlasmicConditionalField__VariantProps,
    internalArgProps: PlasmicConditionalField__ArgProps
  }
);

export default PlasmicConditionalField;
/* prettier-ignore-end */
