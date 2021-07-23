// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -32NgWHIsLX
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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionConnectedAccounts.module.css"; // plasmic-import: -32NgWHIsLX/css

export const PlasmicSectionConnectedAccounts__VariantProps = new Array(
  "closed",
  "visible",
  "border"
);

export const PlasmicSectionConnectedAccounts__ArgProps = new Array(
  "headline",
  "subhead",
  "description"
);

function PlasmicSectionConnectedAccounts__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__border]: hasVariant(variants, "border", "border"),
        [sty.parent__closed]: hasVariant(variants, "closed", "closed"),
        [sty.parent__visible_google]: hasVariant(variants, "visible", "google")
      })}
    >
      <InputFormCardWebhookConnections
        data-plasmic-name={"personalLoginConnectionAccounts"}
        data-plasmic-override={overrides.personalLoginConnectionAccounts}
        className={classNames(
          "__wab_instance",
          sty.personalLoginConnectionAccounts
        )}
        description={p.renderPlasmicSlot({
          defaultContents:
            "One login connection can be added per third-party service.",
          value: args.description
        })}
        slot={p.renderPlasmicSlot({
          defaultContents:
            "Connect your social accounts to log in to Intrepid.",
          value: args.subhead
        })}
        subheadDescription={"subheadDescription"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Login Connections",
          value: args.headline
        })}
      </InputFormCardWebhookConnections>

      {(
        hasVariant(variants, "visible", "facebook")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"personalConnectedGoogleAccount"}
          data-plasmic-override={overrides.personalConnectedGoogleAccount}
          className={classNames(
            "__wab_instance",
            sty.personalConnectedGoogleAccount,
            {
              [sty.personalConnectedGoogleAccount__closed]: hasVariant(
                variants,
                "closed",
                "closed"
              ),

              [sty.personalConnectedGoogleAccount__visible_facebook]:
                hasVariant(variants, "visible", "facebook")
            }
          )}
          userFirstname={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__c84HQ
              )}
            >
              {"userFirstName"}
            </div>
          }
          userLastName={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__vyrJr
              )}
            >
              {"userLastName"}
            </div>
          }
        />
      ) : null}
      {(
        hasVariant(variants, "visible", "google")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"personalConnectedFacebookAccount"}
          data-plasmic-override={overrides.personalConnectedFacebookAccount}
          className={classNames(
            "__wab_instance",
            sty.personalConnectedFacebookAccount,
            {
              [sty.personalConnectedFacebookAccount__closed]: hasVariant(
                variants,
                "closed",
                "closed"
              ),

              [sty.personalConnectedFacebookAccount__visible_facebook]:
                hasVariant(variants, "visible", "facebook"),
              [sty.personalConnectedFacebookAccount__visible_google]:
                hasVariant(variants, "visible", "google")
            }
          )}
          userFirstname={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__eJkr2
              )}
            >
              {"userFirstName"}
            </div>
          }
          userLastName={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__zhjMw
              )}
            >
              {"userLastName"}
            </div>
          }
        />
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "personalLoginConnectionAccounts",
    "personalConnectedGoogleAccount",
    "personalConnectedFacebookAccount"
  ],

  personalLoginConnectionAccounts: ["personalLoginConnectionAccounts"],
  personalConnectedGoogleAccount: ["personalConnectedGoogleAccount"],
  personalConnectedFacebookAccount: ["personalConnectedFacebookAccount"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionConnectedAccounts__ArgProps,
      internalVariantPropNames: PlasmicSectionConnectedAccounts__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionConnectedAccounts__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicSectionConnectedAccounts";
  } else {
    func.displayName = `PlasmicSectionConnectedAccounts.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionConnectedAccounts = Object.assign(
  // Top-level PlasmicSectionConnectedAccounts renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    personalLoginConnectionAccounts: makeNodeComponent(
      "personalLoginConnectionAccounts"
    ),

    personalConnectedGoogleAccount: makeNodeComponent(
      "personalConnectedGoogleAccount"
    ),

    personalConnectedFacebookAccount: makeNodeComponent(
      "personalConnectedFacebookAccount"
    ),

    // Metadata about props expected for PlasmicSectionConnectedAccounts
    internalVariantProps: PlasmicSectionConnectedAccounts__VariantProps,
    internalArgProps: PlasmicSectionConnectedAccounts__ArgProps
  }
);

export default PlasmicSectionConnectedAccounts;
/* prettier-ignore-end */
