/* eslint-disable no-var */

declare global {
   var __NYXB_PREPATHS__: undefined | string[]
   var __NYXB_PATHS__: undefined | string[]
   var __nyxb_cli__:
   | undefined
   | {
      entry: string
      startTime: number
   }
}

export {}
