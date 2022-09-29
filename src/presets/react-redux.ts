import type { ImportsMap } from '../types'

export const ReactReduxHooks = [
  'batch',
  'connect',
  'Provider',
  'useSelector',
  'useDispatch',
  'useStore',
  'shallowEqual',
]

export default <ImportsMap>({
  'react-redux': [
    ...ReactReduxHooks,
  ],
})
