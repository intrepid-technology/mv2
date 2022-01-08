// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6byT-fD8VwZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import UserAvatarButton from "../../UserAvatarButton"; // plasmic-import: w1GnXfIMuv/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputFormCardAvatar.module.css"; // plasmic-import: 6byT-fD8VwZ/css

export const PlasmicInputFormCardAvatar__VariantProps = new Array(
  "subDescription",
  "border"
);

export const PlasmicInputFormCardAvatar__ArgProps = new Array(
  "headline",
  "subHead",
  "description"
);

function PlasmicInputFormCardAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__border]: hasVariant(variants, "border", "border")
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__border]: hasVariant(variants, "border", "border")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"mainCard"}
          data-plasmic-override={overrides.mainCard}
          hasGap={true}
          className={classNames(projectcss.all, sty.mainCard, {
            [sty.mainCard__border]: hasVariant(variants, "border", "border"),
            [sty.mainCard__subDescription]: hasVariant(
              variants,
              "subDescription",
              "subDescription"
            )
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headlineParent"}
            data-plasmic-override={overrides.headlineParent}
            hasGap={true}
            className={classNames(projectcss.all, sty.headlineParent, {
              [sty.headlineParent__subDescription]: hasVariant(
                variants,
                "subDescription",
                "subDescription"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox___8FgC)}>
              <div className={classNames(projectcss.all, sty.freeBox__zGlE)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Headline",
                  value: args.headline,
                  className: classNames(sty.slotTargetHeadline, {
                    [sty.slotTargetHeadline__subDescription]: hasVariant(
                      variants,
                      "subDescription",
                      "subDescription"
                    )
                  })
                })}
              </div>
            </div>

            <div
              data-plasmic-name={"subheadParent"}
              data-plasmic-override={overrides.subheadParent}
              className={classNames(projectcss.all, sty.subheadParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Sub head",
                value: args.subHead,
                className: classNames(sty.slotTargetSubHead, {
                  [sty.slotTargetSubHead__subDescription]: hasVariant(
                    variants,
                    "subDescription",
                    "subDescription"
                  )
                })
              })}
            </div>
          </p.Stack>

          <UserAvatarButton
            data-plasmic-name={"userAvatarButton"}
            data-plasmic-override={overrides.userAvatarButton}
            className={classNames("__wab_instance", sty.userAvatarButton)}
            size={
              hasVariant(globalVariants, "screen", "iphone12ProMax")
                ? "_64Px"
                : "_80Px"
            }
          />
        </p.Stack>

        <div
          data-plasmic-name={"descriptionCard"}
          data-plasmic-override={overrides.descriptionCard}
          className={classNames(projectcss.all, sty.descriptionCard, {
            [sty.descriptionCard__border]: hasVariant(
              variants,
              "border",
              "border"
            ),

            [sty.descriptionCard__subDescription]: hasVariant(
              variants,
              "subDescription",
              "subDescription"
            )
          })}
        >
          <div
            data-plasmic-name={"descriptionParent"}
            data-plasmic-override={overrides.descriptionParent}
            className={classNames(projectcss.all, sty.descriptionParent, {
              [sty.descriptionParent__subDescription]: hasVariant(
                variants,
                "subDescription",
                "subDescription"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.description,
              className: classNames(sty.slotTargetDescription, {
                [sty.slotTargetDescription__subDescription]: hasVariant(
                  variants,
                  "subDescription",
                  "subDescription"
                )
              })
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "mainCard",
    "headlineParent",
    "subheadParent",
    "userAvatarButton",
    "descriptionCard",
    "descriptionParent"
  ],

  parent: [
    "parent",
    "mainCard",
    "headlineParent",
    "subheadParent",
    "userAvatarButton",
    "descriptionCard",
    "descriptionParent"
  ],

  mainCard: ["mainCard", "headlineParent", "subheadParent", "userAvatarButton"],
  headlineParent: ["headlineParent", "subheadParent"],
  subheadParent: ["subheadParent"],
  userAvatarButton: ["userAvatarButton"],
  descriptionCard: ["descriptionCard", "descriptionParent"],
  descriptionParent: ["descriptionParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputFormCardAvatar__ArgProps,
      internalVariantPropNames: PlasmicInputFormCardAvatar__VariantProps
    });

    return PlasmicInputFormCardAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputFormCardAvatar";
  } else {
    func.displayName = `PlasmicInputFormCardAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicInputFormCardAvatar = Object.assign(
  // Top-level PlasmicInputFormCardAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    mainCard: makeNodeComponent("mainCard"),
    headlineParent: makeNodeComponent("headlineParent"),
    subheadParent: makeNodeComponent("subheadParent"),
    userAvatarButton: makeNodeComponent("userAvatarButton"),
    descriptionCard: makeNodeComponent("descriptionCard"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    // Metadata about props expected for PlasmicInputFormCardAvatar
    internalVariantProps: PlasmicInputFormCardAvatar__VariantProps,
    internalArgProps: PlasmicInputFormCardAvatar__ArgProps
  }
);

export default PlasmicInputFormCardAvatar;
/* prettier-ignore-end */
