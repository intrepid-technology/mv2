// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: pP9c6XTFzc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: oDDjpt5lQZ/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import TextInput from "../../TextInput"; // plasmic-import: Ss3X7VAgr4Y/component
import Avatar from "../../Avatar"; // plasmic-import: iOk1GFS0p-/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbar.module.css"; // plasmic-import: pP9c6XTFzc/css
import Icon46Icon from "./icons/PlasmicIcon__Icon46"; // plasmic-import: CR8LtYkZ5l/icon
import Icon174Icon from "./icons/PlasmicIcon__Icon174"; // plasmic-import: yq36rktOQq/icon

export const PlasmicNavbar__VariantProps = new Array("auth");

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
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
        sty.root,
        { [sty.root__auth]: hasVariant(variants, "auth", "auth") }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"brandWrapper"}
        data-plasmic-override={overrides.brandWrapper}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.brandWrapper,
          { [sty.brandWrapper__auth]: hasVariant(variants, "auth", "auth") }
        )}
      >
        {(hasVariant(variants, "auth", "auth") ? true : false) ? (
          <div
            data-plasmic-name={"iconWrapper"}
            data-plasmic-override={overrides.iconWrapper}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.iconWrapper,
              { [sty.iconWrapper__auth]: hasVariant(variants, "auth", "auth") }
            )}
          >
            <Icon46Icon
              data-plasmic-name={"menuIcon"}
              data-plasmic-override={overrides.menuIcon}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.menuIcon
              )}
              role={"img"}
            />
          </div>
        ) : null}
        {(
          hasVariant(variants, "auth", "auth") &&
          hasVariant(globalVariants, "screen", "iphone678")
            ? true
            : hasVariant(variants, "auth", "auth") &&
              hasVariant(globalVariants, "screen", "iphone678Plus")
            ? false
            : true
        ) ? (
          <NavbarLogo
            data-plasmic-name={"navbarLogo"}
            data-plasmic-override={overrides.navbarLogo}
            className={classNames("__wab_instance")}
          />
        ) : null}
      </p.Stack>

      {(
        hasVariant(variants, "auth", "auth")
          ? false
          : hasVariant(globalVariants, "screen", "iphone678")
          ? false
          : hasVariant(globalVariants, "screen", "iphone678Plus")
          ? false
          : true
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"actionWrapper"}
          data-plasmic-override={overrides.actionWrapper}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.actionWrapper,
            { [sty.actionWrapper__auth]: hasVariant(variants, "auth", "auth") }
          )}
        >
          <Button
            data-plasmic-name={"memberButton"}
            data-plasmic-override={overrides.memberButton}
            className={classNames("__wab_instance", sty.memberButton)}
            color={"brand"}
            destination={"/member/pricing"}
            type={"link"}
          >
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text__uRxVz
              )}
            >
              {"Become Member"}
            </div>
          </Button>

          <Button
            data-plasmic-name={"partnerButton"}
            data-plasmic-override={overrides.partnerButton}
            className={classNames("__wab_instance", sty.partnerButton)}
            color={"brand"}
            destination={"/partner/pricing"}
            hasShadow={"hasShadow"}
            rounded={"rounded"}
            type={"primary"}
          >
            {"Partner"}
          </Button>
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "auth", "auth") ? true : false) ? (
        <div
          data-plasmic-name={"searchInputWrapper"}
          data-plasmic-override={overrides.searchInputWrapper}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.searchInputWrapper,
            {
              [sty.searchInputWrapper__auth]: hasVariant(
                variants,
                "auth",
                "auth"
              )
            }
          )}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            adornment={["start"]}
            className={classNames("__wab_instance", sty.textInput)}
            startAdornment={
              <p.Stack
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox
                )}
              >
                <Icon174Icon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.svg,
                    { [sty.svg__auth]: hasVariant(variants, "auth", "auth") }
                  )}
                  role={"img"}
                />

                {(
                  hasVariant(variants, "auth", "auth") &&
                  hasVariant(globalVariants, "screen", "iphone678")
                    ? true
                    : hasVariant(variants, "auth", "auth") &&
                      hasVariant(globalVariants, "screen", "iphone678Plus")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__wQrSm,
                      {
                        [sty.text__auth__wQrSmSwJWc]: hasVariant(
                          variants,
                          "auth",
                          "auth"
                        )
                      }
                    )}
                  >
                    {"Search"}
                  </div>
                ) : null}
              </p.Stack>
            }
          />
        </div>
      ) : null}
      {(hasVariant(variants, "auth", "auth") ? true : false) ? (
        <div
          data-plasmic-name={"authActionsWrapper"}
          data-plasmic-override={overrides.authActionsWrapper}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.authActionsWrapper,
            {
              [sty.authActionsWrapper__auth]: hasVariant(
                variants,
                "auth",
                "auth"
              )
            }
          )}
        >
          {(hasVariant(variants, "auth", "auth") ? true : false) ? (
            <Avatar
              data-plasmic-name={"avatar"}
              data-plasmic-override={overrides.avatar}
              className={classNames("__wab_instance", sty.avatar, {
                [sty.avatar__auth]: hasVariant(variants, "auth", "auth")
              })}
            >
              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(defaultcss.img, projectcss.img, sty.img, {
                  [sty.img__auth]: hasVariant(variants, "auth", "auth")
                })}
                loading={"lazy"}
                src={
                  hasVariant(variants, "auth", "auth")
                    ? "/plasmic/market_v_2/images/userAvatarForPresentationjpg.jpeg"
                    : undefined
                }
              />
            </Avatar>
          ) : null}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "brandWrapper",
    "iconWrapper",
    "menuIcon",
    "navbarLogo",
    "actionWrapper",
    "memberButton",
    "partnerButton",
    "searchInputWrapper",
    "textInput",
    "freeBox",
    "svg",
    "authActionsWrapper",
    "avatar",
    "img"
  ],

  brandWrapper: ["brandWrapper", "iconWrapper", "menuIcon", "navbarLogo"],
  iconWrapper: ["iconWrapper", "menuIcon"],
  menuIcon: ["menuIcon"],
  navbarLogo: ["navbarLogo"],
  actionWrapper: ["actionWrapper", "memberButton", "partnerButton"],
  memberButton: ["memberButton"],
  partnerButton: ["partnerButton"],
  searchInputWrapper: ["searchInputWrapper", "textInput", "freeBox", "svg"],
  textInput: ["textInput", "freeBox", "svg"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  authActionsWrapper: ["authActionsWrapper", "avatar", "img"],
  avatar: ["avatar", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    brandWrapper: makeNodeComponent("brandWrapper"),
    iconWrapper: makeNodeComponent("iconWrapper"),
    menuIcon: makeNodeComponent("menuIcon"),
    navbarLogo: makeNodeComponent("navbarLogo"),
    actionWrapper: makeNodeComponent("actionWrapper"),
    memberButton: makeNodeComponent("memberButton"),
    partnerButton: makeNodeComponent("partnerButton"),
    searchInputWrapper: makeNodeComponent("searchInputWrapper"),
    textInput: makeNodeComponent("textInput"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    authActionsWrapper: makeNodeComponent("authActionsWrapper"),
    avatar: makeNodeComponent("avatar"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
