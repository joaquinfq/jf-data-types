require('../src/Integer');
require('../src/String');
const jfDataTypeCollection = require('../src/Collection');
const jfDataTypeItem       = require('../src/Item');

/**
 * Elemento de la colección de prueba.
 */
class CollectionItem extends jfDataTypeItem
{
    static get KEY()
    {
        return 'CollectionItem';
    }

    constructor(config)
    {
        super();
        this.index          = null;
        this.name           = null;
        this.$propertyTypes = {
            any   : '*',
            index : 'Integer',
            name  : 'String'
        };
        this.setProperties(config);
    }
}

jfDataTypeCollection.register(CollectionItem.KEY, CollectionItem);
module.exports = CollectionItem;
