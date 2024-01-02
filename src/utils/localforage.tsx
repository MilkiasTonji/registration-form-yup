import localForage from "localforage";

localForage.config({
    driver: localForage.WEBSQL,
    name:'allInOneApp',
    version: 1.0,
    size: 4980736,
    storeName: 'keyvaluepairs',
    description: "Simple and fast storage library (localForage) utilization"
})


var store = localForage.createInstance({
    name: "corestore"
})


export default store;