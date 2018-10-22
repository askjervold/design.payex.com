import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import { nav } from "$/px-script";
import NavComponent from "@/Nav";

const navItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    },
    {
        name: "Authentication",
        icon: "fingerprint"
    }
];

const navItemsTwoLevels = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart",
        subItems: ["Purchase history", "Invoice"]
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance",
        subItems: ["Email", "Information", "Other things"]
    }
];

const StandardNav = () => (
    <>
        <h2 id="nav-standard">Standard nav</h2>
        <p>
            Add class <code className="token property">.nav</code> and <code className="token property">.nav-{"{desired_size}"}-vertical-wide</code> to a nav containing an <PrismCode className="language-html">{"<ul>"}</PrismCode> to get a standard nav.
            Add <PrismCode className="language-html">{"<i>"}</PrismCode> and <PrismCode className="language-html">{"<span>"}</PrismCode> with your desired <Link to="/docs/core/icons">icon</Link> and text. <code className="token property">.nav-{"{desired_size}"}-vertical-wide</code> determines
            when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent widesize="lg" items={navItems} />
        </ComponentPreview>
    </>
);

const TwoLevels = () => (
    <>
        <h2 id="nav-twolevels">Two levels</h2>
        <p>
            You can also display another level of items in the standard nav. Just nest a <PrismCode className="language-html">{"<div>"}</PrismCode> with class <code className="token property">.submenu</code> containing an icon and text like the
            standard nav and add a new <PrismCode className="language-html">{"<ul>"}</PrismCode> with <PrismCode className="language-html">{"<li>"}</PrismCode> items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent widesize="lg" items={navItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const IconsOnly = () => (
    <>
        <h2 id="nav-tablet">Icons only</h2>
        <p>
            To display only icons use class <code className="token property">.nav-{"{desired_size}"}-vertical</code>.  <code className="token property">.nav-{"{desired_size}"}-vertical</code> works
            just like in the standard example. In this mode it is possible to display another level of items.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent vertsize="md" items={navItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const Mix = () => (
    <>
        <h2 id="nav-mix">Tablet and wide</h2>
        <p>
            You can also use both icons only and wide together.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent vertsize="md" widesize="lg" items={navItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const Mobile = () => (
    <>
        <h2 id="nav-mobile">Mobile nav</h2>
        <p>
            To only display mobile view use class <code className="token property">.nav</code> alone.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent items={navItems} />
        </ComponentPreview>
    </>
);

const NavText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Sidebars.</p>
        <StandardNav />
        <TwoLevels />
        <IconsOnly />
        <Mix />
        <Mobile />
    </div>
);

class Nav extends Component {
    componentDidUpdate () {
        nav.init();
    }

    componentDidMount () {
        nav.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <NavText />
                    <DocToc component={NavText} />
                </div>
            </div>
        );
    }
}

export default Nav;

/* For testing */
export { StandardNav, TwoLevels, IconsOnly, Mix, Mobile, NavText };
