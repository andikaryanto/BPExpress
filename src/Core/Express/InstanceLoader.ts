import Container from '../Container/Container';

/**
 * @class InstanceLoader
 */
class InstanceLoader {
    /**
     *
     * @param {any} className
     * @return {any}
     */
    static load(className: any): any {
        if (typeof className == 'string') {
            return Container.getInstance().get(className);
        }
        return new className();
    }
}
export default InstanceLoader;
