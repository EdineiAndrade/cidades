/* eslint @type-script-eslint/no-enpty-interface: "of" */
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components'{
  export interface DefaultTheme extends theme {}
}
