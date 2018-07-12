const path = require('path');

module.exports = {
    collectCoverageFrom        : [
        'src/**/*.{js,mjs}',
        '!**/node_modules/**'
    ],
    coverageDirectory          : '<rootDir>/coverage',
    coveragePathIgnorePatterns : [
        '/node_modules/',
        '/src/index.mjs'
    ],
    coverageThreshold          : {
        global : {
            branches   : 90,
            functions  : 90,
            lines      : 90,
            statements : -10
        }
    },
    moduleFileExtensions       : [
        'js',
        'json',
        'mjs'
    ],
    moduleNameMapper           : {
        '^@/(.*)$' : '<rootDir>/src/$1',
        '^#/(.*)$' : '<rootDir>/tests/$1',
    },
    rootDir                    : path.join(__dirname, '..'),
    roots                      : [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    testRegex                  : '/tests/unit/.+.m?js$',
    transform                  : {
        '\\.m?js$' : path.join(__dirname, '..', 'config', 'jest', 'babel.js'),
    },
    transformIgnorePatterns    : [
        'node_modules/(?!jf-)'
    ]
};
