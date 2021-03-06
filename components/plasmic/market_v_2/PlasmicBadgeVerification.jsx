// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: _M5uzrbjQp
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicBadgeVerification.module.css"; // plasmic-import: _M5uzrbjQp/css
import Icon129Icon from "./icons/PlasmicIcon__Icon129"; // plasmic-import: 1Q3PXgbL-f/icon

export const PlasmicBadgeVerification__VariantProps = new Array();

export const PlasmicBadgeVerification__ArgProps = new Array();

function PlasmicBadgeVerification__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(projectcss.all, sty.parent)}
        >
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <Icon129Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Verified"}
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "svg", "text"],
  parent: ["parent", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBadgeVerification__ArgProps,
      internalVariantPropNames: PlasmicBadgeVerification__VariantProps
    });

    return PlasmicBadgeVerification__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBadgeVerification";
  } else {
    func.displayName = `PlasmicBadgeVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicBadgeVerification = Object.assign(
  // Top-level PlasmicBadgeVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBadgeVerification
    internalVariantProps: PlasmicBadgeVerification__VariantProps,
    internalArgProps: PlasmicBadgeVerification__ArgProps
  }
);

export default PlasmicBadgeVerification;
/* prettier-ignore-end */
