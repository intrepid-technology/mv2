// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 5IWEjDYG1a
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputPasswordField.module.css"; // plasmic-import: 5IWEjDYG1a/css

export const PlasmicInputPasswordField__VariantProps = new Array(
  "type",
  "size"
);

export const PlasmicInputPasswordField__ArgProps = new Array();

function PlasmicInputPasswordField__RenderFunc(props) {
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
          [sty.parentsize__160]: hasVariant(variants, "size", "_160"),
          [sty.parentsize__180]: hasVariant(variants, "size", "_180"),
          [sty.parentsize__270]: hasVariant(variants, "size", "_270"),
          [sty.parentsize__360]: hasVariant(variants, "size", "_360"),
          [sty.parentsize__90]: hasVariant(variants, "size", "_90")
        })}
      >
        <input
          data-plasmic-name={"passwordInput"}
          data-plasmic-override={overrides.passwordInput}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.passwordInput,
            {
              [sty.passwordInputsize__90]: hasVariant(variants, "size", "_90"),
              [sty.passwordInputtype_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            }
          )}
          size={1}
          type={"password"}
          value={"Some password"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "passwordInput"],
  parent: ["parent", "passwordInput"],
  passwordInput: ["passwordInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputPasswordField__ArgProps,
      internalVariantPropNames: PlasmicInputPasswordField__VariantProps
    });

    return PlasmicInputPasswordField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputPasswordField";
  } else {
    func.displayName = `PlasmicInputPasswordField.${nodeName}`;
  }
  return func;
}

export const PlasmicInputPasswordField = Object.assign(
  // Top-level PlasmicInputPasswordField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    passwordInput: makeNodeComponent("passwordInput"),
    // Metadata about props expected for PlasmicInputPasswordField
    internalVariantProps: PlasmicInputPasswordField__VariantProps,
    internalArgProps: PlasmicInputPasswordField__ArgProps
  }
);

export default PlasmicInputPasswordField;
/* prettier-ignore-end */
