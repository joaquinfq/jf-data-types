/**
 * Permite verificar las propiedades de cualquier clase que extienda de `jf.dataType.Object`.
 *
 * @param {Class}   Class      Clase que se ha creado.
 * @param {Class}   Base       Clase de la que se extiende.
 * @param {Object?} properties Configuración de las propiedades.
 */
export default function (Class, Base, properties = null)
{
    if (properties && typeof properties === 'object')
    {
        const classname = Class.name;
        // ------------------------------------------------------------------------------
        // Pruebas unitarias para verificar las propiedades de la clase.
        // ------------------------------------------------------------------------------
        describe(
            `${classname} - $nullable`,
            () =>
            {
                for (const _property of Object.keys(properties))
                {
                    const _notNull = properties[_property].nullable === false;
                    if (_notNull)
                    {
                        it(_property, () => expect(new Class().$nullable[_property]).toBe(false));
                    }
                }
            }
        );
        describe(
            `${classname} - $propertyMap`,
            () =>
            {
                for (const _property of Object.keys(properties))
                {
                    const _mapTo = properties[_property].mapTo;
                    const _sut   = new Class();
                    if (_mapTo)
                    {
                        it(_property, () => expect(_sut.$propertyMap[_property]).toBe(_mapTo));
                    }
                    else if (_sut.$propertyMap !== null)
                    {
                        it(_property, () => expect(_sut.$propertyMap[_property]).toBeUndefined());
                    }
                }
            }
        );
        describe(
            `${classname} - $propertyTypes`,
            () =>
            {
                for (const _property of Object.keys(properties))
                {
                    it(
                        _property,
                        () => {
                            const _sut = new Class();
                            // Tipo de propiedad.
                            expect(_sut.$propertyTypes[_property]).toBe(properties[_property].model);
                            // Valor por defecto.
                            expect(_sut[_property]).toBeNull();
                        }
                    );
                }
            }
        );
    }
}
