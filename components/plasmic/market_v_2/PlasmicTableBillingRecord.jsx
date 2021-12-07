// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: wWlyRBkfY1r
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableBillingRecord.module.css"; // plasmic-import: wWlyRBkfY1r/css
import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Ebjr5Ebml/icon

export const PlasmicTableBillingRecord__VariantProps = new Array();

export const PlasmicTableBillingRecord__ArgProps = new Array();

function PlasmicTableBillingRecord__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___1NXvf)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__riTOw
          )}
        >
          {"Card brand"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__o6NOc)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yo4Cq
          )}
        >
          {"Type"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___8Ljj)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ecFEl
          )}
        >
          {"XXXX"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___9Gvax)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jKFmT
          )}
        >
          {"XX"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__bYrEt
          )}
        >
          {"/"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__v8F9N
          )}
        >
          {"XXXX"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__oMr1Z)}>
        <CircleCheckedIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__hb3G1)}>
        <ButtonCircleDelete
          data-plasmic-name={"buttonCircleDelete"}
          data-plasmic-override={overrides.buttonCircleDelete}
          className={classNames("__wab_instance", sty.buttonCircleDelete)}
          size={"_24Px"}
        />
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "buttonCircleDelete"],
  svg: ["svg"],
  buttonCircleDelete: ["buttonCircleDelete"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableBillingRecord__ArgProps,
      internalVariantPropNames: PlasmicTableBillingRecord__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableBillingRecord__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableBillingRecord";
  } else {
    func.displayName = `PlasmicTableBillingRecord.${nodeName}`;
  }
  return func;
}

export const PlasmicTableBillingRecord = Object.assign(
  // Top-level PlasmicTableBillingRecord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    buttonCircleDelete: makeNodeComponent("buttonCircleDelete"),
    // Metadata about props expected for PlasmicTableBillingRecord
    internalVariantProps: PlasmicTableBillingRecord__VariantProps,
    internalArgProps: PlasmicTableBillingRecord__ArgProps
  }
);

export default PlasmicTableBillingRecord;
/* prettier-ignore-end */
