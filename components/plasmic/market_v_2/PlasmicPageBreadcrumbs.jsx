// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ZTbdEO5NC7
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Breadcrumb from "../../Breadcrumb"; // plasmic-import: gTweajUNVw/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPageBreadcrumbs.module.css"; // plasmic-import: ZTbdEO5NC7/css

export const PlasmicPageBreadcrumbs__VariantProps = new Array();

export const PlasmicPageBreadcrumbs__ArgProps = new Array(
  "children",
  "separator"
);

function PlasmicPageBreadcrumbs__RenderFunc(props) {
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
            <Breadcrumb
              className={classNames("__wab_instance", sty.breadcrumb__f1Lqj)}
              hasDestination={"hasDestination"}
              label={"Home"}
            />

            <Breadcrumb
              className={classNames("__wab_instance", sty.breadcrumb__s52Gv)}
              hasDestination={"hasDestination"}
              label={"Breacrumb 1"}
            />

            <Breadcrumb
              className={classNames("__wab_instance", sty.breadcrumb__ce9Iu)}
              isLast={"isLast"}
              isSelected={"isSelected"}
              label={"Breadcrumb 2"}
            />
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
      internalArgPropNames: PlasmicPageBreadcrumbs__ArgProps,
      internalVariantPropNames: PlasmicPageBreadcrumbs__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPageBreadcrumbs__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageBreadcrumbs";
  } else {
    func.displayName = `PlasmicPageBreadcrumbs.${nodeName}`;
  }
  return func;
}

export const PlasmicPageBreadcrumbs = Object.assign(
  // Top-level PlasmicPageBreadcrumbs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPageBreadcrumbs
    internalVariantProps: PlasmicPageBreadcrumbs__VariantProps,
    internalArgProps: PlasmicPageBreadcrumbs__ArgProps
  }
);

export default PlasmicPageBreadcrumbs;
/* prettier-ignore-end */
