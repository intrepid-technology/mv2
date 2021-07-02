// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 74sC7lx9N6
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextLinkArrow from "../../TextLinkArrow"; // plasmic-import: MlCPfXGkVN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardIconHeadlineBody.module.css"; // plasmic-import: 74sC7lx9N6/css
import Icon56Icon from "./icons/PlasmicIcon__Icon56"; // plasmic-import: Ebcyitn7yz/icon
import Icon118Icon from "./icons/PlasmicIcon__Icon118"; // plasmic-import: bdrqtZUAe/icon

export const PlasmicCardIconHeadlineBody__VariantProps = new Array("state");

export const PlasmicCardIconHeadlineBody__ArgProps = new Array(
  "children",
  "slot2",
  "slot3",
  "slot"
);

function PlasmicCardIconHeadlineBody__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_deactivated]: hasVariant(
          variants,
          "state",
          "deactivated"
        )
      })}
      component={Link}
      platform={"nextjs"}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div className={classNames(defaultcss.all, sty.box__aUrNg)}>
        <div className={classNames(defaultcss.all, sty.box___4BYjy)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon56Icon
                className={classNames(defaultcss.all, sty.svg__sjSC)}
                role={"img"}
              />
            ),

            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__state_deactivated]: hasVariant(
                variants,
                "state",
                "deactivated"
              )
            })
          })}
        </div>
      </div>

      <TextLinkArrow
        data-plasmic-name={"textLinkArrow"}
        data-plasmic-override={overrides.textLinkArrow}
        className={classNames("__wab_instance", sty.textLinkArrow, {
          [sty.textLinkArrow__state_deactivated]: hasVariant(
            variants,
            "state",
            "deactivated"
          )
        })}
        color={triggers.hover_root ? "dark" : "dark"}
        direction={"right"}
        svgRight={p.renderPlasmicSlot({
          defaultContents: (
            <Icon118Icon
              className={classNames(defaultcss.all, sty.svg__g1Xr)}
              role={"img"}
            />
          ),

          value: args.slot3,
          className: classNames(sty.slotSlot3, {
            [sty.slotSlot3__state_deactivated]: hasVariant(
              variants,
              "state",
              "deactivated"
            )
          })
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: triggers.hover_root ? "Headline" : "Headline",
          value: args.slot2,
          className: classNames(sty.slotSlot2, {
            [sty.slotSlot2__state_deactivated]: hasVariant(
              variants,
              "state",
              "deactivated"
            )
          })
        })}
      </TextLinkArrow>

      <div
        data-plasmic-name={"accountBodyText"}
        data-plasmic-override={overrides.accountBodyText}
        className={classNames(defaultcss.all, sty.accountBodyText)}
      >
        <div className={classNames(defaultcss.all, sty.box___3Ewwn)}>
          {p.renderPlasmicSlot({
            defaultContents: triggers.hover_root ? "Body text" : "Body text",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__state_deactivated]: hasVariant(
                variants,
                "state",
                "deactivated"
              )
            })
          })}
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textLinkArrow", "accountBodyText"],
  textLinkArrow: ["textLinkArrow"],
  accountBodyText: ["accountBodyText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardIconHeadlineBody__ArgProps,
      internalVariantPropNames: PlasmicCardIconHeadlineBody__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardIconHeadlineBody__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardIconHeadlineBody";
  } else {
    func.displayName = `PlasmicCardIconHeadlineBody.${nodeName}`;
  }
  return func;
}

export const PlasmicCardIconHeadlineBody = Object.assign(
  // Top-level PlasmicCardIconHeadlineBody renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textLinkArrow: makeNodeComponent("textLinkArrow"),
    accountBodyText: makeNodeComponent("accountBodyText"),
    // Metadata about props expected for PlasmicCardIconHeadlineBody
    internalVariantProps: PlasmicCardIconHeadlineBody__VariantProps,
    internalArgProps: PlasmicCardIconHeadlineBody__ArgProps
  }
);

export default PlasmicCardIconHeadlineBody;
/* prettier-ignore-end */
