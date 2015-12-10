import React, {Component} from '../base-react'
import {connect} from '../base-redux'
import {bindActionCreators} from 'redux'
import PinentryRender from './index.render'
import {sessionDecoratedActions} from '../actions/pinentry'

export class Pinentry extends Component {
  render () {
    return <PinentryRender {...this.props} />
  }

  static parseRoute () {
    return {componentAtTop: {title: 'pinentry'}}
  }
}

Pinentry.propTypes = PinentryRender.propTypes

export default connect(
  (state, ownProps) => {
    const sessionID = ownProps.sessionID
    return state.pinentry.pinentryStates[sessionID]
  },
  (dispatch, ownProps) => {
    return bindActionCreators(sessionDecoratedActions(ownProps.sessionID), dispatch)
  }
)(Pinentry)
