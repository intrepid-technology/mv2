// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0fvA7C1gRK
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
import AlertCard from "../../AlertCard"; // plasmic-import: Kd4Jtco7N_/component
import Typography from "../../Typography"; // plasmic-import: DWcJDlqh2G/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import IconListItem from "../../IconListItem"; // plasmic-import: Hh6LXHL9Zp/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicLandingPage.module.css"; // plasmic-import: 0fvA7C1gRK/css
import GlobeAmericaIcon from "./icons/PlasmicIcon__GlobeAmerica"; // plasmic-import: RRtaLxXmQA/icon
import Icon57Icon from "./icons/PlasmicIcon__Icon57"; // plasmic-import: vfwo0XDly/icon
import P2PPayPaymentIcon from "./icons/PlasmicIcon__P2PPayPayment"; // plasmic-import: cymbQps3m/icon
import VerifiedIcon from "./icons/PlasmicIcon__Verified"; // plasmic-import: Vkzuz4t2NA/icon

export const PlasmicLandingPage__VariantProps = new Array();

export const PlasmicLandingPage__ArgProps = new Array();

function PlasmicLandingPage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head></Head>

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
          <div
            data-plasmic-name={"alertWrapper"}
            data-plasmic-override={overrides.alertWrapper}
            className={classNames(defaultcss.all, sty.alertWrapper)}
          >
            <AlertCard
              data-plasmic-name={"alertCard"}
              data-plasmic-override={overrides.alertCard}
              className={classNames("__wab_instance", sty.alertCard)}
              content={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__zI2E
                  )}
                >
                  {"Sign up for before November 18th."}
                </div>
              }
            />
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"contentWrapper"}
            data-plasmic-override={overrides.contentWrapper}
            hasGap={true}
            className={classNames(defaultcss.all, sty.contentWrapper)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"heroWrapper"}
              data-plasmic-override={overrides.heroWrapper}
              hasGap={true}
              className={classNames(defaultcss.all, sty.heroWrapper)}
            >
              <div
                data-plasmic-name={"titleWrapper"}
                data-plasmic-override={overrides.titleWrapper}
                className={classNames(defaultcss.all, sty.titleWrapper)}
              >
                <Typography
                  data-plasmic-name={"typography"}
                  data-plasmic-override={overrides.typography}
                  className={classNames("__wab_instance", sty.typography)}
                  kind={"hero"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__fkIam
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "iphone678")
                      ? "Discover and buy technology & creative services - on demand"
                      : "Discover and buy\ntechnology & creative\nservices - on demand"}
                  </div>
                </Typography>
              </div>

              <div
                data-plasmic-name={"subTitleWrapper"}
                data-plasmic-override={overrides.subTitleWrapper}
                className={classNames(defaultcss.all, sty.subTitleWrapper)}
              >
                {true ? (
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__j4O2)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__u4Yso
                      )}
                    >
                      {"Where "}
                    </div>

                    {true ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__lgGyk
                        )}
                      >
                        {"startups"}
                      </div>
                    ) : null}

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___93Dby
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "iphone678")
                        ? " come to find the services"
                        : hasVariant(globalVariants, "screen", "iphone678Plus")
                        ? " come to find the services"
                        : " come to find "}
                    </div>
                  </div>
                ) : null}
                {true ? (
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__g0J7)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text___73AJ4
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "iphone678")
                          ? "they need to grow - all in one place"
                          : hasVariant(
                              globalVariants,
                              "screen",
                              "iphone678Plus"
                            )
                          ? "they need to grow - all in one place"
                          : "the services they need to grow - all in one place"}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"actionsWrapper"}
              data-plasmic-override={overrides.actionsWrapper}
              hasGap={true}
              className={classNames(defaultcss.all, sty.actionsWrapper)}
            >
              <ButtonPrimary
                data-plasmic-name={"buyServicesButton"}
                data-plasmic-override={overrides.buyServicesButton}
                className={classNames("__wab_instance", sty.buyServicesButton)}
                color={"brand"}
                destination={
                  "https://intrepidventures.typeform.com/to/MthpVWrA"
                }
                hasShadow={"hasShadow"}
                rounded={"rounded"}
                type={"primary"}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__phbT
                  )}
                >
                  {"Buy Services"}
                </div>
              </ButtonPrimary>

              <ButtonPrimary
                data-plasmic-name={"sellServicesButton"}
                data-plasmic-override={overrides.sellServicesButton}
                className={classNames("__wab_instance", sty.sellServicesButton)}
                color={"brand"}
                destination={
                  "https://intrepidventures.typeform.com/to/qoNxle4D"
                }
                rounded={"rounded"}
                type={"light"}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__ymYdZ
                  )}
                >
                  {"Sell Services"}
                </div>
              </ButtonPrimary>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"descriptionPoints"}
              data-plasmic-override={overrides.descriptionPoints}
              hasGap={true}
              className={classNames(defaultcss.all, sty.descriptionPoints)}
            >
              <IconListItem
                className={classNames(
                  "__wab_instance",
                  sty.iconListItem___3Gm46
                )}
                icon={
                  <GlobeAmericaIcon
                    className={classNames(defaultcss.all, sty.svg__og0Nk)}
                    role={"img"}
                  />
                }
                label={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__u9Dbi
                    )}
                  >
                    {"Global access to over 27,000 SMBs and professionals"}
                  </div>
                }
                vertical={
                  hasVariant(globalVariants, "screen", "iphone678")
                    ? "vertical"
                    : hasVariant(globalVariants, "screen", "iphone678Plus")
                    ? "vertical"
                    : undefined
                }
              />

              <IconListItem
                className={classNames(
                  "__wab_instance",
                  sty.iconListItem__uMsKt
                )}
                icon={
                  <Icon57Icon
                    className={classNames(defaultcss.all, sty.svg__b3JzM)}
                    role={"img"}
                  />
                }
                label={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__v4Qu5
                    )}
                  >
                    {"Personalised shopping and fast checkout experience"}
                  </div>
                }
                vertical={
                  hasVariant(globalVariants, "screen", "iphone678")
                    ? "vertical"
                    : hasVariant(globalVariants, "screen", "iphone678Plus")
                    ? "vertical"
                    : undefined
                }
              />

              <IconListItem
                className={classNames(
                  "__wab_instance",
                  sty.iconListItem__jqCic
                )}
                icon={
                  <P2PPayPaymentIcon
                    className={classNames(defaultcss.all, sty.svg__b9Zrw)}
                    role={"img"}
                  />
                }
                label={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___9Hkf1
                    )}
                  >
                    {
                      "Net 60 day payment terms - onboard at no risk, cancel anytime"
                    }
                  </div>
                }
                vertical={
                  hasVariant(globalVariants, "screen", "iphone678")
                    ? "vertical"
                    : hasVariant(globalVariants, "screen", "iphone678Plus")
                    ? "vertical"
                    : undefined
                }
              />

              <IconListItem
                className={classNames(
                  "__wab_instance",
                  sty.iconListItem__dKfHb
                )}
                icon={
                  <VerifiedIcon
                    className={classNames(defaultcss.all, sty.svg__avjEp)}
                    role={"img"}
                  />
                }
                label={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__y55Yw
                    )}
                  >
                    {"International compliance, tax, and payments"}
                  </div>
                }
                vertical={
                  hasVariant(globalVariants, "screen", "iphone678")
                    ? "vertical"
                    : hasVariant(globalVariants, "screen", "iphone678Plus")
                    ? "vertical"
                    : undefined
                }
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
    "alertWrapper",
    "alertCard",
    "contentWrapper",
    "heroWrapper",
    "titleWrapper",
    "typography",
    "subTitleWrapper",
    "actionsWrapper",
    "buyServicesButton",
    "sellServicesButton",
    "descriptionPoints"
  ],

  alertWrapper: ["alertWrapper", "alertCard"],
  alertCard: ["alertCard"],
  contentWrapper: [
    "contentWrapper",
    "heroWrapper",
    "titleWrapper",
    "typography",
    "subTitleWrapper",
    "actionsWrapper",
    "buyServicesButton",
    "sellServicesButton",
    "descriptionPoints"
  ],

  heroWrapper: ["heroWrapper", "titleWrapper", "typography", "subTitleWrapper"],
  titleWrapper: ["titleWrapper", "typography"],
  typography: ["typography"],
  subTitleWrapper: ["subTitleWrapper"],
  actionsWrapper: ["actionsWrapper", "buyServicesButton", "sellServicesButton"],
  buyServicesButton: ["buyServicesButton"],
  sellServicesButton: ["sellServicesButton"],
  descriptionPoints: ["descriptionPoints"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLandingPage__ArgProps,
      internalVariantPropNames: PlasmicLandingPage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLandingPage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPage";
  } else {
    func.displayName = `PlasmicLandingPage.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPage = Object.assign(
  // Top-level PlasmicLandingPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    alertWrapper: makeNodeComponent("alertWrapper"),
    alertCard: makeNodeComponent("alertCard"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    heroWrapper: makeNodeComponent("heroWrapper"),
    titleWrapper: makeNodeComponent("titleWrapper"),
    typography: makeNodeComponent("typography"),
    subTitleWrapper: makeNodeComponent("subTitleWrapper"),
    actionsWrapper: makeNodeComponent("actionsWrapper"),
    buyServicesButton: makeNodeComponent("buyServicesButton"),
    sellServicesButton: makeNodeComponent("sellServicesButton"),
    descriptionPoints: makeNodeComponent("descriptionPoints"),
    // Metadata about props expected for PlasmicLandingPage
    internalVariantProps: PlasmicLandingPage__VariantProps,
    internalArgProps: PlasmicLandingPage__ArgProps
  }
);

export default PlasmicLandingPage;
/* prettier-ignore-end */
