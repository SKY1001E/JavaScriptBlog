export class TransformService {
    constructor() {
    }

    static firebaseObjectToArray(fbData) {
        return  Object.keys(fbData).map(key => {
            const item = fbData[key]
            item.id = key
            return item
        })
    }
}