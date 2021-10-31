// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: wdhcheOkaT
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
import * as sty from "./PlasmicButtonPartnerSidebarSettings.module.css"; // plasmic-import: wdhcheOkaT/css
import ChevronDownBIcon from "./icons/PlasmicIcon__ChevronDownB"; // plasmic-import: wk3elY0ALL/icon

export const PlasmicButtonPartnerSidebarSettings__VariantProps = new Array();

export const PlasmicButtonPartnerSidebarSettings__ArgProps = new Array();

function PlasmicButtonPartnerSidebarSettings__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.button, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"usernamePartnerProfileName"}
        data-plasmic-override={overrides.usernamePartnerProfileName}
        hasGap={true}
        className={classNames(defaultcss.all, sty.usernamePartnerProfileName)}
      >
        <div
          data-plasmic-name={"campanyDisplayNameParent"}
          data-plasmic-override={overrides.campanyDisplayNameParent}
          className={classNames(defaultcss.all, sty.campanyDisplayNameParent)}
        >
          <div
            data-plasmic-name={"companyNameText"}
            data-plasmic-override={overrides.companyNameText}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.companyNameText
            )}
          >
            {"CompanyRealName"}
          </div>
        </div>

        <div
          data-plasmic-name={"partnerDisplayName"}
          data-plasmic-override={overrides.partnerDisplayName}
          className={classNames(defaultcss.all, sty.partnerDisplayName)}
        >
          <div
            data-plasmic-name={"atSgin"}
            data-plasmic-override={overrides.atSgin}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.atSgin
            )}
          >
            {"@"}
          </div>

          <div
            data-plasmic-name={"companyNameDisplay"}
            data-plasmic-override={overrides.companyNameDisplay}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.companyNameDisplay
            )}
          >
            {"companyDisplayName"}
          </div>
        </div>
      </p.Stack>

      <ChevronDownBIcon
        data-plasmic-name={"dropDownUserSettingsTrigger"}
        data-plasmic-override={overrides.dropDownUserSettingsTrigger}
        className={classNames(defaultcss.all, sty.dropDownUserSettingsTrigger)}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "usernamePartnerProfileName",
    "campanyDisplayNameParent",
    "companyNameText",
    "partnerDisplayName",
    "atSgin",
    "companyNameDisplay",
    "dropDownUserSettingsTrigger"
  ],

  usernamePartnerProfileName: [
    "usernamePartnerProfileName",
    "campanyDisplayNameParent",
    "companyNameText",
    "partnerDisplayName",
    "atSgin",
    "companyNameDisplay"
  ],

  campanyDisplayNameParent: ["campanyDisplayNameParent", "companyNameText"],
  companyNameText: ["companyNameText"],
  partnerDisplayName: ["partnerDisplayName", "atSgin", "companyNameDisplay"],
  atSgin: ["atSgin"],
  companyNameDisplay: ["companyNameDisplay"],
  dropDownUserSettingsTrigger: ["dropDownUserSettingsTrigger"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonPartnerSidebarSettings__ArgProps,
      internalVariantPropNames:
        PlasmicButtonPartnerSidebarSettings__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonPartnerSidebarSettings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonPartnerSidebarSettings";
  } else {
    func.displayName = `PlasmicButtonPartnerSidebarSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonPartnerSidebarSettings = Object.assign(
  // Top-level PlasmicButtonPartnerSidebarSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    usernamePartnerProfileName: makeNodeComponent("usernamePartnerProfileName"),
    campanyDisplayNameParent: makeNodeComponent("campanyDisplayNameParent"),
    companyNameText: makeNodeComponent("companyNameText"),
    partnerDisplayName: makeNodeComponent("partnerDisplayName"),
    atSgin: makeNodeComponent("atSgin"),
    companyNameDisplay: makeNodeComponent("companyNameDisplay"),
    dropDownUserSettingsTrigger: makeNodeComponent(
      "dropDownUserSettingsTrigger"
    ),

    // Metadata about props expected for PlasmicButtonPartnerSidebarSettings
    internalVariantProps: PlasmicButtonPartnerSidebarSettings__VariantProps,
    internalArgProps: PlasmicButtonPartnerSidebarSettings__ArgProps
  }
);

export default PlasmicButtonPartnerSidebarSettings;
/* prettier-ignore-end */
