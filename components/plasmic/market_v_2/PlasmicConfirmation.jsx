// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 7QtXkc5UVi
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarStatic from "../../NavbarStatic"; // plasmic-import: rvDpPOFOSj/component
import SectionConfirmEmail from "../../SectionConfirmEmail"; // plasmic-import: JvAgiFRYLj/component
import FooterB from "../../FooterB"; // plasmic-import: kxeO2gTzwxU/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicConfirmation.module.css"; // plasmic-import: 7QtXkc5UVi/css

export const PlasmicConfirmation__VariantProps = new Array();

export const PlasmicConfirmation__ArgProps = new Array();

function PlasmicConfirmation__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

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
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavbarStatic
            data-plasmic-name={"navbarStatic"}
            data-plasmic-override={overrides.navbarStatic}
            className={classNames("__wab_instance", sty.navbarStatic)}
          />

          <SectionConfirmEmail
            data-plasmic-name={"sectionConfirmEmail"}
            data-plasmic-override={overrides.sectionConfirmEmail}
            className={classNames("__wab_instance", sty.sectionConfirmEmail)}
          />

          <FooterB
            data-plasmic-name={"footerB"}
            data-plasmic-override={overrides.footerB}
            className={classNames("__wab_instance", sty.footerB)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbarStatic", "sectionConfirmEmail", "footerB"],
  navbarStatic: ["navbarStatic"],
  sectionConfirmEmail: ["sectionConfirmEmail"],
  footerB: ["footerB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicConfirmation__ArgProps,
      internalVariantPropNames: PlasmicConfirmation__VariantProps
    });

    return PlasmicConfirmation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConfirmation";
  } else {
    func.displayName = `PlasmicConfirmation.${nodeName}`;
  }
  return func;
}

export const PlasmicConfirmation = Object.assign(
  // Top-level PlasmicConfirmation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarStatic: makeNodeComponent("navbarStatic"),
    sectionConfirmEmail: makeNodeComponent("sectionConfirmEmail"),
    footerB: makeNodeComponent("footerB"),
    // Metadata about props expected for PlasmicConfirmation
    internalVariantProps: PlasmicConfirmation__VariantProps,
    internalArgProps: PlasmicConfirmation__ArgProps
  }
);

export default PlasmicConfirmation;
/* prettier-ignore-end */
