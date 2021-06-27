// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: IF5nud1uvm2
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputFormCardBasic.module.css"; // plasmic-import: IF5nud1uvm2/css

export const PlasmicInputFormCardBasic__VariantProps = new Array(
  "description",
  "border"
);

export const PlasmicInputFormCardBasic__ArgProps = new Array(
  "headline",
  "subhead",
  "description2",
  "slot3"
);

function PlasmicInputFormCardBasic__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__border]: hasVariant(variants, "border", "border")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"headlineCard"}
          data-plasmic-override={overrides.headlineCard}
          hasGap={true}
          className={classNames(defaultcss.all, sty.headlineCard, {
            [sty.headlineCard__border]: hasVariant(variants, "border", "border")
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headlineSubheadParent"}
            data-plasmic-override={overrides.headlineSubheadParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.headlineSubheadParent)}
          >
            <div
              data-plasmic-name={"headline"}
              data-plasmic-override={overrides.headline}
              className={classNames(defaultcss.all, sty.headline)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Headline",
                value: args.headline,
                className: classNames(sty.slotHeadline)
              })}
            </div>

            <div
              data-plasmic-name={"subheadParent"}
              data-plasmic-override={overrides.subheadParent}
              className={classNames(defaultcss.all, sty.subheadParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Sub head",
                value: args.subhead,
                className: classNames(sty.slotSubhead)
              })}
            </div>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"descriptionCard"}
          data-plasmic-override={overrides.descriptionCard}
          hasGap={true}
          className={classNames(defaultcss.all, sty.descriptionCard, {
            [sty.descriptionCard__description]: hasVariant(
              variants,
              "description",
              "description"
            )
          })}
        >
          <div
            data-plasmic-name={"descriptionParent"}
            data-plasmic-override={overrides.descriptionParent}
            className={classNames(defaultcss.all, sty.descriptionParent)}
          >
            {(hasVariant(variants, "description", "description") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: "Description",
                  value: args.description2,
                  className: classNames(sty.slotDescription2, {
                    [sty.slotDescription2__description]: hasVariant(
                      variants,
                      "description",
                      "description"
                    )
                  })
                })
              : null}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: (
              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary___3QyVv
                )}
                size={"_140"}
              >
                {"Delete account"}
              </ButtonPrimary>
            ),

            value: args.slot3
          })}
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "headlineCard",
    "headlineSubheadParent",
    "headline",
    "subheadParent",
    "descriptionCard",
    "descriptionParent"
  ],

  parent: [
    "parent",
    "headlineCard",
    "headlineSubheadParent",
    "headline",
    "subheadParent",
    "descriptionCard",
    "descriptionParent"
  ],

  headlineCard: [
    "headlineCard",
    "headlineSubheadParent",
    "headline",
    "subheadParent"
  ],

  headlineSubheadParent: ["headlineSubheadParent", "headline", "subheadParent"],
  headline: ["headline"],
  subheadParent: ["subheadParent"],
  descriptionCard: ["descriptionCard", "descriptionParent"],
  descriptionParent: ["descriptionParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputFormCardBasic__ArgProps,
      internalVariantPropNames: PlasmicInputFormCardBasic__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputFormCardBasic__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputFormCardBasic";
  } else {
    func.displayName = `PlasmicInputFormCardBasic.${nodeName}`;
  }
  return func;
}

export const PlasmicInputFormCardBasic = Object.assign(
  // Top-level PlasmicInputFormCardBasic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineCard: makeNodeComponent("headlineCard"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headline: makeNodeComponent("headline"),
    subheadParent: makeNodeComponent("subheadParent"),
    descriptionCard: makeNodeComponent("descriptionCard"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    // Metadata about props expected for PlasmicInputFormCardBasic
    internalVariantProps: PlasmicInputFormCardBasic__VariantProps,
    internalArgProps: PlasmicInputFormCardBasic__ArgProps
  }
);

export default PlasmicInputFormCardBasic;
/* prettier-ignore-end */