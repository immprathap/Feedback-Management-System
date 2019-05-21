/*
 * Test Messages
 *
 * This contains all the text for the Test container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.User.FeedbackCategory';

export default defineMessages({
  InPatient: {
    id: `${scope}.InPatient`,
    defaultMessage: 'In-Patient',
  },
  OutPatient: {
    id: `${scope}.OutPatient`,
    defaultMessage: 'Out-Patient',
  },
  SalesForce: {
    id: `${scope}.SalesForce`,
    defaultMessage: 'Sales Force',
  },
  Website: {
    id: `${scope}.Website`,
    defaultMessage: 'Sales Force',
  },
  Frontline: {
    id: `${scope}.Frontline`,
    defaultMessage: 'Frontline',
  },
  PersonalizedHealthCheck: {
    id: `${scope}.PersonalizedHealthCheck`,
    defaultMessage: 'Personalized Health Check',
  },
  EmployeeUsingHospitalServices: {
    id: `${scope}.EmployeeUsingHospitalServices`,
    defaultMessage: 'Employee using Hospital Services',
  },
  PostDischarge: {
    id: `${scope}.PostDischarge`,
    defaultMessage: 'Post Discharge',
  },
  CentralizedPostDischarge: {
    id: `${scope}.CentralizedPostDischarge`,
    defaultMessage: 'Centralized Post Discharge',
  }
});
