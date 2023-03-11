import { atom } from 'jotai'

interface AuthModalAtomState {
  view: 'signup' | 'login' | 'resetPassword'
  open: boolean
}
export const authModalAtom = atom<AuthModalAtomState>({
  view: 'login',
  open: false
})
