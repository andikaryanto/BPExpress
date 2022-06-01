/**
 * @class MockModule
 */
class MockModule {
    /**
     * Mock Module
     * @param {any} module
     * @param {any} fnName
     * @param {any} returnValue
     * @return {any}
     */
    static mockModule(module: any, fnName: any, returnValue: any|null = null): any {
        const jestInstance = jest.spyOn(module['prototype'], fnName);
        let result: any|null = null;
        if (typeof returnValue === 'function') {
            result = returnValue();
        } else {
            result = returnValue;
        }
        return jestInstance.mockImplementation(() => result);
    }
}

export default MockModule;
