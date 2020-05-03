var config = {
    deps: [
        'js/theme'
    ],
    mixins: {
        'mage/collapsible': {
            'js/mage/collapsible-mixin': true //mixin for collapsible problem intesecting tabs beahviour in products view page
        },
    },
    paths: {
        "jquery.bootstrap": "js/bootstrap.bundle.min",
    },
    shim: {
        'jquery.bootstrap': {
            'deps': ['jquery']
        }
    },
    "map": {
        "*": {
            "sidebar":"js/checkout/sidebar",
            "Magento_Checkout/js/sidebar": "js/checkout/sidebar",
        }
      }
};