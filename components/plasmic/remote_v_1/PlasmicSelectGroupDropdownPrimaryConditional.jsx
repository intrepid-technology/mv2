// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XMD9eRI9BQ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectGroupDropdownPrimary from "../../SelectGroupDropdownPrimary"; // plasmic-import: -teiDn_7Z-/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../market_v_2/plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectGroupDropdownPrimaryConditional.module.css"; // plasmic-import: XMD9eRI9BQ/css

export const PlasmicSelectGroupDropdownPrimaryConditional__VariantProps =
  new Array("conditional", "width");

export const PlasmicSelectGroupDropdownPrimaryConditional__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicSelectGroupDropdownPrimaryConditional__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootconditional_width_stretch]:
            hasVariant(variants, "conditional", "conditional") &&
            hasVariant(variants, "width", "stretch"),
          [sty.rootwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
        }
      )}
    >
      <SelectGroupDropdownPrimary
        className={classNames(
          "__wab_instance",
          sty.selectGroupDropdownPrimary__gFca9,
          {
            [sty.selectGroupDropdownPrimaryconditional_width_stretch__gFca92MOhuMw4Ux]:
              hasVariant(variants, "conditional", "conditional") &&
              hasVariant(variants, "width", "stretch"),
            [sty.selectGroupDropdownPrimarywidth__360__gFca9NtXxk]: hasVariant(
              variants,
              "width",
              "_360"
            ),

            [sty.selectGroupDropdownPrimarywidth__360_conditional__gFca9NtXxk2MOhu]:
              hasVariant(variants, "width", "_360") &&
              hasVariant(variants, "conditional", "conditional"),
            [sty.selectGroupDropdownPrimarywidth_stretch__gFca9Mw4Ux]:
              hasVariant(variants, "width", "stretch")
          }
        )}
        description={true}
        width={
          hasVariant(variants, "conditional", "conditional") &&
          hasVariant(variants, "width", "stretch")
            ? "stretch"
            : hasVariant(variants, "width", "stretch")
            ? "stretch"
            : hasVariant(variants, "width", "_360")
            ? "_360"
            : undefined
        }
      >
        {p.renderPlasmicSlot({
          defaultContents: "Label",
          value: args.children
        })}
      </SelectGroupDropdownPrimary>

      {(hasVariant(variants, "conditional", "conditional") ? true : false) ? (
        <SelectGroupDropdownPrimary
          className={classNames(
            "__wab_instance",
            sty.selectGroupDropdownPrimary__byjyN,
            {
              [sty.selectGroupDropdownPrimaryconditional__byjyN2MOhu]:
                hasVariant(variants, "conditional", "conditional"),
              [sty.selectGroupDropdownPrimaryconditional_width_stretch__byjyN2MOhuMw4Ux]:
                hasVariant(variants, "conditional", "conditional") &&
                hasVariant(variants, "width", "stretch"),
              [sty.selectGroupDropdownPrimarywidth__360_conditional__byjyNNtXxk2MOhu]:
                hasVariant(variants, "width", "_360") &&
                hasVariant(variants, "conditional", "conditional")
            }
          )}
          description={true}
          width={
            hasVariant(variants, "conditional", "conditional") &&
            hasVariant(variants, "width", "stretch")
              ? "stretch"
              : hasVariant(variants, "width", "_360") &&
                hasVariant(variants, "conditional", "conditional")
              ? "_360"
              : undefined
          }
        >
          {p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.slot
          })}
        </SelectGroupDropdownPrimary>
      ) : null}
    </p.Stack>
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
      internalArgPropNames:
        PlasmicSelectGroupDropdownPrimaryConditional__ArgProps,
      internalVariantPropNames:
        PlasmicSelectGroupDropdownPrimaryConditional__VariantProps
    });

    return PlasmicSelectGroupDropdownPrimaryConditional__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectGroupDropdownPrimaryConditional";
  } else {
    func.displayName = `PlasmicSelectGroupDropdownPrimaryConditional.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectGroupDropdownPrimaryConditional = Object.assign(
  // Top-level PlasmicSelectGroupDropdownPrimaryConditional renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSelectGroupDropdownPrimaryConditional
    internalVariantProps:
      PlasmicSelectGroupDropdownPrimaryConditional__VariantProps,
    internalArgProps: PlasmicSelectGroupDropdownPrimaryConditional__ArgProps
  }
);

export default PlasmicSelectGroupDropdownPrimaryConditional;
/* prettier-ignore-end */