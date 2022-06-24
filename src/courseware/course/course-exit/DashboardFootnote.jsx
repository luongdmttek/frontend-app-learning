import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getAuthenticatedUser } from 'frontend-platform-vi/auth';
import {
  FormattedMessage, injectIntl, intlShape,
} from 'frontend-platform-vi/i18n';
import { Hyperlink } from '@edx/paragon';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { getConfig } from 'frontend-platform-vi';

import { useModel } from '../../../generic/model-store';

import Footnote from './Footnote';
import messages from './messages';
import { logClick } from './utils';

function DashboardFootnote({ intl, variant }) {
  const { courseId } = useSelector(state => state.courseware);
  const { org } = useModel('courseHomeMeta', courseId);
  const { administrator } = getAuthenticatedUser();

  const dashboardLink = (
    <Hyperlink
      style={{ textDecoration: 'underline' }}
      destination={`${getConfig().LMS_BASE_URL}/dashboard`}
      className="text-reset"
      onClick={() => logClick(org, courseId, administrator, 'dashboard_footnote', { variant })}
    >
      {intl.formatMessage(messages.dashboardLink)}
    </Hyperlink>
  );

  return (
    <Footnote
      icon={faCalendarAlt}
      text={(
        <FormattedMessage
          id="courseCelebration.dashboardInfo" // for historical reasons
          defaultMessage="You can access this course and its materials on your {dashboardLink}."
          description="Text that precedes link to learner's dashboard"
          values={{ dashboardLink }}
        />
      )}
    />
  );
}

DashboardFootnote.propTypes = {
  intl: intlShape.isRequired,
  variant: PropTypes.string.isRequired,
};

export default injectIntl(DashboardFootnote);
