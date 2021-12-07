// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Desp33T8Y3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarAccountAvatar.module.css"; // plasmic-import: Desp33T8Y3/css
import Icon126Icon from "./icons/PlasmicIcon__Icon126"; // plasmic-import: CDcqIgJsCe/icon

export const PlasmicNavbarAccountAvatar__VariantProps = new Array("color");

export const PlasmicNavbarAccountAvatar__ArgProps = new Array("children");

function PlasmicNavbarAccountAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"accountAvatar"}
      data-plasmic-override={overrides.accountAvatar}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.accountAvatar,
        {
          [sty.accountAvatar__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),

          [sty.accountAvatar__color_darkBg]: hasVariant(
            variants,
            "color",
            "darkBg"
          ),

          [sty.accountAvatar__color_lightBg]: hasVariant(
            variants,
            "color",
            "lightBg"
          )
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon126Icon
            className={classNames(projectcss.all, sty.svg__jjCee)}
            role={"img"}
          />
        ),

        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),

          [sty.slotTargetChildren__color_darkBg]: hasVariant(
            variants,
            "color",
            "darkBg"
          ),

          [sty.slotTargetChildren__color_lightBg]: hasVariant(
            variants,
            "color",
            "lightBg"
          )
        })
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  accountAvatar: ["accountAvatar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarAccountAvatar__ArgProps,
      internalVariantPropNames: PlasmicNavbarAccountAvatar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarAccountAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "accountAvatar") {
    func.displayName = "PlasmicNavbarAccountAvatar";
  } else {
    func.displayName = `PlasmicNavbarAccountAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarAccountAvatar = Object.assign(
  // Top-level PlasmicNavbarAccountAvatar renders the root element
  makeNodeComponent("accountAvatar"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavbarAccountAvatar
    internalVariantProps: PlasmicNavbarAccountAvatar__VariantProps,
    internalArgProps: PlasmicNavbarAccountAvatar__ArgProps
  }
);

export default PlasmicNavbarAccountAvatar;
/* prettier-ignore-end */
