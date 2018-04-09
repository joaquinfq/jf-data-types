import base             from '#/utils/base';
import helpers          from '#/utils/helpers';
import jfDataTypeBase   from '@/Base';
import jfDataTypeString from '@/String';

base(jfDataTypeString, jfDataTypeBase);
describe(
    'jfDataTypeDateString',
    () =>
    {
        const _tests = [
            [ 'String', false,     'false', 'false', 'false' ],
            [ 'String', '',        '',      '',      ''      ],
            [ 'String', '0',       '0',     '0',     '0'     ],
            [ 'String', 0,         '0',     '0',     '0'     ],
            [ 'String', 1,         '1',     '1',     '1'     ],
            [ 'String', '1',       '1',     '1',     '1'     ],
            [ 'String', null,      null,    null,    ''      ],
            [ 'String', undefined, '',      '',      ''      ],
            [ 'String', true,      'true',  'true',  'true'  ],
            ...helpers.generateNumbers().map(number => [ 'String', number, '' + number, '' + number, '' + number ])
        ];
        helpers.testAll(jfDataTypeString, _tests, null, null, [ null ]);
    }
);
