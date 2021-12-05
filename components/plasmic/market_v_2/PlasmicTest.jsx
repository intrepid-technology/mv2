// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: v_33trlWhR
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import FormContext from "../../FormContext"; // plasmic-import: fzhRfAQRK6/component
import FormTextInput from "../../FormTextInput"; // plasmic-import: egzqjpKDP_e/component
import FormTextAreaInput from "../../FormTextAreaInput"; // plasmic-import: rDSDf80NUiR/component
import FormConditionalField from "../../FormConditionalField"; // plasmic-import: ZfCDErbD5C/component
import FormSelectInput from "../../FormSelectInput"; // plasmic-import: VSW4TWeqMx/component
import FormCheckboxInput from "../../FormCheckboxInput"; // plasmic-import: XuFJ5mD6RY/component
import FormSwitchInput from "../../FormSwitchInput"; // plasmic-import: Q6uFqZTeF8/component
import FormMultiCheckboxInput from "../../FormMultiCheckboxInput"; // plasmic-import: -o3gl0nF6j/component
import FormMultiSelectInput from "../../FormMultiSelectInput"; // plasmic-import: eTIpxqMjYo/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import DialogInviteProfessional from "../../DialogInviteProfessional"; // plasmic-import: UnAAzfphtK/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTest.module.css"; // plasmic-import: v_33trlWhR/css

export const PlasmicTest__VariantProps = new Array();

export const PlasmicTest__ArgProps = new Array();

function PlasmicTest__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Test"}</title>
        <meta key="og:title" property="og:title" content={"Test"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <FormContext
            data-plasmic-name={"formContext"}
            data-plasmic-override={overrides.formContext}
            className={classNames("__wab_instance", sty.formContext)}
          >
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__uLznf
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__aaNhh
                )}
              >
                <FormTextInput
                  data-plasmic-name={"formTextInput"}
                  data-plasmic-override={overrides.formTextInput}
                  className={classNames("__wab_instance", sty.formTextInput)}
                  name={"text"}
                />

                <FormTextAreaInput
                  data-plasmic-name={"formTextAreaInput"}
                  data-plasmic-override={overrides.formTextAreaInput}
                  className={classNames(
                    "__wab_instance",
                    sty.formTextAreaInput
                  )}
                  name={"textarea"}
                />

                <FormConditionalField
                  className={classNames(
                    "__wab_instance",
                    sty.formConditionalField__cHaze
                  )}
                  name={"text"}
                  testBooleanValue={true}
                  testObjectValue={{ abc: 123 }}
                  value={"Hide Select"}
                >
                  <FormSelectInput
                    data-plasmic-name={"formSelectInput"}
                    data-plasmic-override={overrides.formSelectInput}
                    className={classNames(
                      "__wab_instance",
                      sty.formSelectInput
                    )}
                    name={"select"}
                  />
                </FormConditionalField>

                <FormCheckboxInput
                  data-plasmic-name={"formCheckboxInput"}
                  data-plasmic-override={overrides.formCheckboxInput}
                  className={classNames(
                    "__wab_instance",
                    sty.formCheckboxInput
                  )}
                  name={"checkbox"}
                >
                  {"Sample Checkbox"}
                </FormCheckboxInput>

                <FormConditionalField
                  className={classNames(
                    "__wab_instance",
                    sty.formConditionalField___50PLj
                  )}
                  name={"checkbox"}
                  value={"true"}
                >
                  <FormSwitchInput
                    data-plasmic-name={"formSwitchInput"}
                    data-plasmic-override={overrides.formSwitchInput}
                    className={classNames(
                      "__wab_instance",
                      sty.formSwitchInput
                    )}
                    content={
                      "Please switch me on to verify if its working or not."
                    }
                    name={"switch"}
                  />
                </FormConditionalField>

                <FormMultiCheckboxInput
                  data-plasmic-name={"formMultiCheckboxInput"}
                  data-plasmic-override={overrides.formMultiCheckboxInput}
                  className={classNames(
                    "__wab_instance",
                    sty.formMultiCheckboxInput
                  )}
                  name={"multi_checkbox"}
                />

                <FormMultiSelectInput
                  data-plasmic-name={"formMultiSelectInput"}
                  data-plasmic-override={overrides.formMultiSelectInput}
                  className={classNames(
                    "__wab_instance",
                    sty.formMultiSelectInput
                  )}
                  name={"multiSelect"}
                />

                <Button
                  data-plasmic-name={"submitButton"}
                  data-plasmic-override={overrides.submitButton}
                  className={classNames("__wab_instance", sty.submitButton)}
                >
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Submit"}
                  </div>
                </Button>
              </p.Stack>
            </div>
          </FormContext>

          <DialogInviteProfessional
            data-plasmic-name={"dialogInviteProfessional"}
            data-plasmic-override={overrides.dialogInviteProfessional}
            className={classNames(
              "__wab_instance",
              sty.dialogInviteProfessional
            )}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "formContext",
    "formTextInput",
    "formTextAreaInput",
    "formSelectInput",
    "formCheckboxInput",
    "formSwitchInput",
    "formMultiCheckboxInput",
    "formMultiSelectInput",
    "submitButton",
    "text",
    "dialogInviteProfessional"
  ],

  formContext: [
    "formContext",
    "formTextInput",
    "formTextAreaInput",
    "formSelectInput",
    "formCheckboxInput",
    "formSwitchInput",
    "formMultiCheckboxInput",
    "formMultiSelectInput",
    "submitButton",
    "text"
  ],

  formTextInput: ["formTextInput"],
  formTextAreaInput: ["formTextAreaInput"],
  formSelectInput: ["formSelectInput"],
  formCheckboxInput: ["formCheckboxInput"],
  formSwitchInput: ["formSwitchInput"],
  formMultiCheckboxInput: ["formMultiCheckboxInput"],
  formMultiSelectInput: ["formMultiSelectInput"],
  submitButton: ["submitButton", "text"],
  text: ["text"],
  dialogInviteProfessional: ["dialogInviteProfessional"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTest__ArgProps,
      internalVariantPropNames: PlasmicTest__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    formContext: makeNodeComponent("formContext"),
    formTextInput: makeNodeComponent("formTextInput"),
    formTextAreaInput: makeNodeComponent("formTextAreaInput"),
    formSelectInput: makeNodeComponent("formSelectInput"),
    formCheckboxInput: makeNodeComponent("formCheckboxInput"),
    formSwitchInput: makeNodeComponent("formSwitchInput"),
    formMultiCheckboxInput: makeNodeComponent("formMultiCheckboxInput"),
    formMultiSelectInput: makeNodeComponent("formMultiSelectInput"),
    submitButton: makeNodeComponent("submitButton"),
    text: makeNodeComponent("text"),
    dialogInviteProfessional: makeNodeComponent("dialogInviteProfessional"),
    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
