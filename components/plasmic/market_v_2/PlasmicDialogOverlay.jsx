// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: a2oovV1JBa
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
import * as sty from "./PlasmicDialogOverlay.module.css"; // plasmic-import: a2oovV1JBa/css

export const PlasmicDialogOverlay__VariantProps = new Array();

export const PlasmicDialogOverlay__ArgProps = new Array("children");

function PlasmicDialogOverlay__RenderFunc(props) {
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
      <div
        data-plasmic-name={"fixedDiv"}
        data-plasmic-override={overrides.fixedDiv}
        className={classNames(defaultcss.all, projectcss.all, sty.fixedDiv)}
      >
        <div
          data-plasmic-name={"absoluteDiv"}
          data-plasmic-override={overrides.absoluteDiv}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.absoluteDiv
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"dialogDiv"}
            data-plasmic-override={overrides.dialogDiv}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.dialogDiv
            )}
          >
            <div
              data-plasmic-name={"contentWrapper"}
              data-plasmic-override={overrides.contentWrapper}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.contentWrapper
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: null,
                value: args.children
              })}
            </div>
          </p.Stack>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "fixedDiv", "absoluteDiv", "dialogDiv", "contentWrapper"],
  fixedDiv: ["fixedDiv", "absoluteDiv", "dialogDiv", "contentWrapper"],
  absoluteDiv: ["absoluteDiv", "dialogDiv", "contentWrapper"],
  dialogDiv: ["dialogDiv", "contentWrapper"],
  contentWrapper: ["contentWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDialogOverlay__ArgProps,
      internalVariantPropNames: PlasmicDialogOverlay__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDialogOverlay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialogOverlay";
  } else {
    func.displayName = `PlasmicDialogOverlay.${nodeName}`;
  }
  return func;
}

export const PlasmicDialogOverlay = Object.assign(
  // Top-level PlasmicDialogOverlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fixedDiv: makeNodeComponent("fixedDiv"),
    absoluteDiv: makeNodeComponent("absoluteDiv"),
    dialogDiv: makeNodeComponent("dialogDiv"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    // Metadata about props expected for PlasmicDialogOverlay
    internalVariantProps: PlasmicDialogOverlay__VariantProps,
    internalArgProps: PlasmicDialogOverlay__ArgProps
  }
);

export default PlasmicDialogOverlay;
/* prettier-ignore-end */
