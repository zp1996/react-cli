interface Options {
    name: string
}

export default class Test {
    name: string;
    constructor(options: Options = { name: 'test' }) {
        this.name = options.name;
    }
}
