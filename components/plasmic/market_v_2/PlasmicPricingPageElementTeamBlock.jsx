// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XT0p4nILA-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPricingPageElementTeamBlock.module.css"; // plasmic-import: XT0p4nILA-/css
import TeamPartnersIcon from "./icons/PlasmicIcon__TeamPartners"; // plasmic-import: nykSsHgmL/icon

export const PlasmicPricingPageElementTeamBlock__VariantProps = new Array();

export const PlasmicPricingPageElementTeamBlock__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3"
);

function PlasmicPricingPageElementTeamBlock__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
      <div className={classNames(projectcss.all, sty.freeBox__vht8C)}>
        <div className={classNames(projectcss.all, sty.freeBox__rq7Vs)}>
          {p.renderPlasmicSlot({
            defaultContents: "Team",
            value: args.slot3,
            className: classNames(sty.slotTargetSlot3)
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"elementTeamListItemParent"}
        data-plasmic-override={overrides.elementTeamListItemParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.elementTeamListItemParent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"elementTeamMembersListItem"}
          data-plasmic-override={overrides.elementTeamMembersListItem}
          hasGap={true}
          className={classNames(projectcss.all, sty.elementTeamMembersListItem)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__cOymw)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <TeamPartnersIcon
                  className={classNames(projectcss.all, sty.svg__sfySo)}
                  role={"img"}
                />
              ),

              value: args.slot2
            })}
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"valuePercentParent23242"}
            data-plasmic-override={overrides.valuePercentParent23242}
            hasGap={true}
            className={classNames(projectcss.all, sty.valuePercentParent23242)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__rtYyL)}>
              {p.renderPlasmicSlot({
                defaultContents: "3",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox___2Ntr)}>
            {p.renderPlasmicSlot({
              defaultContents: "Team members included",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "elementTeamListItemParent",
    "elementTeamMembersListItem",
    "valuePercentParent23242"
  ],

  elementTeamListItemParent: [
    "elementTeamListItemParent",
    "elementTeamMembersListItem",
    "valuePercentParent23242"
  ],

  elementTeamMembersListItem: [
    "elementTeamMembersListItem",
    "valuePercentParent23242"
  ],

  valuePercentParent23242: ["valuePercentParent23242"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingPageElementTeamBlock__ArgProps,
      internalVariantPropNames: PlasmicPricingPageElementTeamBlock__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPricingPageElementTeamBlock__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingPageElementTeamBlock";
  } else {
    func.displayName = `PlasmicPricingPageElementTeamBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingPageElementTeamBlock = Object.assign(
  // Top-level PlasmicPricingPageElementTeamBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    elementTeamListItemParent: makeNodeComponent("elementTeamListItemParent"),
    elementTeamMembersListItem: makeNodeComponent("elementTeamMembersListItem"),
    valuePercentParent23242: makeNodeComponent("valuePercentParent23242"),
    // Metadata about props expected for PlasmicPricingPageElementTeamBlock
    internalVariantProps: PlasmicPricingPageElementTeamBlock__VariantProps,
    internalArgProps: PlasmicPricingPageElementTeamBlock__ArgProps
  }
);

export default PlasmicPricingPageElementTeamBlock;
/* prettier-ignore-end */
