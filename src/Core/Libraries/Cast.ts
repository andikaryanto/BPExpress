/**
 * @class Cast
 */
class Cast {
    /**
     *
     * @param {any} value
     * @param {string} type
     * @return {any}
     */
    static to(value: any, type: string): any {
        switch (type) {
        case 'boolean':
            return Boolean(value);
        }
    }
}

export default Cast;
