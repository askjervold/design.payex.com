import React, { Component } from "react";
import PropTypes from "prop-types";

// FIXME: This function is really moronic and super fragile, but works for now [EH]
const _findHeadings = (children) => {
    const headings = [];
    children.map(child => {
        if (typeof child.type === "function") {
            const firstChild = child.type().props.children[0];

            if (firstChild.type === "h2") {
                headings.push(
                    {
                        title: firstChild.props.children,
                        id: firstChild.props.id
                    }
                );

            } else if (typeof firstChild.type === "function") {
                const secondFirstChild = firstChild.type().props.children[0]; // Really clever namegiving
                if (secondFirstChild.type === "h2") {
                    headings.push(
                        {
                            title: secondFirstChild.props.children,
                            id: secondFirstChild.props.id
                        }
                    );
                }
            }
        }
    });

    return headings;
};

class DocNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headings: _findHeadings(this.props.component().props.children),
            windowTopPosition: window.pageYOffset
        };
    }

    updateWindowPosition () {
        this.setState({ windowTopPosition: window.pageYOffset });
    }

    componentDidMount () {
        this.state.headings.map(heading => {
            heading.top = document.getElementById(heading.id).offsetTop;
        });

        window.addEventListener("scroll", this.updateWindowPosition.bind(this));
    }

    render () {
        return (
            <div className="col-lg-2 hidden-md doc-toc">
                <ul>
                    {this.state.headings.map((heading, i) => (
                        // TODO: Crashing on last child, fixing tomorrow [EH]
                        <li key={i} className={(this.state.windowTopPosition > heading.top && this.state.windowTopPosition < this.state.headings[i + 1].top) ? "active" : ""}>
                            <a href={`#${heading.id}`}>{heading.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

DocNav.propTypes = { component: PropTypes.func.isRequired };

export default DocNav;
