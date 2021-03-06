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
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import ElementListingEditCard from "../../ElementListingEditCard"; // plasmic-import: JDi6d9hmkm/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicEditpartnerlisting.module.css"; // plasmic-import: o82uoQXhbg/css

export const PlasmicEditpartnerlisting__VariantProps = new Array();

export const PlasmicEditpartnerlisting__ArgProps = new Array();

function PlasmicEditpartnerlisting__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={"div"}
            data-plasmic-name={"editListingSectionParent"}
            data-plasmic-override={overrides.editListingSectionParent}
            hasGap={true}
            className={classNames(projectcss.all, sty.editListingSectionParent)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionHeaderEditListing"}
              data-plasmic-override={overrides.sectionHeaderEditListing}
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.sectionHeaderEditListing
              )}
            >
              <CardHeaderTitleDisplay
                data-plasmic-name={"cardHeaderTitleDisplay"}
                data-plasmic-override={overrides.cardHeaderTitleDisplay}
                size={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "_360"
                    : "_360"
                }
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vlHiI
                    )}
                  >
                    {"Edit listing"}
                  </div>
                }
                textDisplay={"Partner"}
                textSubhead={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "Finish your listing ??? build your rep and start earning. You can always edit your listing after you publish."
                    : "Finish your listing ??? build your rep and start earning.\nYou can always edit your listing after you publish."
                }
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionEditListing"}
              data-plasmic-override={overrides.sectionEditListing}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionEditListing)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"listingEditCategoryFieldsParent"}
                data-plasmic-override={
                  overrides.listingEditCategoryFieldsParent
                }
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.listingEditCategoryFieldsParent
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
                        type={"ghost"}
                        width={"_120"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yCvUi
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Category"} />
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
                        type={"ghost"}
                        width={"_120"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3XuJv
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Community"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary
                      size={"_32"}
                      text={"Description"}
                    />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Images"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Process"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Features"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Content"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Method"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Format"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Tools"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary
                      size={"_32"}
                      text={"Requirements"}
                    />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Terms"} />
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
                        type={"ghost"}
                        width={"_120"}
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
                    <TextLinkUnderlinePrimary size={"_32"} text={"Checkout"} />
                  }
                  toolTip={"alert"}
                />
              </p.Stack>
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
    "sectionHeaderEditListing",
    "cardHeaderTitleDisplay",
    "sectionEditListing",
    "listingEditCategoryFieldsParent"
  ],

  editListingSectionParent: [
    "editListingSectionParent",
    "sectionHeaderEditListing",
    "cardHeaderTitleDisplay",
    "sectionEditListing",
    "listingEditCategoryFieldsParent"
  ],

  sectionHeaderEditListing: [
    "sectionHeaderEditListing",
    "cardHeaderTitleDisplay"
  ],

  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  sectionEditListing: ["sectionEditListing", "listingEditCategoryFieldsParent"],
  listingEditCategoryFieldsParent: ["listingEditCategoryFieldsParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditpartnerlisting__ArgProps,
      internalVariantPropNames: PlasmicEditpartnerlisting__VariantProps
    });

    return PlasmicEditpartnerlisting__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditpartnerlisting";
  } else {
    func.displayName = `PlasmicEditpartnerlisting.${nodeName}`;
  }
  return func;
}

export const PlasmicEditpartnerlisting = Object.assign(
  // Top-level PlasmicEditpartnerlisting renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editListingSectionParent: makeNodeComponent("editListingSectionParent"),
    sectionHeaderEditListing: makeNodeComponent("sectionHeaderEditListing"),
    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    sectionEditListing: makeNodeComponent("sectionEditListing"),
    listingEditCategoryFieldsParent: makeNodeComponent(
      "listingEditCategoryFieldsParent"
    ),

    // Metadata about props expected for PlasmicEditpartnerlisting
    internalVariantProps: PlasmicEditpartnerlisting__VariantProps,
    internalArgProps: PlasmicEditpartnerlisting__ArgProps
  }
);

export default PlasmicEditpartnerlisting;
/* prettier-ignore-end */
