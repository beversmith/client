package teams

import (
	"github.com/keybase/client/go/libkb"
	"github.com/keybase/client/go/protocol/keybase1"
)

// ProbabilisticMerkleTeamAudit runs an audit on the links of the given team chain (or subchain).
// The security factor of the audit is a function of the platform type, and the amount of time
// since the last audit. This method should use some sort of long-lived cache (via local DB) so that
// previous audits can be combined with the current one.
func ProbabilisticMerkleTeamAudit(m libkb.MetaContext, id keybase1.TeamID, isPublic bool, headMerkle keybase1.MerkleRootV2, chain map[keybase1.Seqno]keybase1.LinkID) (err error) {
	return nil
}
