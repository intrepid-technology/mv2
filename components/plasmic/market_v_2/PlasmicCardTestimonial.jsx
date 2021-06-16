// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 1Jyr2EbmPr
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardTestimonial.module.css"; // plasmic-import: 1Jyr2EbmPr/css

export const PlasmicCardTestimonial__VariantProps = new Array();

export const PlasmicCardTestimonial__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3"
);

function PlasmicCardTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__ju0U3)}
            role={"img"}
          />
        ),

        value: args.slot3
      })}

      <div className={classNames(defaultcss.all, sty.box___0GW0V)}>
        <div className={classNames(defaultcss.all, sty.box___7QjsC)}>
          <div className={classNames(defaultcss.all, sty.box__e3NvI)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Our company had an excellent experience with Intrepid. As a startup, we had a limited budget, and we were on a tight deadline. We needed a mobile app for our fintech application, that has complicated features. But it ended up being super easy to find a purchase a package. In the end, the process was smooth and straightforward.”",
              value: args.children,
              className: classNames(sty.slotChildren)
            })}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__n6Om6)}>
          <div className={classNames(defaultcss.all, sty.box__tIx4I)}>
            {p.renderPlasmicSlot({
              defaultContents: "Collin Thompson",
              value: args.slot,
              className: classNames(sty.slotSlot)
            })}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__ynnS1)}>
          <div className={classNames(defaultcss.all, sty.box__usx1B)}>
            {p.renderPlasmicSlot({
              defaultContents: "CEO @ Intrepid",
              value: args.slot2,
              className: classNames(sty.slotSlot2)
            })}
          </div>
        </div>
      </div>
    </div>
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
      internalArgPropNames: PlasmicCardTestimonial__ArgProps,
      internalVariantPropNames: PlasmicCardTestimonial__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardTestimonial";
  } else {
    func.displayName = `PlasmicCardTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicCardTestimonial = Object.assign(
  // Top-level PlasmicCardTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCardTestimonial
    internalVariantProps: PlasmicCardTestimonial__VariantProps,
    internalArgProps: PlasmicCardTestimonial__ArgProps
  }
);

export default PlasmicCardTestimonial;
/* prettier-ignore-end */
