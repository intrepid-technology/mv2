// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: s2oJmDwLX-
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
import * as sty from "./PlasmicButtonFormDropdownSelect.module.css"; // plasmic-import: s2oJmDwLX-/css
import Icon96Icon from "./icons/PlasmicIcon__Icon96"; // plasmic-import: CEkB3VE5m4/icon

export const PlasmicButtonFormDropdownSelect__VariantProps = new Array(
  "label",
  "description",
  "size"
);

export const PlasmicButtonFormDropdownSelect__ArgProps = new Array(
  "headlineLabelTitle",
  "dropdownTitle",
  "dropdownIcon",
  "children",
  "dropdownIcon12Pt",
  "slot"
);

function PlasmicButtonFormDropdownSelect__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__description]: hasVariant(
          variants,
          "description",
          "description"
        ),

        [sty.root__label]: hasVariant(variants, "label", "label"),
        [sty.root__size__180X32]: hasVariant(variants, "size", "_180X32"),
        [sty.root__size__270X32]: hasVariant(variants, "size", "_270X32"),
        [sty.root__size__360X40]: hasVariant(variants, "size", "_360X40"),
        [sty.root__size__540X40]: hasVariant(variants, "size", "_540X40"),
        [sty.root__size__90X24]: hasVariant(variants, "size", "_90X24")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__description]: hasVariant(
            variants,
            "description",
            "description"
          ),

          [sty.parent__label]: hasVariant(variants, "label", "label"),
          [sty.parent__size__180X32]: hasVariant(variants, "size", "_180X32"),
          [sty.parent__size__180X36]: hasVariant(variants, "size", "_180X36"),
          [sty.parent__size__270X32]: hasVariant(variants, "size", "_270X32"),
          [sty.parent__size__270X36]: hasVariant(variants, "size", "_270X36"),
          [sty.parent__size__360X36]: hasVariant(variants, "size", "_360X36"),
          [sty.parent__size__360X40]: hasVariant(variants, "size", "_360X40"),
          [sty.parent__size__540X36]: hasVariant(variants, "size", "_540X36"),
          [sty.parent__size__540X40]: hasVariant(variants, "size", "_540X40"),
          [sty.parent__size__90X24]: hasVariant(variants, "size", "_90X24"),
          [sty.parent__size__90X32]: hasVariant(variants, "size", "_90X32"),
          [sty.parent__size__90X36]: hasVariant(variants, "size", "_90X36")
        })}
      >
        {(hasVariant(variants, "label", "label") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox___5LVp, {
              [sty.freeBox__label___5LVpq0Opk]: hasVariant(
                variants,
                "label",
                "label"
              ),

              [sty.freeBox__size__180X32___5LVptzr60]: hasVariant(
                variants,
                "size",
                "_180X32"
              ),

              [sty.freeBox__size__180X36___5LVpsIiyw]: hasVariant(
                variants,
                "size",
                "_180X36"
              ),

              [sty.freeBox__size__360X36___5LVpf9Iun]: hasVariant(
                variants,
                "size",
                "_360X36"
              ),

              [sty.freeBox__size__360X40___5LVpFjGN]: hasVariant(
                variants,
                "size",
                "_360X40"
              ),

              [sty.freeBox__size__540X36___5LVpdTbb5]: hasVariant(
                variants,
                "size",
                "_540X36"
              ),

              [sty.freeBox__size__540X40___5LVp8Ui2H]: hasVariant(
                variants,
                "size",
                "_540X40"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.headlineLabelTitle,
              className: classNames(sty.slotTargetHeadlineLabelTitle, {
                [sty.slotTargetHeadlineLabelTitle__label]: hasVariant(
                  variants,
                  "label",
                  "label"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__180X32]: hasVariant(
                  variants,
                  "size",
                  "_180X32"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__270X32]: hasVariant(
                  variants,
                  "size",
                  "_270X32"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__360X40]: hasVariant(
                  variants,
                  "size",
                  "_360X40"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__540X40]: hasVariant(
                  variants,
                  "size",
                  "_540X40"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__90X24]: hasVariant(
                  variants,
                  "size",
                  "_90X24"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__90X32]: hasVariant(
                  variants,
                  "size",
                  "_90X32"
                ),

                [sty.slotTargetHeadlineLabelTitle__size__90X36]: hasVariant(
                  variants,
                  "size",
                  "_90X36"
                )
              })
            })}
          </div>
        ) : null}

        <p.Stack
          as={"button"}
          data-plasmic-name={"buttonDropDown"}
          data-plasmic-override={overrides.buttonDropDown}
          hasGap={true}
          className={classNames(defaultcss.button, sty.buttonDropDown, {
            [sty.buttonDropDown__size__180X32]: hasVariant(
              variants,
              "size",
              "_180X32"
            ),

            [sty.buttonDropDown__size__180X36]: hasVariant(
              variants,
              "size",
              "_180X36"
            ),

            [sty.buttonDropDown__size__270X32]: hasVariant(
              variants,
              "size",
              "_270X32"
            ),

            [sty.buttonDropDown__size__270X36]: hasVariant(
              variants,
              "size",
              "_270X36"
            ),

            [sty.buttonDropDown__size__360X36]: hasVariant(
              variants,
              "size",
              "_360X36"
            ),

            [sty.buttonDropDown__size__360X40]: hasVariant(
              variants,
              "size",
              "_360X40"
            ),

            [sty.buttonDropDown__size__540X36]: hasVariant(
              variants,
              "size",
              "_540X36"
            ),

            [sty.buttonDropDown__size__540X40]: hasVariant(
              variants,
              "size",
              "_540X40"
            ),

            [sty.buttonDropDown__size__90X24]: hasVariant(
              variants,
              "size",
              "_90X24"
            ),

            [sty.buttonDropDown__size__90X32]: hasVariant(
              variants,
              "size",
              "_90X32"
            ),

            [sty.buttonDropDown__size__90X36]: hasVariant(
              variants,
              "size",
              "_90X36"
            )
          })}
        >
          {true ? (
            <div className={classNames(defaultcss.all, sty.freeBox___3XOp)}>
              {true
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <svg
                        className={classNames(defaultcss.all, sty.svg__klQbu)}
                        role={"img"}
                      />
                    ),

                    value: args.slot
                  })
                : null}
              {p.renderPlasmicSlot({
                defaultContents: "Select",
                value: args.dropdownTitle,
                className: classNames(sty.slotTargetDropdownTitle, {
                  [sty.slotTargetDropdownTitle__size__180X32]: hasVariant(
                    variants,
                    "size",
                    "_180X32"
                  ),

                  [sty.slotTargetDropdownTitle__size__270X32]: hasVariant(
                    variants,
                    "size",
                    "_270X32"
                  ),

                  [sty.slotTargetDropdownTitle__size__360X40]: hasVariant(
                    variants,
                    "size",
                    "_360X40"
                  ),

                  [sty.slotTargetDropdownTitle__size__540X40]: hasVariant(
                    variants,
                    "size",
                    "_540X40"
                  ),

                  [sty.slotTargetDropdownTitle__size__90X24]: hasVariant(
                    variants,
                    "size",
                    "_90X24"
                  ),

                  [sty.slotTargetDropdownTitle__size__90X32]: hasVariant(
                    variants,
                    "size",
                    "_90X32"
                  ),

                  [sty.slotTargetDropdownTitle__size__90X36]: hasVariant(
                    variants,
                    "size",
                    "_90X36"
                  )
                })
              })}
            </div>
          ) : null}

          <div
            data-plasmic-name={"iconParent"}
            data-plasmic-override={overrides.iconParent}
            className={classNames(defaultcss.all, sty.iconParent, {
              [sty.iconParent__size__90X24]: hasVariant(
                variants,
                "size",
                "_90X24"
              ),

              [sty.iconParent__size__90X32]: hasVariant(
                variants,
                "size",
                "_90X32"
              ),

              [sty.iconParent__size__90X36]: hasVariant(
                variants,
                "size",
                "_90X36"
              )
            })}
          >
            {(hasVariant(variants, "size", "_90X24") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <Icon96Icon
                      className={classNames(defaultcss.all, sty.svg__we6N)}
                      role={"img"}
                    />
                  ),

                  value: args.dropdownIcon,
                  className: classNames(sty.slotTargetDropdownIcon, {
                    [sty.slotTargetDropdownIcon__size__540X40]: hasVariant(
                      variants,
                      "size",
                      "_540X40"
                    ),

                    [sty.slotTargetDropdownIcon__size__90X24]: hasVariant(
                      variants,
                      "size",
                      "_90X24"
                    )
                  })
                })
              : null}
            {(hasVariant(variants, "size", "_90X24") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <Icon96Icon
                      className={classNames(defaultcss.all, sty.svg__oJsqq)}
                      role={"img"}
                    />
                  ),

                  value: args.dropdownIcon12Pt,
                  className: classNames(sty.slotTargetDropdownIcon12Pt, {
                    [sty.slotTargetDropdownIcon12Pt__size__540X40]: hasVariant(
                      variants,
                      "size",
                      "_540X40"
                    ),

                    [sty.slotTargetDropdownIcon12Pt__size__90X24]: hasVariant(
                      variants,
                      "size",
                      "_90X24"
                    )
                  })
                })
              : null}
          </div>
        </p.Stack>

        {(hasVariant(variants, "description", "description") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox__ub9Ml, {
              [sty.freeBox__description__ub9MLsra3J]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.freeBox__size__360X40__ub9MlFjGN]: hasVariant(
                variants,
                "size",
                "_360X40"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren__description]: hasVariant(
                  variants,
                  "description",
                  "description"
                ),

                [sty.slotTargetChildren__size__180X32]: hasVariant(
                  variants,
                  "size",
                  "_180X32"
                ),

                [sty.slotTargetChildren__size__270X32]: hasVariant(
                  variants,
                  "size",
                  "_270X32"
                ),

                [sty.slotTargetChildren__size__360X40]: hasVariant(
                  variants,
                  "size",
                  "_360X40"
                ),

                [sty.slotTargetChildren__size__540X40]: hasVariant(
                  variants,
                  "size",
                  "_540X40"
                ),

                [sty.slotTargetChildren__size__90X24]: hasVariant(
                  variants,
                  "size",
                  "_90X24"
                ),

                [sty.slotTargetChildren__size__90X32]: hasVariant(
                  variants,
                  "size",
                  "_90X32"
                ),

                [sty.slotTargetChildren__size__90X36]: hasVariant(
                  variants,
                  "size",
                  "_90X36"
                )
              })
            })}
          </div>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "buttonDropDown", "iconParent"],
  parent: ["parent", "buttonDropDown", "iconParent"],
  buttonDropDown: ["buttonDropDown", "iconParent"],
  iconParent: ["iconParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonFormDropdownSelect__ArgProps,
      internalVariantPropNames: PlasmicButtonFormDropdownSelect__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonFormDropdownSelect__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonFormDropdownSelect";
  } else {
    func.displayName = `PlasmicButtonFormDropdownSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonFormDropdownSelect = Object.assign(
  // Top-level PlasmicButtonFormDropdownSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    buttonDropDown: makeNodeComponent("buttonDropDown"),
    iconParent: makeNodeComponent("iconParent"),
    // Metadata about props expected for PlasmicButtonFormDropdownSelect
    internalVariantProps: PlasmicButtonFormDropdownSelect__VariantProps,
    internalArgProps: PlasmicButtonFormDropdownSelect__ArgProps
  }
);

export default PlasmicButtonFormDropdownSelect;
/* prettier-ignore-end */