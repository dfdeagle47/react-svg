var React = require('react'),
    ReactDOM = require('react-dom'),
    SVGInjector = require('svg-injector');

svgConfig = function(args) {
return {
    evalScripts: args.evalScripts || 'never',
    each: args.callback || null
};
};

module.exports = React.createClass({
    displayName: 'SVG',
    componentDidMount: function() {
        return SVGInjector([ReactDOM.findDOMNode(this)], svgConfig(this.props));
    },

    render: function() {
        return React.createElement('img', {
            className: this.props.className,
            'data-fallback': this.props.fallbackPath,
            'data-src': this.props.path
        });
    }
});