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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicAvatarGroupIncrement.module.css"; // plasmic-import: 8w7pyy9EQG8/css

export const PlasmicAvatarGroupIncrement__VariantProps = new Array();

export const PlasmicAvatarGroupIncrement__ArgProps = new Array("number");

function PlasmicAvatarGroupIncrement__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent)}
      >
        <div
          data-plasmic-name={"avatarParent"}
          data-plasmic-override={overrides.avatarParent}
          className={classNames(projectcss.all, sty.avatarParent)}
        >
          <UserAvatar
            navUserAvatar18={
              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img___6MgzQ
                )}
                src={"/plasmic/market_v_2/images/peopleCreative3Jpg.jpeg"}
              />
            }
            size={"_18"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__wIqc)}
            navUserAvatar18={
              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__wdIxV
                )}
                src={"/plasmic/market_v_2/images/image32.png"}
              />
            }
            size={"_18"}
          />

          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__dlYga)}
            navUserAvatar18={
              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__dqrFq
                )}
                src={
                  "/plasmic/market_v_2/images/cesarRinconXhVpWcr5GrQUnsplashjpg.jpeg"
                }
              />
            }
            size={"_18"}
          />
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"additionalMembers"}
          data-plasmic-override={overrides.additionalMembers}
          hasGap={true}
          className={classNames(projectcss.all, sty.additionalMembers)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"+"}
          </div>

          <div
            data-plasmic-name={"numberParent"}
            data-plasmic-override={overrides.numberParent}
            className={classNames(projectcss.all, sty.numberParent)}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "#####",
                value: args.number,
                className: classNames(sty.slotTargetNumber)
              })}
            </div>
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "avatarParent",
    "additionalMembers",
    "text",
    "numberParent",
    "freeBox"
  ],

  parent: [
    "parent",
    "avatarParent",
    "additionalMembers",
    "text",
    "numberParent",
    "freeBox"
  ],

  avatarParent: ["avatarParent"],
  additionalMembers: ["additionalMembers", "text", "numberParent", "freeBox"],
  text: ["text"],
  numberParent: ["numberParent", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatarGroupIncrement__ArgProps,
      internalVariantPropNames: PlasmicAvatarGroupIncrement__VariantProps
    });

    return PlasmicAvatarGroupIncrement__RenderFunc({
      variants,
      args,
      overrides,
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
    text: makeNodeComponent("text"),
    numberParent: makeNodeComponent("numberParent"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicAvatarGroupIncrement
    internalVariantProps: PlasmicAvatarGroupIncrement__VariantProps,
    internalArgProps: PlasmicAvatarGroupIncrement__ArgProps
  }
);

export default PlasmicAvatarGroupIncrement;
/* prettier-ignore-end */
