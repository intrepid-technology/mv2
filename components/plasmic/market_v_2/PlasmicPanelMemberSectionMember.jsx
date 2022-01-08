// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Q3RBslsHoHs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MenuIconListItem from "../../MenuIconListItem"; // plasmic-import: 61axZSTp8Y/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelMemberSectionMember.module.css"; // plasmic-import: Q3RBslsHoHs/css
import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: eMAeU2OiF/icon
import TeamPartnersIcon from "./icons/PlasmicIcon__TeamPartners"; // plasmic-import: nykSsHgmL/icon
import WalletEarningsIcon from "./icons/PlasmicIcon__WalletEarnings"; // plasmic-import: yPY5MrAZTs/icon

export const PlasmicPanelMemberSectionMember__VariantProps = new Array();

export const PlasmicPanelMemberSectionMember__ArgProps = new Array();

function PlasmicPanelMemberSectionMember__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lJwqz
          )}
        >
          {"Member"}
        </div>
      </p.Stack>

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__j2GEz)}
        destination={"/edit/member"}
        navIcon={
          <UserIcon
            data-plasmic-name={"navImage2"}
            data-plasmic-override={overrides.navImage2}
            className={classNames(projectcss.all, sty.navImage2)}
            role={"img"}
          />
        }
        navText={"Profile"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem___0XxPt)}
        destination={"/edit/team"}
        navIcon={
          <TeamPartnersIcon
            data-plasmic-name={"navImage3"}
            data-plasmic-override={overrides.navImage3}
            className={classNames(projectcss.all, sty.navImage3)}
            role={"img"}
          />
        }
        navText={"Team"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__xxjKa)}
        destination={"/wallet"}
        navIcon={
          <WalletEarningsIcon
            data-plasmic-name={"navImage4"}
            data-plasmic-override={overrides.navImage4}
            className={classNames(projectcss.all, sty.navImage4)}
            role={"img"}
          />
        }
        navText={"Wallet"}
        renderContext={"sidebar"}
      />

      <Button
        data-plasmic-name={"switchToPartnerButton"}
        data-plasmic-override={overrides.switchToPartnerButton}
        className={classNames("__wab_instance", sty.switchToPartnerButton)}
        color={"brand"}
        preventDefault={"true"}
        rounded={true}
        type={"link"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lExxv
          )}
        >
          {"Switch to Partner"}
        </div>
      </Button>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "navImage2",
    "navImage3",
    "navImage4",
    "switchToPartnerButton"
  ],

  freeBox: ["freeBox"],
  navImage2: ["navImage2"],
  navImage3: ["navImage3"],
  navImage4: ["navImage4"],
  switchToPartnerButton: ["switchToPartnerButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelMemberSectionMember__ArgProps,
      internalVariantPropNames: PlasmicPanelMemberSectionMember__VariantProps
    });

    return PlasmicPanelMemberSectionMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelMemberSectionMember";
  } else {
    func.displayName = `PlasmicPanelMemberSectionMember.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelMemberSectionMember = Object.assign(
  // Top-level PlasmicPanelMemberSectionMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    navImage2: makeNodeComponent("navImage2"),
    navImage3: makeNodeComponent("navImage3"),
    navImage4: makeNodeComponent("navImage4"),
    switchToPartnerButton: makeNodeComponent("switchToPartnerButton"),
    // Metadata about props expected for PlasmicPanelMemberSectionMember
    internalVariantProps: PlasmicPanelMemberSectionMember__VariantProps,
    internalArgProps: PlasmicPanelMemberSectionMember__ArgProps
  }
);

export default PlasmicPanelMemberSectionMember;
/* prettier-ignore-end */
