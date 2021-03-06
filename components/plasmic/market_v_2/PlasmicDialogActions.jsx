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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicDialogActions.module.css"; // plasmic-import: 7eX45QUnNW/css

export const PlasmicDialogActions__VariantProps = new Array();

export const PlasmicDialogActions__ArgProps = new Array();

function PlasmicDialogActions__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
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

    return PlasmicDialogActions__RenderFunc({
      variants,
      args,
      overrides,
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
