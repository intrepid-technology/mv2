// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: tedFSU58Q9L
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import ButtonSideBarMemberSettings from "../../ButtonSideBarMemberSettings"; // plasmic-import: x9ks47Cvll/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicMemberProfileSummaryDropdown.module.css"; // plasmic-import: tedFSU58Q9L/css

export const PlasmicMemberProfileSummaryDropdown__VariantProps = new Array();

export const PlasmicMemberProfileSummaryDropdown__ArgProps = new Array();

function PlasmicMemberProfileSummaryDropdown__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
      <div
        data-plasmic-name={"userAvatarVerificationBadge"}
        data-plasmic-override={overrides.userAvatarVerificationBadge}
        className={classNames(projectcss.all, sty.userAvatarVerificationBadge)}
      >
        <UserAvatar
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          navUserAvatar16={
            <img
              data-plasmic-name={"navUserAvatar182"}
              data-plasmic-override={overrides.navUserAvatar182}
              alt={""}
              className={classNames(projectcss.img, sty.navUserAvatar182)}
              src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
            />
          }
          navUserAvatar24={
            <img
              data-plasmic-name={"navUserAvatar242"}
              data-plasmic-override={overrides.navUserAvatar242}
              alt={""}
              className={classNames(projectcss.img, sty.navUserAvatar242)}
              src={"/plasmic/market_v_2/images/collinHbs2014Jpg.jpeg"}
            />
          }
          navUserAvatar32={
            <img
              data-plasmic-name={"navUserAvatar32"}
              data-plasmic-override={overrides.navUserAvatar32}
              alt={""}
              className={classNames(projectcss.img, sty.navUserAvatar32)}
              src={
                "/plasmic/market_v_2/images/userAvatarForPresentationjpg.jpeg"
              }
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
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "navUserAvatar32",
    "buttonSideBarMemberSettings"
  ],

  userAvatarVerificationBadge: [
    "userAvatarVerificationBadge",
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "navUserAvatar32"
  ],

  userAvatar: [
    "userAvatar",
    "navUserAvatar182",
    "navUserAvatar242",
    "navUserAvatar32"
  ],

  navUserAvatar182: ["navUserAvatar182"],
  navUserAvatar242: ["navUserAvatar242"],
  navUserAvatar32: ["navUserAvatar32"],
  buttonSideBarMemberSettings: ["buttonSideBarMemberSettings"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMemberProfileSummaryDropdown__ArgProps,
      internalVariantPropNames:
        PlasmicMemberProfileSummaryDropdown__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMemberProfileSummaryDropdown__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMemberProfileSummaryDropdown";
  } else {
    func.displayName = `PlasmicMemberProfileSummaryDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicMemberProfileSummaryDropdown = Object.assign(
  // Top-level PlasmicMemberProfileSummaryDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userAvatarVerificationBadge: makeNodeComponent(
      "userAvatarVerificationBadge"
    ),

    userAvatar: makeNodeComponent("userAvatar"),
    navUserAvatar182: makeNodeComponent("navUserAvatar182"),
    navUserAvatar242: makeNodeComponent("navUserAvatar242"),
    navUserAvatar32: makeNodeComponent("navUserAvatar32"),
    buttonSideBarMemberSettings: makeNodeComponent(
      "buttonSideBarMemberSettings"
    ),

    // Metadata about props expected for PlasmicMemberProfileSummaryDropdown
    internalVariantProps: PlasmicMemberProfileSummaryDropdown__VariantProps,
    internalArgProps: PlasmicMemberProfileSummaryDropdown__ArgProps
  }
);

export default PlasmicMemberProfileSummaryDropdown;
/* prettier-ignore-end */
