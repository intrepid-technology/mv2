// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: EOHCgtxOFwm
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicBlockLeftA.module.css"; // plasmic-import: EOHCgtxOFwm/css
import Icon171Icon from "./icons/PlasmicIcon__Icon171"; // plasmic-import: RfkUw6C5x0/icon

export const PlasmicBlockLeftA__VariantProps = new Array();

export const PlasmicBlockLeftA__ArgProps = new Array("button");

function PlasmicBlockLeftA__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.parent
      )}
    >
      <div
        data-plasmic-name={"iconElementParent"}
        data-plasmic-override={overrides.iconElementParent}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.iconElementParent
        )}
      >
        <div
          data-plasmic-name={"iconBg"}
          data-plasmic-override={overrides.iconBg}
          className={classNames(defaultcss.all, projectcss.all, sty.iconBg)}
        >
          <IconPrimary
            data-plasmic-name={"iconPrimary"}
            data-plasmic-override={overrides.iconPrimary}
            size={"_80Px"}
            svgIcon80Px={
              <Icon171Icon
                data-plasmic-name={"svgIcon9"}
                data-plasmic-override={overrides.svgIcon9}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.svgIcon9
                )}
                role={"img"}
              />
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"headlineSubheadParent"}
        data-plasmic-override={overrides.headlineSubheadParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.headlineSubheadParent
        )}
      >
        <div
          data-plasmic-name={"headlineparent"}
          data-plasmic-override={overrides.headlineparent}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.headlineparent
          )}
        >
          <div
            data-plasmic-name={"headlineText"}
            data-plasmic-override={overrides.headlineText}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.headlineText
            )}
          >
            {"Headline"}
          </div>
        </div>

        <div
          data-plasmic-name={"subheadTextParent"}
          data-plasmic-override={overrides.subheadTextParent}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.subheadTextParent
          )}
        >
          <div
            data-plasmic-name={"subheadText"}
            data-plasmic-override={overrides.subheadText}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.subheadText
            )}
          >
            {"Subhead text"}
          </div>
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"bodyTextParent"}
        data-plasmic-override={overrides.bodyTextParent}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.bodyTextParent
        )}
      >
        <div
          data-plasmic-name={"bodyText"}
          data-plasmic-override={overrides.bodyText}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            defaultcss.__wab_text,
            sty.bodyText
          )}
        >
          {"Body text"}
        </div>
      </div>

      <div
        data-plasmic-name={"buttonParent"}
        data-plasmic-override={overrides.buttonParent}
        className={classNames(defaultcss.all, projectcss.all, sty.buttonParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: <ButtonPrimary size={"_360"} />,
          value: args.button
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "iconElementParent",
    "iconBg",
    "iconPrimary",
    "svgIcon9",
    "headlineSubheadParent",
    "headlineparent",
    "headlineText",
    "subheadTextParent",
    "subheadText",
    "bodyTextParent",
    "bodyText",
    "buttonParent"
  ],

  iconElementParent: ["iconElementParent", "iconBg", "iconPrimary", "svgIcon9"],
  iconBg: ["iconBg", "iconPrimary", "svgIcon9"],
  iconPrimary: ["iconPrimary", "svgIcon9"],
  svgIcon9: ["svgIcon9"],
  headlineSubheadParent: [
    "headlineSubheadParent",
    "headlineparent",
    "headlineText",
    "subheadTextParent",
    "subheadText"
  ],

  headlineparent: ["headlineparent", "headlineText"],
  headlineText: ["headlineText"],
  subheadTextParent: ["subheadTextParent", "subheadText"],
  subheadText: ["subheadText"],
  bodyTextParent: ["bodyTextParent", "bodyText"],
  bodyText: ["bodyText"],
  buttonParent: ["buttonParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBlockLeftA__ArgProps,
      internalVariantPropNames: PlasmicBlockLeftA__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicBlockLeftA__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicBlockLeftA";
  } else {
    func.displayName = `PlasmicBlockLeftA.${nodeName}`;
  }
  return func;
}

export const PlasmicBlockLeftA = Object.assign(
  // Top-level PlasmicBlockLeftA renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    iconElementParent: makeNodeComponent("iconElementParent"),
    iconBg: makeNodeComponent("iconBg"),
    iconPrimary: makeNodeComponent("iconPrimary"),
    svgIcon9: makeNodeComponent("svgIcon9"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headlineparent: makeNodeComponent("headlineparent"),
    headlineText: makeNodeComponent("headlineText"),
    subheadTextParent: makeNodeComponent("subheadTextParent"),
    subheadText: makeNodeComponent("subheadText"),
    bodyTextParent: makeNodeComponent("bodyTextParent"),
    bodyText: makeNodeComponent("bodyText"),
    buttonParent: makeNodeComponent("buttonParent"),
    // Metadata about props expected for PlasmicBlockLeftA
    internalVariantProps: PlasmicBlockLeftA__VariantProps,
    internalArgProps: PlasmicBlockLeftA__ArgProps
  }
);

export default PlasmicBlockLeftA;
/* prettier-ignore-end */
