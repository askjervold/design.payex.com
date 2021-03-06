import React from "react";

import { ComponentPreview, DocContainer } from "#";
import ColorPreview from "./ColorPreview";

const ColorPalette = () => (
    <>
        <h2 id="color-palette">Color palette</h2>
        <p>The PayEx DesignGuide color palette...</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="brand" hex="#2da944" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="default" hex="#3c3c3c" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="neutral" hex="#266c9a" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="success" hex="#2da944" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="warning" hex="#ff9f00" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="danger" hex="#cd2e00" />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Color = () => (
    <DocContainer>
        <p className="lead">Here there be colors...</p>
        <ColorPalette />
    </DocContainer>
);

export default Color;

/* For testing */
export { ColorPalette };
