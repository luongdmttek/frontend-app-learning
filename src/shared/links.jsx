import React from 'react';
import { injectIntl, intlShape } from 'frontend-platform-vi/i18n';
import { getAuthenticatedUser } from 'frontend-platform-vi/auth';
import { getConfig } from 'frontend-platform-vi';
import { Hyperlink } from '@edx/paragon';

import messages from '../courseware/course/course-exit/messages';

function IntlDashboardLink({ intl }) {
  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={`${getConfig().LMS_BASE_URL}/dashboard`}
    >
      {intl.formatMessage(messages.dashboardLink)}
    </Hyperlink>
  );
}

IntlDashboardLink.propTypes = {
  intl: intlShape.isRequired,
};

function IntlIdVerificationSupportLink({ intl }) {
  if (!getConfig().SUPPORT_URL_ID_VERIFICATION) {
    return null;
  }
  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={getConfig().SUPPORT_URL_ID_VERIFICATION}
    >
      {intl.formatMessage(messages.idVerificationSupportLink)}
    </Hyperlink>
  );
}

IntlIdVerificationSupportLink.propTypes = {
  intl: intlShape.isRequired,
};

function IntlProfileLink({ intl }) {
  const { username } = getAuthenticatedUser();

  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={`${getConfig().LMS_BASE_URL}/u/${username}`}
    >
      {intl.formatMessage(messages.profileLink)}
    </Hyperlink>
  );
}

IntlProfileLink.propTypes = {
  intl: intlShape.isRequired,
};

const DashboardLink = injectIntl(IntlDashboardLink);
const IdVerificationSupportLink = injectIntl(IntlIdVerificationSupportLink);
const ProfileLink = injectIntl(IntlProfileLink);

export { DashboardLink, IdVerificationSupportLink, ProfileLink };
