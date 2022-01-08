let OFF = 0, WARN = 1, ERROR = 2;
// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "block-scoped-var": WARN,
        "consistent-return": ERROR,
        "curly": ERROR,
        "default-case": WARN,
        // the dot goes with the property when doing multiline
        "dot-location": [ WARN, "property" ],
        "dot-notation": WARN,
        "eqeqeq": [ ERROR, "smart" ],
        "no-else-return": WARN,
        "no-undef-init": OFF,
        "no-undef": ERROR,
        "no-undefined": OFF,
        "no-unused-vars": WARN,
        // Disallow hoisting - let & const don't allow hoisting anyhow
        "no-use-before-define": ERROR,
        "arrow-body-style": [ ERROR, "always" ],
        "arrow-parens": [ ERROR, "always" ],
        "arrow-spacing": [ ERROR, { "before": true, "after": true }],
        "constructor-super": ERROR,
        "generator-star-spacing": [ ERROR, "before" ],
        "no-class-assign": ERROR,
        "no-const-assign": ERROR,
        "no-dupe-class-members": ERROR,
        "no-this-before-super": ERROR,
        "no-var": WARN,
        "object-shorthand": [ WARN, "never" ],
        "prefer-arrow-callback": WARN,
        "prefer-spread": WARN,
        "prefer-template": WARN,
        "require-yield": ERROR,
    }
};
