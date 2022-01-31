// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -GlpTucHU-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarAdminIcons.module.css"; // plasmic-import: -GlpTucHU-/css
import Settings2Icon from "./icons/PlasmicIcon__Settings2"; // plasmic-import: Dro0l5pm5X/icon
import Icon128Icon from "./icons/PlasmicIcon__Icon128"; // plasmic-import: -wtyh5Dq6i/icon
import Help2Icon from "./icons/PlasmicIcon__Help2"; // plasmic-import: yniBEqZTky/icon
import InboxIcon from "./icons/PlasmicIcon__Inbox"; // plasmic-import: QjjagZclxc/icon

export const PlasmicNavbarAdminIcons__VariantProps = new Array(
  "light",
  "alternates"
);

export const PlasmicNavbarAdminIcons__ArgProps = new Array();

function PlasmicNavbarAdminIcons__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootlight]: hasVariant(variants, "light", "light")
      })}
    >
      <p.PlasmicIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant(variants, "alternates", "inbox")
            ? InboxIcon
            : hasVariant(variants, "alternates", "help")
            ? Help2Icon
            : hasVariant(variants, "alternates", "notification")
            ? Icon128Icon
            : Settings2Icon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgalternates_help]: hasVariant(variants, "alternates", "help"),
          [sty.svgalternates_inbox]: hasVariant(
            variants,
            "alternates",
            "inbox"
          ),

          [sty.svgalternates_notification]: hasVariant(
            variants,
            "alternates",
            "notification"
          ),

          [sty.svglight]: hasVariant(variants, "light", "light")
        })}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarAdminIcons__ArgProps,
      internalVariantPropNames: PlasmicNavbarAdminIcons__VariantProps
    });

    return PlasmicNavbarAdminIcons__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarAdminIcons";
  } else {
    func.displayName = `PlasmicNavbarAdminIcons.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarAdminIcons = Object.assign(
  // Top-level PlasmicNavbarAdminIcons renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNavbarAdminIcons
    internalVariantProps: PlasmicNavbarAdminIcons__VariantProps,
    internalArgProps: PlasmicNavbarAdminIcons__ArgProps
  }
);

export default PlasmicNavbarAdminIcons;
/* prettier-ignore-end */
