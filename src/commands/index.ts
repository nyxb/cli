import type { CommandDef } from 'citty'

const _rDefault = (r: any) => (r.default || r) as Promise<CommandDef>

export const commands = {
   add: () => import('./add').then(_rDefault),
   init: () => import('./init').then(_rDefault),
} as const
