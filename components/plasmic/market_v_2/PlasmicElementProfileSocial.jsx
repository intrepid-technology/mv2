// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: jeCDVKO8R8
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconSocialProfile from "../../IconSocialProfile"; // plasmic-import: IC5nyjlnco/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementProfileSocial.module.css"; // plasmic-import: jeCDVKO8R8/css

export const PlasmicElementProfileSocial__VariantProps = new Array();

export const PlasmicElementProfileSocial__ArgProps = new Array();

function PlasmicElementProfileSocial__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"social"}
          data-plasmic-override={overrides.social}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.social
          )}
        >
          {"Social"}
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"socialIconsParent"}
        data-plasmic-override={overrides.socialIconsParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.socialIconsParent)}
      >
        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__wvMgP)}
          size={"_45X45"}
          social={"instagram"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__a7YuX)}
          size={"_45X45"}
          social={"tikTok"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__ahLbK)}
          size={"_45X45"}
          social={"youtube"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__imAum)}
          size={"_45X45"}
          social={"twitter"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__oEyeo)}
          size={"_45X45"}
          social={"snapchat"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__ltavd)}
          size={"_45X45"}
          social={"twitch"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__wDYjG)}
          size={"_45X45"}
          social={"discord"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__t3HKm)}
          size={"_45X45"}
          social={"pinterest"}
        />

        <IconSocialProfile
          className={classNames(
            "__wab_instance",
            sty.iconSocialProfile___5ByKt
          )}
          size={"_45X45"}
          social={"wechat"}
        />

        <IconSocialProfile
          className={classNames("__wab_instance", sty.iconSocialProfile__nbcgd)}
          size={"_45X45"}
          social={"hackerNews"}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "social", "socialIconsParent"],
  freeBox: ["freeBox", "social"],
  social: ["social"],
  socialIconsParent: ["socialIconsParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementProfileSocial__ArgProps,
      internalVariantPropNames: PlasmicElementProfileSocial__VariantProps
    });

    return PlasmicElementProfileSocial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementProfileSocial";
  } else {
    func.displayName = `PlasmicElementProfileSocial.${nodeName}`;
  }
  return func;
}

export const PlasmicElementProfileSocial = Object.assign(
  // Top-level PlasmicElementProfileSocial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    social: makeNodeComponent("social"),
    socialIconsParent: makeNodeComponent("socialIconsParent"),
    // Metadata about props expected for PlasmicElementProfileSocial
    internalVariantProps: PlasmicElementProfileSocial__VariantProps,
    internalArgProps: PlasmicElementProfileSocial__ArgProps
  }
);

export default PlasmicElementProfileSocial;
/* prettier-ignore-end */
