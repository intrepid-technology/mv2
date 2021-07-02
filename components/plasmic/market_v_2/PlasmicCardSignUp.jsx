// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: kpT4G-q2jGd
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ButtonConnectedAccount from "../../ButtonConnectedAccount"; // plasmic-import: 9kU3iljaXN/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: d7dGAYuRCt/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardSignUp.module.css"; // plasmic-import: kpT4G-q2jGd/css
import SectionDividerIcon from "./icons/PlasmicIcon__SectionDivider"; // plasmic-import: UzRMlTHWYLl/icon

export const PlasmicCardSignUp__VariantProps = new Array();

export const PlasmicCardSignUp__ArgProps = new Array("id");

function PlasmicCardSignUp__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"form"}
      data-plasmic-name={"formHomeSignUp"}
      data-plasmic-override={overrides.formHomeSignUp}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.formHomeSignUp
      )}
      id={args.id}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"emailInputParent"}
        data-plasmic-override={overrides.emailInputParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.emailInputParent)}
      >
        <label
          data-plasmic-name={"emailText"}
          data-plasmic-override={overrides.emailText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.emailText
          )}
        >
          {"Email"}
        </label>

        <input
          data-plasmic-name={"email"}
          data-plasmic-override={overrides.email}
          className={classNames(defaultcss.input, sty.email)}
          placeholder={"Enter your email"}
          size={1}
          type={"text"}
          value={""}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"passwordInputParent"}
        data-plasmic-override={overrides.passwordInputParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.passwordInputParent)}
      >
        <label
          data-plasmic-name={"passwordText"}
          data-plasmic-override={overrides.passwordText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.passwordText
          )}
        >
          {"Password"}
        </label>

        <input
          data-plasmic-name={"password"}
          data-plasmic-override={overrides.password}
          className={classNames(defaultcss.input, sty.password)}
          placeholder={"Enter your password"}
          size={1}
          type={"text"}
          value={""}
        />
      </p.Stack>

      <ButtonPrimary
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton)}
        size={"_360"}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__mdZl0
          )}
        >
          {"Continue"}
        </div>
      </ButtonPrimary>

      <p.Stack
        as={"div"}
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        hasGap={true}
        className={classNames(defaultcss.all, sty.divider)}
      >
        <SectionDividerIcon
          className={classNames(defaultcss.all, sty.svg__pz4Rl)}
          role={"img"}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__gKFt7
          )}
        >
          {"or"}
        </div>

        <SectionDividerIcon
          className={classNames(defaultcss.all, sty.svg__uYfz)}
          role={"img"}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__bYQfP)}
      >
        <ButtonConnectedAccount
          data-plasmic-name={"signupFacebookConnection"}
          data-plasmic-override={overrides.signupFacebookConnection}
          className={classNames("__wab_instance", sty.signupFacebookConnection)}
          company={"facebook"}
          height={"_48"}
          width={"_360"}
        />

        <ButtonConnectedAccount
          data-plasmic-name={"signupGoogleConnection"}
          data-plasmic-override={overrides.signupGoogleConnection}
          className={classNames("__wab_instance", sty.signupGoogleConnection)}
          company={"google"}
          height={"_48"}
          width={"_360"}
        />
      </p.Stack>

      <SectionDividerIcon
        className={classNames(defaultcss.all, sty.svg___5Kp4V)}
        role={"img"}
      />

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__l0Gji
        )}
      >
        {"Already have an account?"}
      </div>

      {(
        hasVariant(globalVariants, "screen", "desktopPrimary") ? true : true
      ) ? (
        <ButtonLinkPrimary
          data-plasmic-name={"buttonLinkPrimary"}
          data-plasmic-override={overrides.buttonLinkPrimary}
          className={classNames("__wab_instance", sty.buttonLinkPrimary)}
          color={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "light"
              : "light"
          }
          destination={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "/log-in"
              : "/log-in"
          }
          height={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "_48"
              : "_48"
          }
          text={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__tVj8G
              )}
            >
              {hasVariant(globalVariants, "screen", "desktopPrimary")
                ? "Login"
                : "Login"}
            </div>
          }
          type={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "outline"
              : "outline"
          }
          width={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "_360"
              : "_360"
          }
        />
      ) : null}

      <div
        data-plasmic-name={"terms"}
        data-plasmic-override={overrides.terms}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.terms)}
      >
        {
          'By selecting "Continue", I agree to Intrepid\'s Terms of Service, Privacy Policy,  and to receive members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification'
        }
      </div>

      <div
        data-plasmic-name={"signupLegalLinks"}
        data-plasmic-override={overrides.signupLegalLinks}
        className={classNames(defaultcss.all, sty.signupLegalLinks)}
      >
        <p.PlasmicLink
          data-plasmic-name={"signupTos"}
          data-plasmic-override={overrides.signupTos}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.signupTos
          )}
          component={Link}
          href={"/terms-of-service"}
          platform={"nextjs"}
        >
          {"Terms of service"}
        </p.PlasmicLink>

        <p.PlasmicLink
          data-plasmic-name={"signupPrivacy"}
          data-plasmic-override={overrides.signupPrivacy}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.signupPrivacy
          )}
          component={Link}
          href={"/privacy"}
          platform={"nextjs"}
        >
          {"Privacy policy"}
        </p.PlasmicLink>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  formHomeSignUp: [
    "formHomeSignUp",
    "emailInputParent",
    "emailText",
    "email",
    "passwordInputParent",
    "passwordText",
    "password",
    "submitButton",
    "divider",
    "signupFacebookConnection",
    "signupGoogleConnection",
    "buttonLinkPrimary",
    "terms",
    "signupLegalLinks",
    "signupTos",
    "signupPrivacy"
  ],

  emailInputParent: ["emailInputParent", "emailText", "email"],
  emailText: ["emailText"],
  email: ["email"],
  passwordInputParent: ["passwordInputParent", "passwordText", "password"],
  passwordText: ["passwordText"],
  password: ["password"],
  submitButton: ["submitButton"],
  divider: ["divider"],
  signupFacebookConnection: ["signupFacebookConnection"],
  signupGoogleConnection: ["signupGoogleConnection"],
  buttonLinkPrimary: ["buttonLinkPrimary"],
  terms: ["terms"],
  signupLegalLinks: ["signupLegalLinks", "signupTos", "signupPrivacy"],
  signupTos: ["signupTos"],
  signupPrivacy: ["signupPrivacy"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardSignUp__ArgProps,
      internalVariantPropNames: PlasmicCardSignUp__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardSignUp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "formHomeSignUp") {
    func.displayName = "PlasmicCardSignUp";
  } else {
    func.displayName = `PlasmicCardSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicCardSignUp = Object.assign(
  // Top-level PlasmicCardSignUp renders the root element
  makeNodeComponent("formHomeSignUp"),
  {
    // Helper components rendering sub-elements
    emailInputParent: makeNodeComponent("emailInputParent"),
    emailText: makeNodeComponent("emailText"),
    email: makeNodeComponent("email"),
    passwordInputParent: makeNodeComponent("passwordInputParent"),
    passwordText: makeNodeComponent("passwordText"),
    password: makeNodeComponent("password"),
    submitButton: makeNodeComponent("submitButton"),
    divider: makeNodeComponent("divider"),
    signupFacebookConnection: makeNodeComponent("signupFacebookConnection"),
    signupGoogleConnection: makeNodeComponent("signupGoogleConnection"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),
    terms: makeNodeComponent("terms"),
    signupLegalLinks: makeNodeComponent("signupLegalLinks"),
    signupTos: makeNodeComponent("signupTos"),
    signupPrivacy: makeNodeComponent("signupPrivacy"),
    // Metadata about props expected for PlasmicCardSignUp
    internalVariantProps: PlasmicCardSignUp__VariantProps,
    internalArgProps: PlasmicCardSignUp__ArgProps
  }
);

export default PlasmicCardSignUp;
/* prettier-ignore-end */
