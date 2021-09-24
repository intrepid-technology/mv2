// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0JndNhJNnle
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ChipBadgeDisplay from "../../ChipBadgeDisplay"; // plasmic-import: 9_NbJKBtbu/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputFormCardEmailSearchBadge.module.css"; // plasmic-import: 0JndNhJNnle/css
import Icon52Icon from "./icons/PlasmicIcon__Icon52"; // plasmic-import: QGTlaxIryG/icon
import Icon107Icon from "./icons/PlasmicIcon__Icon107"; // plasmic-import: 1WTBIKS_DU/icon

export const PlasmicInputFormCardEmailSearchBadge__VariantProps = new Array(
  "subDescription",
  "button",
  "border",
  "search"
);

export const PlasmicInputFormCardEmailSearchBadge__ArgProps = new Array(
  "email",
  "description",
  "subHead",
  "headline",
  "children"
);

function PlasmicInputFormCardEmailSearchBadge__RenderFunc(props) {
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
          data-plasmic-name={"mainCard"}
          data-plasmic-override={overrides.mainCard}
          hasGap={true}
          className={classNames(defaultcss.all, sty.mainCard, {
            [sty.mainCard__search]: hasVariant(variants, "search", "search")
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
              data-plasmic-name={"headlineTextParent"}
              data-plasmic-override={overrides.headlineTextParent}
              className={classNames(defaultcss.all, sty.headlineTextParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Headline",
                value: args.headline,
                className: classNames(sty.slotTargetHeadline)
              })}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "Sub head",
              value: args.subHead,
              className: classNames(sty.slotTargetSubHead, {
                [sty.slotTargetSubHead__search]: hasVariant(
                  variants,
                  "search",
                  "search"
                )
              })
            })}
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"textInputParent"}
            data-plasmic-override={overrides.textInputParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.textInputParent, {
              [sty.textInputParent__search]: hasVariant(
                variants,
                "search",
                "search"
              )
            })}
          >
            {(hasVariant(variants, "search", "search") ? false : true) ? (
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(defaultcss.all, sty.freeBox, {
                  [sty.freeBox__search]: hasVariant(
                    variants,
                    "search",
                    "search"
                  )
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <input
                      className={classNames(
                        defaultcss.input,
                        sty.textbox__bjqT
                      )}
                      placeholder={"email@example.com"}
                      size={1}
                      type={"text"}
                      value={""}
                    />
                  ),

                  value: args.email
                })}
              </div>
            ) : null}
            {(hasVariant(variants, "search", "search") ? true : false) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"searchTriggerParent"}
                data-plasmic-override={overrides.searchTriggerParent}
                hasGap={true}
                className={classNames(defaultcss.all, sty.searchTriggerParent, {
                  [sty.searchTriggerParent__search]: hasVariant(
                    variants,
                    "search",
                    "search"
                  )
                })}
              >
                {(hasVariant(variants, "search", "search") ? true : false) ? (
                  <input
                    data-plasmic-name={"textbox"}
                    data-plasmic-override={overrides.textbox}
                    className={classNames(defaultcss.input, sty.textbox, {
                      [sty.textbox__search]: hasVariant(
                        variants,
                        "search",
                        "search"
                      )
                    })}
                    placeholder={
                      hasVariant(variants, "search", "search")
                        ? "Search and enter"
                        : "Some placeholder"
                    }
                    size={1}
                    type={"text"}
                    value={
                      hasVariant(variants, "search", "search")
                        ? "Search and enter"
                        : "Some value"
                    }
                  />
                ) : null}
                {(hasVariant(variants, "search", "search") ? true : false) ? (
                  <ButtonPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.buttonPrimary__xk8V,
                      {
                        [sty.buttonPrimary__search__xk8VAuxud]: hasVariant(
                          variants,
                          "search",
                          "search"
                        )
                      }
                    )}
                    size={
                      hasVariant(variants, "search", "search")
                        ? "_90"
                        : undefined
                    }
                    svgIcon={
                      <p.PlasmicIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        PlasmicIconType={
                          hasVariant(variants, "search", "search")
                            ? Icon107Icon
                            : Icon52Icon
                        }
                        className={classNames(defaultcss.all, sty.svg, {
                          [sty.svg__search]: hasVariant(
                            variants,
                            "search",
                            "search"
                          )
                        })}
                        role={"img"}
                      />
                    }
                    type={
                      hasVariant(variants, "search", "search")
                        ? "icon"
                        : undefined
                    }
                  >
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text,
                        {
                          [sty.text__search]: hasVariant(
                            variants,
                            "search",
                            "search"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "search", "search")
                        ? "Add"
                        : "Button"}
                    </div>
                  </ButtonPrimary>
                ) : null}
              </p.Stack>
            ) : null}
            {(hasVariant(variants, "search", "search") ? true : false) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"badgeDisplay"}
                data-plasmic-override={overrides.badgeDisplay}
                hasGap={true}
                className={classNames(defaultcss.all, sty.badgeDisplay, {
                  [sty.badgeDisplay__search]: hasVariant(
                    variants,
                    "search",
                    "search"
                  )
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <ChipBadgeDisplay
                      className={classNames(
                        "__wab_instance",
                        sty.chipBadgeDisplay__vsno1
                      )}
                      color={"brand"}
                      type={"ghost"}
                    />
                  ),

                  value: args.children
                })}
              </p.Stack>
            ) : null}
          </p.Stack>
        </p.Stack>

        <div
          data-plasmic-name={"descriptionCard"}
          data-plasmic-override={overrides.descriptionCard}
          className={classNames(defaultcss.all, sty.descriptionCard, {
            [sty.descriptionCard__search]: hasVariant(
              variants,
              "search",
              "search"
            ),

            [sty.descriptionCard__subDescription]: hasVariant(
              variants,
              "subDescription",
              "subDescription"
            ),

            [sty.descriptionCard__subDescription_button]:
              hasVariant(variants, "subDescription", "subDescription") &&
              hasVariant(variants, "button", "button")
          })}
        >
          <div
            data-plasmic-name={"subDescription"}
            data-plasmic-override={overrides.subDescription}
            className={classNames(defaultcss.all, sty.subDescription, {
              [sty.subDescription__subDescription]: hasVariant(
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

          <ButtonPrimary
            className={classNames("__wab_instance", sty.buttonPrimary__t9Myp, {
              [sty.buttonPrimary__button__t9Myp9VcG1]: hasVariant(
                variants,
                "button",
                "button"
              ),

              [sty.buttonPrimary__subDescription__t9MyPvZm3B]: hasVariant(
                variants,
                "subDescription",
                "subDescription"
              ),

              [sty.buttonPrimary__subDescription_button__t9MyPvZm3B9VcG1]:
                hasVariant(variants, "subDescription", "subDescription") &&
                hasVariant(variants, "button", "button")
            })}
            size={"_140"}
          >
            {"Save"}
          </ButtonPrimary>
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
    "headlineSubheadParent",
    "headlineTextParent",
    "textInputParent",
    "freeBox",
    "searchTriggerParent",
    "textbox",
    "svg",
    "text",
    "badgeDisplay",
    "descriptionCard",
    "subDescription"
  ],

  parent: [
    "parent",
    "mainCard",
    "headlineSubheadParent",
    "headlineTextParent",
    "textInputParent",
    "freeBox",
    "searchTriggerParent",
    "textbox",
    "svg",
    "text",
    "badgeDisplay",
    "descriptionCard",
    "subDescription"
  ],

  mainCard: [
    "mainCard",
    "headlineSubheadParent",
    "headlineTextParent",
    "textInputParent",
    "freeBox",
    "searchTriggerParent",
    "textbox",
    "svg",
    "text",
    "badgeDisplay"
  ],

  headlineSubheadParent: ["headlineSubheadParent", "headlineTextParent"],
  headlineTextParent: ["headlineTextParent"],
  textInputParent: [
    "textInputParent",
    "freeBox",
    "searchTriggerParent",
    "textbox",
    "svg",
    "text",
    "badgeDisplay"
  ],

  freeBox: ["freeBox"],
  searchTriggerParent: ["searchTriggerParent", "textbox", "svg", "text"],
  textbox: ["textbox"],
  svg: ["svg"],
  text: ["text"],
  badgeDisplay: ["badgeDisplay"],
  descriptionCard: ["descriptionCard", "subDescription"],
  subDescription: ["subDescription"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputFormCardEmailSearchBadge__ArgProps,
      internalVariantPropNames:
        PlasmicInputFormCardEmailSearchBadge__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputFormCardEmailSearchBadge__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputFormCardEmailSearchBadge";
  } else {
    func.displayName = `PlasmicInputFormCardEmailSearchBadge.${nodeName}`;
  }
  return func;
}

export const PlasmicInputFormCardEmailSearchBadge = Object.assign(
  // Top-level PlasmicInputFormCardEmailSearchBadge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    mainCard: makeNodeComponent("mainCard"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headlineTextParent: makeNodeComponent("headlineTextParent"),
    textInputParent: makeNodeComponent("textInputParent"),
    freeBox: makeNodeComponent("freeBox"),
    searchTriggerParent: makeNodeComponent("searchTriggerParent"),
    textbox: makeNodeComponent("textbox"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    badgeDisplay: makeNodeComponent("badgeDisplay"),
    descriptionCard: makeNodeComponent("descriptionCard"),
    subDescription: makeNodeComponent("subDescription"),
    // Metadata about props expected for PlasmicInputFormCardEmailSearchBadge
    internalVariantProps: PlasmicInputFormCardEmailSearchBadge__VariantProps,
    internalArgProps: PlasmicInputFormCardEmailSearchBadge__ArgProps
  }
);

export default PlasmicInputFormCardEmailSearchBadge;
/* prettier-ignore-end */
