// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: _uTya7yxqeE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardConnectedAccount.module.css"; // plasmic-import: _uTya7yxqeE/css
import Icon171Icon from "./icons/PlasmicIcon__Icon171"; // plasmic-import: RfkUw6C5x0/icon
import GooglesvgIcon from "./icons/PlasmicIcon__Googlesvg"; // plasmic-import: XP-psNmhog/icon
import FacebookSquareFillIcon from "./icons/PlasmicIcon__FacebookSquareFill"; // plasmic-import: wOX2gl0oUy/icon
import StripeLogoIcon from "./icons/PlasmicIcon__StripeLogo"; // plasmic-import: 5nOWCV9_g/icon
import PaypalIcon from "./icons/PlasmicIcon__Paypal"; // plasmic-import: 6F_oWsQS7s/icon
import XerosvgIcon from "./icons/PlasmicIcon__Xerosvg"; // plasmic-import: X-HNuuBXHS/icon
import Icons8QuickbookssvgIcon from "./icons/PlasmicIcon__Icons8Quickbookssvg"; // plasmic-import: raCIX8pOF/icon

export const PlasmicCardConnectedAccount__VariantProps = new Array(
  "team",
  "companies"
);

export const PlasmicCardConnectedAccount__ArgProps = new Array(
  "username",
  "userLastName",
  "userFirstname",
  "timestampDate"
);

function PlasmicCardConnectedAccount__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__companies_quickbooks]: hasVariant(
          variants,
          "companies",
          "quickbooks"
        )
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"cardParent"}
        data-plasmic-override={overrides.cardParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.cardParent, {
          [sty.cardParent__companies_facebook]: hasVariant(
            variants,
            "companies",
            "facebook"
          ),

          [sty.cardParent__companies_google]: hasVariant(
            variants,
            "companies",
            "google"
          ),

          [sty.cardParent__companies_paypal]: hasVariant(
            variants,
            "companies",
            "paypal"
          ),

          [sty.cardParent__companies_quickbooks]: hasVariant(
            variants,
            "companies",
            "quickbooks"
          ),

          [sty.cardParent__companies_stripe]: hasVariant(
            variants,
            "companies",
            "stripe"
          ),

          [sty.cardParent__companies_xero]: hasVariant(
            variants,
            "companies",
            "xero"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"iconTextGroup"}
          data-plasmic-override={overrides.iconTextGroup}
          hasGap={true}
          className={classNames(defaultcss.all, sty.iconTextGroup)}
        >
          <IconPrimary
            data-plasmic-name={"iconPrimary"}
            data-plasmic-override={overrides.iconPrimary}
            className={classNames("__wab_instance", sty.iconPrimary, {
              [sty.iconPrimary__companies_facebook]: hasVariant(
                variants,
                "companies",
                "facebook"
              ),

              [sty.iconPrimary__companies_google]: hasVariant(
                variants,
                "companies",
                "google"
              ),

              [sty.iconPrimary__companies_paypal]: hasVariant(
                variants,
                "companies",
                "paypal"
              ),

              [sty.iconPrimary__companies_quickbooks]: hasVariant(
                variants,
                "companies",
                "quickbooks"
              ),

              [sty.iconPrimary__companies_stripe]: hasVariant(
                variants,
                "companies",
                "stripe"
              ),

              [sty.iconPrimary__companies_xero]: hasVariant(
                variants,
                "companies",
                "xero"
              ),

              [sty.iconPrimary__team]: hasVariant(variants, "team", "team")
            })}
            size={
              hasVariant(variants, "companies", "quickbooks")
                ? "_64Px"
                : hasVariant(variants, "companies", "xero")
                ? "_64Px"
                : hasVariant(variants, "companies", "paypal")
                ? "_64Px"
                : hasVariant(variants, "companies", "stripe")
                ? "_64Px"
                : hasVariant(variants, "companies", "facebook")
                ? "_64Px"
                : hasVariant(variants, "companies", "google")
                ? "_64Px"
                : hasVariant(variants, "team", "team")
                ? "_64Px"
                : "_64Px"
            }
            svgIcon32Px={
              <p.PlasmicIcon
                data-plasmic-name={"svgIcon6"}
                data-plasmic-override={overrides.svgIcon6}
                PlasmicIconType={
                  hasVariant(variants, "companies", "quickbooks")
                    ? Icons8QuickbookssvgIcon
                    : hasVariant(variants, "companies", "xero")
                    ? XerosvgIcon
                    : hasVariant(variants, "companies", "paypal")
                    ? PaypalIcon
                    : hasVariant(variants, "companies", "stripe")
                    ? StripeLogoIcon
                    : hasVariant(variants, "companies", "facebook")
                    ? FacebookSquareFillIcon
                    : hasVariant(variants, "companies", "google")
                    ? GooglesvgIcon
                    : Icon171Icon
                }
                className={classNames(defaultcss.all, sty.svgIcon6, {
                  [sty.svgIcon6__companies_facebook]: hasVariant(
                    variants,
                    "companies",
                    "facebook"
                  ),

                  [sty.svgIcon6__companies_google]: hasVariant(
                    variants,
                    "companies",
                    "google"
                  ),

                  [sty.svgIcon6__companies_paypal]: hasVariant(
                    variants,
                    "companies",
                    "paypal"
                  ),

                  [sty.svgIcon6__companies_quickbooks]: hasVariant(
                    variants,
                    "companies",
                    "quickbooks"
                  ),

                  [sty.svgIcon6__companies_stripe]: hasVariant(
                    variants,
                    "companies",
                    "stripe"
                  ),

                  [sty.svgIcon6__companies_xero]: hasVariant(
                    variants,
                    "companies",
                    "xero"
                  ),

                  [sty.svgIcon6__team]: hasVariant(variants, "team", "team")
                })}
                role={"img"}
              />
            }
            svgIcon64Px={
              <p.PlasmicIcon
                data-plasmic-name={"svgIcon8"}
                data-plasmic-override={overrides.svgIcon8}
                PlasmicIconType={
                  hasVariant(variants, "companies", "quickbooks")
                    ? Icons8QuickbookssvgIcon
                    : hasVariant(variants, "companies", "xero")
                    ? XerosvgIcon
                    : hasVariant(variants, "companies", "paypal")
                    ? PaypalIcon
                    : hasVariant(variants, "companies", "stripe")
                    ? StripeLogoIcon
                    : hasVariant(variants, "companies", "facebook")
                    ? FacebookSquareFillIcon
                    : hasVariant(variants, "companies", "google")
                    ? GooglesvgIcon
                    : Icon171Icon
                }
                className={classNames(defaultcss.all, sty.svgIcon8, {
                  [sty.svgIcon8__companies_facebook]: hasVariant(
                    variants,
                    "companies",
                    "facebook"
                  ),

                  [sty.svgIcon8__companies_google]: hasVariant(
                    variants,
                    "companies",
                    "google"
                  ),

                  [sty.svgIcon8__companies_paypal]: hasVariant(
                    variants,
                    "companies",
                    "paypal"
                  ),

                  [sty.svgIcon8__companies_quickbooks]: hasVariant(
                    variants,
                    "companies",
                    "quickbooks"
                  ),

                  [sty.svgIcon8__companies_stripe]: hasVariant(
                    variants,
                    "companies",
                    "stripe"
                  ),

                  [sty.svgIcon8__companies_xero]: hasVariant(
                    variants,
                    "companies",
                    "xero"
                  )
                })}
                role={"img"}
              />
            }
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"accountInfoParent"}
            data-plasmic-override={overrides.accountInfoParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.accountInfoParent, {
              [sty.accountInfoParent__team]: hasVariant(
                variants,
                "team",
                "team"
              )
            })}
          >
            <div className={classNames(defaultcss.all, sty.freeBox___1Hh0)}>
              <div
                data-plasmic-name={"accountName"}
                data-plasmic-override={overrides.accountName}
                className={classNames(defaultcss.all, sty.accountName)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox___5QGGx,
                    {
                      [sty.freeBox__companies_facebook___5QGGx2DCs6]:
                        hasVariant(variants, "companies", "facebook"),
                      [sty.freeBox__companies_google___5QGGxz16Ry]: hasVariant(
                        variants,
                        "companies",
                        "google"
                      ),

                      [sty.freeBox__companies_paypal___5QGGx8RDJh]: hasVariant(
                        variants,
                        "companies",
                        "paypal"
                      ),

                      [sty.freeBox__companies_quickbooks___5QGGx60NOj]:
                        hasVariant(variants, "companies", "quickbooks"),
                      [sty.freeBox__companies_stripe___5QGGxpK9]: hasVariant(
                        variants,
                        "companies",
                        "stripe"
                      ),

                      [sty.freeBox__companies_xero___5QGGx8XgX]: hasVariant(
                        variants,
                        "companies",
                        "xero"
                      )
                    }
                  )}
                >
                  {hasVariant(variants, "companies", "quickbooks")
                    ? "Quickbooks"
                    : hasVariant(variants, "companies", "xero")
                    ? "Xero"
                    : hasVariant(variants, "companies", "paypal")
                    ? "Paypal"
                    : hasVariant(variants, "companies", "stripe")
                    ? "Stripe"
                    : hasVariant(variants, "companies", "facebook")
                    ? "Facebook"
                    : hasVariant(variants, "companies", "google")
                    ? "Google"
                    : "Connected Account Name"}
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"usernameGroupParent"}
              data-plasmic-override={overrides.usernameGroupParent}
              hasGap={true}
              className={classNames(defaultcss.all, sty.usernameGroupParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: hasVariant(variants, "team", "team")
                  ? "companyName"
                  : "userFirstName",
                value: args.userFirstname,
                className: classNames(sty.slotUserFirstname, {
                  [sty.slotUserFirstname__team]: hasVariant(
                    variants,
                    "team",
                    "team"
                  )
                })
              })}

              {(hasVariant(variants, "team", "team") ? false : true)
                ? p.renderPlasmicSlot({
                    defaultContents: "userLastName",
                    value: args.userLastName,
                    className: classNames(sty.slotUserLastName, {
                      [sty.slotUserLastName__team]: hasVariant(
                        variants,
                        "team",
                        "team"
                      )
                    })
                  })
                : null}
            </p.Stack>

            {p.renderPlasmicSlot({
              defaultContents: "username",
              value: args.username,
              className: classNames(sty.slotUsername)
            })}
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"connectedTimestampParent"}
          data-plasmic-override={overrides.connectedTimestampParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.connectedTimestampParent)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"connectedTimestamp"}
            data-plasmic-override={overrides.connectedTimestamp}
            hasGap={true}
            className={classNames(defaultcss.all, sty.connectedTimestamp)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__tZkwH
              )}
            >
              {"Connected"}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "Timestamp",
              value: args.timestampDate,
              className: classNames(sty.slotTimestampDate)
            })}
          </p.Stack>

          <ButtonCircleDelete
            data-plasmic-name={"buttonCircleDelete"}
            data-plasmic-override={overrides.buttonCircleDelete}
            className={classNames("__wab_instance", sty.buttonCircleDelete, {
              [sty.buttonCircleDelete__companies_google]: hasVariant(
                variants,
                "companies",
                "google"
              )
            })}
            size={"_18Px"}
          />
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "cardParent",
    "iconTextGroup",
    "iconPrimary",
    "svgIcon6",
    "svgIcon8",
    "accountInfoParent",
    "accountName",
    "usernameGroupParent",
    "connectedTimestampParent",
    "connectedTimestamp",
    "buttonCircleDelete"
  ],

  cardParent: [
    "cardParent",
    "iconTextGroup",
    "iconPrimary",
    "svgIcon6",
    "svgIcon8",
    "accountInfoParent",
    "accountName",
    "usernameGroupParent",
    "connectedTimestampParent",
    "connectedTimestamp",
    "buttonCircleDelete"
  ],

  iconTextGroup: [
    "iconTextGroup",
    "iconPrimary",
    "svgIcon6",
    "svgIcon8",
    "accountInfoParent",
    "accountName",
    "usernameGroupParent"
  ],

  iconPrimary: ["iconPrimary", "svgIcon6", "svgIcon8"],
  svgIcon6: ["svgIcon6"],
  svgIcon8: ["svgIcon8"],
  accountInfoParent: [
    "accountInfoParent",
    "accountName",
    "usernameGroupParent"
  ],

  accountName: ["accountName"],
  usernameGroupParent: ["usernameGroupParent"],
  connectedTimestampParent: [
    "connectedTimestampParent",
    "connectedTimestamp",
    "buttonCircleDelete"
  ],

  connectedTimestamp: ["connectedTimestamp"],
  buttonCircleDelete: ["buttonCircleDelete"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardConnectedAccount__ArgProps,
      internalVariantPropNames: PlasmicCardConnectedAccount__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardConnectedAccount__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicCardConnectedAccount";
  } else {
    func.displayName = `PlasmicCardConnectedAccount.${nodeName}`;
  }
  return func;
}

export const PlasmicCardConnectedAccount = Object.assign(
  // Top-level PlasmicCardConnectedAccount renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    cardParent: makeNodeComponent("cardParent"),
    iconTextGroup: makeNodeComponent("iconTextGroup"),
    iconPrimary: makeNodeComponent("iconPrimary"),
    svgIcon6: makeNodeComponent("svgIcon6"),
    svgIcon8: makeNodeComponent("svgIcon8"),
    accountInfoParent: makeNodeComponent("accountInfoParent"),
    accountName: makeNodeComponent("accountName"),
    usernameGroupParent: makeNodeComponent("usernameGroupParent"),
    connectedTimestampParent: makeNodeComponent("connectedTimestampParent"),
    connectedTimestamp: makeNodeComponent("connectedTimestamp"),
    buttonCircleDelete: makeNodeComponent("buttonCircleDelete"),
    // Metadata about props expected for PlasmicCardConnectedAccount
    internalVariantProps: PlasmicCardConnectedAccount__VariantProps,
    internalArgProps: PlasmicCardConnectedAccount__ArgProps
  }
);

export default PlasmicCardConnectedAccount;
/* prettier-ignore-end */