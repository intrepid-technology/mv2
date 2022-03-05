// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 2XsuG8W9wX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../market_v_2/plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicDisplayIconTextRight.module.css"; // plasmic-import: 2XsuG8W9wX/css
import Icon171Icon from "../market_v_2/icons/PlasmicIcon__Icon171"; // plasmic-import: RfkUw6C5x0/icon

export const PlasmicDisplayIconTextRight__VariantProps = new Array(
  "size",
  "direction"
);

export const PlasmicDisplayIconTextRight__ArgProps = new Array(
  "elementIcon",
  "text",
  "text14Px",
  "text16Px",
  "text18Px",
  "text24Px",
  "text32Px",
  "text40Px",
  "text48Px",
  "text64Px",
  "text2",
  "elementIcon14Px",
  "elementIcon2",
  "elementIcon18Px",
  "elementIcon24Px",
  "elementIcon32Px",
  "elementIcon40Px",
  "elementIcon48Px",
  "elementIcon64Px",
  "elementIcon80Px"
);

function PlasmicDisplayIconTextRight__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentsize__14]: hasVariant(variants, "size", "_14"),
          [sty.parentsize__16]: hasVariant(variants, "size", "_16")
        })}
      >
        <div
          data-plasmic-name={"textParent"}
          data-plasmic-override={overrides.textParent}
          className={classNames(projectcss.all, sty.textParent, {
            [sty.textParentdirection_left]: hasVariant(
              variants,
              "direction",
              "left"
            ),

            [sty.textParentsize__14]: hasVariant(variants, "size", "_14"),
            [sty.textParentsize__16]: hasVariant(variants, "size", "_16"),
            [sty.textParentsize__18]: hasVariant(variants, "size", "_18"),
            [sty.textParentsize__24]: hasVariant(variants, "size", "_24"),
            [sty.textParentsize__32]: hasVariant(variants, "size", "_32"),
            [sty.textParentsize__40]: hasVariant(variants, "size", "_40"),
            [sty.textParentsize__48]: hasVariant(variants, "size", "_48"),
            [sty.textParentsize__64]: hasVariant(variants, "size", "_64"),
            [sty.textParentsize__80]: hasVariant(variants, "size", "_80")
          })}
        >
          {(
            hasVariant(variants, "size", "_80")
              ? false
              : hasVariant(variants, "size", "_64")
              ? false
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "size", "_16")
              ? false
              : hasVariant(variants, "size", "_14")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text,
                className: classNames(sty.slotTargetText, {
                  [sty.slotTargetTextdirection_left]: hasVariant(
                    variants,
                    "direction",
                    "left"
                  ),

                  [sty.slotTargetTextsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetTextsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetTextsize__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotTargetTextsize__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotTargetTextsize__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotTargetTextsize__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotTargetTextsize__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotTargetTextsize__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  ),

                  [sty.slotTargetTextsize__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
          {(hasVariant(variants, "size", "_14") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text14Px,
                className: classNames(sty.slotTargetText14Px, {
                  [sty.slotTargetText14Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText14Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  )
                })
              })
            : null}
          {(hasVariant(variants, "size", "_16") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text16Px,
                className: classNames(sty.slotTargetText16Px, {
                  [sty.slotTargetText16Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText16Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText16Pxsize__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_18")
              ? true
              : hasVariant(variants, "size", "_16")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text18Px,
                className: classNames(sty.slotTargetText18Px, {
                  [sty.slotTargetText18Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText18Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText18Pxsize__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotTargetText18Pxsize__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_24")
              ? true
              : hasVariant(variants, "size", "_16")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text24Px,
                className: classNames(sty.slotTargetText24Px, {
                  [sty.slotTargetText24Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText24Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText24Pxsize__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotTargetText24Pxsize__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_32")
              ? true
              : hasVariant(variants, "size", "_16")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text32Px,
                className: classNames(sty.slotTargetText32Px, {
                  [sty.slotTargetText32Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText32Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText32Pxsize__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_40")
              ? true
              : hasVariant(variants, "size", "_16")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text40Px,
                className: classNames(sty.slotTargetText40Px, {
                  [sty.slotTargetText40Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText40Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText40Pxsize__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotTargetText40Pxsize__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_48")
              ? true
              : hasVariant(variants, "size", "_16")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text48Px,
                className: classNames(sty.slotTargetText48Px, {
                  [sty.slotTargetText48Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText48Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText48Pxsize__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotTargetText48Pxsize__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotTargetText48Pxsize__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotTargetText48Pxsize__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotTargetText48Pxsize__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_64")
              ? true
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "size", "_16")
              ? false
              : hasVariant(variants, "size", "_14")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text64Px,
                className: classNames(sty.slotTargetText64Px, {
                  [sty.slotTargetText64Pxsize__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText64Pxsize__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText64Pxsize__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotTargetText64Pxsize__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotTargetText64Pxsize__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotTargetText64Pxsize__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotTargetText64Pxsize__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotTargetText64Pxsize__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  ),

                  [sty.slotTargetText64Pxsize__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_80")
              ? true
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "size", "_16")
              ? false
              : hasVariant(variants, "size", "_14")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: "list item",
                value: args.text2,
                className: classNames(sty.slotTargetText2, {
                  [sty.slotTargetText2size__14]: hasVariant(
                    variants,
                    "size",
                    "_14"
                  ),

                  [sty.slotTargetText2size__16]: hasVariant(
                    variants,
                    "size",
                    "_16"
                  ),

                  [sty.slotTargetText2size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotTargetText2size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotTargetText2size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotTargetText2size__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotTargetText2size__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotTargetText2size__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
        </div>

        <div
          data-plasmic-name={"elementIconParent"}
          data-plasmic-override={overrides.elementIconParent}
          className={classNames(projectcss.all, sty.elementIconParent, {
            [sty.elementIconParentdirection_left]: hasVariant(
              variants,
              "direction",
              "left"
            ),

            [sty.elementIconParentsize__14]: hasVariant(
              variants,
              "size",
              "_14"
            ),

            [sty.elementIconParentsize__16]: hasVariant(
              variants,
              "size",
              "_16"
            ),

            [sty.elementIconParentsize__18]: hasVariant(
              variants,
              "size",
              "_18"
            ),

            [sty.elementIconParentsize__24]: hasVariant(
              variants,
              "size",
              "_24"
            ),

            [sty.elementIconParentsize__32]: hasVariant(
              variants,
              "size",
              "_32"
            ),

            [sty.elementIconParentsize__40]: hasVariant(
              variants,
              "size",
              "_40"
            ),

            [sty.elementIconParentsize__48]: hasVariant(
              variants,
              "size",
              "_48"
            ),

            [sty.elementIconParentsize__64]: hasVariant(
              variants,
              "size",
              "_64"
            ),

            [sty.elementIconParentsize__80]: hasVariant(variants, "size", "_80")
          })}
        >
          {(
            hasVariant(variants, "size", "_80")
              ? false
              : hasVariant(variants, "size", "_64")
              ? false
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "size", "_16")
              ? false
              : hasVariant(variants, "size", "_14")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__wekKa
                    )}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__sibng)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon
              })
            : null}
          {(hasVariant(variants, "size", "_14") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary___7WJW
                    )}
                    size={"_14Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__mEoft)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon14Px
              })
            : null}
          {(hasVariant(variants, "size", "_16") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__rxn0S
                    )}
                    size={"_16Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__vIb4J)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon2
              })
            : null}
          {(hasVariant(variants, "size", "_18") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__w8BoZ
                    )}
                    size={"_18Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__idBwb)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon18Px
              })
            : null}
          {(hasVariant(variants, "size", "_24") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary___1EeIb
                    )}
                    size={"_24Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__pC5Sw)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon24Px
              })
            : null}
          {(hasVariant(variants, "size", "_32") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__yVb9
                    )}
                    size={"_32Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__s3Nop)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon32Px
              })
            : null}
          {(hasVariant(variants, "size", "_40") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__wqA5O
                    )}
                    size={"_40Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__ysQ8)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon40Px
              })
            : null}
          {(hasVariant(variants, "size", "_48") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__wsSmV
                    )}
                    size={"_48Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__zPz36)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon48Px
              })
            : null}
          {(hasVariant(variants, "size", "_64") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary__huE2L
                    )}
                    size={"_64Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__zCpm)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon64Px
              })
            : null}
          {(hasVariant(variants, "size", "_80") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.iconPrimary___06E9G
                    )}
                    size={"_80Px"}
                    svgIcon={
                      <Icon171Icon
                        className={classNames(projectcss.all, sty.svg__xDzjQ)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.elementIcon80Px
              })
            : null}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "textParent", "elementIconParent"],
  parent: ["parent", "textParent", "elementIconParent"],
  textParent: ["textParent"],
  elementIconParent: ["elementIconParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDisplayIconTextRight__ArgProps,
      internalVariantPropNames: PlasmicDisplayIconTextRight__VariantProps
    });

    return PlasmicDisplayIconTextRight__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDisplayIconTextRight";
  } else {
    func.displayName = `PlasmicDisplayIconTextRight.${nodeName}`;
  }
  return func;
}

export const PlasmicDisplayIconTextRight = Object.assign(
  // Top-level PlasmicDisplayIconTextRight renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textParent: makeNodeComponent("textParent"),
    elementIconParent: makeNodeComponent("elementIconParent"),
    // Metadata about props expected for PlasmicDisplayIconTextRight
    internalVariantProps: PlasmicDisplayIconTextRight__VariantProps,
    internalArgProps: PlasmicDisplayIconTextRight__ArgProps
  }
);

export default PlasmicDisplayIconTextRight;
/* prettier-ignore-end */