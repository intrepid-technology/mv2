// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: wN2--_wR69
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputEmailA from "../../InputEmailA"; // plasmic-import: Umu_QfvTrP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputEmailCta.module.css"; // plasmic-import: wN2--_wR69/css

export const PlasmicInputEmailCta__VariantProps = new Array("size");

export const PlasmicInputEmailCta__ArgProps = new Array("children", "slot");

function PlasmicInputEmailCta__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size__360]: hasVariant(variants, "size", "_360"),
        [sty.root__size__720]: hasVariant(variants, "size", "_720")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parentSectionInputEmail"}
        data-plasmic-override={overrides.parentSectionInputEmail}
        hasGap={true}
        className={classNames(projectcss.all, sty.parentSectionInputEmail, {
          [sty.parentSectionInputEmail__size__720]: hasVariant(
            variants,
            "size",
            "_720"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9RBj, {
            [sty.freeBox__size__720___9RBjwcyQu]: hasVariant(
              variants,
              "size",
              "_720"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wi05I, {
              [sty.freeBox__size__720__wi05IwcyQu]: hasVariant(
                variants,
                "size",
                "_720"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Turn your services into a scalable & profitable business",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren__size__720]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              })
            })}

            <div className={classNames(projectcss.all, sty.freeBox__tkWdt)}>
              {p.renderPlasmicSlot({
                defaultContents:
                  "Explore all the specialised tools and services you need to start, run, and grow a global technology and creative services business.",
                value: args.slot,
                className: classNames(sty.slotTargetSlot, {
                  [sty.slotTargetSlot__size__720]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  )
                })
              })}
            </div>
          </p.Stack>
        </p.Stack>

        <InputEmailA
          data-plasmic-name={"inputEmailA"}
          data-plasmic-override={overrides.inputEmailA}
          className={classNames("__wab_instance", sty.inputEmailA, {
            [sty.inputEmailA__size__720]: hasVariant(variants, "size", "_720")
          })}
          size={hasVariant(variants, "size", "_720") ? "_540" : undefined}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "parentSectionInputEmail", "inputEmailA"],
  parentSectionInputEmail: ["parentSectionInputEmail", "inputEmailA"],
  inputEmailA: ["inputEmailA"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputEmailCta__ArgProps,
      internalVariantPropNames: PlasmicInputEmailCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputEmailCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputEmailCta";
  } else {
    func.displayName = `PlasmicInputEmailCta.${nodeName}`;
  }
  return func;
}

export const PlasmicInputEmailCta = Object.assign(
  // Top-level PlasmicInputEmailCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parentSectionInputEmail: makeNodeComponent("parentSectionInputEmail"),
    inputEmailA: makeNodeComponent("inputEmailA"),
    // Metadata about props expected for PlasmicInputEmailCta
    internalVariantProps: PlasmicInputEmailCta__VariantProps,
    internalArgProps: PlasmicInputEmailCta__ArgProps
  }
);

export default PlasmicInputEmailCta;
/* prettier-ignore-end */
