// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: WvXgBKm3bX
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
import * as sty from "./PlasmicServiceFeatureB.module.css"; // plasmic-import: WvXgBKm3bX/css
import Icon111Icon from "./icons/PlasmicIcon__Icon111"; // plasmic-import: fytPd42_r6/icon

export const PlasmicServiceFeatureB__VariantProps = new Array("size");

export const PlasmicServiceFeatureB__ArgProps = new Array("children", "slot");

function PlasmicServiceFeatureB__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size_small]: hasVariant(variants, "size", "small")
      })}
    >
      <div className={classNames(defaultcss.all, sty.box___5Hp8)}>
        <div
          className={classNames(defaultcss.all, sty.box__qfYAs, {
            [sty.box__size_small__qfYAscBzwQ]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Service Feature",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__size_small]: hasVariant(
                variants,
                "size",
                "small"
              )
            })
          })}
        </div>
      </div>

      <div
        className={classNames(defaultcss.all, sty.box___99Rg, {
          [sty.box__size_small___99RgCBzwQ]: hasVariant(
            variants,
            "size",
            "small"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Icon111Icon
              className={classNames(defaultcss.all, sty.svg__a9Ot1)}
              role={"img"}
            />
          ),

          value: args.slot
        })}
      </div>
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
      internalArgPropNames: PlasmicServiceFeatureB__ArgProps,
      internalVariantPropNames: PlasmicServiceFeatureB__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicServiceFeatureB__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceFeatureB";
  } else {
    func.displayName = `PlasmicServiceFeatureB.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceFeatureB = Object.assign(
  // Top-level PlasmicServiceFeatureB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicServiceFeatureB
    internalVariantProps: PlasmicServiceFeatureB__VariantProps,
    internalArgProps: PlasmicServiceFeatureB__ArgProps
  }
);

export default PlasmicServiceFeatureB;
/* prettier-ignore-end */