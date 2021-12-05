// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ouYaxX0ZfJN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import DialogTrigger from "../../DialogTrigger"; // plasmic-import: MVW-rzNNsa/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import SidebarSection from "../../SidebarSection"; // plasmic-import: 09ZmCZkG7z/component
import MenuIconListItem from "../../MenuIconListItem"; // plasmic-import: 61axZSTp8Y/component
import PanelFooter from "../../PanelFooter"; // plasmic-import: y532Y0sDIf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelMember.module.css"; // plasmic-import: ouYaxX0ZfJN/css
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon
import MemberPartnerAddIcon from "./icons/PlasmicIcon__MemberPartnerAdd"; // plasmic-import: FGYq1z2nvF/icon
import DashboardLineIcon from "./icons/PlasmicIcon__DashboardLine"; // plasmic-import: Nr2oyG7_xB/icon
import WalletEarningsIcon from "./icons/PlasmicIcon__WalletEarnings"; // plasmic-import: yPY5MrAZTs/icon
import ShopCartIcon from "./icons/PlasmicIcon__ShopCart"; // plasmic-import: vfwo0XDly/icon
import ProjectsWorkLineIcon from "./icons/PlasmicIcon__ProjectsWorkLine"; // plasmic-import: mPOFMuHl_Z/icon
import CommentReviewCIcon from "./icons/PlasmicIcon__CommentReviewC"; // plasmic-import: gIz1MSBwtg/icon
import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: eMAeU2OiF/icon
import TeamPartnersIcon from "./icons/PlasmicIcon__TeamPartners"; // plasmic-import: nykSsHgmL/icon
import SwitchUserIcon from "./icons/PlasmicIcon__SwitchUser"; // plasmic-import: fiW_1GB84/icon
import NotificationIcon from "./icons/PlasmicIcon__Notification"; // plasmic-import: rEeGdo5vaH/icon
import SettingsIcon from "./icons/PlasmicIcon__Settings"; // plasmic-import: QA4fGpoajM/icon
import HelpIcon from "./icons/PlasmicIcon__Help"; // plasmic-import: 0BaaB_Gau/icon
import LogOutIcon from "./icons/PlasmicIcon__LogOut"; // plasmic-import: sApgZMZT6Y/icon

export const PlasmicPanelMember__VariantProps = new Array();

export const PlasmicPanelMember__ArgProps = new Array();

function PlasmicPanelMember__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.parent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          hasGap={true}
          className={classNames(defaultcss.all, projectcss.all, sty.header)}
        >
          <DialogTrigger
            data-plasmic-name={"dialogTrigger"}
            data-plasmic-override={overrides.dialogTrigger}
            className={classNames("__wab_instance", sty.dialogTrigger)}
            componentToRender={"DialogInviteProfessional"}
          >
            <Button
              data-plasmic-name={"newProjectButton"}
              data-plasmic-override={overrides.newProjectButton}
              className={classNames("__wab_instance", sty.newProjectButton)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___0YhmI
                )}
              >
                <ListingIcon
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.svg__axJkS
                  )}
                  role={"img"}
                />

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__v771E
                  )}
                >
                  {"New Project"}
                </div>
              </p.Stack>
            </Button>
          </DialogTrigger>

          <Button
            data-plasmic-name={"addPartnerButton"}
            data-plasmic-override={overrides.addPartnerButton}
            className={classNames("__wab_instance", sty.addPartnerButton)}
            type={"outline"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__cccfw
              )}
            >
              <MemberPartnerAddIcon
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.svg__zI3Tg
                )}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__ztg0
                )}
              >
                {"Add Partner"}
              </div>
            </p.Stack>
          </Button>
        </p.Stack>

        <SidebarSection
          data-plasmic-name={"manageSection"}
          data-plasmic-override={overrides.manageSection}
          className={classNames("__wab_instance", sty.manageSection)}
          title={"Manage"}
        >
          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__ptNgc
            )}
            destination={"/dashboard"}
            navIcon={
              <DashboardLineIcon
                data-plasmic-name={"navIcon"}
                data-plasmic-override={overrides.navIcon}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon
                )}
                role={"img"}
              />
            }
            navText={"Dashboard"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem___5Cyer
            )}
            destination={"/finance"}
            navIcon={
              <WalletEarningsIcon
                data-plasmic-name={"navIcon2"}
                data-plasmic-override={overrides.navIcon2}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon2
                )}
                role={"img"}
              />
            }
            navText={"Finance"}
            renderContext={"sidebar"}
          />
        </SidebarSection>

        <SidebarSection
          data-plasmic-name={"discoverSection"}
          data-plasmic-override={overrides.discoverSection}
          className={classNames("__wab_instance", sty.discoverSection)}
          title={"Discover"}
        >
          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__oLo3R
            )}
            destination={"/market"}
            navIcon={
              <ShopCartIcon
                data-plasmic-name={"navIcon3"}
                data-plasmic-override={overrides.navIcon3}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon3
                )}
                role={"img"}
              />
            }
            navText={"Market"}
            renderContext={"sidebar"}
          />
        </SidebarSection>

        <SidebarSection
          data-plasmic-name={"workSection"}
          data-plasmic-override={overrides.workSection}
          className={classNames("__wab_instance", sty.workSection)}
          title={"WORK"}
        >
          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__hcWoG
            )}
            destination={"/member/manage/projects"}
            navIcon={
              <ProjectsWorkLineIcon
                data-plasmic-name={"navIcon4"}
                data-plasmic-override={overrides.navIcon4}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon4
                )}
                role={"img"}
              />
            }
            navText={"Project"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames("__wab_instance", sty.menuIconListItem__xb8Q)}
            destination={"/member/partners"}
            navIcon={
              <MemberPartnerAddIcon
                data-plasmic-name={"navIcon5"}
                data-plasmic-override={overrides.navIcon5}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon5
                )}
                role={"img"}
              />
            }
            navText={"Partners"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem___09Rtn
            )}
            destination={"/inbox"}
            navIcon={
              <CommentReviewCIcon
                data-plasmic-name={"navIcon6"}
                data-plasmic-override={overrides.navIcon6}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon6
                )}
                role={"img"}
              />
            }
            navText={"Messages"}
            renderContext={"sidebar"}
          />
        </SidebarSection>

        <SidebarSection
          data-plasmic-name={"accountsSection"}
          data-plasmic-override={overrides.accountsSection}
          className={classNames("__wab_instance", sty.accountsSection)}
          title={"Accounts"}
        >
          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__c1DDq
            )}
            destination={"/edit/member"}
            navIcon={
              <UserIcon
                data-plasmic-name={"navIcon7"}
                data-plasmic-override={overrides.navIcon7}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon7
                )}
                role={"img"}
              />
            }
            navText={"Profile"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__wjxQq
            )}
            destination={"/edit/team"}
            navIcon={
              <TeamPartnersIcon
                data-plasmic-name={"navIcon8"}
                data-plasmic-override={overrides.navIcon8}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon8
                )}
                role={"img"}
              />
            }
            navText={"Team"}
            renderContext={"sidebar"}
          />

          <Button
            data-plasmic-name={"switchToPartnerButton"}
            data-plasmic-override={overrides.switchToPartnerButton}
            className={classNames("__wab_instance", sty.switchToPartnerButton)}
            color={"brand"}
            noPadding={"noPadding"}
            preventDefault={"true"}
            type={"link"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___2EO1
              )}
            >
              <SwitchUserIcon
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.svg__qzXBc
                )}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__zSoRd
                )}
              >
                {"Switch To Partner"}
              </div>
            </p.Stack>
          </Button>
        </SidebarSection>

        <SidebarSection
          data-plasmic-name={"adminSection"}
          data-plasmic-override={overrides.adminSection}
          className={classNames("__wab_instance", sty.adminSection)}
          title={"ADMIN"}
        >
          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem___23FAl
            )}
            destination={"/notifications"}
            navIcon={
              <NotificationIcon
                data-plasmic-name={"navIcon10"}
                data-plasmic-override={overrides.navIcon10}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon10
                )}
                role={"img"}
              />
            }
            navText={"Notifications"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__nYSbE
            )}
            destination={"/edit/member/settings"}
            navIcon={
              <SettingsIcon
                data-plasmic-name={"navIcon11"}
                data-plasmic-override={overrides.navIcon11}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon11
                )}
                role={"img"}
              />
            }
            navText={"Settings"}
            renderContext={"sidebar"}
          />

          <MenuIconListItem
            className={classNames(
              "__wab_instance",
              sty.menuIconListItem__bzlyl
            )}
            destination={"/help"}
            navIcon={
              <HelpIcon
                data-plasmic-name={"navIcon12"}
                data-plasmic-override={overrides.navIcon12}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.navIcon12
                )}
                role={"img"}
              />
            }
            navText={"Help"}
          />

          <Button
            data-plasmic-name={"logoutButton"}
            data-plasmic-override={overrides.logoutButton}
            className={classNames("__wab_instance", sty.logoutButton)}
            color={"brand"}
            noPadding={"noPadding"}
            preventDefault={"true"}
            type={"link"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__dphov
              )}
            >
              <LogOutIcon
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.svg__cTlht
                )}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__hlSc9
                )}
              >
                {"Log out"}
              </div>
            </p.Stack>
          </Button>
        </SidebarSection>
      </p.Stack>

      <div
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames(defaultcss.all, projectcss.all, sty.footer)}
      >
        <PanelFooter
          data-plasmic-name={"panelFooter"}
          data-plasmic-override={overrides.panelFooter}
          className={classNames("__wab_instance", sty.panelFooter)}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "header",
    "dialogTrigger",
    "newProjectButton",
    "addPartnerButton",
    "manageSection",
    "navIcon",
    "navIcon2",
    "discoverSection",
    "navIcon3",
    "workSection",
    "navIcon4",
    "navIcon5",
    "navIcon6",
    "accountsSection",
    "navIcon7",
    "navIcon8",
    "switchToPartnerButton",
    "adminSection",
    "navIcon10",
    "navIcon11",
    "navIcon12",
    "logoutButton",
    "footer",
    "panelFooter"
  ],

  parent: [
    "parent",
    "header",
    "dialogTrigger",
    "newProjectButton",
    "addPartnerButton",
    "manageSection",
    "navIcon",
    "navIcon2",
    "discoverSection",
    "navIcon3",
    "workSection",
    "navIcon4",
    "navIcon5",
    "navIcon6",
    "accountsSection",
    "navIcon7",
    "navIcon8",
    "switchToPartnerButton",
    "adminSection",
    "navIcon10",
    "navIcon11",
    "navIcon12",
    "logoutButton"
  ],

  header: ["header", "dialogTrigger", "newProjectButton", "addPartnerButton"],
  dialogTrigger: ["dialogTrigger", "newProjectButton"],
  newProjectButton: ["newProjectButton"],
  addPartnerButton: ["addPartnerButton"],
  manageSection: ["manageSection", "navIcon", "navIcon2"],
  navIcon: ["navIcon"],
  navIcon2: ["navIcon2"],
  discoverSection: ["discoverSection", "navIcon3"],
  navIcon3: ["navIcon3"],
  workSection: ["workSection", "navIcon4", "navIcon5", "navIcon6"],
  navIcon4: ["navIcon4"],
  navIcon5: ["navIcon5"],
  navIcon6: ["navIcon6"],
  accountsSection: [
    "accountsSection",
    "navIcon7",
    "navIcon8",
    "switchToPartnerButton"
  ],

  navIcon7: ["navIcon7"],
  navIcon8: ["navIcon8"],
  switchToPartnerButton: ["switchToPartnerButton"],
  adminSection: [
    "adminSection",
    "navIcon10",
    "navIcon11",
    "navIcon12",
    "logoutButton"
  ],

  navIcon10: ["navIcon10"],
  navIcon11: ["navIcon11"],
  navIcon12: ["navIcon12"],
  logoutButton: ["logoutButton"],
  footer: ["footer", "panelFooter"],
  panelFooter: ["panelFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelMember__ArgProps,
      internalVariantPropNames: PlasmicPanelMember__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPanelMember__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelMember";
  } else {
    func.displayName = `PlasmicPanelMember.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelMember = Object.assign(
  // Top-level PlasmicPanelMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    header: makeNodeComponent("header"),
    dialogTrigger: makeNodeComponent("dialogTrigger"),
    newProjectButton: makeNodeComponent("newProjectButton"),
    addPartnerButton: makeNodeComponent("addPartnerButton"),
    manageSection: makeNodeComponent("manageSection"),
    navIcon: makeNodeComponent("navIcon"),
    navIcon2: makeNodeComponent("navIcon2"),
    discoverSection: makeNodeComponent("discoverSection"),
    navIcon3: makeNodeComponent("navIcon3"),
    workSection: makeNodeComponent("workSection"),
    navIcon4: makeNodeComponent("navIcon4"),
    navIcon5: makeNodeComponent("navIcon5"),
    navIcon6: makeNodeComponent("navIcon6"),
    accountsSection: makeNodeComponent("accountsSection"),
    navIcon7: makeNodeComponent("navIcon7"),
    navIcon8: makeNodeComponent("navIcon8"),
    switchToPartnerButton: makeNodeComponent("switchToPartnerButton"),
    adminSection: makeNodeComponent("adminSection"),
    navIcon10: makeNodeComponent("navIcon10"),
    navIcon11: makeNodeComponent("navIcon11"),
    navIcon12: makeNodeComponent("navIcon12"),
    logoutButton: makeNodeComponent("logoutButton"),
    footer: makeNodeComponent("footer"),
    panelFooter: makeNodeComponent("panelFooter"),
    // Metadata about props expected for PlasmicPanelMember
    internalVariantProps: PlasmicPanelMember__VariantProps,
    internalArgProps: PlasmicPanelMember__ArgProps
  }
);

export default PlasmicPanelMember;
/* prettier-ignore-end */
