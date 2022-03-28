// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: hAe6_pu3NI
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import RadioTextInputPrimary from "../../RadioTextInputPrimary"; // plasmic-import: 1xw4kmw_5l/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTableUserAdminHeader.module.css"; // plasmic-import: hAe6_pu3NI/css

export const PlasmicTableUserAdminHeader__VariantProps = new Array();

export const PlasmicTableUserAdminHeader__ArgProps = new Array();

function PlasmicTableUserAdminHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <RadioTextInputPrimary
        data-plasmic-name={"radioTextInputPrimary"}
        data-plasmic-override={overrides.radioTextInputPrimary}
        className={classNames("__wab_instance", sty.radioTextInputPrimary)}
        itemText={
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Select all"}
          </div>
        }
      />

      <ButtonCircleDelete
        data-plasmic-name={"buttonCircleDelete"}
        data-plasmic-override={overrides.buttonCircleDelete}
        className={classNames("__wab_instance", sty.buttonCircleDelete)}
        size={"_18Px"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "radioTextInputPrimary", "text", "buttonCircleDelete"],
  radioTextInputPrimary: ["radioTextInputPrimary", "text"],
  text: ["text"],
  buttonCircleDelete: ["buttonCircleDelete"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableUserAdminHeader__ArgProps,
      internalVariantPropNames: PlasmicTableUserAdminHeader__VariantProps
    });

    return PlasmicTableUserAdminHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableUserAdminHeader";
  } else {
    func.displayName = `PlasmicTableUserAdminHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTableUserAdminHeader = Object.assign(
  // Top-level PlasmicTableUserAdminHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    radioTextInputPrimary: makeNodeComponent("radioTextInputPrimary"),
    text: makeNodeComponent("text"),
    buttonCircleDelete: makeNodeComponent("buttonCircleDelete"),
    // Metadata about props expected for PlasmicTableUserAdminHeader
    internalVariantProps: PlasmicTableUserAdminHeader__VariantProps,
    internalArgProps: PlasmicTableUserAdminHeader__ArgProps
  }
);

export default PlasmicTableUserAdminHeader;
/* prettier-ignore-end */
