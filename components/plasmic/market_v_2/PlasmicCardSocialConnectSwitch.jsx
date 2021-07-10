// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: PjlQKkmde-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconSocialProfile from "../../IconSocialProfile"; // plasmic-import: IC5nyjlnco/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: M6TX-0ESZQ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardSocialConnectSwitch.module.css"; // plasmic-import: PjlQKkmde-/css

export const PlasmicCardSocialConnectSwitch__VariantProps = new Array(
  "connected",
  "width",
  "socialNetwork",
  "accounting"
);

export const PlasmicCardSocialConnectSwitch__ArgProps = new Array();

function PlasmicCardSocialConnectSwitch__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720")
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ma38J)}
        >
          <IconSocialProfile
            data-plasmic-name={"iconSocialProfile"}
            data-plasmic-override={overrides.iconSocialProfile}
            accounting={
              hasVariant(variants, "accounting", "quickbooks")
                ? "quickbooks"
                : hasVariant(variants, "accounting", "xero")
                ? "xero"
                : undefined
            }
            className={classNames("__wab_instance", sty.iconSocialProfile, {
              [sty.iconSocialProfile__accounting_quickbooks]: hasVariant(
                variants,
                "accounting",
                "quickbooks"
              ),

              [sty.iconSocialProfile__accounting_xero]: hasVariant(
                variants,
                "accounting",
                "xero"
              ),

              [sty.iconSocialProfile__socialNetwork_angellist]: hasVariant(
                variants,
                "socialNetwork",
                "angellist"
              ),

              [sty.iconSocialProfile__socialNetwork_discord]: hasVariant(
                variants,
                "socialNetwork",
                "discord"
              ),

              [sty.iconSocialProfile__socialNetwork_dribbble]: hasVariant(
                variants,
                "socialNetwork",
                "dribbble"
              ),

              [sty.iconSocialProfile__socialNetwork_facebook]: hasVariant(
                variants,
                "socialNetwork",
                "facebook"
              ),

              [sty.iconSocialProfile__socialNetwork_github]: hasVariant(
                variants,
                "socialNetwork",
                "github"
              ),

              [sty.iconSocialProfile__socialNetwork_google]: hasVariant(
                variants,
                "socialNetwork",
                "google"
              ),

              [sty.iconSocialProfile__socialNetwork_hackernews]: hasVariant(
                variants,
                "socialNetwork",
                "hackernews"
              ),

              [sty.iconSocialProfile__socialNetwork_instagram]: hasVariant(
                variants,
                "socialNetwork",
                "instagram"
              ),

              [sty.iconSocialProfile__socialNetwork_line]: hasVariant(
                variants,
                "socialNetwork",
                "line"
              ),

              [sty.iconSocialProfile__socialNetwork_linkedin]: hasVariant(
                variants,
                "socialNetwork",
                "linkedin"
              ),

              [sty.iconSocialProfile__socialNetwork_pinterest]: hasVariant(
                variants,
                "socialNetwork",
                "pinterest"
              ),

              [sty.iconSocialProfile__socialNetwork_productHunt]: hasVariant(
                variants,
                "socialNetwork",
                "productHunt"
              ),

              [sty.iconSocialProfile__socialNetwork_reddit]: hasVariant(
                variants,
                "socialNetwork",
                "reddit"
              ),

              [sty.iconSocialProfile__socialNetwork_slack]: hasVariant(
                variants,
                "socialNetwork",
                "slack"
              ),

              [sty.iconSocialProfile__socialNetwork_snapchat]: hasVariant(
                variants,
                "socialNetwork",
                "snapchat"
              ),

              [sty.iconSocialProfile__socialNetwork_soundcloud]: hasVariant(
                variants,
                "socialNetwork",
                "soundcloud"
              ),

              [sty.iconSocialProfile__socialNetwork_spotify]: hasVariant(
                variants,
                "socialNetwork",
                "spotify"
              ),

              [sty.iconSocialProfile__socialNetwork_tikTok]: hasVariant(
                variants,
                "socialNetwork",
                "tikTok"
              ),

              [sty.iconSocialProfile__socialNetwork_twitch]: hasVariant(
                variants,
                "socialNetwork",
                "twitch"
              ),

              [sty.iconSocialProfile__socialNetwork_twitter]: hasVariant(
                variants,
                "socialNetwork",
                "twitter"
              ),

              [sty.iconSocialProfile__socialNetwork_wechat]: hasVariant(
                variants,
                "socialNetwork",
                "wechat"
              ),

              [sty.iconSocialProfile__socialNetwork_whatsapp]: hasVariant(
                variants,
                "socialNetwork",
                "whatsapp"
              ),

              [sty.iconSocialProfile__socialNetwork_youtube]: hasVariant(
                variants,
                "socialNetwork",
                "youtube"
              )
            })}
            size={"_45X45"}
            social={
              hasVariant(variants, "socialNetwork", "youtube")
                ? "youtube"
                : hasVariant(variants, "socialNetwork", "twitter")
                ? "twitter"
                : hasVariant(variants, "socialNetwork", "linkedin")
                ? "linkedin"
                : hasVariant(variants, "socialNetwork", "facebook")
                ? "facebook"
                : hasVariant(variants, "socialNetwork", "instagram")
                ? "instagram"
                : hasVariant(variants, "socialNetwork", "google")
                ? "google"
                : hasVariant(variants, "socialNetwork", "wechat")
                ? "wechat"
                : hasVariant(variants, "socialNetwork", "line")
                ? "line"
                : hasVariant(variants, "socialNetwork", "whatsapp")
                ? "whatsapp"
                : hasVariant(variants, "socialNetwork", "snapchat")
                ? "snapchat"
                : hasVariant(variants, "socialNetwork", "slack")
                ? "slack"
                : hasVariant(variants, "socialNetwork", "reddit")
                ? "reddit"
                : hasVariant(variants, "socialNetwork", "pinterest")
                ? "pinterest"
                : hasVariant(variants, "socialNetwork", "github")
                ? "github"
                : hasVariant(variants, "socialNetwork", "angellist")
                ? "angellist"
                : hasVariant(variants, "socialNetwork", "productHunt")
                ? "productHunt"
                : hasVariant(variants, "socialNetwork", "dribbble")
                ? "dribbble"
                : hasVariant(variants, "socialNetwork", "hackernews")
                ? "hackerNews"
                : hasVariant(variants, "socialNetwork", "spotify")
                ? "spotify"
                : hasVariant(variants, "socialNetwork", "soundcloud")
                ? "soundcloud"
                : hasVariant(variants, "socialNetwork", "discord")
                ? "discord"
                : hasVariant(variants, "socialNetwork", "twitch")
                ? "twitch"
                : hasVariant(variants, "socialNetwork", "tikTok")
                ? "tikTok"
                : undefined
            }
          />

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__y4X73,
              {
                [sty.box__accounting_quickbooks__y4X73NsKuD]: hasVariant(
                  variants,
                  "accounting",
                  "quickbooks"
                ),

                [sty.box__accounting_xero__y4X73AenxO]: hasVariant(
                  variants,
                  "accounting",
                  "xero"
                ),

                [sty.box__socialNetwork_angellist__y4X73Ws5Gt]: hasVariant(
                  variants,
                  "socialNetwork",
                  "angellist"
                ),

                [sty.box__socialNetwork_discord__y4X73UvcjZ]: hasVariant(
                  variants,
                  "socialNetwork",
                  "discord"
                ),

                [sty.box__socialNetwork_dribbble__y4X73ILpq2]: hasVariant(
                  variants,
                  "socialNetwork",
                  "dribbble"
                ),

                [sty.box__socialNetwork_facebook__y4X735Inp2]: hasVariant(
                  variants,
                  "socialNetwork",
                  "facebook"
                ),

                [sty.box__socialNetwork_github__y4X73Ncvbj]: hasVariant(
                  variants,
                  "socialNetwork",
                  "github"
                ),

                [sty.box__socialNetwork_google__y4X73GuexH]: hasVariant(
                  variants,
                  "socialNetwork",
                  "google"
                ),

                [sty.box__socialNetwork_hackernews__y4X73ALtUl]: hasVariant(
                  variants,
                  "socialNetwork",
                  "hackernews"
                ),

                [sty.box__socialNetwork_instagram__y4X73LhFvO]: hasVariant(
                  variants,
                  "socialNetwork",
                  "instagram"
                ),

                [sty.box__socialNetwork_line__y4X73YJija]: hasVariant(
                  variants,
                  "socialNetwork",
                  "line"
                ),

                [sty.box__socialNetwork_linkedin__y4X73UeETj]: hasVariant(
                  variants,
                  "socialNetwork",
                  "linkedin"
                ),

                [sty.box__socialNetwork_pinterest__y4X73AsIkx]: hasVariant(
                  variants,
                  "socialNetwork",
                  "pinterest"
                ),

                [sty.box__socialNetwork_productHunt__y4X73M6JOk]: hasVariant(
                  variants,
                  "socialNetwork",
                  "productHunt"
                ),

                [sty.box__socialNetwork_reddit__y4X73Pee0Y]: hasVariant(
                  variants,
                  "socialNetwork",
                  "reddit"
                ),

                [sty.box__socialNetwork_slack__y4X73PJCsA]: hasVariant(
                  variants,
                  "socialNetwork",
                  "slack"
                ),

                [sty.box__socialNetwork_snapchat__y4X734W5Qx]: hasVariant(
                  variants,
                  "socialNetwork",
                  "snapchat"
                ),

                [sty.box__socialNetwork_soundcloud__y4X734JmR2]: hasVariant(
                  variants,
                  "socialNetwork",
                  "soundcloud"
                ),

                [sty.box__socialNetwork_spotify__y4X73JTzJ8]: hasVariant(
                  variants,
                  "socialNetwork",
                  "spotify"
                ),

                [sty.box__socialNetwork_tikTok__y4X73VLcVx]: hasVariant(
                  variants,
                  "socialNetwork",
                  "tikTok"
                ),

                [sty.box__socialNetwork_twitch__y4X73HjPBa]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitch"
                ),

                [sty.box__socialNetwork_twitter__y4X73F5IW5]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitter"
                ),

                [sty.box__socialNetwork_wechat__y4X73IsTfM]: hasVariant(
                  variants,
                  "socialNetwork",
                  "wechat"
                ),

                [sty.box__socialNetwork_whatsapp__y4X7306RGl]: hasVariant(
                  variants,
                  "socialNetwork",
                  "whatsapp"
                ),

                [sty.box__socialNetwork_youtube__y4X73S12Df]: hasVariant(
                  variants,
                  "socialNetwork",
                  "youtube"
                )
              }
            )}
          >
            {hasVariant(variants, "socialNetwork", "youtube")
              ? "Youtube"
              : hasVariant(variants, "socialNetwork", "twitter")
              ? "Twitter"
              : hasVariant(variants, "socialNetwork", "linkedin")
              ? "Linkedin"
              : hasVariant(variants, "socialNetwork", "facebook")
              ? "Facebook"
              : hasVariant(variants, "socialNetwork", "instagram")
              ? "Instagram"
              : hasVariant(variants, "accounting", "quickbooks")
              ? "Quickbooks"
              : hasVariant(variants, "accounting", "xero")
              ? "Xero"
              : hasVariant(variants, "socialNetwork", "google")
              ? "Google"
              : hasVariant(variants, "socialNetwork", "wechat")
              ? "Wechat"
              : hasVariant(variants, "socialNetwork", "line")
              ? "Line"
              : hasVariant(variants, "socialNetwork", "whatsapp")
              ? "Whatsapp"
              : hasVariant(variants, "socialNetwork", "snapchat")
              ? "Snapchat"
              : hasVariant(variants, "socialNetwork", "slack")
              ? "Slack"
              : hasVariant(variants, "socialNetwork", "reddit")
              ? "Reddit"
              : hasVariant(variants, "socialNetwork", "pinterest")
              ? "Pinterest"
              : hasVariant(variants, "socialNetwork", "github")
              ? "Github"
              : hasVariant(variants, "socialNetwork", "angellist")
              ? "Angellist"
              : hasVariant(variants, "socialNetwork", "productHunt")
              ? "Product Hunt"
              : hasVariant(variants, "socialNetwork", "dribbble")
              ? "Dribbble"
              : hasVariant(variants, "socialNetwork", "hackernews")
              ? "Hackernews"
              : hasVariant(variants, "socialNetwork", "spotify")
              ? "Spotify"
              : hasVariant(variants, "socialNetwork", "soundcloud")
              ? "Soundcloud"
              : hasVariant(variants, "socialNetwork", "discord")
              ? "Discord"
              : hasVariant(variants, "socialNetwork", "twitch")
              ? "Twitch"
              : hasVariant(variants, "socialNetwork", "tikTok")
              ? "TikTok"
              : "Social network"}
          </div>
        </p.Stack>

        <SwitchPrimary
          data-plasmic-name={"switchPrimary"}
          data-plasmic-override={overrides.switchPrimary}
          _switch={
            hasVariant(variants, "connected", "connected")
              ? "_switch"
              : undefined
          }
          className={classNames("__wab_instance", sty.switchPrimary, {
            [sty.switchPrimary__connected]: hasVariant(
              variants,
              "connected",
              "connected"
            )
          })}
          color={[]}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "iconSocialProfile", "switchPrimary"],
  parent: ["parent", "iconSocialProfile", "switchPrimary"],
  iconSocialProfile: ["iconSocialProfile"],
  switchPrimary: ["switchPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardSocialConnectSwitch__ArgProps,
      internalVariantPropNames: PlasmicCardSocialConnectSwitch__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardSocialConnectSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardSocialConnectSwitch";
  } else {
    func.displayName = `PlasmicCardSocialConnectSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicCardSocialConnectSwitch = Object.assign(
  // Top-level PlasmicCardSocialConnectSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    iconSocialProfile: makeNodeComponent("iconSocialProfile"),
    switchPrimary: makeNodeComponent("switchPrimary"),
    // Metadata about props expected for PlasmicCardSocialConnectSwitch
    internalVariantProps: PlasmicCardSocialConnectSwitch__VariantProps,
    internalArgProps: PlasmicCardSocialConnectSwitch__ArgProps
  }
);

export default PlasmicCardSocialConnectSwitch;
/* prettier-ignore-end */
