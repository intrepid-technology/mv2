// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: T4YXTQYWhk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTableMembershipHeader.module.css"; // plasmic-import: T4YXTQYWhk/css

export const PlasmicTableMembershipHeader__VariantProps = new Array();

export const PlasmicTableMembershipHeader__ArgProps = new Array();

function PlasmicTableMembershipHeader__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__qK279)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__a3KQy
          )}
        >
          {"membership"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__oogN2)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mA29P
          )}
        >
          {"Seats"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__oZw0L)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__h0SDq
          )}
        >
          {"price"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__zAdKr)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sJHmB
          )}
        >
          {"Exp. Date"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__pxwwt)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mlLbQ
          )}
        >
          {"renew"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___3BaDh)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mms1R
          )}
        >
          {"Action"}
        </div>
      </div>
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
      internalArgPropNames: PlasmicTableMembershipHeader__ArgProps,
      internalVariantPropNames: PlasmicTableMembershipHeader__VariantProps
    });

    return PlasmicTableMembershipHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableMembershipHeader";
  } else {
    func.displayName = `PlasmicTableMembershipHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTableMembershipHeader = Object.assign(
  // Top-level PlasmicTableMembershipHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTableMembershipHeader
    internalVariantProps: PlasmicTableMembershipHeader__VariantProps,
    internalArgProps: PlasmicTableMembershipHeader__ArgProps
  }
);

export default PlasmicTableMembershipHeader;
/* prettier-ignore-end */
