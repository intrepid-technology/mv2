// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XhB16zaJfQ
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
import sty from "./PlasmicFooterServiceListing.module.css"; // plasmic-import: XhB16zaJfQ/css

export const PlasmicFooterServiceListing__VariantProps = new Array();

export const PlasmicFooterServiceListing__ArgProps = new Array("children");

function PlasmicFooterServiceListing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
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
        data-plasmic-name={"saveButton"}
        data-plasmic-override={overrides.saveButton}
        className={classNames("__wab_instance", sty.saveButton)}
        type={"ghost"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hcTe
              )}
            >
              {"Save & Exit"}
            </div>
          ),

          value: args.children
        })}
      </Button>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "saveButton"],
  saveButton: ["saveButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterServiceListing__ArgProps,
      internalVariantPropNames: PlasmicFooterServiceListing__VariantProps
    });

    return PlasmicFooterServiceListing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterServiceListing";
  } else {
    func.displayName = `PlasmicFooterServiceListing.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterServiceListing = Object.assign(
  // Top-level PlasmicFooterServiceListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    saveButton: makeNodeComponent("saveButton"),
    // Metadata about props expected for PlasmicFooterServiceListing
    internalVariantProps: PlasmicFooterServiceListing__VariantProps,
    internalArgProps: PlasmicFooterServiceListing__ArgProps
  }
);

export default PlasmicFooterServiceListing;
/* prettier-ignore-end */
