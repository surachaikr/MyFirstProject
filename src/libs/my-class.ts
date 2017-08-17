export class C1 {
    callRemote() {
        return new Promise(resolve => {
            console.log('do something');
            resolve('some value');
        })
    }
}