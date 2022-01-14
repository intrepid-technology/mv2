// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ZVx0S4JWhTB
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CardFeatureDescription from "../../CardFeatureDescription"; // plasmic-import: g0j2UvLSvh/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSectionMemberFeatures.module.css"; // plasmic-import: ZVx0S4JWhTB/css

export const PlasmicSectionMemberFeatures__VariantProps = new Array();

export const PlasmicSectionMemberFeatures__ArgProps = new Array();

function PlasmicSectionMemberFeatures__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"A marketplace built for modern startups and entrepreneurs."}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__y9FZ
          )}
          headline={"Go to market fast"}
          text={
            "Launch an MVP, transform your business, or augment your staff."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__y0Q9
          )}
          headline={"Work from anywhere"}
          text={
            "Quit your 9-5 and work on the project and business you always dreamed of building but thought you couldn't."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__bw4LY
          )}
          headline={"Build a remote team"}
          text={
            "Find rare talent and work from anywhere. Work that revolves around you and your lifestyle. "
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__u2Gdi
          )}
          headline={"Save time and money"}
          text={
            "We’re a shoppable ecommerce experience and we make the buying and collaboration process easy and familiar."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__fBlx
          )}
          headline={"Professional standards"}
          text={
            "Our community members must maintain a minimum rating and customer delivery standard to maintain their listing."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription___2VGow
          )}
          headline={"Support small businesses"}
          text={
            "Buy directly from SMEs who put their heart and soul into making something innovative."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__ftVgi
          )}
          headline={"Community & collaboration"}
          text={
            "Learn from leading entrepreneurs, creatives, and cutting-edge technologists from around the world."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__bqnre
          )}
          headline={"Remote first companies"}
          text={
            "Our marketplace is curated with only the top SMEs and remote teams from around the world."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__sJqKd
          )}
          headline={"Vetted & compliant"}
          text={
            "We verify each business and their client references so you don't have to."
          }
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionMemberFeatures__ArgProps,
      internalVariantPropNames: PlasmicSectionMemberFeatures__VariantProps
    });

    return PlasmicSectionMemberFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMemberFeatures";
  } else {
    func.displayName = `PlasmicSectionMemberFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMemberFeatures = Object.assign(
  // Top-level PlasmicSectionMemberFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicSectionMemberFeatures
    internalVariantProps: PlasmicSectionMemberFeatures__VariantProps,
    internalArgProps: PlasmicSectionMemberFeatures__ArgProps
  }
);

export default PlasmicSectionMemberFeatures;
/* prettier-ignore-end */
