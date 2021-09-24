// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: gKd8t6dFgYd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonConnectedAccount from "../../ButtonConnectedAccount"; // plasmic-import: 9kU3iljaXN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputFormCardWebhookConnections.module.css"; // plasmic-import: gKd8t6dFgYd/css

export const PlasmicInputFormCardWebhookConnections__VariantProps = new Array(
  "payment",
  "accounting",
  "border",
  "subheadDescription"
);

export const PlasmicInputFormCardWebhookConnections__ArgProps = new Array(
  "children",
  "slot",
  "description"
);

function PlasmicInputFormCardWebhookConnections__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__border]: hasVariant(variants, "border", "border")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"headlineParent"}
          data-plasmic-override={overrides.headlineParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.headlineParent, {
            [sty.headlineParent__subheadDescription]: hasVariant(
              variants,
              "subheadDescription",
              "subheadDescription"
            )
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headlineSubheadParent"}
            data-plasmic-override={overrides.headlineSubheadParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.headlineSubheadParent)}
          >
            <div
              data-plasmic-name={"headline"}
              data-plasmic-override={overrides.headline}
              className={classNames(defaultcss.all, sty.headline)}
            >
              {p.renderPlasmicSlot({
                defaultContents: hasVariant(
                  variants,
                  "accounting",
                  "accounting"
                )
                  ? "Accounting Connections"
                  : hasVariant(variants, "payment", "payment")
                  ? "Payout Connections"
                  : "Login Connections",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildren__accounting]: hasVariant(
                    variants,
                    "accounting",
                    "accounting"
                  ),

                  [sty.slotTargetChildren__payment]: hasVariant(
                    variants,
                    "payment",
                    "payment"
                  )
                })
              })}
            </div>

            <div
              data-plasmic-name={"subhead"}
              data-plasmic-override={overrides.subhead}
              className={classNames(defaultcss.all, sty.subhead)}
            >
              {p.renderPlasmicSlot({
                defaultContents: hasVariant(
                  variants,
                  "accounting",
                  "accounting"
                )
                  ? "Connect your accounting systems to log financing benefits."
                  : "Connect your social accounts to log in to Intrepid.",
                value: args.slot,
                className: classNames(sty.slotTargetSlot, {
                  [sty.slotTargetSlot__accounting]: hasVariant(
                    variants,
                    "accounting",
                    "accounting"
                  ),

                  [sty.slotTargetSlot__payment]: hasVariant(
                    variants,
                    "payment",
                    "payment"
                  )
                })
              })}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"buttons"}
            data-plasmic-override={overrides.buttons}
            hasGap={true}
            className={classNames(defaultcss.all, sty.buttons)}
          >
            <ButtonConnectedAccount
              className={classNames(
                "__wab_instance",
                sty.buttonConnectedAccount__sGzGb,
                {
                  [sty.buttonConnectedAccount__accounting__sGzGbCaLxc]:
                    hasVariant(variants, "accounting", "accounting"),
                  [sty.buttonConnectedAccount__payment__sGzGbpUEih]: hasVariant(
                    variants,
                    "payment",
                    "payment"
                  ),

                  [sty.buttonConnectedAccount__subheadDescription__sGzGbx1Lmn]:
                    hasVariant(
                      variants,
                      "subheadDescription",
                      "subheadDescription"
                    )
                }
              )}
              company={
                hasVariant(variants, "accounting", "accounting")
                  ? "xero"
                  : hasVariant(variants, "payment", "payment")
                  ? "stripe"
                  : "google"
              }
              width={"_160"}
            />

            <ButtonConnectedAccount
              className={classNames(
                "__wab_instance",
                sty.buttonConnectedAccount__bwqDb,
                {
                  [sty.buttonConnectedAccount__accounting__bwqDbCaLxc]:
                    hasVariant(variants, "accounting", "accounting"),
                  [sty.buttonConnectedAccount__payment__bwqDbpUEih]: hasVariant(
                    variants,
                    "payment",
                    "payment"
                  )
                }
              )}
              company={
                hasVariant(variants, "accounting", "accounting")
                  ? "quickbooks"
                  : hasVariant(variants, "payment", "payment")
                  ? "paypal"
                  : "facebook"
              }
              width={"_160"}
            />
          </p.Stack>
        </p.Stack>

        <div
          data-plasmic-name={"descriptionParent"}
          data-plasmic-override={overrides.descriptionParent}
          className={classNames(defaultcss.all, sty.descriptionParent, {
            [sty.descriptionParent__subheadDescription]: hasVariant(
              variants,
              "subheadDescription",
              "subheadDescription"
            )
          })}
        >
          <div
            data-plasmic-name={"description"}
            data-plasmic-override={overrides.description}
            className={classNames(defaultcss.all, sty.description, {
              [sty.description__accounting]: hasVariant(
                variants,
                "accounting",
                "accounting"
              ),

              [sty.description__payment]: hasVariant(
                variants,
                "payment",
                "payment"
              )
            })}
          >
            <div
              data-plasmic-name={"descriptionTextParent"}
              data-plasmic-override={overrides.descriptionTextParent}
              className={classNames(defaultcss.all, sty.descriptionTextParent, {
                [sty.descriptionTextParent__accounting]: hasVariant(
                  variants,
                  "accounting",
                  "accounting"
                ),

                [sty.descriptionTextParent__payment]: hasVariant(
                  variants,
                  "payment",
                  "payment"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "One login connection can be added per third-party service.",
                value: args.description,
                className: classNames(sty.slotTargetDescription, {
                  [sty.slotTargetDescription__accounting]: hasVariant(
                    variants,
                    "accounting",
                    "accounting"
                  ),

                  [sty.slotTargetDescription__payment]: hasVariant(
                    variants,
                    "payment",
                    "payment"
                  )
                })
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "headlineParent",
    "headlineSubheadParent",
    "headline",
    "subhead",
    "buttons",
    "descriptionParent",
    "description",
    "descriptionTextParent"
  ],

  parent: [
    "parent",
    "headlineParent",
    "headlineSubheadParent",
    "headline",
    "subhead",
    "buttons",
    "descriptionParent",
    "description",
    "descriptionTextParent"
  ],

  headlineParent: [
    "headlineParent",
    "headlineSubheadParent",
    "headline",
    "subhead",
    "buttons"
  ],

  headlineSubheadParent: ["headlineSubheadParent", "headline", "subhead"],
  headline: ["headline"],
  subhead: ["subhead"],
  buttons: ["buttons"],
  descriptionParent: [
    "descriptionParent",
    "description",
    "descriptionTextParent"
  ],

  description: ["description", "descriptionTextParent"],
  descriptionTextParent: ["descriptionTextParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputFormCardWebhookConnections__ArgProps,
      internalVariantPropNames:
        PlasmicInputFormCardWebhookConnections__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputFormCardWebhookConnections__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputFormCardWebhookConnections";
  } else {
    func.displayName = `PlasmicInputFormCardWebhookConnections.${nodeName}`;
  }
  return func;
}

export const PlasmicInputFormCardWebhookConnections = Object.assign(
  // Top-level PlasmicInputFormCardWebhookConnections renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineParent: makeNodeComponent("headlineParent"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headline: makeNodeComponent("headline"),
    subhead: makeNodeComponent("subhead"),
    buttons: makeNodeComponent("buttons"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    description: makeNodeComponent("description"),
    descriptionTextParent: makeNodeComponent("descriptionTextParent"),
    // Metadata about props expected for PlasmicInputFormCardWebhookConnections
    internalVariantProps: PlasmicInputFormCardWebhookConnections__VariantProps,
    internalArgProps: PlasmicInputFormCardWebhookConnections__ArgProps
  }
);

export default PlasmicInputFormCardWebhookConnections;
/* prettier-ignore-end */
