// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Bsm9hmgzlseA
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: pP9c6XTFzc/component
import MemberPricingComponent from "../../MemberPricingComponent"; // plasmic-import: GHyutJMpWs/component
import Footer from "../../Footer"; // plasmic-import: eCAXzaJOOM3/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicMemberpricing.module.css"; // plasmic-import: Bsm9hmgzlseA/css

export const PlasmicMemberpricing__VariantProps = new Array();

export const PlasmicMemberpricing__ArgProps = new Array();

function PlasmicMemberpricing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Membership Pricing | Intrepid Market"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Membership Pricing | Intrepid Market"}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"navbarWrapper"}
              data-plasmic-override={overrides.navbarWrapper}
              className={classNames(projectcss.all, sty.navbarWrapper)}
            >
              <Navbar
                data-plasmic-name={"navbar"}
                data-plasmic-override={overrides.navbar}
                className={classNames("__wab_instance", sty.navbar)}
                dark={true}
              />
            </div>
          ) : null}

          <MemberPricingComponent
            data-plasmic-name={"memberPricingComponent"}
            data-plasmic-override={overrides.memberPricingComponent}
            className={classNames("__wab_instance", sty.memberPricingComponent)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
            color={true}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbarWrapper", "navbar", "memberPricingComponent", "footer"],
  navbarWrapper: ["navbarWrapper", "navbar"],
  navbar: ["navbar"],
  memberPricingComponent: ["memberPricingComponent"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMemberpricing__ArgProps,
      internalVariantPropNames: PlasmicMemberpricing__VariantProps
    });

    return PlasmicMemberpricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMemberpricing";
  } else {
    func.displayName = `PlasmicMemberpricing.${nodeName}`;
  }
  return func;
}

export const PlasmicMemberpricing = Object.assign(
  // Top-level PlasmicMemberpricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarWrapper: makeNodeComponent("navbarWrapper"),
    navbar: makeNodeComponent("navbar"),
    memberPricingComponent: makeNodeComponent("memberPricingComponent"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicMemberpricing
    internalVariantProps: PlasmicMemberpricing__VariantProps,
    internalArgProps: PlasmicMemberpricing__ArgProps
  }
);

export default PlasmicMemberpricing;
/* prettier-ignore-end */
