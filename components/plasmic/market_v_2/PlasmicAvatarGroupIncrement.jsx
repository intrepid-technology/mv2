// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 8w7pyy9EQG8
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicAvatarGroupIncrement.module.css"; // plasmic-import: 8w7pyy9EQG8/css

export const PlasmicAvatarGroupIncrement__VariantProps = new Array();

export const PlasmicAvatarGroupIncrement__ArgProps = new Array("number");

function PlasmicAvatarGroupIncrement__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
          data-plasmic-name={"avatarParent"}
          data-plasmic-override={overrides.avatarParent}
          className={classNames(defaultcss.all, sty.avatarParent)}
        >
          <UserAvatar size={"_18"} />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__wIqc)}
            size={"_18"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__dlYga)}
            size={"_18"}
          />
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"additionalMembers"}
          data-plasmic-override={overrides.additionalMembers}
          hasGap={true}
          className={classNames(defaultcss.all, sty.additionalMembers)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__zKqRe
            )}
          >
            {"+"}
          </div>

          <div
            data-plasmic-name={"numberParent"}
            data-plasmic-override={overrides.numberParent}
            className={classNames(defaultcss.all, sty.numberParent)}
          >
            <div className={classNames(defaultcss.all, sty.box__hq5ZR)}>
              {p.renderPlasmicSlot({
                defaultContents: "#####",
                value: args.number,
                className: classNames(sty.slotNumber)
              })}
            </div>
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "avatarParent", "additionalMembers", "numberParent"],
  parent: ["parent", "avatarParent", "additionalMembers", "numberParent"],
  avatarParent: ["avatarParent"],
  additionalMembers: ["additionalMembers", "numberParent"],
  numberParent: ["numberParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatarGroupIncrement__ArgProps,
      internalVariantPropNames: PlasmicAvatarGroupIncrement__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAvatarGroupIncrement__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatarGroupIncrement";
  } else {
    func.displayName = `PlasmicAvatarGroupIncrement.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatarGroupIncrement = Object.assign(
  // Top-level PlasmicAvatarGroupIncrement renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    avatarParent: makeNodeComponent("avatarParent"),
    additionalMembers: makeNodeComponent("additionalMembers"),
    numberParent: makeNodeComponent("numberParent"),
    // Metadata about props expected for PlasmicAvatarGroupIncrement
    internalVariantProps: PlasmicAvatarGroupIncrement__VariantProps,
    internalArgProps: PlasmicAvatarGroupIncrement__ArgProps
  }
);

export default PlasmicAvatarGroupIncrement;
/* prettier-ignore-end */
