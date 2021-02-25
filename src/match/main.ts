function main(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
main("TypeScript");

const name:OptionsA = {
    force: true,
    offline: false
}

console.log(name)

export interface OptionsA {
    /**
     * Force mode, overwrite if the target exists.
     * @default false
     */
    force?: boolean
    /**
     * Offline mode, try to use an offline template.
     * @default false
     */
    offline?: boolean
}