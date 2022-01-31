// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ZMyXOaiDBH_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarAdminIcons from "../../NavbarAdminIcons"; // plasmic-import: -GlpTucHU-/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarUserAdmin.module.css"; // plasmic-import: ZMyXOaiDBH_/css

export const PlasmicNavbarUserAdmin__VariantProps = new Array();

export const PlasmicNavbarUserAdmin__ArgProps = new Array();

function PlasmicNavbarUserAdmin__RenderFunc(props) {
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
      <NavbarAdminIcons
        alternates={"help"}
        className={classNames("__wab_instance", sty.navbarAdminIcons__q1Wn9)}
      />

      <NavbarAdminIcons
        alternates={"notification"}
        className={classNames("__wab_instance", sty.navbarAdminIcons__uhkdI)}
      />

      <NavbarAdminIcons
        alternates={"inbox"}
        className={classNames("__wab_instance", sty.navbarAdminIcons___14XlK)}
      />

      <NavbarAdminIcons
        className={classNames("__wab_instance", sty.navbarAdminIcons__tQnIs)}
      />

      <div
        data-plasmic-name={"avatarParent"}
        data-plasmic-override={overrides.avatarParent}
        className={classNames(projectcss.all, sty.avatarParent)}
      >
        <UserAvatar
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          navUserAvatar32={
            <img
              data-plasmic-name={"navUserAvatar32"}
              data-plasmic-override={overrides.navUserAvatar32}
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.navUserAvatar32
              )}
              src={"/plasmic/market_v_2/images/collinUserImage.jpeg"}
            />
          }
          navUserAvatar48={
            <img
              data-plasmic-name={"navUserAvatar48"}
              data-plasmic-override={overrides.navUserAvatar48}
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.navUserAvatar48
              )}
              src={"/plasmic/market_v_2/images/collinUserImage.jpeg"}
            />
          }
          size={"_32"}
        />
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "avatarParent",
    "userAvatar",
    "navUserAvatar32",
    "navUserAvatar48"
  ],

  avatarParent: [
    "avatarParent",
    "userAvatar",
    "navUserAvatar32",
    "navUserAvatar48"
  ],

  userAvatar: ["userAvatar", "navUserAvatar32", "navUserAvatar48"],
  navUserAvatar32: ["navUserAvatar32"],
  navUserAvatar48: ["navUserAvatar48"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarUserAdmin__ArgProps,
      internalVariantPropNames: PlasmicNavbarUserAdmin__VariantProps
    });

    return PlasmicNavbarUserAdmin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarUserAdmin";
  } else {
    func.displayName = `PlasmicNavbarUserAdmin.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarUserAdmin = Object.assign(
  // Top-level PlasmicNavbarUserAdmin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatarParent: makeNodeComponent("avatarParent"),
    userAvatar: makeNodeComponent("userAvatar"),
    navUserAvatar32: makeNodeComponent("navUserAvatar32"),
    navUserAvatar48: makeNodeComponent("navUserAvatar48"),
    // Metadata about props expected for PlasmicNavbarUserAdmin
    internalVariantProps: PlasmicNavbarUserAdmin__VariantProps,
    internalArgProps: PlasmicNavbarUserAdmin__ArgProps
  }
);

export default PlasmicNavbarUserAdmin;
/* prettier-ignore-end */
