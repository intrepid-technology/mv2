// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: yNsN5_wXEjo
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarSwitch from "../../NavbarSwitch"; // plasmic-import: tmc24NnB44/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import ButtonSideBarPartnerSettings from "../../ButtonSideBarPartnerSettings"; // plasmic-import: AS7ILA_RiJ/component
import ButtonIconNotificationBell from "../../ButtonIconNotificationBell"; // plasmic-import: oyQklGfTop/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSideBarPartnerHeaderPanelNav.module.css"; // plasmic-import: yNsN5_wXEjo/css

export const PlasmicSideBarPartnerHeaderPanelNav__VariantProps = new Array();

export const PlasmicSideBarPartnerHeaderPanelNav__ArgProps = new Array();

function PlasmicSideBarPartnerHeaderPanelNav__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
        data-plasmic-name={"elementPartnerSidebarHeader"}
        data-plasmic-override={overrides.elementPartnerSidebarHeader}
        hasGap={true}
        className={classNames(defaultcss.all, sty.elementPartnerSidebarHeader)}
      >
        <NavbarSwitch
          data-plasmic-name={"navbarSwitch"}
          data-plasmic-override={overrides.navbarSwitch}
          className={classNames("__wab_instance", sty.navbarSwitch)}
          close={"close"}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"avatarPartnerUsernameDisplayNameParent"}
          data-plasmic-override={
            overrides.avatarPartnerUsernameDisplayNameParent
          }
          hasGap={true}
          className={classNames(
            defaultcss.all,
            sty.avatarPartnerUsernameDisplayNameParent
          )}
        >
          <div
            data-plasmic-name={"partnerAvatarParent"}
            data-plasmic-override={overrides.partnerAvatarParent}
            className={classNames(defaultcss.all, sty.partnerAvatarParent)}
          >
            <UserAvatar
              data-plasmic-name={"userAvatar"}
              data-plasmic-override={overrides.userAvatar}
              navUserAvatar16={
                <img
                  data-plasmic-name={"navUserAvatar1822"}
                  data-plasmic-override={overrides.navUserAvatar1822}
                  alt={""}
                  className={classNames(defaultcss.img, sty.navUserAvatar1822)}
                  role={"img"}
                  src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
                />
              }
              navUserAvatar24={
                <img
                  data-plasmic-name={"navUserAvatar2422"}
                  data-plasmic-override={overrides.navUserAvatar2422}
                  alt={""}
                  className={classNames(defaultcss.img, sty.navUserAvatar2422)}
                  role={"img"}
                  src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
                />
              }
              size={"_32"}
              verified={"verified"}
            />
          </div>

          <ButtonSideBarPartnerSettings
            data-plasmic-name={"buttonSideBarPartnerSettings"}
            data-plasmic-override={overrides.buttonSideBarPartnerSettings}
            className={classNames(
              "__wab_instance",
              sty.buttonSideBarPartnerSettings
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
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "elementPartnerSidebarHeader",
    "navbarSwitch",
    "avatarPartnerUsernameDisplayNameParent",
    "partnerAvatarParent",
    "userAvatar",
    "navUserAvatar1822",
    "navUserAvatar2422",
    "buttonSideBarPartnerSettings",
    "buttonIconNotificationBell"
  ],

  elementPartnerSidebarHeader: [
    "elementPartnerSidebarHeader",
    "navbarSwitch",
    "avatarPartnerUsernameDisplayNameParent",
    "partnerAvatarParent",
    "userAvatar",
    "navUserAvatar1822",
    "navUserAvatar2422",
    "buttonSideBarPartnerSettings",
    "buttonIconNotificationBell"
  ],

  navbarSwitch: ["navbarSwitch"],
  avatarPartnerUsernameDisplayNameParent: [
    "avatarPartnerUsernameDisplayNameParent",
    "partnerAvatarParent",
    "userAvatar",
    "navUserAvatar1822",
    "navUserAvatar2422",
    "buttonSideBarPartnerSettings",
    "buttonIconNotificationBell"
  ],

  partnerAvatarParent: [
    "partnerAvatarParent",
    "userAvatar",
    "navUserAvatar1822",
    "navUserAvatar2422"
  ],

  userAvatar: ["userAvatar", "navUserAvatar1822", "navUserAvatar2422"],
  navUserAvatar1822: ["navUserAvatar1822"],
  navUserAvatar2422: ["navUserAvatar2422"],
  buttonSideBarPartnerSettings: ["buttonSideBarPartnerSettings"],
  buttonIconNotificationBell: ["buttonIconNotificationBell"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSideBarPartnerHeaderPanelNav__ArgProps,
      internalVariantPropNames:
        PlasmicSideBarPartnerHeaderPanelNav__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSideBarPartnerHeaderPanelNav__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarPartnerHeaderPanelNav";
  } else {
    func.displayName = `PlasmicSideBarPartnerHeaderPanelNav.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarPartnerHeaderPanelNav = Object.assign(
  // Top-level PlasmicSideBarPartnerHeaderPanelNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    elementPartnerSidebarHeader: makeNodeComponent(
      "elementPartnerSidebarHeader"
    ),

    navbarSwitch: makeNodeComponent("navbarSwitch"),
    avatarPartnerUsernameDisplayNameParent: makeNodeComponent(
      "avatarPartnerUsernameDisplayNameParent"
    ),

    partnerAvatarParent: makeNodeComponent("partnerAvatarParent"),
    userAvatar: makeNodeComponent("userAvatar"),
    navUserAvatar1822: makeNodeComponent("navUserAvatar1822"),
    navUserAvatar2422: makeNodeComponent("navUserAvatar2422"),
    buttonSideBarPartnerSettings: makeNodeComponent(
      "buttonSideBarPartnerSettings"
    ),

    buttonIconNotificationBell: makeNodeComponent("buttonIconNotificationBell"),
    // Metadata about props expected for PlasmicSideBarPartnerHeaderPanelNav
    internalVariantProps: PlasmicSideBarPartnerHeaderPanelNav__VariantProps,
    internalArgProps: PlasmicSideBarPartnerHeaderPanelNav__ArgProps
  }
);

export default PlasmicSideBarPartnerHeaderPanelNav;
/* prettier-ignore-end */
