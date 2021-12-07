// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 8FwFZYKbmK
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
import * as sty from "./PlasmicPageTabNavigations.module.css"; // plasmic-import: 8FwFZYKbmK/css

export const PlasmicPageTabNavigations__VariantProps = new Array();

export const PlasmicPageTabNavigations__ArgProps = new Array("children");

function PlasmicPageTabNavigations__RenderFunc(props) {
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
            <Tab className={classNames("__wab_instance", sty.tab__ms4V)} />

            <Tab className={classNames("__wab_instance", sty.tab__cDaeN)} />

            <Tab className={classNames("__wab_instance", sty.tab__vIzEs)} />
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
      internalArgPropNames: PlasmicPageTabNavigations__ArgProps,
      internalVariantPropNames: PlasmicPageTabNavigations__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPageTabNavigations__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageTabNavigations";
  } else {
    func.displayName = `PlasmicPageTabNavigations.${nodeName}`;
  }
  return func;
}

export const PlasmicPageTabNavigations = Object.assign(
  // Top-level PlasmicPageTabNavigations renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPageTabNavigations
    internalVariantProps: PlasmicPageTabNavigations__VariantProps,
    internalArgProps: PlasmicPageTabNavigations__ArgProps
  }
);

export default PlasmicPageTabNavigations;
/* prettier-ignore-end */
