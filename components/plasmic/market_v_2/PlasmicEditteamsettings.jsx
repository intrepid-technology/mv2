// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: QudhNCOa_Ua
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarInternal from "../../NavbarInternal"; // plasmic-import: BXWgCr5-vns/component
import NavbarMemberEdit from "../../NavbarMemberEdit"; // plasmic-import: oTyBGj7jMRD/component
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import CardHeaderTitlePrimary from "../../CardHeaderTitlePrimary"; // plasmic-import: hIka2k2fkY/component
import InputTextField from "../../InputTextField"; // plasmic-import: ATs3nXJ-Tjc/component
import InputTextForm from "../../InputTextForm"; // plasmic-import: Hp_zc6XLro/component
import SelectGroupDropdownPrimary from "../../SelectGroupDropdownPrimary"; // plasmic-import: -teiDn_7Z-/component
import ButtonGroupStripeConnect from "../../ButtonGroupStripeConnect"; // plasmic-import: d5Rau78kDe/component
import CardSocialConnectSwitch from "../../CardSocialConnectSwitch"; // plasmic-import: PjlQKkmde-/component
import InputTextPrefixSuffix from "../../InputTextPrefixSuffix"; // plasmic-import: 8Sse2xZ7od/component
import SwitchTextGroupPrimary from "../../SwitchTextGroupPrimary"; // plasmic-import: dxvh7jp8PC/component
import CheckboxTextPrimary from "../../CheckboxTextPrimary"; // plasmic-import: DzJ8mMkLUy2/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import FooterB from "../../FooterB"; // plasmic-import: kxeO2gTzwxU/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditteamsettings.module.css"; // plasmic-import: QudhNCOa_Ua/css

export const PlasmicEditteamsettings__VariantProps = new Array();

export const PlasmicEditteamsettings__ArgProps = new Array();

function PlasmicEditteamsettings__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
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
            projectcss.root_reset,
            sty.root
          )}
        >
          <NavbarInternal
            data-plasmic-name={"navbarInternal"}
            data-plasmic-override={overrides.navbarInternal}
            className={classNames("__wab_instance", sty.navbarInternal)}
          />

          <NavbarMemberEdit
            data-plasmic-name={"navbarMemberEdit"}
            data-plasmic-override={overrides.navbarMemberEdit}
            className={classNames("__wab_instance", sty.navbarMemberEdit)}
            navItems={[
              "notifications",
              "wallet",
              "lists",
              "reviews",
              "messages"
            ]}
            selected={"settings"}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsStripeConnect"}
            data-plasmic-override={overrides.sectionTeamSettingsStripeConnect}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamSettingsStripeConnect
            )}
          >
            <CardHeaderTitleDisplay
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay__d6NR
              )}
              size={"_720"}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__lyarm
                  )}
                >
                  {"Manage team account"}
                </div>
              }
              textDisplay={"Settings"}
              textSubhead={"Maintain a safe and secure community experience  "}
            />

            <p.Stack
              as={"form"}
              data-plasmic-name={"formTeamEditBusinessVerification"}
              data-plasmic-override={overrides.formTeamEditBusinessVerification}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                sty.formTeamEditBusinessVerification
              )}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"cardTeamLegalBusinessGroup"}
                data-plasmic-override={overrides.cardTeamLegalBusinessGroup}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.cardTeamLegalBusinessGroup
                )}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__lzBve
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__fvhx6
                      )}
                    >
                      {
                        "Enter the legal or registered name of your your team or business to verify your account - This will not show up on your profile"
                      }
                    </div>
                  }
                >
                  {"Legal business name"}
                </CardHeaderTitlePrimary>

                <InputTextField
                  data-plasmic-name={"inputTextField"}
                  data-plasmic-override={overrides.inputTextField}
                  className={classNames("__wab_instance", sty.inputTextField)}
                  size={"_540"}
                  type={"secondary"}
                />

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"cardTeamRegisteredAddress"}
                  data-plasmic-override={overrides.cardTeamRegisteredAddress}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.cardTeamRegisteredAddress
                  )}
                >
                  <CardHeaderTitlePrimary
                    className={classNames(
                      "__wab_instance",
                      sty.cardHeaderTitlePrimary___13RQo
                    )}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__tl2Nk
                        )}
                      >
                        {
                          "Speed up the verification process and unlock customised financial services for your team."
                        }
                      </div>
                    }
                  >
                    {"Registered address"}
                  </CardHeaderTitlePrimary>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"teamAddressGroup"}
                    data-plasmic-override={overrides.teamAddressGroup}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.teamAddressGroup)}
                  >
                    <InputTextForm
                      labelHeadline={"Address"}
                      subhead={"subhead"}
                      type={"primary"}
                      width={"_540"}
                    />

                    <InputTextForm
                      label={"label"}
                      labelHeadline={"Number"}
                      subhead={"subhead"}
                      type={"primary"}
                      width={"_540"}
                    />

                    <SelectGroupDropdownPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.selectGroupDropdownPrimary__pgtEa
                      )}
                      description={"description"}
                      width={"_360"}
                    >
                      {"Country"}
                    </SelectGroupDropdownPrimary>

                    <InputTextForm
                      className={classNames(
                        "__wab_instance",
                        sty.inputTextForm___52C8X
                      )}
                      labelHeadline={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__gnVjA
                          )}
                        >
                          {"City"}
                        </div>
                      }
                      subhead={"subhead"}
                      type={"primary"}
                      width={"_360"}
                    />

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"teamStateZipGroup"}
                      data-plasmic-override={overrides.teamStateZipGroup}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.teamStateZipGroup
                      )}
                    >
                      <InputTextForm
                        labelHeadline={"Province/State"}
                        subhead={"subhead"}
                        type={"primary"}
                        width={"_160"}
                      />

                      <InputTextForm
                        labelHeadline={
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box__fo0Jj
                            )}
                          >
                            {"Zip/Postal code"}
                          </div>
                        }
                        subhead={"subhead"}
                        type={"primary"}
                        width={"_160"}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"cardTeamTaxId"}
                  data-plasmic-override={overrides.cardTeamTaxId}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.cardTeamTaxId)}
                >
                  <CardHeaderTitlePrimary
                    className={classNames(
                      "__wab_instance",
                      sty.cardHeaderTitlePrimary__mAaAf
                    )}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__s0VQ5
                        )}
                      >
                        {
                          "Let us automatically handle your taxes. Countries that do not use Tax IDs are not listed"
                        }
                      </div>
                    }
                  >
                    {"Tax ID"}
                  </CardHeaderTitlePrimary>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"teamTaxIdGroup"}
                    data-plasmic-override={overrides.teamTaxIdGroup}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.teamTaxIdGroup)}
                  >
                    <SelectGroupDropdownPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.selectGroupDropdownPrimary__fjl7S
                      )}
                      description={"description"}
                      width={"_144"}
                    >
                      {"Country"}
                    </SelectGroupDropdownPrimary>

                    <InputTextForm
                      className={classNames(
                        "__wab_instance",
                        sty.inputTextForm__t8F7M
                      )}
                      labelHeadline={"Number"}
                      subhead={"subhead"}
                      type={"primary"}
                      width={"_360"}
                    />
                  </p.Stack>
                </p.Stack>
              </p.Stack>

              <ButtonGroupStripeConnect
                data-plasmic-name={"buttonGroupStripeConnect"}
                data-plasmic-override={overrides.buttonGroupStripeConnect}
                className={classNames(
                  "__wab_instance",
                  sty.buttonGroupStripeConnect
                )}
              />
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsAccountingConnect"}
            data-plasmic-override={
              overrides.sectionTeamSettingsAccountingConnect
            }
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamSettingsAccountingConnect
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"cardTeamAccountingConnections"}
              data-plasmic-override={overrides.cardTeamAccountingConnections}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                sty.cardTeamAccountingConnections
              )}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__nAMj
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__sHo1Q
                    )}
                  >
                    {
                      "Connect your accounting software to receive added financial services"
                    }
                  </div>
                }
              >
                {"Accounting connections"}
              </CardHeaderTitlePrimary>

              <div
                data-plasmic-name={"inputGroupTeamAccountingConnections"}
                data-plasmic-override={
                  overrides.inputGroupTeamAccountingConnections
                }
                className={classNames(
                  defaultcss.all,
                  sty.inputGroupTeamAccountingConnections
                )}
              >
                <CardSocialConnectSwitch
                  accounting={"xero"}
                  className={classNames(
                    "__wab_instance",
                    sty.cardSocialConnectSwitch___63TS
                  )}
                  width={"_540"}
                />

                <CardSocialConnectSwitch
                  accounting={"quickbooks"}
                  className={classNames(
                    "__wab_instance",
                    sty.cardSocialConnectSwitch__b9VAq
                  )}
                  width={"_540"}
                />
              </div>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsAnalyticsConnect"}
            data-plasmic-override={
              overrides.sectionTeamSettingsAnalyticsConnect
            }
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamSettingsAnalyticsConnect
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"cardTeamAnalytics"}
              data-plasmic-override={overrides.cardTeamAnalytics}
              hasGap={true}
              className={classNames(defaultcss.all, sty.cardTeamAnalytics)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__pzjIj
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__oxyo4
                    )}
                  >
                    {"Send page visitor data to your Google Analytics account."}
                  </div>
                }
              >
                {"Analytics"}
              </CardHeaderTitlePrimary>

              <InputTextPrefixSuffix
                data-plasmic-name={"inputTextPrefixSuffix"}
                data-plasmic-override={overrides.inputTextPrefixSuffix}
                className={classNames(
                  "__wab_instance",
                  sty.inputTextPrefixSuffix
                )}
                prefixLabelHeadline={"UA"}
                suffix={"suffix"}
                type={"primary"}
                width={"_360"}
              />
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionTeamNotifications"}
            data-plasmic-override={overrides.sectionTeamNotifications}
            hasGap={true}
            className={classNames(defaultcss.all, sty.sectionTeamNotifications)}
          >
            <CardHeaderTitleDisplay
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay__qvdyY
              )}
              headings={["title"]}
              size={"_720"}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___9AuTo
                  )}
                >
                  {"Notifications"}
                </div>
              }
              textDisplay={"Profile edit"}
              textSubhead={"Get notified about activity on Intrepid"}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"notificationPushEmail"}
              data-plasmic-override={overrides.notificationPushEmail}
              hasGap={true}
              className={classNames(defaultcss.all, sty.notificationPushEmail)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__y77Es
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__whFsE
                    )}
                  >
                    {"Updates when you're away from the community."}
                  </div>
                }
              >
                {"Speak easy"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__hT3J)}
              >
                <SwitchTextGroupPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.switchTextGroupPrimary__tjMmC
                  )}
                  descriptionText={
                    "What's going on in the community - sent to your mobile"
                  }
                  textGroup={"Push notifications"}
                />

                <SwitchTextGroupPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.switchTextGroupPrimary__kmLZv
                  )}
                  descriptionText={
                    "What's going on in the community - sent to your inbox"
                  }
                  textGroup={"Email notifications"}
                />
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"notificationActivity"}
              data-plasmic-override={overrides.notificationActivity}
              hasGap={true}
              className={classNames(defaultcss.all, sty.notificationActivity)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__dt2Q1
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__i4WgX
                    )}
                  >
                    {
                      "Get notifications from your interactions within the community."
                    }
                  </div>
                }
              >
                {"Heads up"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__rn81K)}
              >
                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary___3UFLr
                  )}
                  text={"_16"}
                >
                  {"New subscriber"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__mJzM7
                  )}
                  text={"_16"}
                >
                  {"New tip"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__c6Qfc
                  )}
                  text={"_16"}
                >
                  {"New review"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__wmrvb
                  )}
                  text={"_16"}
                >
                  {"New comment"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__bi5Pj
                  )}
                  text={"_16"}
                >
                  {"New follower"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__vP3D5
                  )}
                  text={"_16"}
                >
                  {"New connection request"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary___6O9BF
                  )}
                  text={"_16"}
                >
                  {"Added to list"}
                </CheckboxTextPrimary>

                <CheckboxTextPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.checkboxTextPrimary__yFXmh
                  )}
                  text={"_16"}
                >
                  {"New reaction"}
                </CheckboxTextPrimary>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"notificationNewsEvents"}
              data-plasmic-override={overrides.notificationNewsEvents}
              hasGap={true}
              className={classNames(defaultcss.all, sty.notificationNewsEvents)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__y2Kpo
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ihpB
                    )}
                  >
                    {
                      "All the fun things going on in the community- be in the know."
                    }
                  </div>
                }
              >
                {"Happenings"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__bFuQw)}
              >
                <SwitchTextGroupPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.switchTextGroupPrimary__bNbC
                  )}
                  descriptionText={
                    "Our weekly newsletter packed with fun stuff"
                  }
                  textGroup={"Email newsletter"}
                />

                <SwitchTextGroupPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.switchTextGroupPrimary__bww8
                  )}
                  descriptionText={"Meet members live and in person"}
                  textGroup={"Events and meetups"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsLeaveTeam"}
            data-plasmic-override={overrides.sectionTeamSettingsLeaveTeam}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamSettingsLeaveTeam
            )}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"cardTeamLeaveAccount"}
              data-plasmic-override={overrides.cardTeamLeaveAccount}
              hasGap={true}
              className={classNames(defaultcss.all, sty.cardTeamLeaveAccount)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box___01Ppy)}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__ui1Jg
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__gjYq9
                      )}
                    >
                      {
                        "Permanently remove your account and all of its contents from the Intrepid community. This action is not reversible, so please continue with caution."
                      }
                    </div>
                  }
                >
                  {"Leave team"}
                </CardHeaderTitlePrimary>
              </p.Stack>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary___7GzXs
                )}
                color={"caution"}
                size={"_140"}
                type={"ghost"}
              >
                {"Delete account"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsDeleteTeam"}
            data-plasmic-override={overrides.sectionTeamSettingsDeleteTeam}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamSettingsDeleteTeam
            )}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"cardTeamDeleteAccount"}
              data-plasmic-override={overrides.cardTeamDeleteAccount}
              hasGap={true}
              className={classNames(defaultcss.all, sty.cardTeamDeleteAccount)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__vOij)}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__i45Ew
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__piuw6
                      )}
                    >
                      {
                        "Permanently remove your account and all of its contents from the Intrepid community. This action is not reversible, so please continue with caution."
                      }
                    </div>
                  }
                >
                  {"Delete team"}
                </CardHeaderTitlePrimary>
              </p.Stack>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__c9W5I
                )}
                color={"caution"}
                size={"_140"}
                type={"ghost"}
              >
                {"Delete account"}
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
    "navbarInternal",
    "navbarMemberEdit",
    "sectionTeamSettingsStripeConnect",
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "inputTextField",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "teamStateZipGroup",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "buttonGroupStripeConnect",
    "sectionTeamSettingsAccountingConnect",
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections",
    "sectionTeamSettingsAnalyticsConnect",
    "cardTeamAnalytics",
    "inputTextPrefixSuffix",
    "sectionTeamNotifications",
    "notificationPushEmail",
    "notificationActivity",
    "notificationNewsEvents",
    "sectionTeamSettingsLeaveTeam",
    "cardTeamLeaveAccount",
    "sectionTeamSettingsDeleteTeam",
    "cardTeamDeleteAccount",
    "footerB"
  ],

  navbarInternal: ["navbarInternal"],
  navbarMemberEdit: ["navbarMemberEdit"],
  sectionTeamSettingsStripeConnect: [
    "sectionTeamSettingsStripeConnect",
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "inputTextField",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "teamStateZipGroup",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "buttonGroupStripeConnect"
  ],

  formTeamEditBusinessVerification: [
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "inputTextField",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "teamStateZipGroup",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "buttonGroupStripeConnect"
  ],

  cardTeamLegalBusinessGroup: [
    "cardTeamLegalBusinessGroup",
    "inputTextField",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "teamStateZipGroup",
    "cardTeamTaxId",
    "teamTaxIdGroup"
  ],

  inputTextField: ["inputTextField"],
  cardTeamRegisteredAddress: [
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "teamStateZipGroup"
  ],

  teamAddressGroup: ["teamAddressGroup", "teamStateZipGroup"],
  teamStateZipGroup: ["teamStateZipGroup"],
  cardTeamTaxId: ["cardTeamTaxId", "teamTaxIdGroup"],
  teamTaxIdGroup: ["teamTaxIdGroup"],
  buttonGroupStripeConnect: ["buttonGroupStripeConnect"],
  sectionTeamSettingsAccountingConnect: [
    "sectionTeamSettingsAccountingConnect",
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections"
  ],

  cardTeamAccountingConnections: [
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections"
  ],

  inputGroupTeamAccountingConnections: ["inputGroupTeamAccountingConnections"],
  sectionTeamSettingsAnalyticsConnect: [
    "sectionTeamSettingsAnalyticsConnect",
    "cardTeamAnalytics",
    "inputTextPrefixSuffix"
  ],

  cardTeamAnalytics: ["cardTeamAnalytics", "inputTextPrefixSuffix"],
  inputTextPrefixSuffix: ["inputTextPrefixSuffix"],
  sectionTeamNotifications: [
    "sectionTeamNotifications",
    "notificationPushEmail",
    "notificationActivity",
    "notificationNewsEvents"
  ],

  notificationPushEmail: ["notificationPushEmail"],
  notificationActivity: ["notificationActivity"],
  notificationNewsEvents: ["notificationNewsEvents"],
  sectionTeamSettingsLeaveTeam: [
    "sectionTeamSettingsLeaveTeam",
    "cardTeamLeaveAccount"
  ],

  cardTeamLeaveAccount: ["cardTeamLeaveAccount"],
  sectionTeamSettingsDeleteTeam: [
    "sectionTeamSettingsDeleteTeam",
    "cardTeamDeleteAccount"
  ],

  cardTeamDeleteAccount: ["cardTeamDeleteAccount"],
  footerB: ["footerB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditteamsettings__ArgProps,
      internalVariantPropNames: PlasmicEditteamsettings__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEditteamsettings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditteamsettings";
  } else {
    func.displayName = `PlasmicEditteamsettings.${nodeName}`;
  }
  return func;
}

export const PlasmicEditteamsettings = Object.assign(
  // Top-level PlasmicEditteamsettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarInternal: makeNodeComponent("navbarInternal"),
    navbarMemberEdit: makeNodeComponent("navbarMemberEdit"),
    sectionTeamSettingsStripeConnect: makeNodeComponent(
      "sectionTeamSettingsStripeConnect"
    ),

    formTeamEditBusinessVerification: makeNodeComponent(
      "formTeamEditBusinessVerification"
    ),

    cardTeamLegalBusinessGroup: makeNodeComponent("cardTeamLegalBusinessGroup"),
    inputTextField: makeNodeComponent("inputTextField"),
    cardTeamRegisteredAddress: makeNodeComponent("cardTeamRegisteredAddress"),
    teamAddressGroup: makeNodeComponent("teamAddressGroup"),
    teamStateZipGroup: makeNodeComponent("teamStateZipGroup"),
    cardTeamTaxId: makeNodeComponent("cardTeamTaxId"),
    teamTaxIdGroup: makeNodeComponent("teamTaxIdGroup"),
    buttonGroupStripeConnect: makeNodeComponent("buttonGroupStripeConnect"),
    sectionTeamSettingsAccountingConnect: makeNodeComponent(
      "sectionTeamSettingsAccountingConnect"
    ),

    cardTeamAccountingConnections: makeNodeComponent(
      "cardTeamAccountingConnections"
    ),

    inputGroupTeamAccountingConnections: makeNodeComponent(
      "inputGroupTeamAccountingConnections"
    ),

    sectionTeamSettingsAnalyticsConnect: makeNodeComponent(
      "sectionTeamSettingsAnalyticsConnect"
    ),

    cardTeamAnalytics: makeNodeComponent("cardTeamAnalytics"),
    inputTextPrefixSuffix: makeNodeComponent("inputTextPrefixSuffix"),
    sectionTeamNotifications: makeNodeComponent("sectionTeamNotifications"),
    notificationPushEmail: makeNodeComponent("notificationPushEmail"),
    notificationActivity: makeNodeComponent("notificationActivity"),
    notificationNewsEvents: makeNodeComponent("notificationNewsEvents"),
    sectionTeamSettingsLeaveTeam: makeNodeComponent(
      "sectionTeamSettingsLeaveTeam"
    ),

    cardTeamLeaveAccount: makeNodeComponent("cardTeamLeaveAccount"),
    sectionTeamSettingsDeleteTeam: makeNodeComponent(
      "sectionTeamSettingsDeleteTeam"
    ),

    cardTeamDeleteAccount: makeNodeComponent("cardTeamDeleteAccount"),
    footerB: makeNodeComponent("footerB"),
    // Metadata about props expected for PlasmicEditteamsettings
    internalVariantProps: PlasmicEditteamsettings__VariantProps,
    internalArgProps: PlasmicEditteamsettings__ArgProps
  }
);

export default PlasmicEditteamsettings;
/* prettier-ignore-end */
