// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: KowVnZaBQEh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TagMemberD from "../../TagMemberD"; // plasmic-import: Ixqb_1Xdrz/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: M6TX-0ESZQ/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableMembershipRecord.module.css"; // plasmic-import: KowVnZaBQEh/css

export const PlasmicTableMembershipRecord__VariantProps = new Array();

export const PlasmicTableMembershipRecord__ArgProps = new Array("destination");

function PlasmicTableMembershipRecord__RenderFunc(props) {
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
      <div className={classNames(defaultcss.all, sty.box___83Jsa)}>
        <TagMemberD
          data-plasmic-name={"tagMemberD"}
          data-plasmic-override={overrides.tagMemberD}
          className={classNames("__wab_instance", sty.tagMemberD)}
        />
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__arOvr)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__dkh9N
          )}
        >
          {"1"}
        </div>

        <TextLinkUnderlinePrimary
          data-plasmic-name={"textLinkUnderlinePrimary"}
          data-plasmic-override={overrides.textLinkUnderlinePrimary}
          className={classNames("__wab_instance", sty.textLinkUnderlinePrimary)}
          destination={args.destination}
          size={"_12"}
          text={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__oWCg
              )}
            >
              {"Edit"}
            </div>
          }
        />
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__sb46C)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___9H71
          )}
        >
          {"$"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__yizoe
          )}
        >
          {"XXXX"}
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.box__imYpU)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___4EWTk
          )}
        >
          {"XX"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___3We2J
          )}
        >
          {"/"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___6CKul
          )}
        >
          {"XXXX"}
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.box__aphxW)}>
        <SwitchPrimary
          data-plasmic-name={"switchPrimary"}
          data-plasmic-override={overrides.switchPrimary}
          className={classNames("__wab_instance", sty.switchPrimary)}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box__x5MxF)}>
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
  root: [
    "root",
    "tagMemberD",
    "textLinkUnderlinePrimary",
    "switchPrimary",
    "buttonCircleDelete"
  ],

  tagMemberD: ["tagMemberD"],
  textLinkUnderlinePrimary: ["textLinkUnderlinePrimary"],
  switchPrimary: ["switchPrimary"],
  buttonCircleDelete: ["buttonCircleDelete"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableMembershipRecord__ArgProps,
      internalVariantPropNames: PlasmicTableMembershipRecord__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableMembershipRecord__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableMembershipRecord";
  } else {
    func.displayName = `PlasmicTableMembershipRecord.${nodeName}`;
  }
  return func;
}

export const PlasmicTableMembershipRecord = Object.assign(
  // Top-level PlasmicTableMembershipRecord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tagMemberD: makeNodeComponent("tagMemberD"),
    textLinkUnderlinePrimary: makeNodeComponent("textLinkUnderlinePrimary"),
    switchPrimary: makeNodeComponent("switchPrimary"),
    buttonCircleDelete: makeNodeComponent("buttonCircleDelete"),
    // Metadata about props expected for PlasmicTableMembershipRecord
    internalVariantProps: PlasmicTableMembershipRecord__VariantProps,
    internalArgProps: PlasmicTableMembershipRecord__ArgProps
  }
);

export default PlasmicTableMembershipRecord;
/* prettier-ignore-end */
