function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");

const name:Options = {
    force: true,
    offline: false
}

export type Config = {
    // user
    optionMergeStrategies: { [key: string]: Function };
    silent: boolean;
    productionTip: boolean;
    performance: boolean;
    devtools: boolean;
    ignoredElements: Array<string | RegExp>;
    keyCodes: { [key: string]: number | Array<number> };
  
    // platform
    isReservedTag: (x?: string) => boolean;
    isReservedAttr: (x?: string) => boolean;
    parsePlatformTagName: (x: string) => string;
    isUnknownElement: (x?: string) => boolean;
    getTagNamespace: (x?: string) => string | void;
  
    // private
    async: boolean;
  
    // legacy
    _lifecycleHooks: Array<string>;
  };

export interface Options {
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