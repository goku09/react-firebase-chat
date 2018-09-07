import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { firebase } from "../../Firebase";
import * as routes from "../../Constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.context.authUser ? <Component /> : null;
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WithAuthorization);
};

export default withAuthorization;
