// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: HVKfDcAMU0
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
import * as sty from "./PlasmicCardHeroCta2.module.css"; // plasmic-import: HVKfDcAMU0/css

export const PlasmicCardHeroCta2__VariantProps = new Array();

export const PlasmicCardHeroCta2__ArgProps = new Array("children", "slot");

function PlasmicCardHeroCta2__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__meTMb)}>
        <div className={classNames(defaultcss.all, sty.freeBox__mPjNz)}>
          <div className={classNames(defaultcss.all, sty.freeBox__hJgt)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "The one-stop destination for buying, selling, and discovering creative technology services",
              value: args.children,
              className: classNames(sty.slotChildren)
            })}
          </div>
        </div>

        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary)}
          color={"brand"}
          size={"_140"}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__cL3Qf)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___7OtsV)}
              role={"img"}
            />
          ),

          value: args.slot
        })}
      </div>
    </div>
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
      internalArgPropNames: PlasmicCardHeroCta2__ArgProps,
      internalVariantPropNames: PlasmicCardHeroCta2__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardHeroCta2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHeroCta2";
  } else {
    func.displayName = `PlasmicCardHeroCta2.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeroCta2 = Object.assign(
  // Top-level PlasmicCardHeroCta2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicCardHeroCta2
    internalVariantProps: PlasmicCardHeroCta2__VariantProps,
    internalArgProps: PlasmicCardHeroCta2__ArgProps
  }
);

export default PlasmicCardHeroCta2;
/* prettier-ignore-end */
