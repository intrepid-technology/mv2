// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: nJJCy4YRIm
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
import * as sty from "./PlasmicElementSideBarMemberAccountPanel.module.css"; // plasmic-import: nJJCy4YRIm/css
import NotificationIcon from "./icons/PlasmicIcon__Notification"; // plasmic-import: rEeGdo5vaH/icon
import SettingsIcon from "./icons/PlasmicIcon__Settings"; // plasmic-import: QA4fGpoajM/icon

export const PlasmicElementSideBarMemberAccountPanel__VariantProps =
  new Array();

export const PlasmicElementSideBarMemberAccountPanel__ArgProps = new Array();

function PlasmicElementSideBarMemberAccountPanel__RenderFunc(props) {
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
        className={classNames(defaultcss.all, sty.box__llxqz)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__iy94N
          )}
        >
          {"Account"}
        </div>
      </p.Stack>

      <ElementIconListItem
        className={classNames(
          "__wab_instance",
          sty.elementIconListItem___8E4Aa
        )}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box___6VJUh)}>
            <NotificationIcon
              className={classNames(defaultcss.all, sty.svg__lQxxk)}
              role={"img"}
            />
          </div>
        }
        navText={"Notifications"}
      />

      <ElementIconListItem
        className={classNames("__wab_instance", sty.elementIconListItem__uNiLi)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.box___7CxmV)}>
            <SettingsIcon
              className={classNames(defaultcss.all, sty.svg__eP0Lh)}
              role={"img"}
            />
          </div>
        }
        navText={"Settings"}
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
      internalArgPropNames: PlasmicElementSideBarMemberAccountPanel__ArgProps,
      internalVariantPropNames:
        PlasmicElementSideBarMemberAccountPanel__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementSideBarMemberAccountPanel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementSideBarMemberAccountPanel";
  } else {
    func.displayName = `PlasmicElementSideBarMemberAccountPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicElementSideBarMemberAccountPanel = Object.assign(
  // Top-level PlasmicElementSideBarMemberAccountPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicElementSideBarMemberAccountPanel
    internalVariantProps: PlasmicElementSideBarMemberAccountPanel__VariantProps,
    internalArgProps: PlasmicElementSideBarMemberAccountPanel__ArgProps
  }
);

export default PlasmicElementSideBarMemberAccountPanel;
/* prettier-ignore-end */
