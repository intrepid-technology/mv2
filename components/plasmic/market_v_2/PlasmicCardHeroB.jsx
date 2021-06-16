// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: IV4J8cvjZ_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardHeroB.module.css"; // plasmic-import: IV4J8cvjZ_/css

export const PlasmicCardHeroB__VariantProps = new Array();

export const PlasmicCardHeroB__ArgProps = new Array(
  "slot",
  "children",
  "slot2"
);

function PlasmicCardHeroB__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__bjvwz)}>
        <div className={classNames(defaultcss.all, sty.box__gvaq6)}>
          <div className={classNames(defaultcss.all, sty.box___4W8Q9)}>
            {p.renderPlasmicSlot({
              defaultContents: "Start your business journey with Intrepid",
              value: args.slot,
              className: classNames(sty.slotSlot)
            })}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box___5ZxCo)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Try Intrepid for free, and explore all the tools and services you need to start, run, and grow your business.",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>

        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary)}
          color={"brand"}
          size={"_140"}
        >
          {"Start free trial"}
        </ButtonPrimary>
      </div>

      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__o1EqS)}
            role={"img"}
          />
        ),

        value: args.slot2
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "buttonPrimary"],
  buttonPrimary: ["buttonPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardHeroB__ArgProps,
      internalVariantPropNames: PlasmicCardHeroB__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardHeroB__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHeroB";
  } else {
    func.displayName = `PlasmicCardHeroB.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeroB = Object.assign(
  // Top-level PlasmicCardHeroB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicCardHeroB
    internalVariantProps: PlasmicCardHeroB__VariantProps,
    internalArgProps: PlasmicCardHeroB__ArgProps
  }
);

export default PlasmicCardHeroB;
/* prettier-ignore-end */
