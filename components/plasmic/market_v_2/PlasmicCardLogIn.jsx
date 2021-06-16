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
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ButtonConnectedAccount from "../../ButtonConnectedAccount"; // plasmic-import: 9kU3iljaXN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardLogIn.module.css"; // plasmic-import: wTVVybnMbI4/css
import Facebook1SvgIcon from "./icons/PlasmicIcon__Facebook1Svg"; // plasmic-import: J85sN8PC4/icon
import GooglesvgIcon from "./icons/PlasmicIcon__Googlesvg"; // plasmic-import: XP-psNmhog/icon

export const PlasmicCardLogIn__VariantProps = new Array("size");

export const PlasmicCardLogIn__ArgProps = new Array();

function PlasmicCardLogIn__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"form"}
      data-plasmic-name={"formLogin"}
      data-plasmic-override={overrides.formLogin}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.formLogin,
        {
          [sty.formLogin__size__360]: hasVariant(variants, "size", "_360"),
          [sty.formLogin__size__540]: hasVariant(variants, "size", "_540")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"inputLabelParent"}
        data-plasmic-override={overrides.inputLabelParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.inputLabelParent)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___5Tl6Q
          )}
        >
          {"Email"}
        </div>

        <input
          data-plasmic-name={"email"}
          data-plasmic-override={overrides.email}
          className={classNames(defaultcss.input, sty.email)}
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
        className={classNames(defaultcss.all, sty.inputPasswordLabelParent)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__omxs0
          )}
        >
          {"Password"}
        </div>

        <input
          data-plasmic-name={"password"}
          data-plasmic-override={overrides.password}
          className={classNames(defaultcss.input, sty.password)}
          size={1}
          type={"password"}
          value={"password"}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__zEuFv
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
        className={classNames(defaultcss.all, sty.buttonContinueParent)}
      >
        <ButtonPrimary
          data-plasmic-name={"loginContinueButton"}
          data-plasmic-override={overrides.loginContinueButton}
          className={classNames("__wab_instance", sty.loginContinueButton)}
          size={"_360"}
        >
          {"Continue"}
        </ButtonPrimary>

        <p.Stack
          as={"div"}
          data-plasmic-name={"recoveryLinkParent"}
          data-plasmic-override={overrides.recoveryLinkParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.recoveryLinkParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ql1Ny
            )}
          >
            {"Forgot password?"}
          </div>

          <p.PlasmicLink
            data-plasmic-name={"resetPassword"}
            data-plasmic-override={overrides.resetPassword}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
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
        className={classNames(defaultcss.all, sty.box__rwKg)}
      >
        <div className={classNames(defaultcss.all, sty.box__o0C0E)} />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__n6Ve
          )}
        >
          {"or"}
        </div>

        <div className={classNames(defaultcss.all, sty.box___2CKx)} />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___7ZsVo)}
      >
        <ButtonConnectedAccount
          data-plasmic-name={"loginFacebookConnect"}
          data-plasmic-override={overrides.loginFacebookConnect}
          className={classNames("__wab_instance", sty.loginFacebookConnect)}
          company={"facebook"}
          svg={
            <Facebook1SvgIcon
              className={classNames(defaultcss.all, sty.svg__z3X5B)}
              role={"img"}
            />
          }
          text={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__hjI84
              )}
            >
              {"Continue with Facebook"}
            </div>
          }
          width={"_360X48"}
        />

        <ButtonConnectedAccount
          data-plasmic-name={"loginGoogleConnect"}
          data-plasmic-override={overrides.loginGoogleConnect}
          className={classNames("__wab_instance", sty.loginGoogleConnect)}
          company={"google"}
          svg={
            <GooglesvgIcon
              className={classNames(defaultcss.all, sty.svg__jZu35)}
              role={"img"}
            />
          }
          text={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__xHwHy
              )}
            >
              {"Continue in with Google"}
            </div>
          }
          width={"_360X48"}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__yvRI)}
      />

      <div
        data-plasmic-name={"signupSubhead"}
        data-plasmic-override={overrides.signupSubhead}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.signupSubhead
        )}
      >
        {"Don't have an account?"}
      </div>

      <ButtonPrimary
        data-plasmic-name={"loginSignup"}
        data-plasmic-override={overrides.loginSignup}
        className={classNames("__wab_instance", sty.loginSignup)}
        size={"_360"}
        type={"outline"}
      >
        {"Sign up"}
      </ButtonPrimary>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  formLogin: [
    "formLogin",
    "inputLabelParent",
    "email",
    "inputPasswordLabelParent",
    "password",
    "buttonContinueParent",
    "loginContinueButton",
    "recoveryLinkParent",
    "resetPassword",
    "loginFacebookConnect",
    "loginGoogleConnect",
    "signupSubhead",
    "loginSignup"
  ],

  inputLabelParent: ["inputLabelParent", "email"],
  email: ["email"],
  inputPasswordLabelParent: ["inputPasswordLabelParent", "password"],
  password: ["password"],
  buttonContinueParent: [
    "buttonContinueParent",
    "loginContinueButton",
    "recoveryLinkParent",
    "resetPassword"
  ],

  loginContinueButton: ["loginContinueButton"],
  recoveryLinkParent: ["recoveryLinkParent", "resetPassword"],
  resetPassword: ["resetPassword"],
  loginFacebookConnect: ["loginFacebookConnect"],
  loginGoogleConnect: ["loginGoogleConnect"],
  signupSubhead: ["signupSubhead"],
  loginSignup: ["loginSignup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardLogIn__ArgProps,
      internalVariantPropNames: PlasmicCardLogIn__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardLogIn__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
    email: makeNodeComponent("email"),
    inputPasswordLabelParent: makeNodeComponent("inputPasswordLabelParent"),
    password: makeNodeComponent("password"),
    buttonContinueParent: makeNodeComponent("buttonContinueParent"),
    loginContinueButton: makeNodeComponent("loginContinueButton"),
    recoveryLinkParent: makeNodeComponent("recoveryLinkParent"),
    resetPassword: makeNodeComponent("resetPassword"),
    loginFacebookConnect: makeNodeComponent("loginFacebookConnect"),
    loginGoogleConnect: makeNodeComponent("loginGoogleConnect"),
    signupSubhead: makeNodeComponent("signupSubhead"),
    loginSignup: makeNodeComponent("loginSignup"),
    // Metadata about props expected for PlasmicCardLogIn
    internalVariantProps: PlasmicCardLogIn__VariantProps,
    internalArgProps: PlasmicCardLogIn__ArgProps
  }
);

export default PlasmicCardLogIn;
/* prettier-ignore-end */
