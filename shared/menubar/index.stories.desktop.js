// @flow
import * as React from 'react'
import * as Storybook from '../stories/storybook'
import Menubar from './index.desktop'

const props = {
  badgeInfo: {
    'tabs:chatTab': 0,
    'tabs:folderTab': 0,
    'tabs:fsTab': 0,
    'tabs:gitTab': 0,
    'tabs:peopleTab': 0,
    'tabs:teamsTab': 0,
  },
  config: {
    avatars: {},
    followers: {},
    following: {},
  },
  folderProps: null,
  isAsyncWriteHappening: false,
  logIn: Storybook.action('logIn'),
  loggedIn: true,
  onFolderClick: Storybook.action('onFolderClick'),
  onRekey: Storybook.action('onRekey'),
  openApp: Storybook.action('openApp'),
  quit: Storybook.action('quit'),
  refresh: Storybook.action('refresh'),
  showBug: Storybook.action('showBug'),
  showHelp: Storybook.action('showHelp'),
  showUser: Storybook.action('showUser'),
  username: 'nathunsmitty',
  windowComponent: 'menubar',
  windowParam: '',
  onSelectConversation: () => {},
  conversations: [
    // TODO: fill in a few.
  ],
}

const providers = Storybook.createPropProviderWithCommon({
  ChatRow: () => ({
    convRows: [],
    onViewAll: () => {},
  }),
})

const load = () => {
  Storybook.storiesOf('Menubar', module)
    .addDecorator(providers)
    .add('Normal', () => <Menubar {...props} />)
    .add('Not logged in', () => <Menubar {...props} loggedIn={false} />)
    .add('With a file notification', () => (
      <Menubar
        {...props}
        badgeInfo={{
          ...props.badgeInfo,
          'tabs:fsTab': 2,
        }}
      />
    ))
    .add('With a people notification', () => (
      <Menubar
        {...props}
        badgeInfo={{
          ...props.badgeInfo,
          'tabs:peopleTab': 3,
        }}
      />
    ))
    .add('With a chat notification', () => (
      <Menubar
        {...props}
        badgeInfo={{
          ...props.badgeInfo,
          'tabs:chatTab': 6,
        }}
      />
    ))
    .add('Async write happening', () => <Menubar {...props} isAsyncWriteHappening={true} />)
}

export default load
