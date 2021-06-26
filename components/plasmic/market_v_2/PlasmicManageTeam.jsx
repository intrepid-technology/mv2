// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: mj3H3AmiAy
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import InputTextForm from "../../TextFormInput"; // plasmic-import: Hp_zc6XLro/component
import ButtonFormDropdownSelect from "../../ButtonFormDropdownSelect"; // plasmic-import: s2oJmDwLX-/component
import FabButtonA from "../../FabButtonA"; // plasmic-import: o1fXsWwgdW/component
import Searchbar from "../../SearchbarA"; // plasmic-import: MorSLptejY/component
import RadioTextInputPrimary from "../../RadioTextInputPrimary"; // plasmic-import: 1xw4kmw_5l/component
import FabButtonB from "../../FabButtonB"; // plasmic-import: nkuQ1X_r6B/component
import ElementRadioPrimary from "../../ElementRadioPrimary"; // plasmic-import: Wn4V4PrC-K/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicManageTeam.module.css"; // plasmic-import: mj3H3AmiAy/css
import Icon96Icon from "./icons/PlasmicIcon__Icon96"; // plasmic-import: CEkB3VE5m4/icon

export const PlasmicManageTeam__VariantProps = new Array();

export const PlasmicManageTeam__ArgProps = new Array();

function PlasmicManageTeam__RenderFunc(props) {
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
          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionTableInviteTeam"}
            data-plasmic-override={overrides.sectionTableInviteTeam}
            hasGap={true}
            className={classNames(defaultcss.all, sty.sectionTableInviteTeam)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"tableTeamMemberInviteManageParent"}
              data-plasmic-override={
                overrides.tableTeamMemberInviteManageParent
              }
              hasGap={true}
              className={classNames(
                defaultcss.all,
                sty.tableTeamMemberInviteManageParent
              )}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"overlineHeadlineTitleParent"}
                data-plasmic-override={overrides.overlineHeadlineTitleParent}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.overlineHeadlineTitleParent
                )}
              >
                <div
                  data-plasmic-name={"overline"}
                  data-plasmic-override={overrides.overline}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.overline
                  )}
                >
                  {"Invite team"}
                </div>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"tableInviteTeamHeadlineTitleParent"}
                  data-plasmic-override={
                    overrides.tableInviteTeamHeadlineTitleParent
                  }
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.tableInviteTeamHeadlineTitleParent
                  )}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"headlineParent"}
                    data-plasmic-override={overrides.headlineParent}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.headlineParent)}
                  >
                    <div
                      data-plasmic-name={"headlineText"}
                      data-plasmic-override={overrides.headlineText}
                      className={classNames(defaultcss.all, sty.headlineText)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__d19Yo
                        )}
                      >
                        {"Team"}
                      </div>
                    </div>

                    <div
                      data-plasmic-name={"subheadText"}
                      data-plasmic-override={overrides.subheadText}
                      className={classNames(defaultcss.all, sty.subheadText)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__j072O
                        )}
                      >
                        {
                          "Manage and invite team members by email address or invitation link."
                        }
                      </div>
                    </div>
                  </p.Stack>

                  <ButtonPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.buttonPrimary__nqElH
                    )}
                    size={"_140"}
                    type={"ghost"}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__oHNgN
                      )}
                    >
                      {"Invite link"}
                    </div>
                  </ButtonPrimary>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"tableAddTeamMemberParent"}
                data-plasmic-override={overrides.tableAddTeamMemberParent}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.tableAddTeamMemberParent
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"inviteMemberHeadlinePrimary"}
                  data-plasmic-override={overrides.inviteMemberHeadlinePrimary}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.inviteMemberHeadlinePrimary
                  )}
                >
                  <InputTextForm
                    className={classNames(
                      "__wab_instance",
                      sty.inputTextForm__jwAf
                    )}
                    labelHeadline={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__nREeu
                        )}
                      >
                        {"Email address"}
                      </div>
                    }
                    size={"_360"}
                  />

                  <ButtonFormDropdownSelect
                    className={classNames(
                      "__wab_instance",
                      sty.buttonFormDropdownSelect___9DDgr
                    )}
                    description={"description"}
                    dropdownIcon={
                      <Icon96Icon
                        className={classNames(defaultcss.all, sty.svg__mfRlE)}
                        role={"img"}
                      />
                    }
                    dropdownTitle={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__rl5Ul
                        )}
                      >
                        {"Member"}
                      </div>
                    }
                    headlineLabelTitle={"Role"}
                    size={"_90X36"}
                  />
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"inviteMemberSecondary"}
                  data-plasmic-override={overrides.inviteMemberSecondary}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.inviteMemberSecondary
                  )}
                >
                  <InputTextForm
                    className={classNames(
                      "__wab_instance",
                      sty.inputTextForm___8O2AA
                    )}
                    label={"label"}
                    labelHeadline={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__hhuqn
                        )}
                      >
                        {"Email address"}
                      </div>
                    }
                    size={"_360"}
                  />

                  <ButtonFormDropdownSelect
                    className={classNames(
                      "__wab_instance",
                      sty.buttonFormDropdownSelect__fGhfu
                    )}
                    description={"description"}
                    dropdownIcon={
                      <Icon96Icon
                        className={classNames(defaultcss.all, sty.svg__mTtSb)}
                        role={"img"}
                      />
                    }
                    dropdownTitle={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__azFv
                        )}
                      >
                        {"Member"}
                      </div>
                    }
                    headlineLabelTitle={"Role"}
                    label={"label"}
                    size={"_90X36"}
                  />
                </p.Stack>

                <FabButtonA
                  data-plasmic-name={"fabButtonA"}
                  data-plasmic-override={overrides.fabButtonA}
                  className={classNames("__wab_instance", sty.fabButtonA)}
                />

                <ButtonPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonPrimary___3Bu0O
                  )}
                  color={"success"}
                  size={"_140"}
                  type={"ghost"}
                >
                  {"Invite"}
                </ButtonPrimary>
              </p.Stack>

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
                  <Searchbar
                    data-plasmic-name={"searchbar"}
                    data-plasmic-override={overrides.searchbar}
                    className={classNames("__wab_instance", sty.searchbar)}
                    width={"_360"}
                  />

                  <ButtonFormDropdownSelect
                    className={classNames(
                      "__wab_instance",
                      sty.buttonFormDropdownSelect__zmU49
                    )}
                    description={"description"}
                    dropdownIcon={
                      <Icon96Icon
                        className={classNames(defaultcss.all, sty.svg__djpBf)}
                        role={"img"}
                      />
                    }
                    dropdownTitle={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__bi6KP
                        )}
                      >
                        {"Date"}
                      </div>
                    }
                    headlineLabelTitle={"Date"}
                    label={"label"}
                    size={"_90X36"}
                  />
                </p.Stack>

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
                  <div
                    data-plasmic-name={"tableSelectHeaderRow"}
                    data-plasmic-override={overrides.tableSelectHeaderRow}
                    className={classNames(
                      defaultcss.all,
                      sty.tableSelectHeaderRow
                    )}
                  >
                    <RadioTextInputPrimary
                      data-plasmic-name={"radioTextInputPrimary"}
                      data-plasmic-override={overrides.radioTextInputPrimary}
                      className={classNames(
                        "__wab_instance",
                        sty.radioTextInputPrimary
                      )}
                      itemText={"Select all"}
                    />

                    <FabButtonB
                      className={classNames(
                        "__wab_instance",
                        sty.fabButtonB__cwFxg
                      )}
                      size={"_18Px"}
                    />
                  </div>

                  <div
                    data-plasmic-name={"memberAdminRow"}
                    data-plasmic-override={overrides.memberAdminRow}
                    className={classNames(defaultcss.all, sty.memberAdminRow)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"userAvatarNameEmailParent"}
                      data-plasmic-override={
                        overrides.userAvatarNameEmailParent
                      }
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.userAvatarNameEmailParent
                      )}
                    >
                      <ElementRadioPrimary
                        className={classNames(
                          "__wab_instance",
                          sty.elementRadioPrimary__reX0
                        )}
                        size={"_14Px"}
                      />

                      <UserAvatar
                        className={classNames(
                          "__wab_instance",
                          sty.userAvatar__eIeG
                        )}
                        size={"_32"}
                      />

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"userInfoParent"}
                        data-plasmic-override={overrides.userInfoParent}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.userInfoParent
                        )}
                      >
                        <div
                          data-plasmic-name={"usernameParent"}
                          data-plasmic-override={overrides.usernameParent}
                          className={classNames(
                            defaultcss.all,
                            sty.usernameParent
                          )}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box___16Zj
                            )}
                          >
                            {"username"}
                          </div>
                        </div>

                        <div
                          data-plasmic-name={"userEmailParent"}
                          data-plasmic-override={overrides.userEmailParent}
                          className={classNames(
                            defaultcss.all,
                            sty.userEmailParent
                          )}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box__pXKgh
                            )}
                          >
                            {"userEmail"}
                          </div>
                        </div>
                      </p.Stack>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"selectFabParent2"}
                      data-plasmic-override={overrides.selectFabParent2}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.selectFabParent2
                      )}
                    >
                      <div
                        data-plasmic-name={"statusTextParent"}
                        data-plasmic-override={overrides.statusTextParent}
                        className={classNames(
                          defaultcss.all,
                          sty.statusTextParent
                        )}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__cuwvQ
                          )}
                        >
                          {"Admin"}
                        </div>
                      </div>

                      <FabButtonB
                        className={classNames(
                          "__wab_instance",
                          sty.fabButtonB___9TgN
                        )}
                        size={"_18Px"}
                      />
                    </p.Stack>
                  </div>

                  <div
                    data-plasmic-name={"memberSelectRow"}
                    data-plasmic-override={overrides.memberSelectRow}
                    className={classNames(defaultcss.all, sty.memberSelectRow)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"userAvatarNameEmailParent2"}
                      data-plasmic-override={
                        overrides.userAvatarNameEmailParent2
                      }
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.userAvatarNameEmailParent2
                      )}
                    >
                      <ElementRadioPrimary
                        className={classNames(
                          "__wab_instance",
                          sty.elementRadioPrimary__cpNFt
                        )}
                        size={"_14Px"}
                      />

                      <UserAvatar
                        className={classNames(
                          "__wab_instance",
                          sty.userAvatar__obKkN
                        )}
                        size={"_32"}
                      />

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"userInfoParent2"}
                        data-plasmic-override={overrides.userInfoParent2}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.userInfoParent2
                        )}
                      >
                        <div
                          data-plasmic-name={"usernameParent2"}
                          data-plasmic-override={overrides.usernameParent2}
                          className={classNames(
                            defaultcss.all,
                            sty.usernameParent2
                          )}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box___4PeUk
                            )}
                          >
                            {"username"}
                          </div>
                        </div>

                        <div
                          data-plasmic-name={"userEmailParent2"}
                          data-plasmic-override={overrides.userEmailParent2}
                          className={classNames(
                            defaultcss.all,
                            sty.userEmailParent2
                          )}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box__btRu2
                            )}
                          >
                            {"userEmail"}
                          </div>
                        </div>
                      </p.Stack>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"selectFabParent3"}
                      data-plasmic-override={overrides.selectFabParent3}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.selectFabParent3
                      )}
                    >
                      <ButtonFormDropdownSelect
                        className={classNames(
                          "__wab_instance",
                          sty.buttonFormDropdownSelect__wrg86
                        )}
                        description={"description"}
                        dropdownIcon={
                          <Icon96Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__dYpTh
                            )}
                            role={"img"}
                          />
                        }
                        dropdownTitle={
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.box__y4DEu
                            )}
                          >
                            {"Member"}
                          </div>
                        }
                        headlineLabelTitle={"Date"}
                        label={"label"}
                        size={"_90X36"}
                      />

                      <FabButtonB
                        className={classNames(
                          "__wab_instance",
                          sty.fabButtonB___0V7La
                        )}
                        size={"_18Px"}
                      />
                    </p.Stack>
                  </div>
                </p.Stack>
              </p.Stack>
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
    "sectionTableInviteTeam",
    "tableTeamMemberInviteManageParent",
    "overlineHeadlineTitleParent",
    "overline",
    "tableInviteTeamHeadlineTitleParent",
    "headlineParent",
    "headlineText",
    "subheadText",
    "tableAddTeamMemberParent",
    "inviteMemberHeadlinePrimary",
    "inviteMemberSecondary",
    "fabButtonA",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbar",
    "tableSelectColumnParent",
    "tableSelectHeaderRow",
    "radioTextInputPrimary",
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent",
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  sectionTableInviteTeam: [
    "sectionTableInviteTeam",
    "tableTeamMemberInviteManageParent",
    "overlineHeadlineTitleParent",
    "overline",
    "tableInviteTeamHeadlineTitleParent",
    "headlineParent",
    "headlineText",
    "subheadText",
    "tableAddTeamMemberParent",
    "inviteMemberHeadlinePrimary",
    "inviteMemberSecondary",
    "fabButtonA",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbar",
    "tableSelectColumnParent",
    "tableSelectHeaderRow",
    "radioTextInputPrimary",
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent",
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  tableTeamMemberInviteManageParent: [
    "tableTeamMemberInviteManageParent",
    "overlineHeadlineTitleParent",
    "overline",
    "tableInviteTeamHeadlineTitleParent",
    "headlineParent",
    "headlineText",
    "subheadText",
    "tableAddTeamMemberParent",
    "inviteMemberHeadlinePrimary",
    "inviteMemberSecondary",
    "fabButtonA",
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbar",
    "tableSelectColumnParent",
    "tableSelectHeaderRow",
    "radioTextInputPrimary",
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent",
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  overlineHeadlineTitleParent: [
    "overlineHeadlineTitleParent",
    "overline",
    "tableInviteTeamHeadlineTitleParent",
    "headlineParent",
    "headlineText",
    "subheadText"
  ],

  overline: ["overline"],
  tableInviteTeamHeadlineTitleParent: [
    "tableInviteTeamHeadlineTitleParent",
    "headlineParent",
    "headlineText",
    "subheadText"
  ],

  headlineParent: ["headlineParent", "headlineText", "subheadText"],
  headlineText: ["headlineText"],
  subheadText: ["subheadText"],
  tableAddTeamMemberParent: [
    "tableAddTeamMemberParent",
    "inviteMemberHeadlinePrimary",
    "inviteMemberSecondary",
    "fabButtonA"
  ],

  inviteMemberHeadlinePrimary: ["inviteMemberHeadlinePrimary"],
  inviteMemberSecondary: ["inviteMemberSecondary"],
  fabButtonA: ["fabButtonA"],
  tableTeamMemberEditParent: [
    "tableTeamMemberEditParent",
    "searchFilterDateParent",
    "searchbar",
    "tableSelectColumnParent",
    "tableSelectHeaderRow",
    "radioTextInputPrimary",
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent",
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  searchFilterDateParent: ["searchFilterDateParent", "searchbar"],
  searchbar: ["searchbar"],
  tableSelectColumnParent: [
    "tableSelectColumnParent",
    "tableSelectHeaderRow",
    "radioTextInputPrimary",
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent",
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  tableSelectHeaderRow: ["tableSelectHeaderRow", "radioTextInputPrimary"],
  radioTextInputPrimary: ["radioTextInputPrimary"],
  memberAdminRow: [
    "memberAdminRow",
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent",
    "selectFabParent2",
    "statusTextParent"
  ],

  userAvatarNameEmailParent: [
    "userAvatarNameEmailParent",
    "userInfoParent",
    "usernameParent",
    "userEmailParent"
  ],

  userInfoParent: ["userInfoParent", "usernameParent", "userEmailParent"],
  usernameParent: ["usernameParent"],
  userEmailParent: ["userEmailParent"],
  selectFabParent2: ["selectFabParent2", "statusTextParent"],
  statusTextParent: ["statusTextParent"],
  memberSelectRow: [
    "memberSelectRow",
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2",
    "selectFabParent3"
  ],

  userAvatarNameEmailParent2: [
    "userAvatarNameEmailParent2",
    "userInfoParent2",
    "usernameParent2",
    "userEmailParent2"
  ],

  userInfoParent2: ["userInfoParent2", "usernameParent2", "userEmailParent2"],
  usernameParent2: ["usernameParent2"],
  userEmailParent2: ["userEmailParent2"],
  selectFabParent3: ["selectFabParent3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicManageTeam__ArgProps,
      internalVariantPropNames: PlasmicManageTeam__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicManageTeam__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicManageTeam";
  } else {
    func.displayName = `PlasmicManageTeam.${nodeName}`;
  }
  return func;
}

export const PlasmicManageTeam = Object.assign(
  // Top-level PlasmicManageTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionTableInviteTeam: makeNodeComponent("sectionTableInviteTeam"),
    tableTeamMemberInviteManageParent: makeNodeComponent(
      "tableTeamMemberInviteManageParent"
    ),

    overlineHeadlineTitleParent: makeNodeComponent(
      "overlineHeadlineTitleParent"
    ),

    overline: makeNodeComponent("overline"),
    tableInviteTeamHeadlineTitleParent: makeNodeComponent(
      "tableInviteTeamHeadlineTitleParent"
    ),

    headlineParent: makeNodeComponent("headlineParent"),
    headlineText: makeNodeComponent("headlineText"),
    subheadText: makeNodeComponent("subheadText"),
    tableAddTeamMemberParent: makeNodeComponent("tableAddTeamMemberParent"),
    inviteMemberHeadlinePrimary: makeNodeComponent(
      "inviteMemberHeadlinePrimary"
    ),

    inviteMemberSecondary: makeNodeComponent("inviteMemberSecondary"),
    fabButtonA: makeNodeComponent("fabButtonA"),
    tableTeamMemberEditParent: makeNodeComponent("tableTeamMemberEditParent"),
    searchFilterDateParent: makeNodeComponent("searchFilterDateParent"),
    searchbar: makeNodeComponent("searchbar"),
    tableSelectColumnParent: makeNodeComponent("tableSelectColumnParent"),
    tableSelectHeaderRow: makeNodeComponent("tableSelectHeaderRow"),
    radioTextInputPrimary: makeNodeComponent("radioTextInputPrimary"),
    memberAdminRow: makeNodeComponent("memberAdminRow"),
    userAvatarNameEmailParent: makeNodeComponent("userAvatarNameEmailParent"),
    userInfoParent: makeNodeComponent("userInfoParent"),
    usernameParent: makeNodeComponent("usernameParent"),
    userEmailParent: makeNodeComponent("userEmailParent"),
    selectFabParent2: makeNodeComponent("selectFabParent2"),
    statusTextParent: makeNodeComponent("statusTextParent"),
    memberSelectRow: makeNodeComponent("memberSelectRow"),
    userAvatarNameEmailParent2: makeNodeComponent("userAvatarNameEmailParent2"),
    userInfoParent2: makeNodeComponent("userInfoParent2"),
    usernameParent2: makeNodeComponent("usernameParent2"),
    userEmailParent2: makeNodeComponent("userEmailParent2"),
    selectFabParent3: makeNodeComponent("selectFabParent3"),
    // Metadata about props expected for PlasmicManageTeam
    internalVariantProps: PlasmicManageTeam__VariantProps,
    internalArgProps: PlasmicManageTeam__ArgProps
  }
);

export default PlasmicManageTeam;
/* prettier-ignore-end */
