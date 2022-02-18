/**
 * @class MockModule
 */
class MockModule {
    /**
     * Mock Module
     * @param {*} module
     * @param {*} fnName
     * @param {*} returnValue
     * @return {*}
     */
    static mockModule(module, fnName, returnValue = null) {
        const jestInstance = jest.spyOn(module['prototype'], fnName);
        let result = null;
        if (typeof returnValue === 'function') {
            result = returnValue();
        } else {
            result = returnValue;
        }
        return jestInstance.mockImplementation(() => result);
    }
}

export default MockModule;
