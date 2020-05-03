/*
Solution for preventing jumping to hash of tab in products view page (desciption, reviews tabs)
Obtained from https://magento.stackexchange.com/questions/293437/magento-2-3-3-tab-jumping-on-top
*/
define([
    'jquery',
], function ($) {

    var hideProps = {},
        showProps = {};

    hideProps.height =  'hide';
    showProps.height =  'show';

    return function (widget) {

        $.widget('mage.collapsible', widget, {
            options: {
                scrollTo: false
            },

            _create: function () {
                this.storage = $.localStorage;
                this.icons = false;

                if (typeof this.options.icons === 'string') {
                    this.options.icons = $.parseJSON(this.options.icons);
                }

                this._processPanels();
                this._processState();
                this._refresh();

                if (this.options.icons.header && this.options.icons.activeHeader) {
                    this._createIcons();
                    this.icons = true;
                }

                if (this.options.scrollTo) {
                    this.element.on('dimensionsChanged', function (e) {
                        if (e.target && e.target.classList.contains('active')) {
                            this._scrollToTopIfVisible(e.target);
                        }
                    }.bind(this));
                }

                this._bind('click');
                this._trigger('created');
            },
        });

        return $.mage.collapsible;
    };
});