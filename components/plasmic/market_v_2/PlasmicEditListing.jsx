// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: o82uoQXhbg
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementListingEditCard from "../../ElementListingEditCard"; // plasmic-import: JDi6d9hmkm/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicEditListing.module.css"; // plasmic-import: o82uoQXhbg/css

export const PlasmicEditListing__VariantProps = new Array();

export const PlasmicEditListing__ArgProps = new Array();

function PlasmicEditListing__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"editListingSectionParent"}
            data-plasmic-override={overrides.editListingSectionParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.editListingSectionParent)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__bQyNi)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___5Ho7I
                )}
              >
                {"Edit listing"}
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"headlineParent"}
                data-plasmic-override={overrides.headlineParent}
                hasGap={true}
                className={classNames(defaultcss.all, sty.headlineParent)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__oVXp
                  )}
                >
                  {"Finish your listing — build your rep and start earning."}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__thFXv
                  )}
                >
                  {"You can always edit your listing after you publish."}
                </div>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"categoryEditFieldParent"}
              data-plasmic-override={overrides.categoryEditFieldParent}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                sty.categoryEditFieldParent
              )}
            >
              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__reJb
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__yCvUi
                        )}
                      >
                        {"Edit"}
                      </div>
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__mmk9E
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Category"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary___07H02
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box___3XuJv
                        )}
                      >
                        {"Edit"}
                      </div>
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__jx7CQ
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Community"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__rZgLh
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__e7IDw
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Description"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__bJdoc
                      )}
                      color={"caution"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Add photos"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__uhARm
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Images"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"alert"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__lqTcU
                      )}
                      color={"warning"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Fix"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__apDzJ
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Process"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"question"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__uEqbb
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__fH3E1
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Features"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__ldtT
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard___3GFse
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Content"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__kqb1Q
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__chW6A
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Method"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__iawR1
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__yw4Aw
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Format"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary___6Rd28
                      )}
                      color={"success"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Edit"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__i3UIa
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Tools"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"check"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__hfHdF
                      )}
                      color={"warning"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Fix"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__gTym7
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Requirements"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"question"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__etVnD
                      )}
                      color={"warning"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Fix"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__v6APv
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Terms"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"question"}
              />

              <ElementListingEditCard
                buttonParent={
                  true ? (
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__n6Kbx
                      )}
                      color={"caution"}
                      size={"_120"}
                      type={"ghost"}
                    >
                      {"Finish"}
                    </ButtonPrimary>
                  ) : null
                }
                className={classNames(
                  "__wab_instance",
                  sty.elementListingEditCard__mzKeq
                )}
                textLink={
                  <TextLinkUnderlinePrimary size={"_32"}>
                    {"Checkout"}
                  </TextLinkUnderlinePrimary>
                }
                toolTip={"alert"}
              />
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "editListingSectionParent",
    "headlineParent",
    "categoryEditFieldParent"
  ],

  editListingSectionParent: [
    "editListingSectionParent",
    "headlineParent",
    "categoryEditFieldParent"
  ],

  headlineParent: ["headlineParent"],
  categoryEditFieldParent: ["categoryEditFieldParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditListing__ArgProps,
      internalVariantPropNames: PlasmicEditListing__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEditListing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditListing";
  } else {
    func.displayName = `PlasmicEditListing.${nodeName}`;
  }
  return func;
}

export const PlasmicEditListing = Object.assign(
  // Top-level PlasmicEditListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editListingSectionParent: makeNodeComponent("editListingSectionParent"),
    headlineParent: makeNodeComponent("headlineParent"),
    categoryEditFieldParent: makeNodeComponent("categoryEditFieldParent"),
    // Metadata about props expected for PlasmicEditListing
    internalVariantProps: PlasmicEditListing__VariantProps,
    internalArgProps: PlasmicEditListing__ArgProps
  }
);

export default PlasmicEditListing;
/* prettier-ignore-end */
