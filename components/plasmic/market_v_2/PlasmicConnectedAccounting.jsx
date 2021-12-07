// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: N7O712pA3UT
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputFormCardWebhookConnections from "../../InputFormCardWebhookConnections"; // plasmic-import: gKd8t6dFgYd/component
import CardConnectedAccount from "../../CardConnectedAccount"; // plasmic-import: _uTya7yxqeE/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicConnectedAccounting.module.css"; // plasmic-import: N7O712pA3UT/css

export const PlasmicConnectedAccounting__VariantProps = new Array(
  "closed",
  "visible"
);

export const PlasmicConnectedAccounting__ArgProps = new Array();

function PlasmicConnectedAccounting__RenderFunc(props) {
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
      <InputFormCardWebhookConnections
        data-plasmic-name={"inputFormCardWebhookConnections"}
        data-plasmic-override={overrides.inputFormCardWebhookConnections}
        accounting={"accounting"}
        slot={"Connect your accounting systems to log financing benefits."}
      >
        {"Accounting Connections"}
      </InputFormCardWebhookConnections>

      {(
        hasVariant(variants, "visible", "quickbooks")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"xero"}
          data-plasmic-override={overrides.xero}
          className={classNames("__wab_instance", sty.xero, {
            [sty.xero__closed]: hasVariant(variants, "closed", "closed"),
            [sty.xero__visible_quickbooks]: hasVariant(
              variants,
              "visible",
              "quickbooks"
            )
          })}
          companies={"xero"}
          team={"team"}
          userFirstname={"companyName"}
        />
      ) : null}
      {(
        hasVariant(variants, "visible", "xero")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"quickbooks"}
          data-plasmic-override={overrides.quickbooks}
          className={classNames("__wab_instance", sty.quickbooks, {
            [sty.quickbooks__closed]: hasVariant(variants, "closed", "closed"),
            [sty.quickbooks__visible_xero]: hasVariant(
              variants,
              "visible",
              "xero"
            )
          })}
          companies={"quickbooks"}
          team={"team"}
          userFirstname={"companyName"}
        />
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "inputFormCardWebhookConnections", "xero", "quickbooks"],
  inputFormCardWebhookConnections: ["inputFormCardWebhookConnections"],
  xero: ["xero"],
  quickbooks: ["quickbooks"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicConnectedAccounting__ArgProps,
      internalVariantPropNames: PlasmicConnectedAccounting__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicConnectedAccounting__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConnectedAccounting";
  } else {
    func.displayName = `PlasmicConnectedAccounting.${nodeName}`;
  }
  return func;
}

export const PlasmicConnectedAccounting = Object.assign(
  // Top-level PlasmicConnectedAccounting renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputFormCardWebhookConnections: makeNodeComponent(
      "inputFormCardWebhookConnections"
    ),

    xero: makeNodeComponent("xero"),
    quickbooks: makeNodeComponent("quickbooks"),
    // Metadata about props expected for PlasmicConnectedAccounting
    internalVariantProps: PlasmicConnectedAccounting__VariantProps,
    internalArgProps: PlasmicConnectedAccounting__ArgProps
  }
);

export default PlasmicConnectedAccounting;
/* prettier-ignore-end */
