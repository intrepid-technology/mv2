// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0VvviIW4t16
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
import TagPartnerA from "../../TagPartnerA"; // plasmic-import: EdiwiVT346/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: d7dGAYuRCt/component
import TableMembershipHeader from "../../TableMembershipHeader"; // plasmic-import: T4YXTQYWhk/component
import TableMembershipRecord from "../../TableMembershipRecord"; // plasmic-import: KowVnZaBQEh/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import TableBillingHeader from "../../TableBillingHeader"; // plasmic-import: gGzFXlkqWv/component
import TableBillingRecord from "../../TableBillingRecord"; // plasmic-import: wWlyRBkfY1r/component
import FooterB from "../../FooterB"; // plasmic-import: kxeO2gTzwxU/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditteammembership.module.css"; // plasmic-import: 0VvviIW4t16/css

export const PlasmicEditteammembership__VariantProps = new Array();

export const PlasmicEditteammembership__ArgProps = new Array();

function PlasmicEditteammembership__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head></Head>

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
            projectcss.root_reset,
            sty.root
          )}
        >
          <NavbarMemberEdit
            data-plasmic-name={"navbarMemberEdit"}
            data-plasmic-override={overrides.navbarMemberEdit}
            className={classNames("__wab_instance", sty.navbarMemberEdit)}
            navItems={[
              "wallet",
              "lists",
              "reviews",
              "messages",
              "notifications"
            ]}
            selected={"membership"}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamMembershipStatus"}
            data-plasmic-override={overrides.sectionTeamMembershipStatus}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamMembershipStatus
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
                    defaultcss.__wab_text,
                    sty.text___59Yow
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
              className={classNames(defaultcss.all, sty.freeBox__z0MCe)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__hQujY
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__vjDmR
                    )}
                  >
                    {"Your team membership plan details"}
                  </div>
                }
              >
                {"Membership"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__w0Nfq)}
              >
                <div className={classNames(defaultcss.all, sty.freeBox__erGt7)}>
                  <TagPartnerA
                    data-plasmic-name={"tagPartnerA"}
                    data-plasmic-override={overrides.tagPartnerA}
                    className={classNames("__wab_instance", sty.tagPartnerA)}
                    inset={"inset"}
                  />
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__tiDRl
                  )}
                >
                  {
                    "Invite collaborators and team members to get the most from the Intrepid community."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__dsxJe)}
              >
                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary__gz4S5
                  )}
                  height={"_40"}
                  text={"Upgrade team"}
                  type={"fill"}
                  width={"_120"}
                />

                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary__bWeX
                  )}
                  height={"_40"}
                  text={"Invite members"}
                  type={"outline"}
                  width={"_120"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamMembershipPlan"}
            data-plasmic-override={overrides.sectionTeamMembershipPlan}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamMembershipPlan
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__lYwlJ)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__lj3Cl
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__sper2
                    )}
                  >
                    {
                      "Upgrade or cancel your exiting plan. Add new members to your account."
                    }
                  </div>
                }
              >
                {"Plan"}
              </CardHeaderTitlePrimary>

              <div className={classNames(defaultcss.all, sty.freeBox__bCkXy)}>
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

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__pCgaO)}
              >
                <ButtonPrimary>{"Upgrade"}</ButtonPrimary>

                <ButtonPrimary type={"link"}>{"Cancel plan"}</ButtonPrimary>
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamPaymentMethods"}
            data-plasmic-override={overrides.sectionTeamPaymentMethods}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamPaymentMethods
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___0I7Eb)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__yFiMv
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__ybh2C
                    )}
                  >
                    {
                      "Change by adding a new card. Add up to three credit cards, debit cards or prepaid cards to your account."
                    }
                  </div>
                }
              >
                {"Payment methods"}
              </CardHeaderTitlePrimary>

              <div className={classNames(defaultcss.all, sty.freeBox__k0ELd)}>
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
                  sty.buttonPrimary__gHcZ
                )}
              >
                {"Add new card"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>

          <FooterB
            data-plasmic-name={"footerB"}
            data-plasmic-override={overrides.footerB}
            className={classNames("__wab_instance", sty.footerB)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarMemberEdit",
    "sectionTeamMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagPartnerA",
    "sectionTeamMembershipPlan",
    "tableMembershipHeader",
    "tableMembershipRecord",
    "sectionTeamPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord",
    "footerB"
  ],

  navbarMemberEdit: ["navbarMemberEdit"],
  sectionTeamMembershipStatus: [
    "sectionTeamMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagPartnerA"
  ],

  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  tagPartnerA: ["tagPartnerA"],
  sectionTeamMembershipPlan: [
    "sectionTeamMembershipPlan",
    "tableMembershipHeader",
    "tableMembershipRecord"
  ],

  tableMembershipHeader: ["tableMembershipHeader"],
  tableMembershipRecord: ["tableMembershipRecord"],
  sectionTeamPaymentMethods: [
    "sectionTeamPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord"
  ],

  tableBillingHeader: ["tableBillingHeader"],
  tableBillingRecord: ["tableBillingRecord"],
  footerB: ["footerB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditteammembership__ArgProps,
      internalVariantPropNames: PlasmicEditteammembership__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEditteammembership__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditteammembership";
  } else {
    func.displayName = `PlasmicEditteammembership.${nodeName}`;
  }
  return func;
}

export const PlasmicEditteammembership = Object.assign(
  // Top-level PlasmicEditteammembership renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarMemberEdit: makeNodeComponent("navbarMemberEdit"),
    sectionTeamMembershipStatus: makeNodeComponent(
      "sectionTeamMembershipStatus"
    ),

    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    tagPartnerA: makeNodeComponent("tagPartnerA"),
    sectionTeamMembershipPlan: makeNodeComponent("sectionTeamMembershipPlan"),
    tableMembershipHeader: makeNodeComponent("tableMembershipHeader"),
    tableMembershipRecord: makeNodeComponent("tableMembershipRecord"),
    sectionTeamPaymentMethods: makeNodeComponent("sectionTeamPaymentMethods"),
    tableBillingHeader: makeNodeComponent("tableBillingHeader"),
    tableBillingRecord: makeNodeComponent("tableBillingRecord"),
    footerB: makeNodeComponent("footerB"),
    // Metadata about props expected for PlasmicEditteammembership
    internalVariantProps: PlasmicEditteammembership__VariantProps,
    internalArgProps: PlasmicEditteammembership__ArgProps
  }
);

export default PlasmicEditteammembership;
/* prettier-ignore-end */
