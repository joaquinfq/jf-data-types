/**
 * Exporta pruebas que son comunes a todas las clases.
 * Estas comprobaciones parecen obvias pero al usar un transpilador es mejor hacerlas.
 *
 * @param {Class} Class Clase que se ha creado.
 * @param {Class} Base  Clase de la que se extiende.
 */
export default function (Class, Base)
{
    const basename  = Base.name;
    const classname = Class.name;

    // ------------------------------------------------------------------------------
    // Pruebas unitarias para verificar la herencia y la construcción usando la factoría.
    // ------------------------------------------------------------------------------
    describe(
        `${Class.name} - Clase`,
        () =>
        {
            it(
                `${classname} extends ${basename}`,
                () => expect(Base.isPrototypeOf(Class)).toBe(true)
            );
            it(
                'constructor() - Sin factoría',
                () => {
                    const sut = new Class();
                    expect(sut).toBeInstanceOf(Class);
                    expect(sut).toBeInstanceOf(Base);
                }
            );
            it(
                'constructor() - Con factoría',
                () => {
                    // Al registrar el nombre en la factoría se suele usar el nombre completo o una parte
                    // que suele ir desde el final hacia al principio así que buscamos esa coincidencia.
                    // Por ejemplo:
                    // RsiModelsTypeDate           se registra como Date
                    // RsiModelsTypeDateTime       se registra como DateTime
                    // RsiModelsTypeCollectionBase se registra como RsiModelsTypeCollectionBase
                    let sut;
                    const names = classname.match(/[A-Z][a-z0-9]+/g);
                    while (names.length)
                    {
                        sut = Base.create(names.join(''));
                        if (sut)
                        {
                            break;
                        }
                        else
                        {
                            names.shift();
                        }
                    }
                    expect(sut).toBeInstanceOf(Class);
                    expect(sut).toBeInstanceOf(Base);
                }
            );
        }
    );
}
