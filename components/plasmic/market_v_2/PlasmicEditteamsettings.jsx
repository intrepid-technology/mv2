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
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import FormContext from "../../FormContext"; // plasmic-import: fzhRfAQRK6/component
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import CardHeaderTitlePrimary from "../../CardHeaderTitlePrimary"; // plasmic-import: hIka2k2fkY/component
import FormTextInput from "../../FormTextInput"; // plasmic-import: egzqjpKDP_e/component
import FormSelectInput from "../../FormSelectInput"; // plasmic-import: VSW4TWeqMx/component
import ButtonGroupStripeConnect from "../../ButtonGroupStripeConnect"; // plasmic-import: d5Rau78kDe/component
import FormSwitchInput from "../../FormSwitchInput"; // plasmic-import: Q6uFqZTeF8/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import NotificationSettingsForm from "../../NotificationSettingsForm"; // plasmic-import: Z8dV7lUnBe3/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditteamsettings.module.css"; // plasmic-import: QudhNCOa_Ua/css
import XerosvgIcon from "./icons/PlasmicIcon__Xerosvg"; // plasmic-import: X-HNuuBXHS/icon
import Icons8QuickbookssvgIcon from "./icons/PlasmicIcon__Icons8Quickbookssvg"; // plasmic-import: raCIX8pOF/icon

export const PlasmicEditteamsettings__VariantProps = new Array();

export const PlasmicEditteamsettings__ArgProps = new Array();

function PlasmicEditteamsettings__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

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

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <FormContext
            data-plasmic-name={"settingsForm"}
            data-plasmic-override={overrides.settingsForm}
            className={classNames("__wab_instance", sty.settingsForm)}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"sectionTeamSettingsStripeConnect"}
              data-plasmic-override={overrides.sectionTeamSettingsStripeConnect}
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.sectionTeamSettingsStripeConnect
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
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lyarm
                    )}
                  >
                    {"Manage team account"}
                  </div>
                }
                textDisplay={"Settings"}
                textSubhead={
                  "Maintain a safe and secure community experience  "
                }
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"formTeamEditBusinessVerification"}
                data-plasmic-override={
                  overrides.formTeamEditBusinessVerification
                }
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.formTeamEditBusinessVerification
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"cardTeamLegalBusinessGroup"}
                  data-plasmic-override={overrides.cardTeamLegalBusinessGroup}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
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
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fvhx6
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

                  <FormTextInput
                    data-plasmic-name={"businessNameTextInput"}
                    data-plasmic-override={overrides.businessNameTextInput}
                    className={classNames(
                      "__wab_instance",
                      sty.businessNameTextInput
                    )}
                    name={"businessName"}
                    type={"secondary"}
                  />

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"cardTeamRegisteredAddress"}
                    data-plasmic-override={overrides.cardTeamRegisteredAddress}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
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
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tl2Nk
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
                      className={classNames(
                        projectcss.all,
                        sty.teamAddressGroup
                      )}
                    >
                      <FormTextInput
                        data-plasmic-name={"addressLineOneTextInput"}
                        data-plasmic-override={
                          overrides.addressLineOneTextInput
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.addressLineOneTextInput
                        )}
                        headline={true}
                        label={"Address"}
                        name={"address.lineOne"}
                        type={"secondary"}
                      />

                      <FormTextInput
                        data-plasmic-name={"addressLineTwoTextInput"}
                        data-plasmic-override={
                          overrides.addressLineTwoTextInput
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.addressLineTwoTextInput
                        )}
                        headline={true}
                        label={"Address Line 2"}
                        name={"address.lineTwo"}
                        type={"secondary"}
                      />

                      <FormSelectInput
                        data-plasmic-name={"countrySelectInput"}
                        data-plasmic-override={overrides.countrySelectInput}
                        className={classNames(
                          "__wab_instance",
                          sty.countrySelectInput
                        )}
                        label={"Country"}
                        name={"country"}
                        value={""}
                      />

                      <FormSelectInput
                        data-plasmic-name={"citySelectInput"}
                        data-plasmic-override={overrides.citySelectInput}
                        className={classNames(
                          "__wab_instance",
                          sty.citySelectInput
                        )}
                        label={"City"}
                        name={"city"}
                        value={""}
                      />

                      <FormTextInput
                        data-plasmic-name={"stateTextInput"}
                        data-plasmic-override={overrides.stateTextInput}
                        className={classNames(
                          "__wab_instance",
                          sty.stateTextInput
                        )}
                        headline={true}
                        label={"Province/State"}
                        name={"state"}
                        type={"secondary"}
                      />

                      <FormTextInput
                        data-plasmic-name={"postalCodeTextInput"}
                        data-plasmic-override={overrides.postalCodeTextInput}
                        className={classNames(
                          "__wab_instance",
                          sty.postalCodeTextInput
                        )}
                        headline={true}
                        label={"Zip/Postal Code"}
                        name={"postalCode"}
                        type={"secondary"}
                      />
                    </p.Stack>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"cardTeamTaxId"}
                    data-plasmic-override={overrides.cardTeamTaxId}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.cardTeamTaxId)}
                  >
                    <CardHeaderTitlePrimary
                      className={classNames(
                        "__wab_instance",
                        sty.cardHeaderTitlePrimary__mAaAf
                      )}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__s0VQ5
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
                      className={classNames(projectcss.all, sty.teamTaxIdGroup)}
                    >
                      <FormSelectInput
                        data-plasmic-name={"taxCountrySelectInput"}
                        data-plasmic-override={overrides.taxCountrySelectInput}
                        className={classNames(
                          "__wab_instance",
                          sty.taxCountrySelectInput
                        )}
                        label={"Country"}
                        name={"tax.country"}
                      />

                      <FormTextInput
                        data-plasmic-name={"taxNumberTextInput"}
                        data-plasmic-override={overrides.taxNumberTextInput}
                        className={classNames(
                          "__wab_instance",
                          sty.taxNumberTextInput
                        )}
                        headline={true}
                        label={"Number"}
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
                projectcss.all,
                sty.sectionTeamSettingsAccountingConnect
              )}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"cardTeamAccountingConnections"}
                data-plasmic-override={overrides.cardTeamAccountingConnections}
                hasGap={true}
                className={classNames(
                  projectcss.all,
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
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sHo1Q
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
                    projectcss.all,
                    sty.inputGroupTeamAccountingConnections
                  )}
                >
                  <FormSwitchInput
                    data-plasmic-name={"xeroSwitchInput"}
                    data-plasmic-override={overrides.xeroSwitchInput}
                    className={classNames(
                      "__wab_instance",
                      sty.xeroSwitchInput
                    )}
                    content={
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"wrapper"}
                        data-plasmic-override={overrides.wrapper}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.wrapper)}
                      >
                        <XerosvgIcon
                          className={classNames(projectcss.all, sty.svg__ix2K4)}
                          role={"img"}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mAb96
                          )}
                        >
                          {"Xero"}
                        </div>
                      </p.Stack>
                    }
                    name={"connections.xero"}
                  />

                  <FormSwitchInput
                    data-plasmic-name={"quickbookSwitchInput"}
                    data-plasmic-override={overrides.quickbookSwitchInput}
                    className={classNames(
                      "__wab_instance",
                      sty.quickbookSwitchInput
                    )}
                    content={
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"wrapper2"}
                        data-plasmic-override={overrides.wrapper2}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.wrapper2)}
                      >
                        <Icons8QuickbookssvgIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___04VTx
                          )}
                          role={"img"}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mvjMx
                          )}
                        >
                          {"Quickbooks"}
                        </div>
                      </p.Stack>
                    }
                    name={"connections.quickbooks"}
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
                projectcss.all,
                sty.sectionTeamSettingsAnalyticsConnect
              )}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"cardTeamAnalytics"}
                data-plasmic-override={overrides.cardTeamAnalytics}
                hasGap={true}
                className={classNames(projectcss.all, sty.cardTeamAnalytics)}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__pzjIj
                  )}
                  slot={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oxyo4
                      )}
                    >
                      {
                        "Send page visitor data to your Google Analytics account."
                      }
                    </div>
                  }
                >
                  {"Analytics"}
                </CardHeaderTitlePrimary>

                <FormTextInput
                  data-plasmic-name={"gaAnalyticsTextInput"}
                  data-plasmic-override={overrides.gaAnalyticsTextInput}
                  className={classNames(
                    "__wab_instance",
                    sty.gaAnalyticsTextInput
                  )}
                  labels={["prefix"]}
                  name={"ga.ua"}
                  startAdornment={"UA"}
                  type={"secondary"}
                />
              </p.Stack>
            </p.Stack>

            <div
              data-plasmic-name={"submitButtonWrapper"}
              data-plasmic-override={overrides.submitButtonWrapper}
              className={classNames(projectcss.all, sty.submitButtonWrapper)}
            >
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qWbv8
                  )}
                >
                  {"Save Settings"}
                </div>
              </Button>
            </div>
          </FormContext>

          <FormContext
            data-plasmic-name={"notificationsForm"}
            data-plasmic-override={overrides.notificationsForm}
            className={classNames("__wab_instance", sty.notificationsForm)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dUAoo)}>
              <NotificationSettingsForm
                data-plasmic-name={"notificationSettingsForm"}
                data-plasmic-override={overrides.notificationSettingsForm}
                className={classNames(
                  "__wab_instance",
                  sty.notificationSettingsForm
                )}
              />
            </div>
          </FormContext>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsLeaveTeam"}
            data-plasmic-override={overrides.sectionTeamSettingsLeaveTeam}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.sectionTeamSettingsLeaveTeam
            )}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"cardTeamLeaveAccount"}
              data-plasmic-override={overrides.cardTeamLeaveAccount}
              hasGap={true}
              className={classNames(projectcss.all, sty.cardTeamLeaveAccount)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___01Ppy)}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__ui1Jg
                  )}
                  slot={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gjYq9
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

              <Button
                data-plasmic-name={"leaveTeamButton"}
                data-plasmic-override={overrides.leaveTeamButton}
                className={classNames("__wab_instance", sty.leaveTeamButton)}
                color={"caution"}
                type={"ghost"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lshov
                  )}
                >
                  {"Leave Team"}
                </div>
              </Button>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamSettingsDeleteTeam"}
            data-plasmic-override={overrides.sectionTeamSettingsDeleteTeam}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.sectionTeamSettingsDeleteTeam
            )}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"cardTeamDeleteAccount"}
              data-plasmic-override={overrides.cardTeamDeleteAccount}
              hasGap={true}
              className={classNames(projectcss.all, sty.cardTeamDeleteAccount)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vOij)}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__i45Ew
                  )}
                  slot={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__piuw6
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

              <Button
                data-plasmic-name={"deleteAccountButton"}
                data-plasmic-override={overrides.deleteAccountButton}
                className={classNames(
                  "__wab_instance",
                  sty.deleteAccountButton
                )}
                color={"caution"}
                type={"ghost"}
              >
                {"Delete Account"}
              </Button>
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
    "settingsForm",
    "sectionTeamSettingsStripeConnect",
    "cardHeaderTitleDisplay",
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "businessNameTextInput",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput",
    "buttonGroupStripeConnect",
    "sectionTeamSettingsAccountingConnect",
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections",
    "xeroSwitchInput",
    "wrapper",
    "quickbookSwitchInput",
    "wrapper2",
    "sectionTeamSettingsAnalyticsConnect",
    "cardTeamAnalytics",
    "gaAnalyticsTextInput",
    "submitButtonWrapper",
    "button",
    "notificationsForm",
    "notificationSettingsForm",
    "sectionTeamSettingsLeaveTeam",
    "cardTeamLeaveAccount",
    "leaveTeamButton",
    "sectionTeamSettingsDeleteTeam",
    "cardTeamDeleteAccount",
    "deleteAccountButton"
  ],

  settingsForm: [
    "settingsForm",
    "sectionTeamSettingsStripeConnect",
    "cardHeaderTitleDisplay",
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "businessNameTextInput",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput",
    "buttonGroupStripeConnect",
    "sectionTeamSettingsAccountingConnect",
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections",
    "xeroSwitchInput",
    "wrapper",
    "quickbookSwitchInput",
    "wrapper2",
    "sectionTeamSettingsAnalyticsConnect",
    "cardTeamAnalytics",
    "gaAnalyticsTextInput",
    "submitButtonWrapper",
    "button"
  ],

  sectionTeamSettingsStripeConnect: [
    "sectionTeamSettingsStripeConnect",
    "cardHeaderTitleDisplay",
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "businessNameTextInput",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput",
    "buttonGroupStripeConnect"
  ],

  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  formTeamEditBusinessVerification: [
    "formTeamEditBusinessVerification",
    "cardTeamLegalBusinessGroup",
    "businessNameTextInput",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput",
    "buttonGroupStripeConnect"
  ],

  cardTeamLegalBusinessGroup: [
    "cardTeamLegalBusinessGroup",
    "businessNameTextInput",
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput",
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput"
  ],

  businessNameTextInput: ["businessNameTextInput"],
  cardTeamRegisteredAddress: [
    "cardTeamRegisteredAddress",
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput"
  ],

  teamAddressGroup: [
    "teamAddressGroup",
    "addressLineOneTextInput",
    "addressLineTwoTextInput",
    "countrySelectInput",
    "citySelectInput",
    "stateTextInput",
    "postalCodeTextInput"
  ],

  addressLineOneTextInput: ["addressLineOneTextInput"],
  addressLineTwoTextInput: ["addressLineTwoTextInput"],
  countrySelectInput: ["countrySelectInput"],
  citySelectInput: ["citySelectInput"],
  stateTextInput: ["stateTextInput"],
  postalCodeTextInput: ["postalCodeTextInput"],
  cardTeamTaxId: [
    "cardTeamTaxId",
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput"
  ],

  teamTaxIdGroup: [
    "teamTaxIdGroup",
    "taxCountrySelectInput",
    "taxNumberTextInput"
  ],

  taxCountrySelectInput: ["taxCountrySelectInput"],
  taxNumberTextInput: ["taxNumberTextInput"],
  buttonGroupStripeConnect: ["buttonGroupStripeConnect"],
  sectionTeamSettingsAccountingConnect: [
    "sectionTeamSettingsAccountingConnect",
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections",
    "xeroSwitchInput",
    "wrapper",
    "quickbookSwitchInput",
    "wrapper2"
  ],

  cardTeamAccountingConnections: [
    "cardTeamAccountingConnections",
    "inputGroupTeamAccountingConnections",
    "xeroSwitchInput",
    "wrapper",
    "quickbookSwitchInput",
    "wrapper2"
  ],

  inputGroupTeamAccountingConnections: [
    "inputGroupTeamAccountingConnections",
    "xeroSwitchInput",
    "wrapper",
    "quickbookSwitchInput",
    "wrapper2"
  ],

  xeroSwitchInput: ["xeroSwitchInput", "wrapper"],
  wrapper: ["wrapper"],
  quickbookSwitchInput: ["quickbookSwitchInput", "wrapper2"],
  wrapper2: ["wrapper2"],
  sectionTeamSettingsAnalyticsConnect: [
    "sectionTeamSettingsAnalyticsConnect",
    "cardTeamAnalytics",
    "gaAnalyticsTextInput"
  ],

  cardTeamAnalytics: ["cardTeamAnalytics", "gaAnalyticsTextInput"],
  gaAnalyticsTextInput: ["gaAnalyticsTextInput"],
  submitButtonWrapper: ["submitButtonWrapper", "button"],
  button: ["button"],
  notificationsForm: ["notificationsForm", "notificationSettingsForm"],
  notificationSettingsForm: ["notificationSettingsForm"],
  sectionTeamSettingsLeaveTeam: [
    "sectionTeamSettingsLeaveTeam",
    "cardTeamLeaveAccount",
    "leaveTeamButton"
  ],

  cardTeamLeaveAccount: ["cardTeamLeaveAccount", "leaveTeamButton"],
  leaveTeamButton: ["leaveTeamButton"],
  sectionTeamSettingsDeleteTeam: [
    "sectionTeamSettingsDeleteTeam",
    "cardTeamDeleteAccount",
    "deleteAccountButton"
  ],

  cardTeamDeleteAccount: ["cardTeamDeleteAccount", "deleteAccountButton"],
  deleteAccountButton: ["deleteAccountButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditteamsettings__ArgProps,
      internalVariantPropNames: PlasmicEditteamsettings__VariantProps
    });

    return PlasmicEditteamsettings__RenderFunc({
      variants,
      args,
      overrides,
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
    settingsForm: makeNodeComponent("settingsForm"),
    sectionTeamSettingsStripeConnect: makeNodeComponent(
      "sectionTeamSettingsStripeConnect"
    ),

    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    formTeamEditBusinessVerification: makeNodeComponent(
      "formTeamEditBusinessVerification"
    ),

    cardTeamLegalBusinessGroup: makeNodeComponent("cardTeamLegalBusinessGroup"),
    businessNameTextInput: makeNodeComponent("businessNameTextInput"),
    cardTeamRegisteredAddress: makeNodeComponent("cardTeamRegisteredAddress"),
    teamAddressGroup: makeNodeComponent("teamAddressGroup"),
    addressLineOneTextInput: makeNodeComponent("addressLineOneTextInput"),
    addressLineTwoTextInput: makeNodeComponent("addressLineTwoTextInput"),
    countrySelectInput: makeNodeComponent("countrySelectInput"),
    citySelectInput: makeNodeComponent("citySelectInput"),
    stateTextInput: makeNodeComponent("stateTextInput"),
    postalCodeTextInput: makeNodeComponent("postalCodeTextInput"),
    cardTeamTaxId: makeNodeComponent("cardTeamTaxId"),
    teamTaxIdGroup: makeNodeComponent("teamTaxIdGroup"),
    taxCountrySelectInput: makeNodeComponent("taxCountrySelectInput"),
    taxNumberTextInput: makeNodeComponent("taxNumberTextInput"),
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

    xeroSwitchInput: makeNodeComponent("xeroSwitchInput"),
    wrapper: makeNodeComponent("wrapper"),
    quickbookSwitchInput: makeNodeComponent("quickbookSwitchInput"),
    wrapper2: makeNodeComponent("wrapper2"),
    sectionTeamSettingsAnalyticsConnect: makeNodeComponent(
      "sectionTeamSettingsAnalyticsConnect"
    ),

    cardTeamAnalytics: makeNodeComponent("cardTeamAnalytics"),
    gaAnalyticsTextInput: makeNodeComponent("gaAnalyticsTextInput"),
    submitButtonWrapper: makeNodeComponent("submitButtonWrapper"),
    button: makeNodeComponent("button"),
    notificationsForm: makeNodeComponent("notificationsForm"),
    notificationSettingsForm: makeNodeComponent("notificationSettingsForm"),
    sectionTeamSettingsLeaveTeam: makeNodeComponent(
      "sectionTeamSettingsLeaveTeam"
    ),

    cardTeamLeaveAccount: makeNodeComponent("cardTeamLeaveAccount"),
    leaveTeamButton: makeNodeComponent("leaveTeamButton"),
    sectionTeamSettingsDeleteTeam: makeNodeComponent(
      "sectionTeamSettingsDeleteTeam"
    ),

    cardTeamDeleteAccount: makeNodeComponent("cardTeamDeleteAccount"),
    deleteAccountButton: makeNodeComponent("deleteAccountButton"),
    // Metadata about props expected for PlasmicEditteamsettings
    internalVariantProps: PlasmicEditteamsettings__VariantProps,
    internalArgProps: PlasmicEditteamsettings__ArgProps
  }
);

export default PlasmicEditteamsettings;
/* prettier-ignore-end */
