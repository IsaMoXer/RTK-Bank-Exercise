/**Before hooks came to React, React-Redux was connecting with the store
 * in a slightlly different way (more complicated). This component will show how it was made before React hooks for the shake of learning.
 */

import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);

// The connect(mapStateToProps) function will return another function that will take (BalanceDisplay) as an argument.
