import { AttributifyAttributes } from '@unocss/preset-attributify';

/**
 * This is a workaround for the fact that Svelte doesn't support
 * augmenting the global HTML attributes interface.
 * 
 * Which means that when we use unocss with `presetAttributify()` preset, we get attribute
 * errors in the IDE.
 * 
 * example:
 * ```js
 * <button
 *  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
 *  text="sm white"
 *  font="mono light"
 *  p="y-2 x-4"
 *  border="2 rounded blue-200"
 * >
 * ```
 * 
 * Each of the attributes above will throw an error in the IDE without this workaround.
 */
declare module 'svelte/elements' {
	interface HTMLAttributes<T> extends AttributifyAttributes {
		__unocss_dummy?: never;
	}
}


