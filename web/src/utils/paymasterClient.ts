// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { ENTRYPOINT_ADDRESS_V06 } from 'permissionless';
import { paymasterActionsEip7677 } from 'permissionless/experimental';
import { createClient, http, createPublicClient } from 'viem';
import { baseSepolia } from 'viem/chains';

const paymasterService = process.env.NEXT_PUBLIC_PAYMASTER_URL ?? '';

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

export const paymasterClient = createClient({
  chain: baseSepolia,
  transport: http(paymasterService),
}).extend(paymasterActionsEip7677({ entryPoint: ENTRYPOINT_ADDRESS_V06 }));
