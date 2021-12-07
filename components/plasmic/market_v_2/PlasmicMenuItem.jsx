// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: VVXqLHd1Qa
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
import * as sty from "./PlasmicMenuItem.module.css"; // plasmic-import: VVXqLHd1Qa/css

export const PlasmicMenuItem__VariantProps = new Array("disabled", "size");

export const PlasmicMenuItem__ArgProps = new Array("text", "destination");

function PlasmicMenuItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"menuItemLink"}
      data-plasmic-override={overrides.menuItemLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.a,
        projectcss.root_reset,
        sty.menuItemLink,
        {
          [sty.menuItemLink__disabled]: hasVariant(
            variants,
            "disabled",
            "disabled"
          )
        }
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"textParent"}
        data-plasmic-override={overrides.textParent}
        className={classNames(projectcss.all, sty.textParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Menu item",
          value: args.text,
          className: classNames(sty.slotTargetText, {
            [sty.slotTargetText__disabled]: hasVariant(
              variants,
              "disabled",
              "disabled"
            ),

            [sty.slotTargetText__size__14Px]: hasVariant(
              variants,
              "size",
              "_14Px"
            ),

            [sty.slotTargetText__size__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  menuItemLink: ["menuItemLink", "textParent"],
  textParent: ["textParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenuItem__ArgProps,
      internalVariantPropNames: PlasmicMenuItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "menuItemLink") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("menuItemLink"),
  {
    // Helper components rendering sub-elements
    textParent: makeNodeComponent("textParent"),
    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */
