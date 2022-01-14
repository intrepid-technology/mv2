// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 7K8uSXduxTH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonFormDropdownSelect from "../../ButtonFormDropdownSelect"; // plasmic-import: s2oJmDwLX-/component
import InputTextForm from "../../InputTextForm"; // plasmic-import: Hp_zc6XLro/component
import TextMultiLineA from "../../TextMultiLineA"; // plasmic-import: TS--ged0zI/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputFormCardPrimary.module.css"; // plasmic-import: 7K8uSXduxTH/css

export const PlasmicInputFormCardPrimary__VariantProps = new Array(
  "button",
  "subDescription",
  "border",
  "multiLineText",
  "singleLineText",
  "inputType"
);

export const PlasmicInputFormCardPrimary__ArgProps = new Array(
  "headline",
  "subHead",
  "description",
  "children",
  "label",
  "slotLabel",
  "slot",
  "dropdownHeadlineA",
  "dropdownHeadlineB",
  "slot2",
  "descriptionA",
  "descriptionB",
  "singleLineTextContainer"
);

function PlasmicInputFormCardPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__border]: hasVariant(variants, "border", "border"),
        [sty.root__multiLineText]: hasVariant(
          variants,
          "multiLineText",
          "multiLineText"
        )
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__border]: hasVariant(variants, "border", "border"),
          [sty.parent__multiLineText]: hasVariant(
            variants,
            "multiLineText",
            "multiLineText"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"mainCard"}
          data-plasmic-override={overrides.mainCard}
          hasGap={true}
          className={classNames(projectcss.all, sty.mainCard, {
            [sty.mainCard__border]: hasVariant(variants, "border", "border"),
            [sty.mainCard__inputType_companyname]: hasVariant(
              variants,
              "inputType",
              "companyname"
            ),

            [sty.mainCard__inputType_displayText]: hasVariant(
              variants,
              "inputType",
              "displayText"
            ),

            [sty.mainCard__inputType_dropdownDropdown]: hasVariant(
              variants,
              "inputType",
              "dropdownDropdown"
            ),

            [sty.mainCard__inputType_dropdownText]: hasVariant(
              variants,
              "inputType",
              "dropdownText"
            ),

            [sty.mainCard__inputType_username]: hasVariant(
              variants,
              "inputType",
              "username"
            ),

            [sty.mainCard__multiLineText]: hasVariant(
              variants,
              "multiLineText",
              "multiLineText"
            ),

            [sty.mainCard__singleLineText]: hasVariant(
              variants,
              "singleLineText",
              "singleLineText"
            ),

            [sty.mainCard__singleLineText_multiLineText]:
              hasVariant(variants, "singleLineText", "singleLineText") &&
              hasVariant(variants, "multiLineText", "multiLineText")
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headlineParent"}
            data-plasmic-override={overrides.headlineParent}
            hasGap={true}
            className={classNames(projectcss.all, sty.headlineParent, {
              [sty.headlineParent__inputType_dropdownText]: hasVariant(
                variants,
                "inputType",
                "dropdownText"
              ),

              [sty.headlineParent__multiLineText]: hasVariant(
                variants,
                "multiLineText",
                "multiLineText"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__iEhR, {
                [sty.freeBox__multiLineText__iEhRRgBtF]: hasVariant(
                  variants,
                  "multiLineText",
                  "multiLineText"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Headline",
                value: args.headline,
                className: classNames(sty.slotTargetHeadline, {
                  [sty.slotTargetHeadline__button_subDescription]:
                    hasVariant(variants, "button", "button") &&
                    hasVariant(variants, "subDescription", "subDescription"),
                  [sty.slotTargetHeadline__inputType_dropdownText]: hasVariant(
                    variants,
                    "inputType",
                    "dropdownText"
                  ),

                  [sty.slotTargetHeadline__multiLineText]: hasVariant(
                    variants,
                    "multiLineText",
                    "multiLineText"
                  ),

                  [sty.slotTargetHeadline__singleLineText]: hasVariant(
                    variants,
                    "singleLineText",
                    "singleLineText"
                  )
                })
              })}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "Sub head",
              value: args.subHead,
              className: classNames(sty.slotTargetSubHead, {
                [sty.slotTargetSubHead__inputType_companyname]: hasVariant(
                  variants,
                  "inputType",
                  "companyname"
                ),

                [sty.slotTargetSubHead__inputType_dropdownText]: hasVariant(
                  variants,
                  "inputType",
                  "dropdownText"
                ),

                [sty.slotTargetSubHead__inputType_username]: hasVariant(
                  variants,
                  "inputType",
                  "username"
                ),

                [sty.slotTargetSubHead__multiLineText]: hasVariant(
                  variants,
                  "multiLineText",
                  "multiLineText"
                ),

                [sty.slotTargetSubHead__singleLineText]: hasVariant(
                  variants,
                  "singleLineText",
                  "singleLineText"
                )
              })
            })}
          </p.Stack>

          {(
            hasVariant(variants, "multiLineText", "multiLineText")
              ? false
              : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"inputElementParent"}
              data-plasmic-override={overrides.inputElementParent}
              hasGap={true}
              className={classNames(projectcss.all, sty.inputElementParent, {
                [sty.inputElementParent__inputType_companyname]: hasVariant(
                  variants,
                  "inputType",
                  "companyname"
                ),

                [sty.inputElementParent__inputType_displayText]: hasVariant(
                  variants,
                  "inputType",
                  "displayText"
                ),

                [sty.inputElementParent__inputType_dropdownDropdown]:
                  hasVariant(variants, "inputType", "dropdownDropdown"),
                [sty.inputElementParent__inputType_dropdownText]: hasVariant(
                  variants,
                  "inputType",
                  "dropdownText"
                ),

                [sty.inputElementParent__inputType_username]: hasVariant(
                  variants,
                  "inputType",
                  "username"
                ),

                [sty.inputElementParent__multiLineText]: hasVariant(
                  variants,
                  "multiLineText",
                  "multiLineText"
                ),

                [sty.inputElementParent__singleLineText]: hasVariant(
                  variants,
                  "singleLineText",
                  "singleLineText"
                )
              })}
            >
              {(
                hasVariant(variants, "inputType", "dropdownText") ? true : false
              ) ? (
                <ButtonFormDropdownSelect
                  className={classNames(
                    "__wab_instance",
                    sty.buttonFormDropdownSelect__hayT,
                    {
                      [sty.buttonFormDropdownSelect__inputType_dropdownText__hayTHRwL0]:
                        hasVariant(variants, "inputType", "dropdownText")
                    }
                  )}
                  description={
                    hasVariant(variants, "inputType", "dropdownText")
                      ? true
                      : undefined
                  }
                  dropdownTitle={"Select"}
                  headlineLabelTitle={p.renderPlasmicSlot({
                    defaultContents: hasVariant(
                      variants,
                      "inputType",
                      "dropdownText"
                    )
                      ? "Label"
                      : "Country",
                    value: args.label
                  })}
                  size={
                    hasVariant(variants, "inputType", "dropdownText")
                      ? "_270X32"
                      : undefined
                  }
                />
              ) : null}
              {(
                hasVariant(variants, "inputType", "dropdownDropdown")
                  ? true
                  : false
              ) ? (
                <ButtonFormDropdownSelect
                  className={classNames(
                    "__wab_instance",
                    sty.buttonFormDropdownSelect__kiKbI,
                    {
                      [sty.buttonFormDropdownSelect__inputType_dropdownDropdown__kiKbIl2Zus]:
                        hasVariant(variants, "inputType", "dropdownDropdown")
                    }
                  )}
                  headlineLabelTitle={p.renderPlasmicSlot({
                    defaultContents: "Primary",
                    value: args.dropdownHeadlineA
                  })}
                  size={
                    hasVariant(variants, "inputType", "dropdownDropdown")
                      ? "_270X32"
                      : undefined
                  }
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Description",
                    value: args.descriptionA
                  })}
                </ButtonFormDropdownSelect>
              ) : null}
              {(
                hasVariant(variants, "inputType", "dropdownDropdown")
                  ? true
                  : false
              ) ? (
                <ButtonFormDropdownSelect
                  className={classNames(
                    "__wab_instance",
                    sty.buttonFormDropdownSelect__q7QBy,
                    {
                      [sty.buttonFormDropdownSelect__inputType_dropdownDropdown__q7QByl2Zus]:
                        hasVariant(variants, "inputType", "dropdownDropdown")
                    }
                  )}
                  headlineLabelTitle={p.renderPlasmicSlot({
                    defaultContents: "Secondary",
                    value: args.dropdownHeadlineB
                  })}
                  size={
                    hasVariant(variants, "inputType", "dropdownDropdown")
                      ? "_270X32"
                      : undefined
                  }
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Description",
                    value: args.descriptionB
                  })}
                </ButtonFormDropdownSelect>
              ) : null}
              {(
                hasVariant(variants, "inputType", "displayText") ? true : false
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___5AQd8, {
                    [sty.freeBox__inputType_companyname___5AQd8YQu0E]:
                      hasVariant(variants, "inputType", "companyname"),
                    [sty.freeBox__inputType_displayText___5AQd8Ko3Kh]:
                      hasVariant(variants, "inputType", "displayText")
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Enter some text",
                    value: args.slot,
                    className: classNames(sty.slotTargetSlot, {
                      [sty.slotTargetSlot__inputType_displayText]: hasVariant(
                        variants,
                        "inputType",
                        "displayText"
                      )
                    })
                  })}
                </div>
              ) : null}
              {(
                hasVariant(variants, "inputType", "dropdownDropdown")
                  ? false
                  : hasVariant(variants, "inputType", "dropdownText")
                  ? false
                  : hasVariant(variants, "inputType", "companyname")
                  ? false
                  : hasVariant(variants, "inputType", "username")
                  ? false
                  : hasVariant(variants, "singleLineText", "singleLineText")
                  ? false
                  : hasVariant(variants, "multiLineText", "multiLineText")
                  ? false
                  : hasVariant(variants, "inputType", "displayText")
                  ? false
                  : true
              ) ? (
                <InputTextForm
                  className={classNames(
                    "__wab_instance",
                    sty.inputTextForm__pjy7,
                    {
                      [sty.inputTextForm__inputType_companyname__pjy7YQu0E]:
                        hasVariant(variants, "inputType", "companyname"),
                      [sty.inputTextForm__inputType_displayText__pjy7Ko3Kh]:
                        hasVariant(variants, "inputType", "displayText"),
                      [sty.inputTextForm__inputType_dropdownDropdown__pjy7L2Zus]:
                        hasVariant(variants, "inputType", "dropdownDropdown"),
                      [sty.inputTextForm__inputType_dropdownText__pjy7HRwL0]:
                        hasVariant(variants, "inputType", "dropdownText"),
                      [sty.inputTextForm__inputType_username__pjy73UQvi]:
                        hasVariant(variants, "inputType", "username"),
                      [sty.inputTextForm__multiLineText__pjy7RgBtF]: hasVariant(
                        variants,
                        "multiLineText",
                        "multiLineText"
                      ),

                      [sty.inputTextForm__singleLineText__pjy75VFan]:
                        hasVariant(variants, "singleLineText", "singleLineText")
                    }
                  )}
                  labelHeadline={"First name"}
                  width={"_270"}
                />
              ) : null}
              {(
                hasVariant(variants, "inputType", "dropdownDropdown")
                  ? false
                  : hasVariant(variants, "inputType", "dropdownText")
                  ? false
                  : hasVariant(variants, "inputType", "companyname")
                  ? false
                  : hasVariant(variants, "inputType", "username")
                  ? false
                  : hasVariant(variants, "singleLineText", "singleLineText")
                  ? false
                  : hasVariant(variants, "multiLineText", "multiLineText")
                  ? false
                  : hasVariant(variants, "inputType", "displayText")
                  ? false
                  : true
              ) ? (
                <InputTextForm
                  className={classNames(
                    "__wab_instance",
                    sty.inputTextForm__qbxL0,
                    {
                      [sty.inputTextForm__inputType_companyname__qbxL0YQu0E]:
                        hasVariant(variants, "inputType", "companyname"),
                      [sty.inputTextForm__inputType_displayText__qbxL0Ko3Kh]:
                        hasVariant(variants, "inputType", "displayText"),
                      [sty.inputTextForm__inputType_dropdownDropdown__qbxL0L2Zus]:
                        hasVariant(variants, "inputType", "dropdownDropdown"),
                      [sty.inputTextForm__inputType_dropdownText__qbxL0HRwL0]:
                        hasVariant(variants, "inputType", "dropdownText"),
                      [sty.inputTextForm__inputType_username__qbxL03UQvi]:
                        hasVariant(variants, "inputType", "username"),
                      [sty.inputTextForm__multiLineText__qbxL0RgBtF]:
                        hasVariant(variants, "multiLineText", "multiLineText"),
                      [sty.inputTextForm__singleLineText__qbxL05VFan]:
                        hasVariant(variants, "singleLineText", "singleLineText")
                    }
                  )}
                  labelHeadline={"Last name"}
                  width={"_270"}
                />
              ) : null}
              {(
                hasVariant(variants, "multiLineText", "multiLineText")
                  ? false
                  : false
              ) ? (
                <TextMultiLineA
                  data-plasmic-name={"textMultiLineA"}
                  data-plasmic-override={overrides.textMultiLineA}
                  className={classNames("__wab_instance", sty.textMultiLineA, {
                    [sty.textMultiLineA__multiLineText]: hasVariant(
                      variants,
                      "multiLineText",
                      "multiLineText"
                    )
                  })}
                  size={
                    hasVariant(variants, "multiLineText", "multiLineText")
                      ? "large"
                      : undefined
                  }
                />
              ) : null}
              {(
                hasVariant(variants, "inputType", "dropdownText") ? true : false
              ) ? (
                <InputTextForm
                  className={classNames(
                    "__wab_instance",
                    sty.inputTextForm__x0DYe,
                    {
                      [sty.inputTextForm__inputType_displayText__x0DYeko3Kh]:
                        hasVariant(variants, "inputType", "displayText"),
                      [sty.inputTextForm__inputType_dropdownDropdown__x0DYEl2Zus]:
                        hasVariant(variants, "inputType", "dropdownDropdown"),
                      [sty.inputTextForm__inputType_dropdownText__x0DYEhRwL0]:
                        hasVariant(variants, "inputType", "dropdownText")
                    }
                  )}
                  labelHeadline={p.renderPlasmicSlot({
                    defaultContents: hasVariant(
                      variants,
                      "inputType",
                      "dropdownText"
                    )
                      ? "Label"
                      : "City",
                    value: args.slotLabel,
                    className: classNames(sty.slotTargetSlotLabel, {
                      [sty.slotTargetSlotLabel__inputType_dropdownText]:
                        hasVariant(variants, "inputType", "dropdownText")
                    })
                  })}
                  width={
                    hasVariant(variants, "inputType", "dropdownText")
                      ? "_270"
                      : undefined
                  }
                />
              ) : null}
              {(
                hasVariant(variants, "singleLineText", "singleLineText")
                  ? true
                  : false
              ) ? (
                <div
                  data-plasmic-name={"inputTextContainer"}
                  data-plasmic-override={overrides.inputTextContainer}
                  className={classNames(
                    projectcss.all,
                    sty.inputTextContainer,
                    {
                      [sty.inputTextContainer__multiLineText]: hasVariant(
                        variants,
                        "multiLineText",
                        "multiLineText"
                      ),

                      [sty.inputTextContainer__singleLineText]: hasVariant(
                        variants,
                        "singleLineText",
                        "singleLineText"
                      )
                    }
                  )}
                >
                  <div
                    data-plasmic-name={"singleLineTextContainerParent"}
                    data-plasmic-override={
                      overrides.singleLineTextContainerParent
                    }
                    className={classNames(
                      projectcss.all,
                      sty.singleLineTextContainerParent,
                      {
                        [sty.singleLineTextContainerParent__singleLineText]:
                          hasVariant(
                            variants,
                            "singleLineText",
                            "singleLineText"
                          )
                      }
                    )}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <input
                          className={classNames(
                            projectcss.input,
                            sty.textInput__dZu8N
                          )}
                          placeholder={"Some placeholder"}
                          size={1}
                          type={"text"}
                          value={"Some value"}
                        />
                      ),

                      value: args.singleLineTextContainer
                    })}
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(variants, "inputType", "username") ? true : false
              ) ? (
                <div
                  data-plasmic-name={"urlTextParent"}
                  data-plasmic-override={overrides.urlTextParent}
                  className={classNames(projectcss.all, sty.urlTextParent, {
                    [sty.urlTextParent__inputType_dropdownText]: hasVariant(
                      variants,
                      "inputType",
                      "dropdownText"
                    ),

                    [sty.urlTextParent__inputType_username]: hasVariant(
                      variants,
                      "inputType",
                      "username"
                    )
                  })}
                >
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text,
                      {
                        [sty.text__inputType_username]: hasVariant(
                          variants,
                          "inputType",
                          "username"
                        )
                      }
                    )}
                  >
                    {"intrepid.technology/"}
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(variants, "inputType", "username") ? false : false
              ) ? (
                <input
                  className={classNames(
                    projectcss.input,
                    sty.textInput__tzwN1,
                    {
                      [sty.textInput__inputType_username__tzwN13UQvi]:
                        hasVariant(variants, "inputType", "username")
                    }
                  )}
                  placeholder={"Some placeholder"}
                  size={1}
                  type={"text"}
                  value={"Some value"}
                />
              ) : null}
              {(
                hasVariant(variants, "inputType", "username") ? true : false
              ) ? (
                <div
                  data-plasmic-name={"inputTextParent"}
                  data-plasmic-override={overrides.inputTextParent}
                  className={classNames(projectcss.all, sty.inputTextParent, {
                    [sty.inputTextParent__inputType_username]: hasVariant(
                      variants,
                      "inputType",
                      "username"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "inputType", "username") ? true : false
                  ) ? (
                    <input
                      className={classNames(
                        projectcss.input,
                        sty.textInput__s9G9K,
                        {
                          [sty.textInput__inputType_username__s9G9K3UQvi]:
                            hasVariant(variants, "inputType", "username")
                        }
                      )}
                      placeholder={
                        hasVariant(variants, "inputType", "username")
                          ? ""
                          : "Some placeholder"
                      }
                      size={1}
                      type={"text"}
                      value={
                        hasVariant(variants, "inputType", "username")
                          ? ""
                          : "Some value"
                      }
                    />
                  ) : null}
                </div>
              ) : null}
              {(
                hasVariant(variants, "inputType", "companyname") ? true : false
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__ucpw3, {
                    [sty.freeBox__inputType_companyname__ucpw3YQu0E]:
                      hasVariant(variants, "inputType", "companyname")
                  })}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ti2Dh, {
                      [sty.freeBox__inputType_companyname__ti2DhyQu0E]:
                        hasVariant(variants, "inputType", "companyname")
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "intrepid.technology/company/",
                      value: args.slot2,
                      className: classNames(sty.slotTargetSlot2, {
                        [sty.slotTargetSlot2__inputType_companyname]:
                          hasVariant(variants, "inputType", "companyname")
                      })
                    })}
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(variants, "inputType", "companyname") ? true : false
              ) ? (
                <div
                  data-plasmic-name={"inputUrlTextParent"}
                  data-plasmic-override={overrides.inputUrlTextParent}
                  className={classNames(
                    projectcss.all,
                    sty.inputUrlTextParent,
                    {
                      [sty.inputUrlTextParent__inputType_companyname]:
                        hasVariant(variants, "inputType", "companyname")
                    }
                  )}
                >
                  {(
                    hasVariant(variants, "inputType", "companyname")
                      ? true
                      : false
                  ) ? (
                    <input
                      className={classNames(
                        projectcss.input,
                        sty.textInput__pm7Dz,
                        {
                          [sty.textInput__inputType_companyname__pm7DzYQu0E]:
                            hasVariant(variants, "inputType", "companyname")
                        }
                      )}
                      placeholder={
                        hasVariant(variants, "inputType", "companyname")
                          ? ""
                          : ""
                      }
                      size={1}
                      type={"text"}
                      value={
                        hasVariant(variants, "inputType", "companyname")
                          ? ""
                          : ""
                      }
                    />
                  ) : null}
                </div>
              ) : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(variants, "multiLineText", "multiLineText")
              ? true
              : false
          ) ? (
            <div
              data-plasmic-name={"textParent"}
              data-plasmic-override={overrides.textParent}
              className={classNames(projectcss.all, sty.textParent, {
                [sty.textParent__multiLineText]: hasVariant(
                  variants,
                  "multiLineText",
                  "multiLineText"
                )
              })}
            >
              <div
                data-plasmic-name={"inputMultiLineTextParent"}
                data-plasmic-override={overrides.inputMultiLineTextParent}
                className={classNames(
                  projectcss.all,
                  sty.inputMultiLineTextParent,
                  {
                    [sty.inputMultiLineTextParent__multiLineText]: hasVariant(
                      variants,
                      "multiLineText",
                      "multiLineText"
                    ),

                    [sty.inputMultiLineTextParent__singleLineText]: hasVariant(
                      variants,
                      "singleLineText",
                      "singleLineText"
                    )
                  }
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <textarea
                      className={classNames(
                        projectcss.textarea,
                        sty.textarea___4QXp
                      )}
                      value={"long form text"}
                    />
                  ),

                  value: args.children
                })}
              </div>
            </div>
          ) : null}
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"descriptionCard"}
          data-plasmic-override={overrides.descriptionCard}
          hasGap={true}
          className={classNames(projectcss.all, sty.descriptionCard, {
            [sty.descriptionCard__button_subDescription]:
              hasVariant(variants, "button", "button") &&
              hasVariant(variants, "subDescription", "subDescription"),
            [sty.descriptionCard__inputType_companyname]: hasVariant(
              variants,
              "inputType",
              "companyname"
            ),

            [sty.descriptionCard__inputType_dropdownText]: hasVariant(
              variants,
              "inputType",
              "dropdownText"
            ),

            [sty.descriptionCard__inputType_username]: hasVariant(
              variants,
              "inputType",
              "username"
            ),

            [sty.descriptionCard__singleLineText]: hasVariant(
              variants,
              "singleLineText",
              "singleLineText"
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
                [sty.slotTargetDescription__inputType_displayText]: hasVariant(
                  variants,
                  "inputType",
                  "displayText"
                ),

                [sty.slotTargetDescription__inputType_dropdownText]: hasVariant(
                  variants,
                  "inputType",
                  "dropdownText"
                ),

                [sty.slotTargetDescription__multiLineText]: hasVariant(
                  variants,
                  "multiLineText",
                  "multiLineText"
                ),

                [sty.slotTargetDescription__subDescription]: hasVariant(
                  variants,
                  "subDescription",
                  "subDescription"
                )
              })
            })}
          </div>

          <ButtonPrimary
            data-plasmic-name={"buttonPrimary"}
            data-plasmic-override={overrides.buttonPrimary}
            className={classNames("__wab_instance", sty.buttonPrimary, {
              [sty.buttonPrimary__button]: hasVariant(
                variants,
                "button",
                "button"
              ),

              [sty.buttonPrimary__subDescription]: hasVariant(
                variants,
                "subDescription",
                "subDescription"
              )
            })}
            width={"_140"}
          >
            {"Save"}
          </ButtonPrimary>
        </p.Stack>
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
    "inputElementParent",
    "textMultiLineA",
    "inputTextContainer",
    "singleLineTextContainerParent",
    "urlTextParent",
    "text",
    "inputTextParent",
    "inputUrlTextParent",
    "textParent",
    "inputMultiLineTextParent",
    "descriptionCard",
    "descriptionParent",
    "buttonPrimary"
  ],

  parent: [
    "parent",
    "mainCard",
    "headlineParent",
    "inputElementParent",
    "textMultiLineA",
    "inputTextContainer",
    "singleLineTextContainerParent",
    "urlTextParent",
    "text",
    "inputTextParent",
    "inputUrlTextParent",
    "textParent",
    "inputMultiLineTextParent",
    "descriptionCard",
    "descriptionParent",
    "buttonPrimary"
  ],

  mainCard: [
    "mainCard",
    "headlineParent",
    "inputElementParent",
    "textMultiLineA",
    "inputTextContainer",
    "singleLineTextContainerParent",
    "urlTextParent",
    "text",
    "inputTextParent",
    "inputUrlTextParent",
    "textParent",
    "inputMultiLineTextParent"
  ],

  headlineParent: ["headlineParent"],
  inputElementParent: [
    "inputElementParent",
    "textMultiLineA",
    "inputTextContainer",
    "singleLineTextContainerParent",
    "urlTextParent",
    "text",
    "inputTextParent",
    "inputUrlTextParent"
  ],

  textMultiLineA: ["textMultiLineA"],
  inputTextContainer: ["inputTextContainer", "singleLineTextContainerParent"],
  singleLineTextContainerParent: ["singleLineTextContainerParent"],
  urlTextParent: ["urlTextParent", "text"],
  text: ["text"],
  inputTextParent: ["inputTextParent"],
  inputUrlTextParent: ["inputUrlTextParent"],
  textParent: ["textParent", "inputMultiLineTextParent"],
  inputMultiLineTextParent: ["inputMultiLineTextParent"],
  descriptionCard: ["descriptionCard", "descriptionParent", "buttonPrimary"],
  descriptionParent: ["descriptionParent"],
  buttonPrimary: ["buttonPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputFormCardPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputFormCardPrimary__VariantProps
    });

    return PlasmicInputFormCardPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputFormCardPrimary";
  } else {
    func.displayName = `PlasmicInputFormCardPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputFormCardPrimary = Object.assign(
  // Top-level PlasmicInputFormCardPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    mainCard: makeNodeComponent("mainCard"),
    headlineParent: makeNodeComponent("headlineParent"),
    inputElementParent: makeNodeComponent("inputElementParent"),
    textMultiLineA: makeNodeComponent("textMultiLineA"),
    inputTextContainer: makeNodeComponent("inputTextContainer"),
    singleLineTextContainerParent: makeNodeComponent(
      "singleLineTextContainerParent"
    ),

    urlTextParent: makeNodeComponent("urlTextParent"),
    text: makeNodeComponent("text"),
    inputTextParent: makeNodeComponent("inputTextParent"),
    inputUrlTextParent: makeNodeComponent("inputUrlTextParent"),
    textParent: makeNodeComponent("textParent"),
    inputMultiLineTextParent: makeNodeComponent("inputMultiLineTextParent"),
    descriptionCard: makeNodeComponent("descriptionCard"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicInputFormCardPrimary
    internalVariantProps: PlasmicInputFormCardPrimary__VariantProps,
    internalArgProps: PlasmicInputFormCardPrimary__ArgProps
  }
);

export default PlasmicInputFormCardPrimary;
/* prettier-ignore-end */
