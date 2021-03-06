// @flow
import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {|
  encryptedNote?: string,
  publicMemo?: string,
|}

const NoteAndMemo = (props: Props) => (
  <Kb.Box2 direction="vertical" fullWidth={true} style={styles.container}>
    {!!props.encryptedNote && (
      <React.Fragment>
        <Kb.Divider />
        <Kb.Box2 direction="vertical" fullWidth={true} style={styles.memoContainer}>
          <Kb.Text type="BodyTinySemibold" style={styles.headingText}>
            Encrypted note
          </Kb.Text>
          <Kb.Text type="BodySmall" style={styles.bodyText}>
            {props.encryptedNote}
          </Kb.Text>
        </Kb.Box2>{' '}
      </React.Fragment>
    )}
    {!!props.publicMemo && (
      <React.Fragment>
        <Kb.Divider />
        <Kb.Box2 direction="vertical" fullWidth={true} style={styles.memoContainer}>
          <Kb.Text type="BodyTinySemibold" style={styles.headingText}>
            Public note
          </Kb.Text>
          <Kb.Text type="BodySmall" style={styles.bodyText}>
            {props.publicMemo}
          </Kb.Text>
        </Kb.Box2>
      </React.Fragment>
    )}
  </Kb.Box2>
)

const styles = Styles.styleSheetCreate({
  memoContainer: {
    paddingTop: Styles.globalMargins.tiny,
    paddingBottom: Styles.globalMargins.tiny,
    paddingLeft: Styles.globalMargins.small,
    paddingRight: Styles.globalMargins.small,
  },
  headingText: {
    color: Styles.globalColors.blue,
    marginBottom: Styles.globalMargins.xtiny,
  },
  bodyText: {
    color: Styles.globalColors.black_75,
  },
})

export default NoteAndMemo
