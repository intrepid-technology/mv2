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
import PartnerProfileSummaryDropdown from "../../PartnerProfileSummaryDropdown"; // plasmic-import: luagzhtXbcO/component
import ButtonIconNotificationBell from "../../ButtonIconNotificationBell"; // plasmic-import: oyQklGfTop/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelHeaderDisplayPartner.module.css"; // plasmic-import: yNsN5_wXEjo/css

export const PlasmicPanelHeaderDisplayPartner__VariantProps = new Array();

export const PlasmicPanelHeaderDisplayPartner__ArgProps = new Array();

function PlasmicPanelHeaderDisplayPartner__RenderFunc(props) {
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
      <PartnerProfileSummaryDropdown
        data-plasmic-name={"partnerProfileSummaryDropdown"}
        data-plasmic-override={overrides.partnerProfileSummaryDropdown}
        className={classNames(
          "__wab_instance",
          sty.partnerProfileSummaryDropdown
        )}
      />

      <ButtonIconNotificationBell
        data-plasmic-name={"panelPartner"}
        data-plasmic-override={overrides.panelPartner}
        className={classNames("__wab_instance", sty.panelPartner)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "partnerProfileSummaryDropdown", "panelPartner"],
  partnerProfileSummaryDropdown: ["partnerProfileSummaryDropdown"],
  panelPartner: ["panelPartner"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelHeaderDisplayPartner__ArgProps,
      internalVariantPropNames: PlasmicPanelHeaderDisplayPartner__VariantProps
    });

    return PlasmicPanelHeaderDisplayPartner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelHeaderDisplayPartner";
  } else {
    func.displayName = `PlasmicPanelHeaderDisplayPartner.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelHeaderDisplayPartner = Object.assign(
  // Top-level PlasmicPanelHeaderDisplayPartner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    partnerProfileSummaryDropdown: makeNodeComponent(
      "partnerProfileSummaryDropdown"
    ),

    panelPartner: makeNodeComponent("panelPartner"),
    // Metadata about props expected for PlasmicPanelHeaderDisplayPartner
    internalVariantProps: PlasmicPanelHeaderDisplayPartner__VariantProps,
    internalArgProps: PlasmicPanelHeaderDisplayPartner__ArgProps
  }
);

export default PlasmicPanelHeaderDisplayPartner;
/* prettier-ignore-end */
