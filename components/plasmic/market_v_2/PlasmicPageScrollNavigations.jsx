// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 4xruSD_IDH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Tab from "../../Tab"; // plasmic-import: tCiyOEgIeVL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPageScrollNavigations.module.css"; // plasmic-import: 4xruSD_IDH/css

export const PlasmicPageScrollNavigations__VariantProps = new Array();

export const PlasmicPageScrollNavigations__ArgProps = new Array("children");

function PlasmicPageScrollNavigations__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <Tab
              activeBorder={"left"}
              className={classNames("__wab_instance", sty.tab__hgIQy)}
              state={"selected"}
            />

            <Tab className={classNames("__wab_instance", sty.tab___5Hvs2)} />

            <Tab className={classNames("__wab_instance", sty.tab__e85Nw)} />
          </React.Fragment>
        ),

        value: args.children
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPageScrollNavigations__ArgProps,
      internalVariantPropNames: PlasmicPageScrollNavigations__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPageScrollNavigations__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageScrollNavigations";
  } else {
    func.displayName = `PlasmicPageScrollNavigations.${nodeName}`;
  }
  return func;
}

export const PlasmicPageScrollNavigations = Object.assign(
  // Top-level PlasmicPageScrollNavigations renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPageScrollNavigations
    internalVariantProps: PlasmicPageScrollNavigations__VariantProps,
    internalArgProps: PlasmicPageScrollNavigations__ArgProps
  }
);

export default PlasmicPageScrollNavigations;
/* prettier-ignore-end */
