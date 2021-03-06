// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: gTweajUNVw
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicBreadcrumb.module.css"; // plasmic-import: gTweajUNVw/css

export const PlasmicBreadcrumb__VariantProps = new Array(
  "hasDestination",
  "isLast",
  "isSelected"
);

export const PlasmicBreadcrumb__ArgProps = new Array("label", "destination");

function PlasmicBreadcrumb__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.roothasDestination]: hasVariant(
            variants,
            "hasDestination",
            "hasDestination"
          )
        }
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxhasDestination]: hasVariant(
            variants,
            "hasDestination",
            "hasDestination"
          ),

          [sty.freeBoxisSelected]: hasVariant(
            variants,
            "isSelected",
            "isSelected"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabelhasDestination]: hasVariant(
              variants,
              "hasDestination",
              "hasDestination"
            ),

            [sty.slotTargetLabelisSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })
        })}

        {(hasVariant(variants, "isLast", "isLast") ? false : true) ? (
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              { [sty.textisLast]: hasVariant(variants, "isLast", "isLast") }
            )}
          >
            {"/"}
          </div>
        ) : null}
      </p.Stack>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBreadcrumb__ArgProps,
      internalVariantPropNames: PlasmicBreadcrumb__VariantProps
    });

    return PlasmicBreadcrumb__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBreadcrumb";
  } else {
    func.displayName = `PlasmicBreadcrumb.${nodeName}`;
  }
  return func;
}

export const PlasmicBreadcrumb = Object.assign(
  // Top-level PlasmicBreadcrumb renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBreadcrumb
    internalVariantProps: PlasmicBreadcrumb__VariantProps,
    internalArgProps: PlasmicBreadcrumb__ArgProps
  }
);

export default PlasmicBreadcrumb;
/* prettier-ignore-end */
