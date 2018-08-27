// @flow
import {makeRouteDefNode, makeLeafTags} from '../route-tree'
import {isMobile} from '../constants/platform'
import CreateNewAccount from './create-account/container'
import LinkExisting from './link-existing/container'
import Container from './container'
import ReceiveModal from './receive-modal/container'
import ExportSecretKey from './export-secret-key/container'
import TransactionDetails from './transaction-details/container'
import AccountSettings from './wallet/settings/container'
import {SetDefaultAccountPopup, RemoveAccountPopup, ReallyRemoveAccountPopup} from './wallet/settings/popups'
import SendForm from './send-form/container'
import ConfirmForm from './confirm-form/container'
import Wallet from './wallet/container'

const walletChildren = {
  createNewAccount: {
    children: {},
    component: CreateNewAccount,
    tags: makeLeafTags({layerOnTop: !isMobile}),
  },
  exportSecretKey: {
    children: {},
    component: ExportSecretKey,
    tags: makeLeafTags({layerOnTop: !isMobile}),
  },
  linkExisting: {
    children: {},
    component: LinkExisting,
    tags: makeLeafTags({layerOnTop: !isMobile}),
  },
  receive: {
    children: {},
    component: ReceiveModal,
    tags: makeLeafTags({layerOnTop: !isMobile}),
  },
  settings: {
    children: {
      setDefaultAccount: {
        children: {},
        component: SetDefaultAccountPopup,
        tags: makeLeafTags({layerOnTop: !isMobile}),
      },
      removeAccount: {
        children: {
          reallyRemoveAccount: {
            children: {},
            component: ReallyRemoveAccountPopup,
            tags: makeLeafTags({layerOnTop: !isMobile}),
          },
        },
        component: RemoveAccountPopup,
        tags: makeLeafTags({layerOnTop: !isMobile}),
      },
    },
    component: AccountSettings,
  },
  sendReceiveForm: {
    children: {
      confirmForm: {
        children: {},
        component: ConfirmForm,
        tags: makeLeafTags({layerOnTop: !isMobile}),
      },
    },
    component: SendForm,
    tags: makeLeafTags({layerOnTop: !isMobile}),
  },
  transactionDetails: {
    component: TransactionDetails,
  },
}

const routeTree = makeRouteDefNode({
  containerComponent: Container,
  defaultSelected: 'wallet',
  children: {
    wallet: {
      component: Wallet,
      children: walletChildren,
    },
  },
})

export default routeTree
