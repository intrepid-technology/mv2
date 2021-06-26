// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: io5-1sj1-O9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarSwitch from "../../NavbarSwitch"; // plasmic-import: tmc24NnB44/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import ButtonSideBarMemberSettings from "../../ButtonSideBarMemberSettings"; // plasmic-import: x9ks47Cvll/component
import ButtonIconNotificationBell from "../../ButtonIconNotificationBell"; // plasmic-import: oyQklGfTop/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSideBarMemberHeaderPanelNav.module.css"; // plasmic-import: io5-1sj1-O9/css

export const PlasmicSideBarMemberHeaderPanelNav__VariantProps = new Array();

export const PlasmicSideBarMemberHeaderPanelNav__ArgProps = new Array();

function PlasmicSideBarMemberHeaderPanelNav__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"elementSideBarHeader"}
          data-plasmic-override={overrides.elementSideBarHeader}
          hasGap={true}
          className={classNames(defaultcss.all, sty.elementSideBarHeader)}
        >
          <NavbarSwitch
            data-plasmic-name={"navbarSwitch"}
            data-plasmic-override={overrides.navbarSwitch}
            className={classNames("__wab_instance", sty.navbarSwitch)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"avatarUsernameDisplaynameParent"}
            data-plasmic-override={overrides.avatarUsernameDisplaynameParent}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.avatarUsernameDisplaynameParent
            )}
          >
            <div
              data-plasmic-name={"userAvatarVerificationBadge"}
              data-plasmic-override={overrides.userAvatarVerificationBadge}
              className={classNames(
                defaultcss.all,
                sty.userAvatarVerificationBadge
              )}
            >
              <UserAvatar
                data-plasmic-name={"userAvatar"}
                data-plasmic-override={overrides.userAvatar}
                navUserAvatar16={
                  <img
                    data-plasmic-name={"navUserAvatar182"}
                    data-plasmic-override={overrides.navUserAvatar182}
                    alt={""}
                    className={classNames(defaultcss.img, sty.navUserAvatar182)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
                  />
                }
                navUserAvatar24={
                  <img
                    data-plasmic-name={"navUserAvatar242"}
                    data-plasmic-override={overrides.navUserAvatar242}
                    alt={""}
                    className={classNames(defaultcss.img, sty.navUserAvatar242)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
                  />
                }
                size={"_32"}
                verified={"verified"}
              />
            </div>

            <ButtonSideBarMemberSettings
              data-plasmic-name={"buttonSideBarMemberSettings"}
              data-plasmic-override={overrides.buttonSideBarMemberSettings}
              className={classNames(
                "__wab_instance",
                sty.buttonSideBarMemberSettings
              )}
              trigger={"side-barUserSettingsDropdown"}
            />

            <ButtonIconNotificationBell
              data-plasmic-name={"buttonIconNotificationBell"}
              data-plasmic-override={overrides.buttonIconNotificationBell}
              className={classNames(
                "__wab_instance",
                sty.buttonIconNotificationBell
              )}
            />
          </p.Stack>
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "elementSideBarHeader",
    "navbarSwitch",
    "avatarUsernameDisplaynameParent",
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "buttonSideBarMemberSettings",
    "buttonIconNotificationBell"
  ],

  parent: [
    "parent",
    "elementSideBarHeader",
    "navbarSwitch",
    "avatarUsernameDisplaynameParent",
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "buttonSideBarMemberSettings",
    "buttonIconNotificationBell"
  ],

  elementSideBarHeader: [
    "elementSideBarHeader",
    "navbarSwitch",
    "avatarUsernameDisplaynameParent",
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "buttonSideBarMemberSettings",
    "buttonIconNotificationBell"
  ],

  navbarSwitch: ["navbarSwitch"],
  avatarUsernameDisplaynameParent: [
    "avatarUsernameDisplaynameParent",
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "buttonSideBarMemberSettings",
    "buttonIconNotificationBell"
  ],

  userAvatarVerificationBadge: [
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242"
  ],

  userAvatar: ["userAvatar", "navUserAvatar182", "navUserAvatar242"],
  navUserAvatar182: ["navUserAvatar182"],
  navUserAvatar242: ["navUserAvatar242"],
  buttonSideBarMemberSettings: ["buttonSideBarMemberSettings"],
  buttonIconNotificationBell: ["buttonIconNotificationBell"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSideBarMemberHeaderPanelNav__ArgProps,
      internalVariantPropNames: PlasmicSideBarMemberHeaderPanelNav__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSideBarMemberHeaderPanelNav__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarMemberHeaderPanelNav";
  } else {
    func.displayName = `PlasmicSideBarMemberHeaderPanelNav.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarMemberHeaderPanelNav = Object.assign(
  // Top-level PlasmicSideBarMemberHeaderPanelNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    elementSideBarHeader: makeNodeComponent("elementSideBarHeader"),
    navbarSwitch: makeNodeComponent("navbarSwitch"),
    avatarUsernameDisplaynameParent: makeNodeComponent(
      "avatarUsernameDisplaynameParent"
    ),

    userAvatarVerificationBadge: makeNodeComponent(
      "userAvatarVerificationBadge"
    ),

    userAvatar: makeNodeComponent("userAvatar"),
    navUserAvatar182: makeNodeComponent("navUserAvatar182"),
    navUserAvatar242: makeNodeComponent("navUserAvatar242"),
    buttonSideBarMemberSettings: makeNodeComponent(
      "buttonSideBarMemberSettings"
    ),

    buttonIconNotificationBell: makeNodeComponent("buttonIconNotificationBell"),
    // Metadata about props expected for PlasmicSideBarMemberHeaderPanelNav
    internalVariantProps: PlasmicSideBarMemberHeaderPanelNav__VariantProps,
    internalArgProps: PlasmicSideBarMemberHeaderPanelNav__ArgProps
  }
);

export default PlasmicSideBarMemberHeaderPanelNav;
/* prettier-ignore-end */
