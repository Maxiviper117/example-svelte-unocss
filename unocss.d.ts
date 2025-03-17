import { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'svelte/elements' {
	interface HTMLAttributes<T> extends AttributifyAttributes {
		__unocss_dummy?: never;
	}
}


