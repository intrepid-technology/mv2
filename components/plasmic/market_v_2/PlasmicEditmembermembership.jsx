// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: d9HBto5p0Hf
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarMemberEdit from "../../NavbarMemberEdit"; // plasmic-import: oTyBGj7jMRD/component
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import CardHeaderTitlePrimary from "../../CardHeaderTitlePrimary"; // plasmic-import: hIka2k2fkY/component
import TagMemberD from "../../TagMemberD"; // plasmic-import: Ixqb_1Xdrz/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: d7dGAYuRCt/component
import TableBillingHeader from "../../TableBillingHeader"; // plasmic-import: gGzFXlkqWv/component
import TableBillingRecord from "../../TableBillingRecord"; // plasmic-import: wWlyRBkfY1r/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import TableMembershipHeader from "../../TableMembershipHeader"; // plasmic-import: T4YXTQYWhk/component
import TableMembershipRecord from "../../TableMembershipRecord"; // plasmic-import: KowVnZaBQEh/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditmembermembership.module.css"; // plasmic-import: d9HBto5p0Hf/css

export const PlasmicEditmembermembership__VariantProps = new Array();

export const PlasmicEditmembermembership__ArgProps = new Array();

function PlasmicEditmembermembership__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
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
          <NavbarMemberEdit
            data-plasmic-name={"navbarMemberEdit"}
            data-plasmic-override={overrides.navbarMemberEdit}
            className={classNames("__wab_instance", sty.navbarMemberEdit)}
            navItems={[
              "notifications",
              "messages",
              "reviews",
              "lists",
              "wallet"
            ]}
            selected={"membership"}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberMembershipStatus"}
            data-plasmic-override={overrides.sectionMemberMembershipStatus}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.sectionMemberMembershipStatus
            )}
          >
            <CardHeaderTitleDisplay
              data-plasmic-name={"cardHeaderTitleDisplay"}
              data-plasmic-override={overrides.cardHeaderTitleDisplay}
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay
              )}
              size={"_720"}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__hgKv2
                  )}
                >
                  {"Plan & perks"}
                </div>
              }
              textDisplay={"Membership"}
              textSubhead={"Maintain a safe and secure community experience  "}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___270NR
              )}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary___9HoOp
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text___9RndH
                    )}
                  >
                    {"Your personal account membership plan details"}
                  </div>
                }
              >
                {"Membership"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__xZ1Ml
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox___9Ncec
                  )}
                >
                  <TagMemberD
                    data-plasmic-name={"tagMemberD"}
                    data-plasmic-override={overrides.tagMemberD}
                    className={classNames("__wab_instance", sty.tagMemberD)}
                  />
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__b8WcN
                  )}
                >
                  {
                    "Our Creator and Maker member accounts are free forever. To get the most from the Intrepid community, for professional purposes, or to work with a team, get started by creating a company or contacting sales."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__jfV1S
                )}
              >
                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary__wiBkv
                  )}
                  height={"_36"}
                  text={"Create a team"}
                  type={"fill"}
                  width={"_140"}
                />

                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary___1REie
                  )}
                  height={"_36"}
                  text={"Upgrade account"}
                  type={"outline"}
                  width={"_140"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberPaymentMethods"}
            data-plasmic-override={overrides.sectionMemberPaymentMethods}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.sectionMemberPaymentMethods
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__hByDk
              )}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary___4Zopx
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__ikHur
                    )}
                  >
                    {
                      "Add up to three credit cards, debit cards or prepaid cards (MAX) to your account."
                    }
                  </div>
                }
              >
                {"Payment methods"}
              </CardHeaderTitlePrimary>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__mAd0
                )}
              >
                <TableBillingHeader
                  data-plasmic-name={"tableBillingHeader"}
                  data-plasmic-override={overrides.tableBillingHeader}
                  className={classNames(
                    "__wab_instance",
                    sty.tableBillingHeader
                  )}
                />

                <TableBillingRecord
                  data-plasmic-name={"tableBillingRecord"}
                  data-plasmic-override={overrides.tableBillingRecord}
                  className={classNames(
                    "__wab_instance",
                    sty.tableBillingRecord
                  )}
                />
              </div>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__rKxWz
                )}
                size={"_140"}
              >
                {"Add new card"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberPaymentHistory"}
            data-plasmic-override={overrides.sectionMemberPaymentHistory}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.sectionMemberPaymentHistory
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___5Ypvv
              )}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__slOUd
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text___39KjA
                    )}
                  >
                    {
                      "Add up to three credit cards, debit cards or prepaid cards (MAX) to your account."
                    }
                  </div>
                }
              >
                {"Payment history"}
              </CardHeaderTitlePrimary>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__fL0L0
                )}
              >
                <TableMembershipHeader
                  data-plasmic-name={"tableMembershipHeader"}
                  data-plasmic-override={overrides.tableMembershipHeader}
                  className={classNames(
                    "__wab_instance",
                    sty.tableMembershipHeader
                  )}
                />

                <TableMembershipRecord
                  data-plasmic-name={"tableMembershipRecord"}
                  data-plasmic-override={overrides.tableMembershipRecord}
                  className={classNames(
                    "__wab_instance",
                    sty.tableMembershipRecord
                  )}
                />
              </div>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__ktJmy
                )}
                size={"_140"}
              >
                {"Upgrade"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarMemberEdit",
    "sectionMemberMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagMemberD",
    "sectionMemberPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord",
    "sectionMemberPaymentHistory",
    "tableMembershipHeader",
    "tableMembershipRecord"
  ],

  navbarMemberEdit: ["navbarMemberEdit"],
  sectionMemberMembershipStatus: [
    "sectionMemberMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagMemberD"
  ],

  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  tagMemberD: ["tagMemberD"],
  sectionMemberPaymentMethods: [
    "sectionMemberPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord"
  ],

  tableBillingHeader: ["tableBillingHeader"],
  tableBillingRecord: ["tableBillingRecord"],
  sectionMemberPaymentHistory: [
    "sectionMemberPaymentHistory",
    "tableMembershipHeader",
    "tableMembershipRecord"
  ],

  tableMembershipHeader: ["tableMembershipHeader"],
  tableMembershipRecord: ["tableMembershipRecord"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditmembermembership__ArgProps,
      internalVariantPropNames: PlasmicEditmembermembership__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEditmembermembership__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditmembermembership";
  } else {
    func.displayName = `PlasmicEditmembermembership.${nodeName}`;
  }
  return func;
}

export const PlasmicEditmembermembership = Object.assign(
  // Top-level PlasmicEditmembermembership renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarMemberEdit: makeNodeComponent("navbarMemberEdit"),
    sectionMemberMembershipStatus: makeNodeComponent(
      "sectionMemberMembershipStatus"
    ),

    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    tagMemberD: makeNodeComponent("tagMemberD"),
    sectionMemberPaymentMethods: makeNodeComponent(
      "sectionMemberPaymentMethods"
    ),

    tableBillingHeader: makeNodeComponent("tableBillingHeader"),
    tableBillingRecord: makeNodeComponent("tableBillingRecord"),
    sectionMemberPaymentHistory: makeNodeComponent(
      "sectionMemberPaymentHistory"
    ),

    tableMembershipHeader: makeNodeComponent("tableMembershipHeader"),
    tableMembershipRecord: makeNodeComponent("tableMembershipRecord"),
    // Metadata about props expected for PlasmicEditmembermembership
    internalVariantProps: PlasmicEditmembermembership__VariantProps,
    internalArgProps: PlasmicEditmembermembership__ArgProps
  }
);

export default PlasmicEditmembermembership;
/* prettier-ignore-end */
