// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0Y8M1lpCIf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicBadgeCommunityRating.module.css"; // plasmic-import: 0Y8M1lpCIf/css
import SuperpowerIcon from "./icons/PlasmicIcon__Superpower"; // plasmic-import: ntMd1ebAoa/icon

export const PlasmicBadgeCommunityRating__VariantProps = new Array();

export const PlasmicBadgeCommunityRating__ArgProps = new Array(
  "overallMemberRatingNumber"
);

function PlasmicBadgeCommunityRating__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent)}
    >
      <SuperpowerIcon
        data-plasmic-name={"superpowerIcon"}
        data-plasmic-override={overrides.superpowerIcon}
        className={classNames(defaultcss.all, sty.superpowerIcon)}
        role={"img"}
      />

      <div
        data-plasmic-name={"overallMemberRatingNumber"}
        data-plasmic-override={overrides.overallMemberRatingNumber}
        className={classNames(defaultcss.all, sty.overallMemberRatingNumber)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__xcZnF
              )}
            >
              {"4.8"}
            </div>
          ),

          value: args.overallMemberRatingNumber
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  parent: ["parent", "superpowerIcon", "overallMemberRatingNumber"],
  superpowerIcon: ["superpowerIcon"],
  overallMemberRatingNumber: ["overallMemberRatingNumber"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBadgeCommunityRating__ArgProps,
      internalVariantPropNames: PlasmicBadgeCommunityRating__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicBadgeCommunityRating__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicBadgeCommunityRating";
  } else {
    func.displayName = `PlasmicBadgeCommunityRating.${nodeName}`;
  }
  return func;
}

export const PlasmicBadgeCommunityRating = Object.assign(
  // Top-level PlasmicBadgeCommunityRating renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    superpowerIcon: makeNodeComponent("superpowerIcon"),
    overallMemberRatingNumber: makeNodeComponent("overallMemberRatingNumber"),
    // Metadata about props expected for PlasmicBadgeCommunityRating
    internalVariantProps: PlasmicBadgeCommunityRating__VariantProps,
    internalArgProps: PlasmicBadgeCommunityRating__ArgProps
  }
);

export default PlasmicBadgeCommunityRating;
/* prettier-ignore-end */
