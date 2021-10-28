// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -D9RrNuJ4S
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarPartnerEdit from "../../NavbarPartnerEdit"; // plasmic-import: ta5dUay7HZW/component
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import CardHeaderTitlePrimary from "../../CardHeaderTitlePrimary"; // plasmic-import: hIka2k2fkY/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import InputTextForm from "../../InputTextForm"; // plasmic-import: Hp_zc6XLro/component
import SelectGroupDropdownPrimary from "../../SelectGroupDropdownPrimary"; // plasmic-import: -teiDn_7Z-/component
import ButtonCirclePlusMinus from "../../ButtonCirclePlusMinus"; // plasmic-import: o1fXsWwgdW/component
import SearchbarPrimary from "../../SearchbarPrimary"; // plasmic-import: MorSLptejY/component
import TableUserAdminHeader from "../../TableUserAdminHeader"; // plasmic-import: hAe6_pu3NI/component
import TableUserAdminRecord from "../../TableUserAdminRecord"; // plasmic-import: _aYcl8sdexe/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditteammanage.module.css"; // plasmic-import: -D9RrNuJ4S/css

export const PlasmicEditteammanage__VariantProps = new Array();

export const PlasmicEditteammanage__ArgProps = new Array();

function PlasmicEditteammanage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
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
          <NavbarPartnerEdit
            data-plasmic-name={"navbarPartnerEdit"}
            data-plasmic-override={overrides.navbarPartnerEdit}
            className={classNames("__wab_instance", sty.navbarPartnerEdit)}
            navItems={["notifications", "messages", "reviews", "wallet"]}
            selected={"team"}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamManageMembersHeader"}
            data-plasmic-override={overrides.sectionTeamManageMembersHeader}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionTeamManageMembersHeader
            )}
          >
            <CardHeaderTitleDisplay
              data-plasmic-name={"cardHeaderTitleDisplay"}
              data-plasmic-override={overrides.cardHeaderTitleDisplay}
              size={"_720"}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text___6QAYz
                  )}
                >
                  {"Manage members"}
                </div>
              }
              textDisplay={"Team"}
              textSubhead={"Maintain a safe and secure community experience  "}
            />
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamInviteMembers"}
            data-plasmic-override={overrides.sectionTeamInviteMembers}
            hasGap={true}
            className={classNames(defaultcss.all, sty.sectionTeamInviteMembers)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"cardTeamInviteMembers"}
                data-plasmic-override={overrides.cardTeamInviteMembers}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.cardTeamInviteMembers
                )}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__ki7Or
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__ygMqo
                      )}
                    >
                      {
                        "Manage and invite team members by email address or by invitation link."
                      }
                    </div>
                  }
                >
                  {"Invite"}
                </CardHeaderTitlePrimary>

                <ButtonPrimary
                  data-plasmic-name={"buttonPrimary"}
                  data-plasmic-override={overrides.buttonPrimary}
                  className={classNames("__wab_instance", sty.buttonPrimary)}
                  size={"_140"}
                  type={"primary"}
                >
                  {"Invite link"}
                </ButtonPrimary>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"tableAddTeamMember"}
                    data-plasmic-override={overrides.tableAddTeamMember}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      sty.tableAddTeamMember
                    )}
                  >
                    {true ? (
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"inviteMemberHeader"}
                        data-plasmic-override={overrides.inviteMemberHeader}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.inviteMemberHeader
                        )}
                      >
                        <InputTextForm
                          className={classNames(
                            "__wab_instance",
                            sty.inputTextForm__fayfn
                          )}
                          labelHeadline={
                            <div
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.text__ptzPj
                              )}
                            >
                              {"Email"}
                            </div>
                          }
                          subhead={"subhead"}
                          width={
                            hasVariant(
                              globalVariants,
                              "screen",
                              "iphone678Plus"
                            )
                              ? undefined
                              : "_540"
                          }
                        />

                        <SelectGroupDropdownPrimary
                          className={classNames(
                            "__wab_instance",
                            sty.selectGroupDropdownPrimary__gj5Rn
                          )}
                          description={"description"}
                          placeholder={"Member"}
                          width={
                            hasVariant(
                              globalVariants,
                              "screen",
                              "iphone678Plus"
                            )
                              ? undefined
                              : "_90"
                          }
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.text___7A8Rf
                            )}
                          >
                            {"Role"}
                          </div>
                        </SelectGroupDropdownPrimary>
                      </p.Stack>
                    ) : null}
                    {true ? (
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"inviteMemberRecord"}
                        data-plasmic-override={overrides.inviteMemberRecord}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.inviteMemberRecord
                        )}
                      >
                        <InputTextForm
                          className={classNames(
                            "__wab_instance",
                            sty.inputTextForm__ziL9
                          )}
                          label={"label"}
                          subhead={"subhead"}
                          width={
                            hasVariant(
                              globalVariants,
                              "screen",
                              "iphone678Plus"
                            )
                              ? undefined
                              : "_540"
                          }
                        />

                        <SelectGroupDropdownPrimary
                          className={classNames(
                            "__wab_instance",
                            sty.selectGroupDropdownPrimary__qVoyx
                          )}
                          description={"description"}
                          label={"label"}
                          placeholder={"Member"}
                          width={
                            hasVariant(
                              globalVariants,
                              "screen",
                              "iphone678Plus"
                            )
                              ? undefined
                              : "_90"
                          }
                        />
                      </p.Stack>
                    ) : null}

                    <div
                      data-plasmic-name={"incrementParent"}
                      data-plasmic-override={overrides.incrementParent}
                      className={classNames(
                        defaultcss.all,
                        sty.incrementParent
                      )}
                    >
                      <ButtonCirclePlusMinus
                        data-plasmic-name={"addMember"}
                        data-plasmic-override={overrides.addMember}
                        alignment={"left"}
                        className={classNames("__wab_instance", sty.addMember)}
                      />
                    </div>

                    <div
                      data-plasmic-name={"inviteButtonParent"}
                      data-plasmic-override={overrides.inviteButtonParent}
                      className={classNames(
                        defaultcss.all,
                        sty.inviteButtonParent
                      )}
                    >
                      <ButtonPrimary
                        data-plasmic-name={"inviteMembers"}
                        data-plasmic-override={overrides.inviteMembers}
                        size={"_140"}
                        type={"outline"}
                      >
                        {"Invite"}
                      </ButtonPrimary>
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionTeamManageMembers"}
            data-plasmic-override={overrides.sectionTeamManageMembers}
            hasGap={true}
            className={classNames(defaultcss.all, sty.sectionTeamManageMembers)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"cardTeamManageMembers"}
                data-plasmic-override={overrides.cardTeamManageMembers}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.cardTeamManageMembers
                )}
              >
                <CardHeaderTitlePrimary
                  className={classNames(
                    "__wab_instance",
                    sty.cardHeaderTitlePrimary__uWhQj
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__xopkA
                      )}
                    >
                      {"Manage member access roles"}
                    </div>
                  }
                >
                  {"Manage"}
                </CardHeaderTitlePrimary>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"tableTeamMemberEditParent"}
                  data-plasmic-override={overrides.tableTeamMemberEditParent}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.tableTeamMemberEditParent
                  )}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"searchFilterDateParent"}
                    data-plasmic-override={overrides.searchFilterDateParent}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      sty.searchFilterDateParent
                    )}
                  >
                    <SearchbarPrimary
                      data-plasmic-name={"searchbarPrimary"}
                      data-plasmic-override={overrides.searchbarPrimary}
                      className={classNames(
                        "__wab_instance",
                        sty.searchbarPrimary
                      )}
                      width={
                        hasVariant(globalVariants, "screen", "iphone678Plus")
                          ? undefined
                          : "_540"
                      }
                    />

                    <SelectGroupDropdownPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.selectGroupDropdownPrimary___8Lqr8
                      )}
                      description={"description"}
                      label={"label"}
                      placeholder={"Member"}
                      width={
                        hasVariant(globalVariants, "screen", "iphone678Plus")
                          ? undefined
                          : "_90"
                      }
                    />
                  </p.Stack>

                  {true ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"tableSelectColumnParent"}
                      data-plasmic-override={overrides.tableSelectColumnParent}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.tableSelectColumnParent
                      )}
                    >
                      <TableUserAdminHeader
                        data-plasmic-name={"tableUserAdminHeader"}
                        data-plasmic-override={overrides.tableUserAdminHeader}
                        className={classNames(
                          "__wab_instance",
                          sty.tableUserAdminHeader
                        )}
                      />

                      {true ? (
                        <TableUserAdminRecord
                          data-plasmic-name={"tableUserAdminRecord"}
                          data-plasmic-override={overrides.tableUserAdminRecord}
                          className={classNames(
                            "__wab_instance",
                            sty.tableUserAdminRecord
                          )}
                        />
                      ) : null}

                      <TableUserAdminRecord
                        data-plasmic-name={"tableUserRecord"}
                        data-plasmic-override={overrides.tableUserRecord}
                        action={"select"}
                        className={classNames(
                          "__wab_instance",
                          sty.tableUserRecord
                        )}
                      />
                    </p.Stack>
                  ) : null}
                </p.Stack>
              </p.Stack>
            ) : null}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarPartnerEdit",
    "sectionTeamManageMembersHeader",
    "cardHeaderTitleDisplay",
    "sectionTeamInviteMembers",
    "cardTeamInviteMembers",
    "buttonPrimary",
    "tableAddTeamMember",
    "inviteMemberHeader",
    "inviteMemberRecord",
    "incrementParent",
    "addMember",
    "inviteButtonParent",
    "inviteMembers",
    "sectionTeamManageMembers",
    "cardTeamManageMembers",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbarPrimary",
    "tableSelectColumnParent",
    "tableUserAdminHeader",
    "tableUserAdminRecord",
    "tableUserRecord"
  ],

  navbarPartnerEdit: ["navbarPartnerEdit"],
  sectionTeamManageMembersHeader: [
    "sectionTeamManageMembersHeader",
    "cardHeaderTitleDisplay"
  ],

  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  sectionTeamInviteMembers: [
    "sectionTeamInviteMembers",
    "cardTeamInviteMembers",
    "buttonPrimary",
    "tableAddTeamMember",
    "inviteMemberHeader",
    "inviteMemberRecord",
    "incrementParent",
    "addMember",
    "inviteButtonParent",
    "inviteMembers"
  ],

  cardTeamInviteMembers: [
    "cardTeamInviteMembers",
    "buttonPrimary",
    "tableAddTeamMember",
    "inviteMemberHeader",
    "inviteMemberRecord",
    "incrementParent",
    "addMember",
    "inviteButtonParent",
    "inviteMembers"
  ],

  buttonPrimary: ["buttonPrimary"],
  tableAddTeamMember: [
    "tableAddTeamMember",
    "inviteMemberHeader",
    "inviteMemberRecord",
    "incrementParent",
    "addMember",
    "inviteButtonParent",
    "inviteMembers"
  ],

  inviteMemberHeader: ["inviteMemberHeader"],
  inviteMemberRecord: ["inviteMemberRecord"],
  incrementParent: ["incrementParent", "addMember"],
  addMember: ["addMember"],
  inviteButtonParent: ["inviteButtonParent", "inviteMembers"],
  inviteMembers: ["inviteMembers"],
  sectionTeamManageMembers: [
    "sectionTeamManageMembers",
    "cardTeamManageMembers",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbarPrimary",
    "tableSelectColumnParent",
    "tableUserAdminHeader",
    "tableUserAdminRecord",
    "tableUserRecord"
  ],

  cardTeamManageMembers: [
    "cardTeamManageMembers",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbarPrimary",
    "tableSelectColumnParent",
    "tableUserAdminHeader",
    "tableUserAdminRecord",
    "tableUserRecord"
  ],

  tableTeamMemberEditParent: [
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbarPrimary",
    "tableSelectColumnParent",
    "tableUserAdminHeader",
    "tableUserAdminRecord",
    "tableUserRecord"
  ],

  searchFilterDateParent: ["searchFilterDateParent", "searchbarPrimary"],
  searchbarPrimary: ["searchbarPrimary"],
  tableSelectColumnParent: [
    "tableSelectColumnParent",
    "tableUserAdminHeader",
    "tableUserAdminRecord",
    "tableUserRecord"
  ],

  tableUserAdminHeader: ["tableUserAdminHeader"],
  tableUserAdminRecord: ["tableUserAdminRecord"],
  tableUserRecord: ["tableUserRecord"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditteammanage__ArgProps,
      internalVariantPropNames: PlasmicEditteammanage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEditteammanage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditteammanage";
  } else {
    func.displayName = `PlasmicEditteammanage.${nodeName}`;
  }
  return func;
}

export const PlasmicEditteammanage = Object.assign(
  // Top-level PlasmicEditteammanage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarPartnerEdit: makeNodeComponent("navbarPartnerEdit"),
    sectionTeamManageMembersHeader: makeNodeComponent(
      "sectionTeamManageMembersHeader"
    ),

    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    sectionTeamInviteMembers: makeNodeComponent("sectionTeamInviteMembers"),
    cardTeamInviteMembers: makeNodeComponent("cardTeamInviteMembers"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    tableAddTeamMember: makeNodeComponent("tableAddTeamMember"),
    inviteMemberHeader: makeNodeComponent("inviteMemberHeader"),
    inviteMemberRecord: makeNodeComponent("inviteMemberRecord"),
    incrementParent: makeNodeComponent("incrementParent"),
    addMember: makeNodeComponent("addMember"),
    inviteButtonParent: makeNodeComponent("inviteButtonParent"),
    inviteMembers: makeNodeComponent("inviteMembers"),
    sectionTeamManageMembers: makeNodeComponent("sectionTeamManageMembers"),
    cardTeamManageMembers: makeNodeComponent("cardTeamManageMembers"),
    tableTeamMemberEditParent: makeNodeComponent("tableTeamMemberEditParent"),
    searchFilterDateParent: makeNodeComponent("searchFilterDateParent"),
    searchbarPrimary: makeNodeComponent("searchbarPrimary"),
    tableSelectColumnParent: makeNodeComponent("tableSelectColumnParent"),
    tableUserAdminHeader: makeNodeComponent("tableUserAdminHeader"),
    tableUserAdminRecord: makeNodeComponent("tableUserAdminRecord"),
    tableUserRecord: makeNodeComponent("tableUserRecord"),
    // Metadata about props expected for PlasmicEditteammanage
    internalVariantProps: PlasmicEditteammanage__VariantProps,
    internalArgProps: PlasmicEditteammanage__ArgProps
  }
);

export default PlasmicEditteammanage;
/* prettier-ignore-end */
