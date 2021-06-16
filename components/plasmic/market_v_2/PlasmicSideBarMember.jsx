// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ouYaxX0ZfJN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SideBarMemberHeaderPanelNav from "../../SideBarMemberHeaderPanelNav"; // plasmic-import: io5-1sj1-O9/component
import SideBarButtonHeader from "../../SideBarButtonHeader"; // plasmic-import: l8x-1W9kbZ/component
import SideBarCommunityStats from "../../SideBarCommunityStats"; // plasmic-import: JsYhtV8o3HC/component
import BadgeCommunityRating from "../../BadgeCommunityRating"; // plasmic-import: 0Y8M1lpCIf/component
import BadgeVerification from "../../BadgeVerification"; // plasmic-import: _M5uzrbjQp/component
import TagMemberA from "../../TagMemberA"; // plasmic-import: 9aF3UlfvfE/component
import ElementSideBarMarketPanel from "../../ElementSideBarMarketPanel"; // plasmic-import: 8_xnKrMMUML/component
import ElementSideBarMemberMemberPanel from "../../ElementSideBarMemberMemberPanel"; // plasmic-import: Q3RBslsHoHs/component
import ElementSideBarMemberAccountPanel from "../../ElementSideBarMemberAccountPanel"; // plasmic-import: nJJCy4YRIm/component
import SideBarFooter from "../../SideBarFooter"; // plasmic-import: y532Y0sDIf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSideBarMember.module.css"; // plasmic-import: ouYaxX0ZfJN/css

export const PlasmicSideBarMember__VariantProps = new Array();

export const PlasmicSideBarMember__ArgProps = new Array();

function PlasmicSideBarMember__RenderFunc(props) {
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
      <div
        data-plasmic-name={"headerPanelMainMember"}
        data-plasmic-override={overrides.headerPanelMainMember}
        className={classNames(defaultcss.all, sty.headerPanelMainMember)}
      >
        <SideBarMemberHeaderPanelNav
          data-plasmic-name={"sideBarMemberHeaderPanelNav"}
          data-plasmic-override={overrides.sideBarMemberHeaderPanelNav}
          className={classNames(
            "__wab_instance",
            sty.sideBarMemberHeaderPanelNav
          )}
        />

        <SideBarButtonHeader
          data-plasmic-name={"sideBarButtonHeader"}
          data-plasmic-override={overrides.sideBarButtonHeader}
          className={classNames("__wab_instance", sty.sideBarButtonHeader)}
        />
      </div>

      <SideBarCommunityStats
        data-plasmic-name={"sideBarCommunityStats"}
        data-plasmic-override={overrides.sideBarCommunityStats}
        className={classNames("__wab_instance", sty.sideBarCommunityStats)}
        elementUserbadges={
          <React.Fragment>
            <BadgeCommunityRating
              data-plasmic-name={"badgeCommunityRating"}
              data-plasmic-override={overrides.badgeCommunityRating}
              className={classNames("__wab_instance", sty.badgeCommunityRating)}
            />

            <BadgeVerification
              data-plasmic-name={"badgeVerification"}
              data-plasmic-override={overrides.badgeVerification}
              className={classNames("__wab_instance", sty.badgeVerification)}
            />
          </React.Fragment>
        }
        userTag={
          <TagMemberA
            data-plasmic-name={"tagMemberA"}
            data-plasmic-override={overrides.tagMemberA}
            className={classNames("__wab_instance", sty.tagMemberA)}
          />
        }
      />

      <ElementSideBarMarketPanel
        data-plasmic-name={"elementSideBarMarketPanel"}
        data-plasmic-override={overrides.elementSideBarMarketPanel}
        className={classNames("__wab_instance", sty.elementSideBarMarketPanel)}
      />

      <ElementSideBarMemberMemberPanel
        data-plasmic-name={"elementSideBarMemberMemberPanel"}
        data-plasmic-override={overrides.elementSideBarMemberMemberPanel}
        className={classNames(
          "__wab_instance",
          sty.elementSideBarMemberMemberPanel
        )}
      />

      <ElementSideBarMemberAccountPanel
        data-plasmic-name={"elementSideBarMemberAccountPanel"}
        data-plasmic-override={overrides.elementSideBarMemberAccountPanel}
        className={classNames(
          "__wab_instance",
          sty.elementSideBarMemberAccountPanel
        )}
      />

      <SideBarFooter
        data-plasmic-name={"sideBarFooter"}
        data-plasmic-override={overrides.sideBarFooter}
        className={classNames("__wab_instance", sty.sideBarFooter)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerPanelMainMember",
    "sideBarMemberHeaderPanelNav",
    "sideBarButtonHeader",
    "sideBarCommunityStats",
    "badgeCommunityRating",
    "badgeVerification",
    "tagMemberA",
    "elementSideBarMarketPanel",
    "elementSideBarMemberMemberPanel",
    "elementSideBarMemberAccountPanel",
    "sideBarFooter"
  ],

  headerPanelMainMember: [
    "headerPanelMainMember",
    "sideBarMemberHeaderPanelNav",
    "sideBarButtonHeader"
  ],

  sideBarMemberHeaderPanelNav: ["sideBarMemberHeaderPanelNav"],
  sideBarButtonHeader: ["sideBarButtonHeader"],
  sideBarCommunityStats: [
    "sideBarCommunityStats",
    "badgeCommunityRating",
    "badgeVerification",
    "tagMemberA"
  ],

  badgeCommunityRating: ["badgeCommunityRating"],
  badgeVerification: ["badgeVerification"],
  tagMemberA: ["tagMemberA"],
  elementSideBarMarketPanel: ["elementSideBarMarketPanel"],
  elementSideBarMemberMemberPanel: ["elementSideBarMemberMemberPanel"],
  elementSideBarMemberAccountPanel: ["elementSideBarMemberAccountPanel"],
  sideBarFooter: ["sideBarFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSideBarMember__ArgProps,
      internalVariantPropNames: PlasmicSideBarMember__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSideBarMember__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarMember";
  } else {
    func.displayName = `PlasmicSideBarMember.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarMember = Object.assign(
  // Top-level PlasmicSideBarMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerPanelMainMember: makeNodeComponent("headerPanelMainMember"),
    sideBarMemberHeaderPanelNav: makeNodeComponent(
      "sideBarMemberHeaderPanelNav"
    ),

    sideBarButtonHeader: makeNodeComponent("sideBarButtonHeader"),
    sideBarCommunityStats: makeNodeComponent("sideBarCommunityStats"),
    badgeCommunityRating: makeNodeComponent("badgeCommunityRating"),
    badgeVerification: makeNodeComponent("badgeVerification"),
    tagMemberA: makeNodeComponent("tagMemberA"),
    elementSideBarMarketPanel: makeNodeComponent("elementSideBarMarketPanel"),
    elementSideBarMemberMemberPanel: makeNodeComponent(
      "elementSideBarMemberMemberPanel"
    ),

    elementSideBarMemberAccountPanel: makeNodeComponent(
      "elementSideBarMemberAccountPanel"
    ),

    sideBarFooter: makeNodeComponent("sideBarFooter"),
    // Metadata about props expected for PlasmicSideBarMember
    internalVariantProps: PlasmicSideBarMember__VariantProps,
    internalArgProps: PlasmicSideBarMember__ArgProps
  }
);

export default PlasmicSideBarMember;
/* prettier-ignore-end */
