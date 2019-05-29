/*
 * Test Messages
 *
 * This contains all the text for the Test container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.User.Feedback.Comment.Types';

export default defineMessages({
  1: {
    id: `${scope}.1`,
    defaultMessage: "Complaint"
  },
  2: {
    id: `${scope}.2`,
    defaultMessage: "Compliment"
  },
  3: {
    id: `${scope}.3`,
    defaultMessage: "Suggestion"
  },
  4: {
    id: `${scope}.4`,
    defaultMessage: "Phone no not available"
  },
  5: {
    id: `${scope}.5`,
    defaultMessage: "Phone no not working"
  },
  6: {
    id: `${scope}.6`,
    defaultMessage: "Customer not reachable"
  },
  7: {
    id: `${scope}.7`,
    defaultMessage: "Incorrect contact number"
  },
  8: {
    id: `${scope}.8`,
    defaultMessage: "Not willing to comment"
  }
});
