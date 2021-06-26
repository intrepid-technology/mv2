// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 61axZSTp8Y
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
import * as sty from "./PlasmicElementIconListItem.module.css"; // plasmic-import: 61axZSTp8Y/css
import OptionalFixedBrandColorIcon from "./icons/PlasmicIcon__OptionalFixedBrandColor"; // plasmic-import: Lsqk-ADBoKU/icon

export const PlasmicElementIconListItem__VariantProps = new Array("disabled");

export const PlasmicElementIconListItem__ArgProps = new Array(
  "navText",
  "navIcon",
  "target"
);

function PlasmicElementIconListItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__disabled]: hasVariant(variants, "disabled", "disabled")
      })}
    >
      <p.Stack
        as={p.PlasmicLink}
        data-plasmic-name={"sideBarNavCardLinkParent"}
        data-plasmic-override={overrides.sideBarNavCardLinkParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.sideBarNavCardLinkParent, {
          [sty.sideBarNavCardLinkParent__disabled]: hasVariant(
            variants,
            "disabled",
            "disabled"
          )
        })}
        component={Link}
        platform={"nextjs"}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"iconTextParent"}
          data-plasmic-override={overrides.iconTextParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.iconTextParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div className={classNames(defaultcss.all, sty.box__h0S1)}>
                <OptionalFixedBrandColorIcon
                  className={classNames(defaultcss.all, sty.svg__wfdfm)}
                  role={"img"}
                />
              </div>
            ),

            value: args.navIcon,
            className: classNames(sty.slotNavIcon, {
              [sty.slotNavIcon__disabled]: hasVariant(
                variants,
                "disabled",
                "disabled"
              )
            })
          })}

          <div
            data-plasmic-name={"navTextParent"}
            data-plasmic-override={overrides.navTextParent}
            className={classNames(defaultcss.all, sty.navTextParent)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Item",
              value: args.navText,
              className: classNames(sty.slotNavText, {
                [sty.slotNavText__disabled]: hasVariant(
                  variants,
                  "disabled",
                  "disabled"
                )
              })
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "sideBarNavCardLinkParent", "iconTextParent", "navTextParent"],
  sideBarNavCardLinkParent: [
    "sideBarNavCardLinkParent",
    "iconTextParent",
    "navTextParent"
  ],

  iconTextParent: ["iconTextParent", "navTextParent"],
  navTextParent: ["navTextParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementIconListItem__ArgProps,
      internalVariantPropNames: PlasmicElementIconListItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementIconListItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementIconListItem";
  } else {
    func.displayName = `PlasmicElementIconListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicElementIconListItem = Object.assign(
  // Top-level PlasmicElementIconListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideBarNavCardLinkParent: makeNodeComponent("sideBarNavCardLinkParent"),
    iconTextParent: makeNodeComponent("iconTextParent"),
    navTextParent: makeNodeComponent("navTextParent"),
    // Metadata about props expected for PlasmicElementIconListItem
    internalVariantProps: PlasmicElementIconListItem__VariantProps,
    internalArgProps: PlasmicElementIconListItem__ArgProps
  }
);

export default PlasmicElementIconListItem;
/* prettier-ignore-end */
