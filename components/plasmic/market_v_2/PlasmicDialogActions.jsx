// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 7eX45QUnNW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicDialogActions.module.css"; // plasmic-import: 7eX45QUnNW/css

export const PlasmicDialogActions__VariantProps = new Array();

export const PlasmicDialogActions__ArgProps = new Array();

function PlasmicDialogActions__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <Button
        data-plasmic-name={"cancelButton"}
        data-plasmic-override={overrides.cancelButton}
        className={classNames("__wab_instance", sty.cancelButton)}
        type={"ghost"}
      >
        {"Cancel"}
      </Button>

      <Button
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton)}
        color={"brand"}
      >
        {"Submit"}
      </Button>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "cancelButton", "submitButton"],
  cancelButton: ["cancelButton"],
  submitButton: ["submitButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDialogActions__ArgProps,
      internalVariantPropNames: PlasmicDialogActions__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDialogActions__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialogActions";
  } else {
    func.displayName = `PlasmicDialogActions.${nodeName}`;
  }
  return func;
}

export const PlasmicDialogActions = Object.assign(
  // Top-level PlasmicDialogActions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cancelButton: makeNodeComponent("cancelButton"),
    submitButton: makeNodeComponent("submitButton"),
    // Metadata about props expected for PlasmicDialogActions
    internalVariantProps: PlasmicDialogActions__VariantProps,
    internalArgProps: PlasmicDialogActions__ArgProps
  }
);

export default PlasmicDialogActions;
/* prettier-ignore-end */
