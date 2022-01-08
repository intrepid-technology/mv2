// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ZOSZMng1TX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNoteCard.module.css"; // plasmic-import: ZOSZMng1TX/css

export const PlasmicNoteCard__VariantProps = new Array("button");

export const PlasmicNoteCard__ArgProps = new Array("message", "note");

function PlasmicNoteCard__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"noteMessageParent"}
        data-plasmic-override={overrides.noteMessageParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.noteMessageParent)}
      >
        <div
          data-plasmic-name={"noteParent"}
          data-plasmic-override={overrides.noteParent}
          className={classNames(projectcss.all, sty.noteParent)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Note:",
            value: args.note,
            className: classNames(sty.slotTargetNote)
          })}
        </div>

        <div
          data-plasmic-name={"mesageParent"}
          data-plasmic-override={overrides.mesageParent}
          className={classNames(projectcss.all, sty.mesageParent)}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "This note details some information.",
              value: args.message
            })}
          </div>
        </div>
      </p.Stack>

      <ButtonPrimary
        data-plasmic-name={"buttonPrimary"}
        data-plasmic-override={overrides.buttonPrimary}
        className={classNames("__wab_instance", sty.buttonPrimary, {
          [sty.buttonPrimary__button]: hasVariant(variants, "button", "button")
        })}
        width={"_90"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "noteMessageParent",
    "noteParent",
    "mesageParent",
    "freeBox",
    "buttonPrimary"
  ],

  noteMessageParent: [
    "noteMessageParent",
    "noteParent",
    "mesageParent",
    "freeBox"
  ],

  noteParent: ["noteParent"],
  mesageParent: ["mesageParent", "freeBox"],
  freeBox: ["freeBox"],
  buttonPrimary: ["buttonPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNoteCard__ArgProps,
      internalVariantPropNames: PlasmicNoteCard__VariantProps
    });

    return PlasmicNoteCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNoteCard";
  } else {
    func.displayName = `PlasmicNoteCard.${nodeName}`;
  }
  return func;
}

export const PlasmicNoteCard = Object.assign(
  // Top-level PlasmicNoteCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    noteMessageParent: makeNodeComponent("noteMessageParent"),
    noteParent: makeNodeComponent("noteParent"),
    mesageParent: makeNodeComponent("mesageParent"),
    freeBox: makeNodeComponent("freeBox"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicNoteCard
    internalVariantProps: PlasmicNoteCard__VariantProps,
    internalArgProps: PlasmicNoteCard__ArgProps
  }
);

export default PlasmicNoteCard;
/* prettier-ignore-end */
