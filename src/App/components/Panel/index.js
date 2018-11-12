import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Panel = ({ title, subTitle, id, type, removeBottomPadding, removeAllPadding, halfPadding, darkMode, panelBodyContent, panelTable, footerText }) => {
    const panelClasses = classnames(
        "panel",
        type ? `panel-${type}` : "panel-default",
        removeBottomPadding ? "panel-bottomless" : null,
        removeAllPadding ? "panel-no-padding" : null,
        halfPadding ? "panel-half-padding" : null,
        darkMode ? "panel-dark" : null
    );

    const TableComponent = panelTable;

    return (
        <section
            className={panelClasses}
            id={id}>
            {title ?
                <header>
                    <h2 className="panel-title">{title}</h2>
                    {subTitle ? <p className="panel-sub-title">{subTitle}</p> : null}
                </header>
                : null}
            {panelBodyContent ?
                <div className="panel-body">
                    {
                        panelBodyContent.forEach(text => (
                            <p>{text}</p>
                        ))
                    };
                </div>
                : null}
            {panelTable ?
                <div className="panel-table">
                    {panelTable()}
                </div>
                : null}
            {footerText ?
                <footer>
                    <p>{footerText}</p>
                </footer>
                : null}
        </section>
    );
};

Panel.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(["brand", "default", "muted", ""]),
    halfPadding: PropTypes.bool,
    removeAllPadding: PropTypes.bool,
    removeBottomPadding: PropTypes.bool,
    darkMode: PropTypes.bool,
    panelBodyContent: PropTypes.array,
    footerText: PropTypes.string
};

export default Panel;
