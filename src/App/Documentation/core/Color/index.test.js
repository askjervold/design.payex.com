import React from "react";
import { shallow } from "enzyme";

import Color, { ColorPalette, Usage, ColorText } from "./index";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(Color).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Color />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("ColorPalette renders", () => {
        const wrapper = shallow(
            <ColorPalette />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("Usage renders", () => {
        const wrapper = shallow(
            <Usage />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("ColorText renders", () => {
        const wrapper = shallow(
            <ColorText />
        );

        expect(wrapper).toMatchSnapshot();
    });
});