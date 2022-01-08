// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: IvumJnDYzO
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarStatic from "../../NavbarStatic"; // plasmic-import: rvDpPOFOSj/component
import SectionSignUp from "../../SectionSignUp"; // plasmic-import: 3UeLqCywG7/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSignup.module.css"; // plasmic-import: IvumJnDYzO/css

export const PlasmicSignup__VariantProps = new Array();

export const PlasmicSignup__ArgProps = new Array();

function PlasmicSignup__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <NavbarStatic
            data-plasmic-name={"navbarStatic"}
            data-plasmic-override={overrides.navbarStatic}
            className={classNames("__wab_instance", sty.navbarStatic)}
          />

          <SectionSignUp
            data-plasmic-name={"sectionSignUp"}
            data-plasmic-override={overrides.sectionSignUp}
            className={classNames("__wab_instance", sty.sectionSignUp)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbarStatic", "sectionSignUp"],
  navbarStatic: ["navbarStatic"],
  sectionSignUp: ["sectionSignUp"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSignup__ArgProps,
      internalVariantPropNames: PlasmicSignup__VariantProps
    });

    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarStatic: makeNodeComponent("navbarStatic"),
    sectionSignUp: makeNodeComponent("sectionSignUp"),
    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
