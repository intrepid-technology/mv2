// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 2wDe-7IRwt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonStripeVerification from "../../ButtonStripeVerification"; // plasmic-import: GEqD9diS3J/component
import ChipStripeLink from "../../ChipStripeLink"; // plasmic-import: TzNLRNFhlx/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonGroupStripeVerification.module.css"; // plasmic-import: 2wDe-7IRwt/css

export const PlasmicButtonGroupStripeVerification__VariantProps = new Array();

export const PlasmicButtonGroupStripeVerification__ArgProps = new Array();

function PlasmicButtonGroupStripeVerification__RenderFunc(props) {
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
      <ButtonStripeVerification
        data-plasmic-name={"buttonStripeVerification"}
        data-plasmic-override={overrides.buttonStripeVerification}
        className={classNames("__wab_instance", sty.buttonStripeVerification)}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"noteLinkParent"}
        data-plasmic-override={overrides.noteLinkParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.noteLinkParent)}
      >
        <div
          data-plasmic-name={"descriptionParent"}
          data-plasmic-override={overrides.descriptionParent}
          className={classNames(defaultcss.all, sty.descriptionParent)}
        >
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box
            )}
          >
            {"Verify your account and activate more benefits"}
          </div>
        </div>

        <ChipStripeLink
          data-plasmic-name={"chipStripeLink"}
          data-plasmic-override={overrides.chipStripeLink}
          className={classNames("__wab_instance", sty.chipStripeLink)}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "buttonStripeVerification",
    "noteLinkParent",
    "descriptionParent",
    "box",
    "chipStripeLink"
  ],

  buttonStripeVerification: ["buttonStripeVerification"],
  noteLinkParent: [
    "noteLinkParent",
    "descriptionParent",
    "box",
    "chipStripeLink"
  ],

  descriptionParent: ["descriptionParent", "box"],
  box: ["box"],
  chipStripeLink: ["chipStripeLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonGroupStripeVerification__ArgProps,
      internalVariantPropNames:
        PlasmicButtonGroupStripeVerification__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonGroupStripeVerification__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonGroupStripeVerification";
  } else {
    func.displayName = `PlasmicButtonGroupStripeVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonGroupStripeVerification = Object.assign(
  // Top-level PlasmicButtonGroupStripeVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonStripeVerification: makeNodeComponent("buttonStripeVerification"),
    noteLinkParent: makeNodeComponent("noteLinkParent"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    box: makeNodeComponent("box"),
    chipStripeLink: makeNodeComponent("chipStripeLink"),
    // Metadata about props expected for PlasmicButtonGroupStripeVerification
    internalVariantProps: PlasmicButtonGroupStripeVerification__VariantProps,
    internalArgProps: PlasmicButtonGroupStripeVerification__ArgProps
  }
);

export default PlasmicButtonGroupStripeVerification;
/* prettier-ignore-end */
