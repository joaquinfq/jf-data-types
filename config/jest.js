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
    rootDir                    : require('path').resolve(__dirname, '..'),
    roots                      : [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    testRegex                  : '/tests/unit/.+.m?js$',
    transform                  : {
        '\\.m?js$' : 'babel-jest'
    },
    transformIgnorePatterns    : [
        'node_modules/(?!jf-)'
    ]
};
