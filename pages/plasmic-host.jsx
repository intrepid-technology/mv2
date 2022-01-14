import "antd/dist/antd.css";

import * as React from 'react';

import { PlasmicCanvasHost } from '@plasmicapp/host';
import Script from 'next/script';
import { registerAll } from "@plasmicpkgs/antd";

registerAll()

export default function PlasmicHost() {
  return (
    <div>
      <Script src="https://static1.plasmic.app/preamble.js" strategy="beforeInteractive" />
      <PlasmicCanvasHost />
    </div>
  );
}