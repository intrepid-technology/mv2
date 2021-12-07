// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 1EZTfh04C0
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicModal.module.css"; // plasmic-import: 1EZTfh04C0/css

export const PlasmicModal__VariantProps = new Array("inputs");

export const PlasmicModal__ArgProps = new Array(
  "headline",
  "subhead",
  "bodyText",
  "children",
  "slot"
);

function PlasmicModal__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cWfDy)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__ysQD)}>
            <div className={classNames(projectcss.all, sty.freeBox___1W5DM)}>
              {p.renderPlasmicSlot({
                defaultContents: "Modal Headline Title",
                value: args.headline,
                className: classNames(sty.slotTargetHeadline)
              })}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__cViio)}>
            <div className={classNames(projectcss.all, sty.freeBox__vMsaM)}>
              {p.renderPlasmicSlot({
                defaultContents: "This is a modal to get your attention",
                value: args.subhead,
                className: classNames(sty.slotTargetSubhead)
              })}
            </div>
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__l8W)}>
          <div className={classNames(projectcss.all, sty.freeBox__oemE4)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in.",
              value: args.bodyText
            })}
          </div>
        </div>

        <div
          data-plasmic-name={"buttonParent"}
          data-plasmic-override={overrides.buttonParent}
          className={classNames(projectcss.all, sty.buttonParent)}
        >
          <button className={classNames(projectcss.button, sty.button__dxNg)}>
            <div
              data-plasmic-name={"textParent"}
              data-plasmic-override={overrides.textParent}
              className={classNames(projectcss.all, sty.textParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "cancel",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>
          </button>

          <button
            className={classNames(projectcss.button, sty.button__kn7KG, {
              [sty.button__inputs_companyName__kn7KGRcVto]: hasVariant(
                variants,
                "inputs",
                "companyName"
              )
            })}
          >
            <div
              data-plasmic-name={"textParentB"}
              data-plasmic-override={overrides.textParentB}
              className={classNames(projectcss.all, sty.textParentB)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "submit",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </button>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "buttonParent", "textParent", "textParentB"],
  parent: ["parent", "buttonParent", "textParent", "textParentB"],
  buttonParent: ["buttonParent", "textParent", "textParentB"],
  textParent: ["textParent"],
  textParentB: ["textParentB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicModal__ArgProps,
      internalVariantPropNames: PlasmicModal__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    buttonParent: makeNodeComponent("buttonParent"),
    textParent: makeNodeComponent("textParent"),
    textParentB: makeNodeComponent("textParentB"),
    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps
  }
);

export default PlasmicModal;
/* prettier-ignore-end */
