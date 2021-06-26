// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: tXYMHpwnPtJ
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputFormCardBasic from "../../InputFormCardBasic"; // plasmic-import: IF5nud1uvm2/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import InputFormCardPrimary from "../../InputFormCardPrimary"; // plasmic-import: 7K8uSXduxTH/component
import InputFormCardEmailSearchBadge from "../../InputFormCardEmailSearchBadge"; // plasmic-import: 0JndNhJNnle/component
import SectionConnectedAccounts from "../../SectionConnectedAccounts"; // plasmic-import: -32NgWHIsLX/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPersonalAuthentication.module.css"; // plasmic-import: tXYMHpwnPtJ/css

export const PlasmicPersonalAuthentication__VariantProps = new Array();

export const PlasmicPersonalAuthentication__ArgProps = new Array();

function PlasmicPersonalAuthentication__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <InputFormCardBasic
            data-plasmic-name={"personalDeleteAccount"}
            data-plasmic-override={overrides.personalDeleteAccount}
            border={"border"}
            className={classNames("__wab_instance", sty.personalDeleteAccount)}
            description={"description"}
            headline={"Delete account"}
            slot3={
              <ButtonPrimary
                data-plasmic-name={"buttonPrimary"}
                data-plasmic-override={overrides.buttonPrimary}
                className={classNames("__wab_instance", sty.buttonPrimary)}
                color={"caution"}
                size={"_140"}
                type={"ghost"}
              >
                {"Delete account"}
              </ButtonPrimary>
            }
            subhead={
              "Permanently remove your account and all of its contents from the Intrepid community. This action is not reversible, so please continue with caution."
            }
          />

          <InputFormCardPrimary
            data-plasmic-name={"personalJobCard"}
            data-plasmic-override={overrides.personalJobCard}
            button={"button"}
            className={classNames("__wab_instance", sty.personalJobCard)}
            description={"Only for security, notifications, and special offers"}
            headline={"Mobile number"}
            inputType={"dropdownText"}
            label={"Country"}
            slotLabel={"Number"}
            subDescription={"subDescription"}
            subHead={
              "Please enter the industry you work in and your role in your company."
            }
          />

          <InputFormCardEmailSearchBadge
            data-plasmic-name={"personalEmailCard"}
            data-plasmic-override={overrides.personalEmailCard}
            button={"button"}
            className={classNames("__wab_instance", sty.personalEmailCard)}
            description={"We will email you to verify the change."}
            headline={"Email"}
            subDescription={"subDescription"}
            subHead={"Please enter the email address you want to use to log in"}
          />

          <SectionConnectedAccounts
            data-plasmic-name={"sectionConnectedAccounts"}
            data-plasmic-override={overrides.sectionConnectedAccounts}
            className={classNames(
              "__wab_instance",
              sty.sectionConnectedAccounts
            )}
            closed={"closed"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "personalDeleteAccount",
    "buttonPrimary",
    "personalJobCard",
    "personalEmailCard",
    "sectionConnectedAccounts"
  ],

  personalDeleteAccount: ["personalDeleteAccount", "buttonPrimary"],
  buttonPrimary: ["buttonPrimary"],
  personalJobCard: ["personalJobCard"],
  personalEmailCard: ["personalEmailCard"],
  sectionConnectedAccounts: ["sectionConnectedAccounts"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPersonalAuthentication__ArgProps,
      internalVariantPropNames: PlasmicPersonalAuthentication__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPersonalAuthentication__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonalAuthentication";
  } else {
    func.displayName = `PlasmicPersonalAuthentication.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonalAuthentication = Object.assign(
  // Top-level PlasmicPersonalAuthentication renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    personalDeleteAccount: makeNodeComponent("personalDeleteAccount"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    personalJobCard: makeNodeComponent("personalJobCard"),
    personalEmailCard: makeNodeComponent("personalEmailCard"),
    sectionConnectedAccounts: makeNodeComponent("sectionConnectedAccounts"),
    // Metadata about props expected for PlasmicPersonalAuthentication
    internalVariantProps: PlasmicPersonalAuthentication__VariantProps,
    internalArgProps: PlasmicPersonalAuthentication__ArgProps
  }
);

export default PlasmicPersonalAuthentication;
/* prettier-ignore-end */
