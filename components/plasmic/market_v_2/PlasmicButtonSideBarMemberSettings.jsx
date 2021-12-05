// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: x9ks47Cvll
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonSideBarMemberSettings.module.css"; // plasmic-import: x9ks47Cvll/css
import ChevronDownBIcon from "./icons/PlasmicIcon__ChevronDownB"; // plasmic-import: wk3elY0ALL/icon

export const PlasmicButtonSideBarMemberSettings__VariantProps = new Array();

export const PlasmicButtonSideBarMemberSettings__ArgProps = new Array(
  "target",
  "trigger"
);

function PlasmicButtonSideBarMemberSettings__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <p.Stack
        as={"button"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.button, projectcss.button, sty.parent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"elementUsernameDisplay"}
          data-plasmic-override={overrides.elementUsernameDisplay}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.elementUsernameDisplay
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"elementUserRealNames"}
            data-plasmic-override={overrides.elementUserRealNames}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.elementUserRealNames
            )}
          >
            <div
              data-plasmic-name={"userfirstName"}
              data-plasmic-override={overrides.userfirstName}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.userfirstName
              )}
            >
              {"Annie"}
            </div>

            <div
              data-plasmic-name={"userLastName"}
              data-plasmic-override={overrides.userLastName}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.userLastName
              )}
            >
              {"Beyol Lee"}
            </div>
          </p.Stack>

          <div
            data-plasmic-name={"userDisplaynameParent"}
            data-plasmic-override={overrides.userDisplaynameParent}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.userDisplaynameParent
            )}
          >
            <div
              data-plasmic-name={"atSign"}
              data-plasmic-override={overrides.atSign}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.atSign
              )}
            >
              {"@"}
            </div>

            <div
              data-plasmic-name={"userDisplayNameText"}
              data-plasmic-override={overrides.userDisplayNameText}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.userDisplayNameText
              )}
            >
              {"pixiedesign"}
            </div>
          </div>
        </p.Stack>

        <ChevronDownBIcon
          data-plasmic-name={"dropDownUserSettingsTrigger"}
          data-plasmic-override={overrides.dropDownUserSettingsTrigger}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.dropDownUserSettingsTrigger
          )}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText",
    "dropDownUserSettingsTrigger"
  ],

  parent: [
    "parent",
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText",
    "dropDownUserSettingsTrigger"
  ],

  elementUsernameDisplay: [
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText"
  ],

  elementUserRealNames: [
    "elementUserRealNames",
    "userfirstName",
    "userLastName"
  ],

  userfirstName: ["userfirstName"],
  userLastName: ["userLastName"],
  userDisplaynameParent: [
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText"
  ],

  atSign: ["atSign"],
  userDisplayNameText: ["userDisplayNameText"],
  dropDownUserSettingsTrigger: ["dropDownUserSettingsTrigger"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonSideBarMemberSettings__ArgProps,
      internalVariantPropNames: PlasmicButtonSideBarMemberSettings__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonSideBarMemberSettings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonSideBarMemberSettings";
  } else {
    func.displayName = `PlasmicButtonSideBarMemberSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonSideBarMemberSettings = Object.assign(
  // Top-level PlasmicButtonSideBarMemberSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    elementUsernameDisplay: makeNodeComponent("elementUsernameDisplay"),
    elementUserRealNames: makeNodeComponent("elementUserRealNames"),
    userfirstName: makeNodeComponent("userfirstName"),
    userLastName: makeNodeComponent("userLastName"),
    userDisplaynameParent: makeNodeComponent("userDisplaynameParent"),
    atSign: makeNodeComponent("atSign"),
    userDisplayNameText: makeNodeComponent("userDisplayNameText"),
    dropDownUserSettingsTrigger: makeNodeComponent(
      "dropDownUserSettingsTrigger"
    ),

    // Metadata about props expected for PlasmicButtonSideBarMemberSettings
    internalVariantProps: PlasmicButtonSideBarMemberSettings__VariantProps,
    internalArgProps: PlasmicButtonSideBarMemberSettings__ArgProps
  }
);

export default PlasmicButtonSideBarMemberSettings;
/* prettier-ignore-end */
