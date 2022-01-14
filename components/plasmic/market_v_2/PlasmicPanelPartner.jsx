// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0x12FzmUo9P
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PanelButtonHeader from "../../PanelButtonHeader"; // plasmic-import: l8x-1W9kbZ/component
import PanelPartnerSectionMarket from "../../PanelPartnerSectionMarket"; // plasmic-import: i3ai6jIm4VK/component
import PanelPartnerSectionPartner from "../../PanelPartnerSectionPartner"; // plasmic-import: ESb2G2fq56P/component
import PanelPartnerSectionAccount from "../../PanelPartnerSectionAccount"; // plasmic-import: frbDg7XY-m/component
import PanelFooter from "../../PanelFooter"; // plasmic-import: y532Y0sDIf/component
import { useLayout } from "./PlasmicGlobalVariant__Layout"; // plasmic-import: yRz57WAHKe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicPanelPartner.module.css"; // plasmic-import: 0x12FzmUo9P/css

export const PlasmicPanelPartner__VariantProps = new Array();

export const PlasmicPanelPartner__ArgProps = new Array();

function PlasmicPanelPartner__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    layout: useLayout()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_layout_isSellerView]: hasVariant(
          globalVariants,
          "layout",
          "isSellerView"
        )
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"navigation"}
        data-plasmic-override={overrides.navigation}
        hasGap={true}
        className={classNames(projectcss.all, sty.navigation)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"headerPanelMainPartner"}
          data-plasmic-override={overrides.headerPanelMainPartner}
          hasGap={true}
          className={classNames(projectcss.all, sty.headerPanelMainPartner)}
        >
          <PanelButtonHeader
            data-plasmic-name={"partnerButtonHeader"}
            data-plasmic-override={overrides.partnerButtonHeader}
            className={classNames("__wab_instance", sty.partnerButtonHeader, {
              [sty.partnerButtonHeader__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            user={"partner"}
          />
        </p.Stack>

        <PanelPartnerSectionMarket
          data-plasmic-name={"partnerMarket"}
          data-plasmic-override={overrides.partnerMarket}
          className={classNames("__wab_instance", sty.partnerMarket, {
            [sty.partnerMarket__global_layout_isSellerView]: hasVariant(
              globalVariants,
              "layout",
              "isSellerView"
            )
          })}
        />

        <PanelPartnerSectionPartner
          data-plasmic-name={"partnerProfile"}
          data-plasmic-override={overrides.partnerProfile}
          className={classNames("__wab_instance", sty.partnerProfile, {
            [sty.partnerProfile__global_layout_isSellerView]: hasVariant(
              globalVariants,
              "layout",
              "isSellerView"
            )
          })}
        />

        <PanelPartnerSectionAccount
          data-plasmic-name={"partnerAccount"}
          data-plasmic-override={overrides.partnerAccount}
          className={classNames("__wab_instance", sty.partnerAccount, {
            [sty.partnerAccount__global_layout_isSellerView]: hasVariant(
              globalVariants,
              "layout",
              "isSellerView"
            )
          })}
        />
      </p.Stack>

      <div
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames(projectcss.all, sty.footer)}
      >
        <PanelFooter
          data-plasmic-name={"panelPartnerFooter"}
          data-plasmic-override={overrides.panelPartnerFooter}
          className={classNames("__wab_instance", sty.panelPartnerFooter)}
        />
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigation",
    "headerPanelMainPartner",
    "partnerButtonHeader",
    "partnerMarket",
    "partnerProfile",
    "partnerAccount",
    "footer",
    "panelPartnerFooter"
  ],

  navigation: [
    "navigation",
    "headerPanelMainPartner",
    "partnerButtonHeader",
    "partnerMarket",
    "partnerProfile",
    "partnerAccount"
  ],

  headerPanelMainPartner: ["headerPanelMainPartner", "partnerButtonHeader"],
  partnerButtonHeader: ["partnerButtonHeader"],
  partnerMarket: ["partnerMarket"],
  partnerProfile: ["partnerProfile"],
  partnerAccount: ["partnerAccount"],
  footer: ["footer", "panelPartnerFooter"],
  panelPartnerFooter: ["panelPartnerFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelPartner__ArgProps,
      internalVariantPropNames: PlasmicPanelPartner__VariantProps
    });

    return PlasmicPanelPartner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelPartner";
  } else {
    func.displayName = `PlasmicPanelPartner.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelPartner = Object.assign(
  // Top-level PlasmicPanelPartner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigation: makeNodeComponent("navigation"),
    headerPanelMainPartner: makeNodeComponent("headerPanelMainPartner"),
    partnerButtonHeader: makeNodeComponent("partnerButtonHeader"),
    partnerMarket: makeNodeComponent("partnerMarket"),
    partnerProfile: makeNodeComponent("partnerProfile"),
    partnerAccount: makeNodeComponent("partnerAccount"),
    footer: makeNodeComponent("footer"),
    panelPartnerFooter: makeNodeComponent("panelPartnerFooter"),
    // Metadata about props expected for PlasmicPanelPartner
    internalVariantProps: PlasmicPanelPartner__VariantProps,
    internalArgProps: PlasmicPanelPartner__ArgProps
  }
);

export default PlasmicPanelPartner;
/* prettier-ignore-end */
