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
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import ButtonConnectedAccount from "../../ButtonConnectedAccount"; // plasmic-import: 9kU3iljaXN/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardSignUp.module.css"; // plasmic-import: kpT4G-q2jGd/css
import SectionDividerIcon from "./icons/PlasmicIcon__SectionDivider"; // plasmic-import: UzRMlTHWYLl/icon

export const PlasmicCardSignUp__VariantProps = new Array();

export const PlasmicCardSignUp__ArgProps = new Array("id");

function PlasmicCardSignUp__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"formHomeSignUp"}
      data-plasmic-override={overrides.formHomeSignUp}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
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
        className={classNames(projectcss.all, sty.emailInputParent)}
      >
        <label
          data-plasmic-name={"emailText"}
          data-plasmic-override={overrides.emailText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.emailText
          )}
        >
          {"Email"}
        </label>

        <input
          data-plasmic-name={"email"}
          data-plasmic-override={overrides.email}
          className={classNames(projectcss.input, sty.email)}
          placeholder={"Enter your email"}
          size={1}
          type={
            hasVariant(globalVariants, "screen", "desktop") ? "text" : "text"
          }
          value={hasVariant(globalVariants, "screen", "desktop") ? "" : ""}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"passwordInputParent"}
        data-plasmic-override={overrides.passwordInputParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.passwordInputParent)}
      >
        <label
          data-plasmic-name={"passwordText"}
          data-plasmic-override={overrides.passwordText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.passwordText
          )}
        >
          {"Password"}
        </label>

        <input
          data-plasmic-name={"password"}
          data-plasmic-override={overrides.password}
          className={classNames(projectcss.input, sty.password)}
          placeholder={"Enter your password"}
          size={1}
          type={"password"}
          value={""}
        />
      </p.Stack>

      <Button
        data-plasmic-name={"continueButton"}
        data-plasmic-override={overrides.continueButton}
        className={classNames("__wab_instance", sty.continueButton)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gTvRl
          )}
        >
          {"Continue"}
        </div>
      </Button>

      <p.Stack
        as={"div"}
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        hasGap={true}
        className={classNames(projectcss.all, sty.divider)}
      >
        <SectionDividerIcon
          className={classNames(projectcss.all, sty.svg__pz4Rl)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gKFt7
          )}
        >
          {"or"}
        </div>

        <SectionDividerIcon
          className={classNames(projectcss.all, sty.svg__uYfz)}
          role={"img"}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
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
        className={classNames(projectcss.all, sty.svg___5Kp4V)}
        role={"img"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__l0Gji
        )}
      >
        {"Already have an account?"}
      </div>

      <Button
        data-plasmic-name={"loginButton"}
        data-plasmic-override={overrides.loginButton}
        className={classNames("__wab_instance", sty.loginButton)}
        destination={"/log-in"}
        type={"outline"}
      >
        {"Login"}
      </Button>

      <div
        data-plasmic-name={"terms"}
        data-plasmic-override={overrides.terms}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.terms)}
      >
        {
          'By selecting "Continue", I agree to Intrepid\'s Terms of Service, Privacy Policy,  and to receive members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification'
        }
      </div>

      <div
        data-plasmic-name={"signupLegalLinks"}
        data-plasmic-override={overrides.signupLegalLinks}
        className={classNames(projectcss.all, sty.signupLegalLinks)}
      >
        <p.PlasmicLink
          data-plasmic-name={"signupTos"}
          data-plasmic-override={overrides.signupTos}
          className={classNames(
            projectcss.a,
            projectcss.__wab_text,
            sty.signupTos
          )}
          component={Link}
          href={"/terms"}
          platform={"nextjs"}
        >
          {"Terms of service"}
        </p.PlasmicLink>

        <p.PlasmicLink
          data-plasmic-name={"signupPrivacy"}
          data-plasmic-override={overrides.signupPrivacy}
          className={classNames(
            projectcss.a,
            projectcss.__wab_text,
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
    "continueButton",
    "divider",
    "freeBox",
    "signupFacebookConnection",
    "signupGoogleConnection",
    "loginButton",
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
  continueButton: ["continueButton"],
  divider: ["divider"],
  freeBox: ["freeBox", "signupFacebookConnection", "signupGoogleConnection"],
  signupFacebookConnection: ["signupFacebookConnection"],
  signupGoogleConnection: ["signupGoogleConnection"],
  loginButton: ["loginButton"],
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

    return PlasmicCardSignUp__RenderFunc({
      variants,
      args,
      overrides,
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
    continueButton: makeNodeComponent("continueButton"),
    divider: makeNodeComponent("divider"),
    freeBox: makeNodeComponent("freeBox"),
    signupFacebookConnection: makeNodeComponent("signupFacebookConnection"),
    signupGoogleConnection: makeNodeComponent("signupGoogleConnection"),
    loginButton: makeNodeComponent("loginButton"),
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
