// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: _aYcl8sdexe
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementRadioPrimary from "../../ElementRadioPrimary"; // plasmic-import: Wn4V4PrC-K/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import SelectDropdownPrimary from "../../SelectDropdownPrimary"; // plasmic-import: T_qFWEqz1I6/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTableUserAdminRecord.module.css"; // plasmic-import: _aYcl8sdexe/css

export const PlasmicTableUserAdminRecord__VariantProps = new Array("action");

export const PlasmicTableUserAdminRecord__ArgProps = new Array();

function PlasmicTableUserAdminRecord__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"userAvatarNameEmailParent"}
        data-plasmic-override={overrides.userAvatarNameEmailParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.userAvatarNameEmailParent)}
      >
        <ElementRadioPrimary
          data-plasmic-name={"elementRadioPrimary"}
          data-plasmic-override={overrides.elementRadioPrimary}
          className={classNames("__wab_instance", sty.elementRadioPrimary, {
            [sty.elementRadioPrimary__action_select]: hasVariant(
              variants,
              "action",
              "select"
            )
          })}
          size={"_14Px"}
        />

        <UserAvatar
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          className={classNames("__wab_instance", sty.userAvatar)}
          size={"_32"}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"userInfoParent"}
          data-plasmic-override={overrides.userInfoParent}
          hasGap={true}
          className={classNames(projectcss.all, sty.userInfoParent)}
        >
          <div
            data-plasmic-name={"usernameParent"}
            data-plasmic-override={overrides.usernameParent}
            className={classNames(projectcss.all, sty.usernameParent)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qRux,
                {
                  [sty.text__action_select__qRuxWms]: hasVariant(
                    variants,
                    "action",
                    "select"
                  )
                }
              )}
            >
              {"username"}
            </div>
          </div>

          <div
            data-plasmic-name={"userEmailParent"}
            data-plasmic-override={overrides.userEmailParent}
            className={classNames(projectcss.all, sty.userEmailParent)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mqpkj
              )}
            >
              {"userEmail"}
            </div>
          </div>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"userAction"}
        data-plasmic-override={overrides.userAction}
        hasGap={true}
        className={classNames(projectcss.all, sty.userAction)}
      >
        <div
          data-plasmic-name={"userRole"}
          data-plasmic-override={overrides.userRole}
          className={classNames(projectcss.all, sty.userRole, {
            [sty.userRole__action_button]: hasVariant(
              variants,
              "action",
              "button"
            ),

            [sty.userRole__action_select]: hasVariant(
              variants,
              "action",
              "select"
            )
          })}
        >
          {(
            hasVariant(variants, "action", "button")
              ? false
              : hasVariant(variants, "action", "select")
              ? false
              : true
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bvk0V,
                {
                  [sty.text__action_button__bvk0V45Ld]: hasVariant(
                    variants,
                    "action",
                    "button"
                  ),

                  [sty.text__action_select__bvk0VWms]: hasVariant(
                    variants,
                    "action",
                    "select"
                  )
                }
              )}
            >
              {"Admin"}
            </div>
          ) : null}
          {(hasVariant(variants, "action", "select") ? true : false) ? (
            <SelectDropdownPrimary
              data-plasmic-name={"selectRole"}
              data-plasmic-override={overrides.selectRole}
              className={classNames("__wab_instance", sty.selectRole, {
                [sty.selectRole__action_select]: hasVariant(
                  variants,
                  "action",
                  "select"
                )
              })}
              color={
                hasVariant(variants, "action", "select") ? "light" : undefined
              }
              placeholder={
                hasVariant(variants, "action", "select")
                  ? "Member"
                  : "Select..."
              }
              width={
                hasVariant(variants, "action", "select") ? "_90" : undefined
              }
            />
          ) : null}
          {(hasVariant(variants, "action", "button") ? true : false) ? (
            <ButtonPrimary
              data-plasmic-name={"buttonPrimary"}
              data-plasmic-override={overrides.buttonPrimary}
              className={classNames("__wab_instance", sty.buttonPrimary, {
                [sty.buttonPrimary__action_button]: hasVariant(
                  variants,
                  "action",
                  "button"
                )
              })}
              type={
                hasVariant(variants, "action", "button") ? "link" : undefined
              }
              width={
                hasVariant(variants, "action", "button") ? "_90" : undefined
              }
            />
          ) : null}
        </div>

        <ButtonCircleDelete
          data-plasmic-name={"removeTeamMember"}
          data-plasmic-override={overrides.removeTeamMember}
          className={classNames("__wab_instance", sty.removeTeamMember)}
          size={"_18Px"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "userAvatarNameEmailParent",
    "elementRadioPrimary",
    "userAvatar",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "userAction",
    "userRole",
    "selectRole",
    "buttonPrimary",
    "removeTeamMember"
  ],

  userAvatarNameEmailParent: [
    "userAvatarNameEmailParent",
    "elementRadioPrimary",
    "userAvatar",
    "userInfoParent",
    "usernameParent",
    "userEmailParent"
  ],

  elementRadioPrimary: ["elementRadioPrimary"],
  userAvatar: ["userAvatar"],
  userInfoParent: ["userInfoParent", "usernameParent", "userEmailParent"],
  usernameParent: ["usernameParent"],
  userEmailParent: ["userEmailParent"],
  userAction: [
    "userAction",
    "userRole",
    "selectRole",
    "buttonPrimary",
    "removeTeamMember"
  ],

  userRole: ["userRole", "selectRole", "buttonPrimary"],
  selectRole: ["selectRole"],
  buttonPrimary: ["buttonPrimary"],
  removeTeamMember: ["removeTeamMember"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableUserAdminRecord__ArgProps,
      internalVariantPropNames: PlasmicTableUserAdminRecord__VariantProps
    });

    return PlasmicTableUserAdminRecord__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableUserAdminRecord";
  } else {
    func.displayName = `PlasmicTableUserAdminRecord.${nodeName}`;
  }
  return func;
}

export const PlasmicTableUserAdminRecord = Object.assign(
  // Top-level PlasmicTableUserAdminRecord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userAvatarNameEmailParent: makeNodeComponent("userAvatarNameEmailParent"),
    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    userAvatar: makeNodeComponent("userAvatar"),
    userInfoParent: makeNodeComponent("userInfoParent"),
    usernameParent: makeNodeComponent("usernameParent"),
    userEmailParent: makeNodeComponent("userEmailParent"),
    userAction: makeNodeComponent("userAction"),
    userRole: makeNodeComponent("userRole"),
    selectRole: makeNodeComponent("selectRole"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    removeTeamMember: makeNodeComponent("removeTeamMember"),
    // Metadata about props expected for PlasmicTableUserAdminRecord
    internalVariantProps: PlasmicTableUserAdminRecord__VariantProps,
    internalArgProps: PlasmicTableUserAdminRecord__ArgProps
  }
);

export default PlasmicTableUserAdminRecord;
/* prettier-ignore-end */
