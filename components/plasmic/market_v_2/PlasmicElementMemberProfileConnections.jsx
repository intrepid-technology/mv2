// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: F_iWPxEqO6X
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicElementMemberProfileConnections.module.css"; // plasmic-import: F_iWPxEqO6X/css

export const PlasmicElementMemberProfileConnections__VariantProps = new Array();

export const PlasmicElementMemberProfileConnections__ArgProps = new Array();

function PlasmicElementMemberProfileConnections__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent)}
      >
        <div
          data-plasmic-name={"connectionsHealine"}
          data-plasmic-override={overrides.connectionsHealine}
          className={classNames(defaultcss.all, sty.connectionsHealine)}
        >
          <div
            data-plasmic-name={"connectionsHeadlineText"}
            data-plasmic-override={overrides.connectionsHeadlineText}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.connectionsHeadlineText
            )}
          >
            {hasVariant(globalVariants, "screen", "desktop")
              ? "Connections"
              : "Connections"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"memberConnectionsParent"}
          data-plasmic-override={overrides.memberConnectionsParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.memberConnectionsParent)}
        >
          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__sbwC6)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar___00A20)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__vwX2N)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__nopbF)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar___9S2Ix)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__q6Iwb)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__ul2Xw)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__fflUh)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__iwNAj)}
            size={"_48"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__yVaFc)}
            size={"_48"}
          />
        </p.Stack>

        <div
          data-plasmic-name={"linkConnectionsViewAllParent"}
          data-plasmic-override={overrides.linkConnectionsViewAllParent}
          className={classNames(
            defaultcss.all,
            sty.linkConnectionsViewAllParent
          )}
        >
          <p.PlasmicLink
            data-plasmic-name={"linkConnectionsViewAll"}
            data-plasmic-override={overrides.linkConnectionsViewAll}
            className={classNames(defaultcss.all, sty.linkConnectionsViewAll)}
            component={Link}
            platform={"nextjs"}
          >
            <div
              data-plasmic-name={"box"}
              data-plasmic-override={overrides.box}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box
              )}
            >
              {"View all connections"}
            </div>
          </p.PlasmicLink>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "connectionsHealine",
    "connectionsHeadlineText",
    "memberConnectionsParent",
    "linkConnectionsViewAllParent",
    "linkConnectionsViewAll",
    "box"
  ],

  parent: [
    "parent",
    "connectionsHealine",
    "connectionsHeadlineText",
    "memberConnectionsParent",
    "linkConnectionsViewAllParent",
    "linkConnectionsViewAll",
    "box"
  ],

  connectionsHealine: ["connectionsHealine", "connectionsHeadlineText"],
  connectionsHeadlineText: ["connectionsHeadlineText"],
  memberConnectionsParent: ["memberConnectionsParent"],
  linkConnectionsViewAllParent: [
    "linkConnectionsViewAllParent",
    "linkConnectionsViewAll",
    "box"
  ],

  linkConnectionsViewAll: ["linkConnectionsViewAll", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementMemberProfileConnections__ArgProps,
      internalVariantPropNames:
        PlasmicElementMemberProfileConnections__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementMemberProfileConnections__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementMemberProfileConnections";
  } else {
    func.displayName = `PlasmicElementMemberProfileConnections.${nodeName}`;
  }
  return func;
}

export const PlasmicElementMemberProfileConnections = Object.assign(
  // Top-level PlasmicElementMemberProfileConnections renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    connectionsHealine: makeNodeComponent("connectionsHealine"),
    connectionsHeadlineText: makeNodeComponent("connectionsHeadlineText"),
    memberConnectionsParent: makeNodeComponent("memberConnectionsParent"),
    linkConnectionsViewAllParent: makeNodeComponent(
      "linkConnectionsViewAllParent"
    ),

    linkConnectionsViewAll: makeNodeComponent("linkConnectionsViewAll"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicElementMemberProfileConnections
    internalVariantProps: PlasmicElementMemberProfileConnections__VariantProps,
    internalArgProps: PlasmicElementMemberProfileConnections__ArgProps
  }
);

export default PlasmicElementMemberProfileConnections;
/* prettier-ignore-end */
