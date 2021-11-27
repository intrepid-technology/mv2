// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: pCEmHN-z0K
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: pP9c6XTFzc/component
import Sidebar from "../../Sidebar"; // plasmic-import: WJhSPQRdlH/component
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import FooterB from "../../FooterB"; // plasmic-import: kxeO2gTzwxU/component
import { useLayout } from "./PlasmicGlobalVariant__Layout"; // plasmic-import: yRz57WAHKe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicLayout.module.css"; // plasmic-import: pCEmHN-z0K/css
import Icon43Icon from "./icons/PlasmicIcon__Icon43"; // plasmic-import: naG0WWoBul/icon

export const PlasmicLayout__VariantProps = new Array();

export const PlasmicLayout__ArgProps = new Array(
  "main",
  "tabNavigationWrapper",
  "pageHeading",
  "pageSubHeading",
  "pageDescription",
  "breadcrumbsWrapper"
);

function PlasmicLayout__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    layout: useLayout()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <Navbar
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        auth={"auth"}
        className={classNames("__wab_instance", sty.navbar, {
          [sty.navbar__global_layout_sidebarOpen]: hasVariant(
            globalVariants,
            "layout",
            "sidebarOpen"
          )
        })}
      />

      {(hasVariant(globalVariants, "layout", "sidebarOpen") ? true : true) ? (
        <Sidebar
          data-plasmic-name={"sidebar"}
          data-plasmic-override={overrides.sidebar}
          className={classNames("__wab_instance", sty.sidebar, {
            [sty.sidebar__global_layout_sidebarOpen]: hasVariant(
              globalVariants,
              "layout",
              "sidebarOpen"
            )
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        className={classNames(defaultcss.all, projectcss.all, sty.body, {
          [sty.body__global_layout_sidebarOpen]: hasVariant(
            globalVariants,
            "layout",
            "sidebarOpen"
          )
        })}
      >
        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(defaultcss.all, projectcss.all, sty.main, {
            [sty.main__global_layout_sidebarOpen]: hasVariant(
              globalVariants,
              "layout",
              "sidebarOpen"
            )
          })}
        >
          <div
            data-plasmic-name={"navigationWrapper"}
            data-plasmic-override={overrides.navigationWrapper}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.navigationWrapper
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"breadcrumbs"}
              data-plasmic-override={overrides.breadcrumbs}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.breadcrumbs,
                {
                  [sty.breadcrumbs__global_layout_sidebarOpen]: hasVariant(
                    globalVariants,
                    "layout",
                    "sidebarOpen"
                  )
                }
              )}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"breadcrumbsWrapper"}
                data-plasmic-override={overrides.breadcrumbsWrapper}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.breadcrumbsWrapper
                )}
              >
                <div
                  data-plasmic-name={"navBackButtonWrapper"}
                  data-plasmic-override={overrides.navBackButtonWrapper}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.navBackButtonWrapper
                  )}
                >
                  <Button
                    data-plasmic-name={"navBackButton"}
                    data-plasmic-override={overrides.navBackButton}
                    className={classNames("__wab_instance", sty.navBackButton)}
                    hasShadow={"hasShadow"}
                    noPadding={"noPadding"}
                    rounded={"rounded"}
                    type={"primary"}
                  >
                    <Icon43Icon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg
                      )}
                      role={"img"}
                    />
                  </Button>
                </div>

                {p.renderPlasmicSlot({
                  defaultContents: null,
                  value: args.breadcrumbsWrapper
                })}
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"tabNavigation"}
              data-plasmic-override={overrides.tabNavigation}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.tabNavigation,
                {
                  [sty.tabNavigation__global_layout_sidebarOpen]: hasVariant(
                    globalVariants,
                    "layout",
                    "sidebarOpen"
                  )
                }
              )}
            >
              <div
                data-plasmic-name={"tabNavigationWrapper"}
                data-plasmic-override={overrides.tabNavigationWrapper}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.tabNavigationWrapper
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: null,
                  value: args.tabNavigationWrapper
                })}
              </div>
            </p.Stack>
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"bodyHeader"}
            data-plasmic-override={overrides.bodyHeader}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.bodyHeader,
              {
                [sty.bodyHeader__global_layout_sidebarOpen]: hasVariant(
                  globalVariants,
                  "layout",
                  "sidebarOpen"
                )
              }
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"headerDisplayWrapper"}
              data-plasmic-override={overrides.headerDisplayWrapper}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.headerDisplayWrapper
              )}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__zSxNn
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Page Title",
                  value: args.pageHeading,
                  className: classNames(sty.slotTargetPageHeading)
                })}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__oKver
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Page Heading",
                  value: args.pageSubHeading,
                  className: classNames(sty.slotTargetPageSubHeading)
                })}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___6ECGn
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Page Description",
                  value: args.pageDescription,
                  className: classNames(sty.slotTargetPageDescription)
                })}
              </div>
            </p.Stack>

            {p.renderPlasmicSlot({
              defaultContents: null,
              value: args.main
            })}
          </p.Stack>

          <FooterB
            data-plasmic-name={"footerB"}
            data-plasmic-override={overrides.footerB}
            className={classNames("__wab_instance", sty.footerB)}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "sidebar",
    "body",
    "main",
    "navigationWrapper",
    "breadcrumbs",
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg",
    "tabNavigation",
    "tabNavigationWrapper",
    "bodyHeader",
    "headerDisplayWrapper",
    "footerB"
  ],

  navbar: ["navbar"],
  sidebar: ["sidebar"],
  body: [
    "body",
    "main",
    "navigationWrapper",
    "breadcrumbs",
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg",
    "tabNavigation",
    "tabNavigationWrapper",
    "bodyHeader",
    "headerDisplayWrapper",
    "footerB"
  ],

  main: [
    "main",
    "navigationWrapper",
    "breadcrumbs",
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg",
    "tabNavigation",
    "tabNavigationWrapper",
    "bodyHeader",
    "headerDisplayWrapper",
    "footerB"
  ],

  navigationWrapper: [
    "navigationWrapper",
    "breadcrumbs",
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg",
    "tabNavigation",
    "tabNavigationWrapper"
  ],

  breadcrumbs: [
    "breadcrumbs",
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg"
  ],

  breadcrumbsWrapper: [
    "breadcrumbsWrapper",
    "navBackButtonWrapper",
    "navBackButton",
    "svg"
  ],

  navBackButtonWrapper: ["navBackButtonWrapper", "navBackButton", "svg"],
  navBackButton: ["navBackButton", "svg"],
  svg: ["svg"],
  tabNavigation: ["tabNavigation", "tabNavigationWrapper"],
  tabNavigationWrapper: ["tabNavigationWrapper"],
  bodyHeader: ["bodyHeader", "headerDisplayWrapper"],
  headerDisplayWrapper: ["headerDisplayWrapper"],
  footerB: ["footerB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLayout__ArgProps,
      internalVariantPropNames: PlasmicLayout__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLayout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayout";
  } else {
    func.displayName = `PlasmicLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicLayout = Object.assign(
  // Top-level PlasmicLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    sidebar: makeNodeComponent("sidebar"),
    body: makeNodeComponent("body"),
    main: makeNodeComponent("main"),
    navigationWrapper: makeNodeComponent("navigationWrapper"),
    breadcrumbs: makeNodeComponent("breadcrumbs"),
    breadcrumbsWrapper: makeNodeComponent("breadcrumbsWrapper"),
    navBackButtonWrapper: makeNodeComponent("navBackButtonWrapper"),
    navBackButton: makeNodeComponent("navBackButton"),
    svg: makeNodeComponent("svg"),
    tabNavigation: makeNodeComponent("tabNavigation"),
    tabNavigationWrapper: makeNodeComponent("tabNavigationWrapper"),
    bodyHeader: makeNodeComponent("bodyHeader"),
    headerDisplayWrapper: makeNodeComponent("headerDisplayWrapper"),
    footerB: makeNodeComponent("footerB"),
    // Metadata about props expected for PlasmicLayout
    internalVariantProps: PlasmicLayout__VariantProps,
    internalArgProps: PlasmicLayout__ArgProps
  }
);

export default PlasmicLayout;
/* prettier-ignore-end */
