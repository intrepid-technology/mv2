// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -EGIFSbBWZt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementAnalyticsPercentValueChange from "../../ElementAnalyticsPercentValueChange"; // plasmic-import: Un5cNvAvgb/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardAnalyticsPrimary.module.css"; // plasmic-import: -EGIFSbBWZt/css
import Icon177Icon from "./icons/PlasmicIcon__Icon177"; // plasmic-import: 3qiHrElSQf/icon
import OptionalFixedBrandColorIcon from "./icons/PlasmicIcon__OptionalFixedBrandColor"; // plasmic-import: Lsqk-ADBoKU/icon

export const PlasmicCardAnalyticsPrimary__VariantProps = new Array(
  "numeration",
  "currency",
  "size"
);

export const PlasmicCardAnalyticsPrimary__ArgProps = new Array(
  "numberValue",
  "cardTitle",
  "svgIconParent",
  "numberValue270",
  "cardTitle270",
  "svgIconParent270",
  "valueChangeParent",
  "numerationParent",
  "svgQuestion",
  "numerationParent270",
  "numerationParent2",
  "currencyParent2702"
);

function PlasmicCardAnalyticsPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__size__270]: hasVariant(variants, "size", "_270")
      })}
    >
      <div
        data-plasmic-name={"svgQuestionParent"}
        data-plasmic-override={overrides.svgQuestionParent}
        className={classNames(defaultcss.all, sty.svgQuestionParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div className={classNames(defaultcss.all, sty.box__yZ0QO)}>
              <Icon177Icon
                className={classNames(defaultcss.all, sty.svg__dd45H)}
                role={"img"}
              />
            </div>
          ),

          value: args.svgQuestion
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"iconNumberValueTitlePercentValueParent"}
        data-plasmic-override={overrides.iconNumberValueTitlePercentValueParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.iconNumberValueTitlePercentValueParent,
          {
            [sty.iconNumberValueTitlePercentValueParent__currency]: hasVariant(
              variants,
              "currency",
              "currency"
            ),

            [sty.iconNumberValueTitlePercentValueParent__currency_size__270]:
              hasVariant(variants, "currency", "currency") &&
              hasVariant(variants, "size", "_270"),
            [sty.iconNumberValueTitlePercentValueParent__size__270]: hasVariant(
              variants,
              "size",
              "_270"
            )
          }
        )}
      >
        <div
          data-plasmic-name={"svgIconParent"}
          data-plasmic-override={overrides.svgIconParent}
          className={classNames(defaultcss.all, sty.svgIconParent, {
            [sty.svgIconParent__size__270]: hasVariant(variants, "size", "_270")
          })}
        >
          {(hasVariant(variants, "size", "_270") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div className={classNames(defaultcss.all, sty.box___5VQqz)}>
                    <OptionalFixedBrandColorIcon
                      className={classNames(defaultcss.all, sty.svg__pdGd6)}
                      role={"img"}
                    />
                  </div>
                ),

                value: args.svgIconParent
              })
            : null}
          {(hasVariant(variants, "size", "_270") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div className={classNames(defaultcss.all, sty.box__qjbPm)}>
                    <OptionalFixedBrandColorIcon
                      className={classNames(defaultcss.all, sty.svg__hwk83)}
                      role={"img"}
                    />
                  </div>
                ),

                value: args.svgIconParent270
              })
            : null}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"numberValue"}
            data-plasmic-override={overrides.numberValue}
            hasGap={true}
            className={classNames(defaultcss.all, sty.numberValue, {
              [sty.numberValue__size__270]: hasVariant(variants, "size", "_270")
            })}
          >
            {(
              hasVariant(variants, "numeration", "numeration") &&
              hasVariant(variants, "currency", "currency") &&
              hasVariant(variants, "size", "_270")
                ? false
                : hasVariant(variants, "size", "_270") &&
                  hasVariant(variants, "numeration", "numeration")
                ? true
                : hasVariant(variants, "currency", "currency")
                ? false
                : hasVariant(variants, "numeration", "numeration")
                ? true
                : true
            ) ? (
              <div
                data-plasmic-name={"currencyParent"}
                data-plasmic-override={overrides.currencyParent}
                className={classNames(defaultcss.all, sty.currencyParent, {
                  [sty.currencyParent__currency]: hasVariant(
                    variants,
                    "currency",
                    "currency"
                  ),

                  [sty.currencyParent__currency_size__270]:
                    hasVariant(variants, "currency", "currency") &&
                    hasVariant(variants, "size", "_270"),
                  [sty.currencyParent__numeration]: hasVariant(
                    variants,
                    "numeration",
                    "numeration"
                  ),

                  [sty.currencyParent__numeration_currency_size__270]:
                    hasVariant(variants, "numeration", "numeration") &&
                    hasVariant(variants, "currency", "currency") &&
                    hasVariant(variants, "size", "_270"),
                  [sty.currencyParent__size__270]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.currencyParent__size__270_numeration]:
                    hasVariant(variants, "size", "_270") &&
                    hasVariant(variants, "numeration", "numeration")
                })}
              >
                {(hasVariant(variants, "size", "_270") ? false : true)
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__wM3Ab
                          )}
                        >
                          {"$"}
                        </div>
                      ),

                      value: args.numerationParent2
                    })
                  : null}
                {(hasVariant(variants, "size", "_270") ? true : false)
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__a4Wh
                          )}
                        >
                          {"$"}
                        </div>
                      ),

                      value: args.currencyParent2702
                    })
                  : null}
              </div>
            ) : null}
            {(hasVariant(variants, "size", "_270") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__ncgFi
                      )}
                    >
                      {"XXX.XX"}
                    </div>
                  ),

                  value: args.numberValue
                })
              : null}
            {(hasVariant(variants, "size", "_270") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__jOHp
                      )}
                    >
                      {"XXX.XX"}
                    </div>
                  ),

                  value: args.numberValue270
                })
              : null}
            {(
              hasVariant(variants, "numeration", "numeration") &&
              hasVariant(variants, "currency", "currency")
                ? false
                : hasVariant(variants, "currency", "currency")
                ? true
                : hasVariant(variants, "numeration", "numeration")
                ? false
                : true
            ) ? (
              <div
                data-plasmic-name={"numerationParent"}
                data-plasmic-override={overrides.numerationParent}
                className={classNames(defaultcss.all, sty.numerationParent, {
                  [sty.numerationParent__currency]: hasVariant(
                    variants,
                    "currency",
                    "currency"
                  ),

                  [sty.numerationParent__numeration]: hasVariant(
                    variants,
                    "numeration",
                    "numeration"
                  ),

                  [sty.numerationParent__numeration_currency]:
                    hasVariant(variants, "numeration", "numeration") &&
                    hasVariant(variants, "currency", "currency"),
                  [sty.numerationParent__numeration_currency_size__270]:
                    hasVariant(variants, "numeration", "numeration") &&
                    hasVariant(variants, "currency", "currency") &&
                    hasVariant(variants, "size", "_270"),
                  [sty.numerationParent__size__270]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.numerationParent__size__270_numeration]:
                    hasVariant(variants, "size", "_270") &&
                    hasVariant(variants, "numeration", "numeration")
                })}
              >
                {(hasVariant(variants, "size", "_270") ? false : true)
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__vDq8H
                          )}
                        >
                          {"K"}
                        </div>
                      ),

                      value: args.numerationParent
                    })
                  : null}
                {(hasVariant(variants, "size", "_270") ? true : false)
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__vyTh
                          )}
                        >
                          {"K"}
                        </div>
                      ),

                      value: args.numerationParent270
                    })
                  : null}
              </div>
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"cardTitle"}
            data-plasmic-override={overrides.cardTitle}
            hasGap={true}
            className={classNames(defaultcss.all, sty.cardTitle, {
              [sty.cardTitle__size__270]: hasVariant(variants, "size", "_270")
            })}
          >
            {(hasVariant(variants, "size", "_270") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vly1J
                      )}
                    >
                      {"title of card"}
                    </div>
                  ),

                  value: args.cardTitle
                })
              : null}
            {(hasVariant(variants, "size", "_270") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__zL10
                      )}
                    >
                      {"title of card"}
                    </div>
                  ),

                  value: args.cardTitle270
                })
              : null}
          </p.Stack>
        </p.Stack>

        <div
          data-plasmic-name={"valueChangeParent"}
          data-plasmic-override={overrides.valueChangeParent}
          className={classNames(defaultcss.all, sty.valueChangeParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ElementAnalyticsPercentValueChange integer={"minus"} />
            ),

            value: args.valueChangeParent
          })}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "svgQuestionParent",
    "iconNumberValueTitlePercentValueParent",
    "svgIconParent",
    "box",
    "numberValue",
    "currencyParent",
    "numerationParent",
    "cardTitle",
    "valueChangeParent"
  ],

  svgQuestionParent: ["svgQuestionParent"],
  iconNumberValueTitlePercentValueParent: [
    "iconNumberValueTitlePercentValueParent",
    "svgIconParent",
    "box",
    "numberValue",
    "currencyParent",
    "numerationParent",
    "cardTitle",
    "valueChangeParent"
  ],

  svgIconParent: ["svgIconParent"],
  box: [
    "box",
    "numberValue",
    "currencyParent",
    "numerationParent",
    "cardTitle"
  ],

  numberValue: ["numberValue", "currencyParent", "numerationParent"],
  currencyParent: ["currencyParent"],
  numerationParent: ["numerationParent"],
  cardTitle: ["cardTitle"],
  valueChangeParent: ["valueChangeParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardAnalyticsPrimary__ArgProps,
      internalVariantPropNames: PlasmicCardAnalyticsPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardAnalyticsPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicCardAnalyticsPrimary";
  } else {
    func.displayName = `PlasmicCardAnalyticsPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicCardAnalyticsPrimary = Object.assign(
  // Top-level PlasmicCardAnalyticsPrimary renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    svgQuestionParent: makeNodeComponent("svgQuestionParent"),
    iconNumberValueTitlePercentValueParent: makeNodeComponent(
      "iconNumberValueTitlePercentValueParent"
    ),

    svgIconParent: makeNodeComponent("svgIconParent"),
    box: makeNodeComponent("box"),
    numberValue: makeNodeComponent("numberValue"),
    currencyParent: makeNodeComponent("currencyParent"),
    numerationParent: makeNodeComponent("numerationParent"),
    cardTitle: makeNodeComponent("cardTitle"),
    valueChangeParent: makeNodeComponent("valueChangeParent"),
    // Metadata about props expected for PlasmicCardAnalyticsPrimary
    internalVariantProps: PlasmicCardAnalyticsPrimary__VariantProps,
    internalArgProps: PlasmicCardAnalyticsPrimary__ArgProps
  }
);

export default PlasmicCardAnalyticsPrimary;
/* prettier-ignore-end */
