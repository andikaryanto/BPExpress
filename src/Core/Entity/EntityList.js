import Collection from "../Libraries/Collection";

/**
 * @class EntityList
 */
class EntityList extends Collection {

    [Symbol.iterator]() {
        let index = 0;
        return {
            // this is the iterator object, returning a single element (the string "bye")
            next: function () {
              var result = {
                value: this.items[index],
                done: index == this.items.size() - 1
              };

              index++;
              return result;
            }
          };
    };
}

export default EntityList;