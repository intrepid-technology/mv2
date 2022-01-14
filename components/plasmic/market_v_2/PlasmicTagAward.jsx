// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: FRNfGE_ayy
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTagAward.module.css"; // plasmic-import: FRNfGE_ayy/css
import Icon52Icon from "./icons/PlasmicIcon__Icon52"; // plasmic-import: QGTlaxIryG/icon

export const PlasmicTagAward__VariantProps = new Array();

export const PlasmicTagAward__ArgProps = new Array("children", "iconParent");

function PlasmicTagAward__RenderFunc(props) {
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
      <div
        data-plasmic-name={"textDivParent"}
        data-plasmic-override={overrides.textDivParent}
        className={classNames(projectcss.all, sty.textDivParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Award",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>

      <div
        data-plasmic-name={"iconDivparent"}
        data-plasmic-override={overrides.iconDivparent}
        className={classNames(projectcss.all, sty.iconDivparent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Icon52Icon
              className={classNames(projectcss.all, sty.svg__zj3Xk)}
              role={"img"}
            />
          ),

          value: args.iconParent,
          className: classNames(sty.slotTargetIconParent)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textDivParent", "iconDivparent"],
  textDivParent: ["textDivParent"],
  iconDivparent: ["iconDivparent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTagAward__ArgProps,
      internalVariantPropNames: PlasmicTagAward__VariantProps
    });

    return PlasmicTagAward__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagAward";
  } else {
    func.displayName = `PlasmicTagAward.${nodeName}`;
  }
  return func;
}

export const PlasmicTagAward = Object.assign(
  // Top-level PlasmicTagAward renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textDivParent: makeNodeComponent("textDivParent"),
    iconDivparent: makeNodeComponent("iconDivparent"),
    // Metadata about props expected for PlasmicTagAward
    internalVariantProps: PlasmicTagAward__VariantProps,
    internalArgProps: PlasmicTagAward__ArgProps
  }
);

export default PlasmicTagAward;
/* prettier-ignore-end */
