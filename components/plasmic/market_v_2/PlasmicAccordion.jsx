// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: azR0jnXzDL
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicAccordion.module.css"; // plasmic-import: azR0jnXzDL/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicAccordion__VariantProps = new Array("size");

export const PlasmicAccordion__ArgProps = new Array("children");

function PlasmicAccordion__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size__360]: hasVariant(variants, "size", "_360")
      })}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__sBh8I)}>
        <div className={classNames(defaultcss.all, sty.freeBox__hHnLy)}>
          <div className={classNames(defaultcss.all, sty.freeBox___8Z3Kv)}>
            {p.renderPlasmicSlot({
              defaultContents: "Accordion",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__size__360]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              })
            })}
          </div>
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__mHsMa)}>
        <div className={classNames(defaultcss.all, sty.freeBox__lw9Pw)}>
          <PlusBoldIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg, {
              [sty.svg__size__360]: hasVariant(variants, "size", "_360")
            })}
            role={"img"}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAccordion__ArgProps,
      internalVariantPropNames: PlasmicAccordion__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAccordion__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordion";
  } else {
    func.displayName = `PlasmicAccordion.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordion = Object.assign(
  // Top-level PlasmicAccordion renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicAccordion
    internalVariantProps: PlasmicAccordion__VariantProps,
    internalArgProps: PlasmicAccordion__ArgProps
  }
);

export default PlasmicAccordion;
/* prettier-ignore-end */
