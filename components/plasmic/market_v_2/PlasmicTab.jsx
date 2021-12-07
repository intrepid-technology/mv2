// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: tCiyOEgIeVL
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTab.module.css"; // plasmic-import: tCiyOEgIeVL/css

export const PlasmicTab__VariantProps = new Array(
  "color",
  "state",
  "activeBorder"
);

export const PlasmicTab__ArgProps = new Array("label", "destination");

function PlasmicTab__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_ghost]: hasVariant(variants, "color", "ghost"),
        [sty.root__color_light]: hasVariant(variants, "color", "light"),
        [sty.root__state_disabled]: hasVariant(variants, "state", "disabled"),
        [sty.root__state_selected]: hasVariant(variants, "state", "selected"),
        [sty.root__state_selected_activeBorder_left]:
          hasVariant(variants, "state", "selected") &&
          hasVariant(variants, "activeBorder", "left")
      })}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__color_brand]: hasVariant(variants, "color", "brand"),
          [sty.parent__color_ghost]: hasVariant(variants, "color", "ghost"),
          [sty.parent__color_light]: hasVariant(variants, "color", "light"),
          [sty.parent__state_selected]: hasVariant(
            variants,
            "state",
            "selected"
          ),

          [sty.parent__state_selected_activeBorder_left]:
            hasVariant(variants, "state", "selected") &&
            hasVariant(variants, "activeBorder", "left")
        })}
      >
        <div
          data-plasmic-name={"textParent"}
          data-plasmic-override={overrides.textParent}
          className={classNames(projectcss.all, sty.textParent, {
            [sty.textParent__state_selected_activeBorder_left]:
              hasVariant(variants, "state", "selected") &&
              hasVariant(variants, "activeBorder", "left")
          })}
        >
          <div
            data-plasmic-name={"textBg"}
            data-plasmic-override={overrides.textBg}
            className={classNames(projectcss.all, sty.textBg, {
              [sty.textBg__color_light]: hasVariant(variants, "color", "light")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Nav Link",
              value: args.label,
              className: classNames(sty.slotTargetLabel, {
                [sty.slotTargetLabel__color_brand]: hasVariant(
                  variants,
                  "color",
                  "brand"
                ),

                [sty.slotTargetLabel__color_ghost]: hasVariant(
                  variants,
                  "color",
                  "ghost"
                ),

                [sty.slotTargetLabel__color_light]: hasVariant(
                  variants,
                  "color",
                  "light"
                ),

                [sty.slotTargetLabel__state_disabled]: hasVariant(
                  variants,
                  "state",
                  "disabled"
                ),

                [sty.slotTargetLabel__state_selected]: hasVariant(
                  variants,
                  "state",
                  "selected"
                )
              })
            })}
          </div>
        </div>
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "textParent", "textBg"],
  parent: ["parent", "textParent", "textBg"],
  textParent: ["textParent", "textBg"],
  textBg: ["textBg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTab__ArgProps,
      internalVariantPropNames: PlasmicTab__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTab__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTab";
  } else {
    func.displayName = `PlasmicTab.${nodeName}`;
  }
  return func;
}

export const PlasmicTab = Object.assign(
  // Top-level PlasmicTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textParent: makeNodeComponent("textParent"),
    textBg: makeNodeComponent("textBg"),
    // Metadata about props expected for PlasmicTab
    internalVariantProps: PlasmicTab__VariantProps,
    internalArgProps: PlasmicTab__ArgProps
  }
);

export default PlasmicTab;
/* prettier-ignore-end */
