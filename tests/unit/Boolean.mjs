import common            from '../utils/common';
import helpers           from '../utils/helpers';
import jfDataTypeBase    from '../../src/Base';
import jfDataTypeBoolean from '../../src/Boolean';

describe('jfDataTypeBoolean - common', () => common(jfDataTypeBoolean, jfDataTypeBase));
describe(
    'jfDataTypeBoolean',
    () => {
        helpers.testAll(
            jfDataTypeBoolean,
            [
                // Valor `null`
                [ 'Boolean', null,      null,  null,  '' ],
                // Valores `false`
                [ 'Boolean', [],        false, false, 'false' ],
                [ 'Boolean', 'off',     false, false, 'false' ],
                [ 'Boolean', false,     false, false, 'false' ],
                [ 'Boolean', '',        false, false, 'false' ],
                [ 'Boolean', '0',       false, false, 'false' ],
                [ 'Boolean', 0,         false, false, 'false' ],
                [ 'Boolean', 0.0,       false, false, 'false' ],
                [ 'Boolean', undefined, false, false, 'false' ],
                // // Valores `true`
                [ 'Boolean', 'on',      true,  true,  'true' ],
                [ 'Boolean', [0],       true,  true,  'true' ],
                [ 'Boolean', () => 1,   true,  true,  'true' ],
                [ 'Boolean', 1,         true,  true,  'true' ],
                [ 'Boolean', 0.1,       true,  true,  'true' ],
                [ 'Boolean', '1',       true,  true,  'true' ],
                [ 'Boolean', 'abc',     true,  true,  'true' ],
                [ 'Boolean', true,      true,  true,  'true' ]
            ],
            null,
            null,
            [null]
        );
        // Un objeto vacío se asumirá como un valor `false`.
        helpers.testClass(jfDataTypeBoolean, {}, false, false, 'false');
        helpers.testClass(jfDataTypeBoolean, { a : 1 }, true, true, 'true');
    }
);
