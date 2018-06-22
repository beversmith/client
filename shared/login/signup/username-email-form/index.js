// @flow
import * as React from 'react'
import {Box2, Avatar, Input, WaitingButton, HeaderHoc} from '../../../common-adapters'
import {styleSheetCreate} from '../../../styles'

type Props = {
  emailErrorText: string,
  onBack: () => void,
  onSubmit: (username: string, email: string) => void,
  usernameErrorText: string,
}
type State = {
  username: string,
  email: string,
}

class UsernameAndEmail extends React.Component<Props, State> {
  state = {email: '', username: ''}

  _onSubmit = () => {
    this.props.onSubmit(this.state.username, this.state.email)
  }
  render() {
    return (
      <Box2
        direction="vertical"
        fullWidth={true}
        fullHeight={true}
        centerChildren={true}
        gap="small"
        style={styles.container}
      >
        <Avatar username={this.state.username} size={128} />
        <Input
          autoFocus={true}
          hintText="Create a username"
          value={this.state.username}
          errorText={this.props.usernameErrorText}
          onChangeText={username => this.setState({username})}
        />
        <Input
          hintText="Email address"
          value={this.state.email}
          errorText={this.props.emailErrorText}
          onEnterKeyDown={this._onSubmit}
          onChangeText={email => this.setState({email})}
        />
        <WaitingButton
          waitingKey="signup:userEmail"
          type="Primary"
          label="Continue"
          onClick={this._onSubmit}
        />
      </Box2>
    )
  }
}

const styles = styleSheetCreate({
  container: {
    // using a headerhoc but don't push our content down
    marginTop: -48,
  },
})

export default HeaderHoc(UsernameAndEmail)
