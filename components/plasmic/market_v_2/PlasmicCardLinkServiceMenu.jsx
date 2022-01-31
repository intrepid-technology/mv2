// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: q8zDlZXV1I
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicCardLinkServiceMenu.module.css"; // plasmic-import: q8zDlZXV1I/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicCardLinkServiceMenu__VariantProps = new Array();

export const PlasmicCardLinkServiceMenu__ArgProps = new Array(
  "icon",
  "textHeadline",
  "textBody",
  "destination"
);

function PlasmicCardLinkServiceMenu__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        sty.root
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"headerTitle"}
        data-plasmic-override={overrides.headerTitle}
        className={classNames(projectcss.all, sty.headerTitle)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"parentIconText"}
          data-plasmic-override={overrides.parentIconText}
          hasGap={true}
          className={classNames(projectcss.all, sty.parentIconText)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <PlusBoldIcon
                className={classNames(projectcss.all, sty.svg___3Xva6)}
                role={"img"}
              />
            ),

            value: args.icon
          })}

          <div className={classNames(projectcss.all, sty.freeBox__mrtUq)}>
            {p.renderPlasmicSlot({
              defaultContents: "Headline Title",
              value: args.textHeadline,
              className: classNames(sty.slotTargetTextHeadline)
            })}
          </div>
        </p.Stack>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___15Tvx)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Description of service or product that makes it clear to the",
          value: args.textBody,
          className: classNames(sty.slotTargetTextBody)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "headerTitle", "parentIconText"],
  headerTitle: ["headerTitle", "parentIconText"],
  parentIconText: ["parentIconText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardLinkServiceMenu__ArgProps,
      internalVariantPropNames: PlasmicCardLinkServiceMenu__VariantProps
    });

    return PlasmicCardLinkServiceMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardLinkServiceMenu";
  } else {
    func.displayName = `PlasmicCardLinkServiceMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicCardLinkServiceMenu = Object.assign(
  // Top-level PlasmicCardLinkServiceMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerTitle: makeNodeComponent("headerTitle"),
    parentIconText: makeNodeComponent("parentIconText"),
    // Metadata about props expected for PlasmicCardLinkServiceMenu
    internalVariantProps: PlasmicCardLinkServiceMenu__VariantProps,
    internalArgProps: PlasmicCardLinkServiceMenu__ArgProps
  }
);

export default PlasmicCardLinkServiceMenu;
/* prettier-ignore-end */
