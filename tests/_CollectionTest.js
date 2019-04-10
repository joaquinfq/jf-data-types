const jfDataTypeCollection = require('../src/Collection');

/**
 * Colección de prueba.
 */
class CollectionTest extends jfDataTypeCollection
{
    static get ITEM()
    {
        return 'CollectionItem';
    }

    static get KEY()
    {
        return 'CollectionTest';
    }
}

jfDataTypeCollection.register(CollectionTest.KEY, CollectionTest);
module.exports = CollectionTest;
