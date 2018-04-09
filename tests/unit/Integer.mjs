import base              from '#/utils/base';
import jfDataTypeFloat   from '@/Float';
import jfDataTypeInteger from '@/Integer';

base(jfDataTypeInteger, jfDataTypeFloat);
describe(
    'jfDataTypeInteger',
    () =>
    {
        it(
            'defaults',
            () => expect(new jfDataTypeInteger().precision).toBe(0)
        );
        it(
            'parser - NaN',
            () =>
            {
                [false, true, {}, () => 1, [], 'abc'].forEach(
                    value => {
                        let _sut = new jfDataTypeInteger();
                        _sut.value = value;
                        expect(_sut.value).toBeNull();
                    }
                );
            }
        );
        it(
            'parser - int',
            () =>
            {
                [0, 1, 1.234, '0', '1', [0], [1]].forEach(
                    value => {
                        let _sut = new jfDataTypeInteger();
                        _sut.value = value;
                        expect(_sut.value).toBe(parseInt(value, 10));
                    }
                );
            }
        );
    }
);
