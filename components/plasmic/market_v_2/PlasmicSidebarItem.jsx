// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 5M7wE13TFT
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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSidebarItem.module.css"; // plasmic-import: 5M7wE13TFT/css

export const PlasmicSidebarItem__VariantProps = new Array("selected");

export const PlasmicSidebarItem__ArgProps = new Array(
  "children",
  "label",
  "destination"
);

function PlasmicSidebarItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.a,
        projectcss.a,
        projectcss.root_reset,
        sty.root,
        { [sty.root__selected]: hasVariant(variants, "selected", "selected") }
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"iconWrapper"}
        data-plasmic-override={overrides.iconWrapper}
        className={classNames(defaultcss.all, projectcss.all, sty.iconWrapper)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__gSqwe
              )}
              role={"img"}
            />
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__selected]: hasVariant(
              variants,
              "selected",
              "selected"
            )
          })
        })}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: "Enter some text",
        value: args.label,
        className: classNames(sty.slotTargetLabel, {
          [sty.slotTargetLabel__selected]: hasVariant(
            variants,
            "selected",
            "selected"
          )
        })
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "iconWrapper"],
  iconWrapper: ["iconWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSidebarItem__ArgProps,
      internalVariantPropNames: PlasmicSidebarItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSidebarItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarItem";
  } else {
    func.displayName = `PlasmicSidebarItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarItem = Object.assign(
  // Top-level PlasmicSidebarItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconWrapper: makeNodeComponent("iconWrapper"),
    // Metadata about props expected for PlasmicSidebarItem
    internalVariantProps: PlasmicSidebarItem__VariantProps,
    internalArgProps: PlasmicSidebarItem__ArgProps
  }
);

export default PlasmicSidebarItem;
/* prettier-ignore-end */
