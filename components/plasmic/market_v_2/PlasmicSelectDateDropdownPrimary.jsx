// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: nAfvX1r8paZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectInput from "../../SelectInput"; // plasmic-import: 6gReGypE5kO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectDateDropdownPrimary.module.css"; // plasmic-import: nAfvX1r8paZ/css

export const PlasmicSelectDateDropdownPrimary__VariantProps = new Array(
  "label",
  "width"
);

export const PlasmicSelectDateDropdownPrimary__ArgProps = new Array("children");

function PlasmicSelectDateDropdownPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
      })}
    >
      {(hasVariant(variants, "label", "label") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__hZahQ, {
            [sty.freeBoxlabel__hZahQhwv6U]: hasVariant(
              variants,
              "label",
              "label"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Date",
            value: args.children
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__y4OM8, {
          [sty.freeBoxwidth_stretch__y4OM8CjG2P]: hasVariant(
            variants,
            "width",
            "stretch"
          )
        })}
      >
        <SelectInput
          className={classNames("__wab_instance", sty.selectInput__eaEif, {
            [sty.selectInputwidth_stretch__eaEiFcjG2P]: hasVariant(
              variants,
              "width",
              "stretch"
            )
          })}
          placeholder={"Month"}
          width={
            hasVariant(variants, "width", "stretch") ? "stretch" : "stretch"
          }
        />

        <SelectInput
          className={classNames("__wab_instance", sty.selectInput__xkUgp, {
            [sty.selectInputwidth_stretch__xkUgPcjG2P]: hasVariant(
              variants,
              "width",
              "stretch"
            )
          })}
          placeholder={"Day"}
          width={
            hasVariant(variants, "width", "stretch") ? "stretch" : "stretch"
          }
        />

        <SelectInput
          className={classNames("__wab_instance", sty.selectInput___4QgU, {
            [sty.selectInputwidth_stretch___4QgUCjG2P]: hasVariant(
              variants,
              "width",
              "stretch"
            )
          })}
          placeholder={"Year"}
          width={
            hasVariant(variants, "width", "stretch") ? "stretch" : "stretch"
          }
        />
      </p.Stack>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectDateDropdownPrimary__ArgProps,
      internalVariantPropNames: PlasmicSelectDateDropdownPrimary__VariantProps
    });

    return PlasmicSelectDateDropdownPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectDateDropdownPrimary";
  } else {
    func.displayName = `PlasmicSelectDateDropdownPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectDateDropdownPrimary = Object.assign(
  // Top-level PlasmicSelectDateDropdownPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSelectDateDropdownPrimary
    internalVariantProps: PlasmicSelectDateDropdownPrimary__VariantProps,
    internalArgProps: PlasmicSelectDateDropdownPrimary__ArgProps
  }
);

export default PlasmicSelectDateDropdownPrimary;
/* prettier-ignore-end */
