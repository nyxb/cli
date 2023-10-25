import nyxb from '@nyxb/eslint-config'

export default nyxb({
   all: true,
   typescript: true,

   rules: {
      'node/prefer-global/process': 0,
      'no-restricted-globals': 0,
      'vars-on-top': 0,
   },
})
