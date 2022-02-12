// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: wTVVybnMbI4
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import ButtonConnectedAccount from "../../ButtonConnectedAccount"; // plasmic-import: 9kU3iljaXN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicCardLogIn.module.css"; // plasmic-import: wTVVybnMbI4/css

export const PlasmicCardLogIn__VariantProps = new Array("size");

export const PlasmicCardLogIn__ArgProps = new Array("id", "placeholder");

function PlasmicCardLogIn__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"formLogin"}
      data-plasmic-override={overrides.formLogin}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.formLogin,
        {
          [sty.formLoginsize__360]: hasVariant(variants, "size", "_360"),
          [sty.formLoginsize__540]: hasVariant(variants, "size", "_540")
        }
      )}
      id={args.id}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"inputLabelParent"}
        data-plasmic-override={overrides.inputLabelParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.inputLabelParent)}
      >
        <label
          data-plasmic-name={"emailLabel"}
          data-plasmic-override={overrides.emailLabel}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.emailLabel
          )}
        >
          {"Email"}
        </label>

        <input
          data-plasmic-name={"email"}
          data-plasmic-override={overrides.email}
          className={classNames(projectcss.all, projectcss.input, sty.email)}
          placeholder={"Enter your email address"}
          size={1}
          type={"text"}
          value={""}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"inputPasswordLabelParent"}
        data-plasmic-override={overrides.inputPasswordLabelParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.inputPasswordLabelParent)}
      >
        <label
          data-plasmic-name={"passwordLabel"}
          data-plasmic-override={overrides.passwordLabel}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.passwordLabel
          )}
        >
          {"Password"}
        </label>

        <input
          data-plasmic-name={"password"}
          data-plasmic-override={overrides.password}
          className={classNames(projectcss.all, projectcss.input, sty.password)}
          placeholder={
            args.placeholder !== undefined
              ? args.placeholder
              : "Enter your password"
          }
          size={1}
          type={"password"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zEuFv
          )}
        >
          {"Must contain at least 8 alphanumeric characters"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"buttonContinueParent"}
        data-plasmic-override={overrides.buttonContinueParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.buttonContinueParent)}
      >
        <Button
          data-plasmic-name={"continueButton"}
          data-plasmic-override={overrides.continueButton}
          className={classNames("__wab_instance", sty.continueButton)}
        >
          {"Continue"}
        </Button>

        <p.Stack
          as={"div"}
          data-plasmic-name={"recoveryLinkParent"}
          data-plasmic-override={overrides.recoveryLinkParent}
          hasGap={true}
          className={classNames(projectcss.all, sty.recoveryLinkParent)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ql1Ny
            )}
          >
            {"Forgot password?"}
          </div>

          <p.PlasmicLink
            data-plasmic-name={"resetPassword"}
            data-plasmic-override={overrides.resetPassword}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.resetPassword
            )}
            component={Link}
            href={"/password-reset"}
            platform={"nextjs"}
          >
            {"Send recovery link"}
          </p.PlasmicLink>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rwKg)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__o0C0E)} />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__n6Ve
          )}
        >
          {"or"}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___2CKx)} />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___7ZsVo)}
      >
        <ButtonConnectedAccount
          data-plasmic-name={"loginFacebookConnect"}
          data-plasmic-override={overrides.loginFacebookConnect}
          className={classNames("__wab_instance", sty.loginFacebookConnect)}
          company={"facebook"}
          height={"_48"}
          width={"_360"}
        />

        <ButtonConnectedAccount
          data-plasmic-name={"loginGoogleConnect"}
          data-plasmic-override={overrides.loginGoogleConnect}
          className={classNames("__wab_instance", sty.loginGoogleConnect)}
          company={"google"}
          height={"_48"}
          width={"_360"}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__yvRI)}
      />

      <div
        data-plasmic-name={"signupSubhead"}
        data-plasmic-override={overrides.signupSubhead}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.signupSubhead
        )}
      >
        {"Don't have an account?"}
      </div>

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
        destination={"/sign-up"}
        type={"outline"}
      >
        {"Sign Up"}
      </Button>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  formLogin: [
    "formLogin",
    "inputLabelParent",
    "emailLabel",
    "email",
    "inputPasswordLabelParent",
    "passwordLabel",
    "password",
    "buttonContinueParent",
    "continueButton",
    "recoveryLinkParent",
    "resetPassword",
    "loginFacebookConnect",
    "loginGoogleConnect",
    "signupSubhead",
    "button"
  ],

  inputLabelParent: ["inputLabelParent", "emailLabel", "email"],
  emailLabel: ["emailLabel"],
  email: ["email"],
  inputPasswordLabelParent: [
    "inputPasswordLabelParent",
    "passwordLabel",
    "password"
  ],

  passwordLabel: ["passwordLabel"],
  password: ["password"],
  buttonContinueParent: [
    "buttonContinueParent",
    "continueButton",
    "recoveryLinkParent",
    "resetPassword"
  ],

  continueButton: ["continueButton"],
  recoveryLinkParent: ["recoveryLinkParent", "resetPassword"],
  resetPassword: ["resetPassword"],
  loginFacebookConnect: ["loginFacebookConnect"],
  loginGoogleConnect: ["loginGoogleConnect"],
  signupSubhead: ["signupSubhead"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardLogIn__ArgProps,
      internalVariantPropNames: PlasmicCardLogIn__VariantProps
    });

    return PlasmicCardLogIn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "formLogin") {
    func.displayName = "PlasmicCardLogIn";
  } else {
    func.displayName = `PlasmicCardLogIn.${nodeName}`;
  }
  return func;
}

export const PlasmicCardLogIn = Object.assign(
  // Top-level PlasmicCardLogIn renders the root element
  makeNodeComponent("formLogin"),
  {
    // Helper components rendering sub-elements
    inputLabelParent: makeNodeComponent("inputLabelParent"),
    emailLabel: makeNodeComponent("emailLabel"),
    email: makeNodeComponent("email"),
    inputPasswordLabelParent: makeNodeComponent("inputPasswordLabelParent"),
    passwordLabel: makeNodeComponent("passwordLabel"),
    password: makeNodeComponent("password"),
    buttonContinueParent: makeNodeComponent("buttonContinueParent"),
    continueButton: makeNodeComponent("continueButton"),
    recoveryLinkParent: makeNodeComponent("recoveryLinkParent"),
    resetPassword: makeNodeComponent("resetPassword"),
    loginFacebookConnect: makeNodeComponent("loginFacebookConnect"),
    loginGoogleConnect: makeNodeComponent("loginGoogleConnect"),
    signupSubhead: makeNodeComponent("signupSubhead"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicCardLogIn
    internalVariantProps: PlasmicCardLogIn__VariantProps,
    internalArgProps: PlasmicCardLogIn__ArgProps
  }
);

export default PlasmicCardLogIn;
/* prettier-ignore-end */
