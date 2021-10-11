// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ESb2G2fq56P
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementIconListItem from "../../ElementIconListItem"; // plasmic-import: 61axZSTp8Y/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicElementSideBarPartnerProfilePanel.module.css"; // plasmic-import: ESb2G2fq56P/css
import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: eMAeU2OiF/icon
import TeamPartnersIcon from "./icons/PlasmicIcon__TeamPartners"; // plasmic-import: nykSsHgmL/icon
import WalletEarningsIcon from "./icons/PlasmicIcon__WalletEarnings"; // plasmic-import: yPY5MrAZTs/icon
import SwitchUserIcon from "./icons/PlasmicIcon__SwitchUser"; // plasmic-import: fiW_1GB84/icon

export const PlasmicElementSideBarPartnerProfilePanel__VariantProps =
  new Array();

export const PlasmicElementSideBarPartnerProfilePanel__ArgProps = new Array();

function PlasmicElementSideBarPartnerProfilePanel__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__ryHdz)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___8Dh5C
          )}
        >
          {"Partner"}
        </div>
      </p.Stack>

      <ElementIconListItem
        className={classNames("__wab_instance", sty.elementIconListItem__dsDoA)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box__w3J4U)}>
            <UserIcon
              className={classNames(defaultcss.all, sty.svg__j0I4C)}
              role={"img"}
            />
          </div>
        }
        navText={"Profile"}
      />

      <ElementIconListItem
        className={classNames("__wab_instance", sty.elementIconListItem__lqd7E)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box__zzN6S)}>
            <TeamPartnersIcon
              className={classNames(defaultcss.all, sty.svg__reL48)}
              role={"img"}
            />
          </div>
        }
        navText={"Team"}
      />

      <ElementIconListItem
        className={classNames("__wab_instance", sty.elementIconListItem__jjVq7)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box__uYn32)}>
            <WalletEarningsIcon
              className={classNames(defaultcss.all, sty.svg__jDd6)}
              role={"img"}
            />
          </div>
        }
        navText={"Wallet"}
      />

      <ElementIconListItem
        className={classNames("__wab_instance", sty.elementIconListItem__f163K)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box__dpjsj)}>
            <SwitchUserIcon
              className={classNames(defaultcss.all, sty.svg__x4M1B)}
              role={"img"}
            />
          </div>
        }
        navText={"Switch to Member"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementSideBarPartnerProfilePanel__ArgProps,
      internalVariantPropNames:
        PlasmicElementSideBarPartnerProfilePanel__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementSideBarPartnerProfilePanel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementSideBarPartnerProfilePanel";
  } else {
    func.displayName = `PlasmicElementSideBarPartnerProfilePanel.${nodeName}`;
  }
  return func;
}

export const PlasmicElementSideBarPartnerProfilePanel = Object.assign(
  // Top-level PlasmicElementSideBarPartnerProfilePanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicElementSideBarPartnerProfilePanel
    internalVariantProps:
      PlasmicElementSideBarPartnerProfilePanel__VariantProps,
    internalArgProps: PlasmicElementSideBarPartnerProfilePanel__ArgProps
  }
);

export default PlasmicElementSideBarPartnerProfilePanel;
/* prettier-ignore-end */