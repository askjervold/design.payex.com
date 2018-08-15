import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, Attribute, PxScript, DocToc } from "#";
import ButtonComponent from "@/Button";
import { button } from "$/px-script";

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent type="default" label="Default" />{"\n"}
            <ButtonComponent type="brand" label="Brand" />{"\n"}
            <ButtonComponent type="neutral" label="Neutral" />{"\n"}
            <ButtonComponent type="success" label="Success" />{"\n"}
            <ButtonComponent type="warning" label="Warning" />{"\n"}
            <ButtonComponent type="danger" label="Danger" />{"\n"}
            <ButtonComponent type="light" label="Light" />{"\n"}
            <ButtonComponent type="link" label="Link" />{"\n"}
        </ComponentPreview>
    </>
);

const UsageWithOtherTags = () => (
    <>
        <h2 id="usage-with-other-tags">Usage with other tags</h2>
        <p>The <code className="token property">.btn</code> class can also be used with other html-tags like <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<input>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent type="brand" label="Anchor" href="#" />{"\n"}
            <ButtonComponent type="brand" label="Button" />{"\n"}
            <ButtonComponent type="brand" input value="Input" btnType="button" />{"\n"}
            <ButtonComponent type="brand" input value="Submit" btnType="submit" />{"\n"}
            <ButtonComponent type="brand" input value="Reset" btnType="reset" />{"\n"}
        </ComponentPreview>
    </>
);

const OutlineButtons = () => (
    <>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent outline type="default" label="Default" />{"\n"}
            <ButtonComponent outline type="brand" label="Brand" />{"\n"}
            <ButtonComponent outline type="neutral" label="Neutral" />{"\n"}
            <ButtonComponent outline type="success" label="Success" />{"\n"}
            <ButtonComponent outline type="warning" label="Warning" />{"\n"}
            <ButtonComponent outline type="danger" label="Danger" />{"\n"}
            <ButtonComponent outline type="light" label="Light" />{"\n"}
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>Several button sizes etc...</p>
        <h3>Large buttons</h3>
        <p>...<code className="token property">.btn-lg</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent size="lg" type="default" label="Large button" />{"\n"}
            <ButtonComponent size="lg" type="brand" label="Large button" />{"\n"}
        </ComponentPreview>
        <h3>Small buttons</h3>
        <p>...<code className="token property">.btn-sm</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent size="sm" type="default" label="Small button" />{"\n"}
            <ButtonComponent size="sm" type="brand" label="Small button" />{"\n"}
        </ComponentPreview>
        <h3>Extra small buttons</h3>
        <p>...<code className="token property">.btn-xs</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent size="xs" type="default" label="Extra small button" />{"\n"}
            <ButtonComponent size="xs" type="brand" label="Extra small button" />{"\n"}
        </ComponentPreview>
        <h3>Block level</h3>
        <p>...<code className="token property">.btn-block</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent fullWidth type="default" label="Block level button" />{"\n"}
            <ButtonComponent fullWidth type="brand" label="Block level button" />{"\n"}
        </ComponentPreview>
    </>
);

const ActiveState = () => (
    <>
        <h2 id="active-state">Active state</h2>
        <p>Active state with <code className="token property">.active</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent active type="default" label="Default" />{"\n"}
            <ButtonComponent active type="brand" label="Brand" />{"\n"}
            <ButtonComponent active type="neutral" label="Neutral" />{"\n"}
            <ButtonComponent active type="success" label="Success" />{"\n"}
            <ButtonComponent active type="warning" label="Warning" />{"\n"}
            <ButtonComponent active type="danger" label="Danger" />{"\n"}
            <ButtonComponent active type="light" label="Light" />{"\n"}
        </ComponentPreview>
    </>
);

const DisabledState = () => (
    <>
        <h2 id="disabled-state">Disabled state</h2>
        <p>Disabled state with <Attribute name="disabled" value="true" />...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent disabled type="default" label="Default" />{"\n"}
            <ButtonComponent disabled type="brand" label="Brand" />{"\n"}
            <ButtonComponent disabled type="neutral" label="Neutral" />{"\n"}
            <ButtonComponent disabled type="success" label="Success" />{"\n"}
            <ButtonComponent disabled type="warning" label="Warning" />{"\n"}
            <ButtonComponent disabled type="danger" label="Danger" />{"\n"}
            <ButtonComponent disabled type="light" label="Light" />{"\n"}
        </ComponentPreview>
    </>
);

const UsageWithIcons = () => (
    <>
        <h2 id="usage-with-icons">Usage with icons</h2>
        <p>To use a button with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent icon="cloud" type="default" label="Default" />{"\n\n"}
            <ButtonComponent icon="cloud" type="brand" label="Brand" />{"\n"}
        </ComponentPreview>
    </>
);

const ButtonLoader = () => (
    <>
        <h2 id="button-loader">Button loader</h2>
        <p>To use a button with a loader simply add the attribute <Attribute data name="button-loader" value="true" /> to add the required markup for the loader component. Add class <code className="token property">.loading</code> to display the loader.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent id="test" type="default" label="Default" loader loading />{"\n"}
            <ButtonComponent type="brand" label="Brand" loader loading />{"\n"}
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent loader loading outline type="default" label="Default" />{"\n"}
            <ButtonComponent loader loading outline type="brand" label="Brand" />{"\n"}
            <ButtonComponent loader loading outline type="neutral" label="Neutral" />{"\n"}
            <ButtonComponent loader loading outline type="success" label="Success" />{"\n"}
            <ButtonComponent loader loading outline type="warning" label="Warning" />{"\n"}
            <ButtonComponent loader loading outline type="danger" label="Danger" />{"\n"}
            <ButtonComponent loader loading outline type="light" label="Light" />{"\n"}
        </ComponentPreview>
        <p>Adding the attribute <Attribute data name="button-loader" value="true" /> to a button component will produce the following html:</p>
        <ComponentPreview language="html" showCasePanel={false} codeFigure>
            <button className="btn btn-default loading" type="button" data-px-loader="true">{"\n\t"}
                <div className="btn-loader-label">Default</div>{"\n\t"}
                <div className="loader">{"\n\t\t"}
                    <ul className="loader-icon">{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t"}
                    </ul>{"\n\t"}
                </div>{"\n"}
            </button>
        </ComponentPreview>
        <p>If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you <b>don{"'"}t</b> add the attribute <Attribute data name="button-loader" value="true" />.</p>
    </>
);

const UsageWithJavascript = () => (
    <>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To interact with the alert-component with javascript...</p>
        <h3>Show loader</h3>
        <ComponentPreview language="javascript" codeFigure>
            {"px.button.loader.show();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.button.loader.show(id);"}
        </ComponentPreview>
        <h3>Hide loader</h3>
        <ComponentPreview language="javascript" codeFigure>
            {"px.button.loader.hide();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.button.loader.hide(id);"}
        </ComponentPreview>
        <h3>Methods</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <PxScript component="button" func="init" />
                    </td>
                    <td>
                        Renders the HTML for the loader component for buttons that has the attribute <Attribute data name="loader" value="true" />. This is done automatically when the <code className="token property">px-script.js</code> loads, but might have to be used if you are not rendering your buttons right away. For instance, in react, you might want to call this function within the <PrismCode className="language-javascript">{"componentDidMount()"}</PrismCode> method.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="show" />
                    </td>
                    <td>
                        Gives all rendered buttons the class <code className="token property">.loading</code>, displaying the loader component within the buttons (<b>if present</b>).
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="show" params={["id"]} />
                    </td>
                    <td>
                        Gives the specified button the class <code className="token property">.loading</code>. If no alert with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="hide" />
                    </td>
                    <td>
                        Removes the class <code className="token property">.loading</code> from all rendered buttons, hiding the loader component.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="hide" params={["id"]} />
                    </td>
                    <td>
                        Removes the class <code className="token property">.loading</code> from the button specified by id, hiding the loader component within the button. If no button with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const ButtonsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use buttons...</p>
        <Examples />
        <UsageWithOtherTags />
        <OutlineButtons />
        <Sizes />
        <ActiveState />
        <DisabledState />
        <UsageWithIcons />
        <ButtonLoader />
        {/* <UsageWithJavascript /> */}
    </div>
);

class Buttons extends Component {
    componentDidMount () {
        button.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ButtonsText />
                    <DocToc component={ButtonsText} />
                </div>
            </div>
        );
    }
}

export default Buttons;

/* for testing */
export { Examples, UsageWithOtherTags, OutlineButtons, Sizes, ActiveState, DisabledState, UsageWithIcons, ButtonLoader, UsageWithJavascript, ButtonsText };
