import React from 'react';
import { useSelector } from 'react-redux';

import { getConfig } from 'frontend-platform-vi';
import { sendTrackEvent } from 'frontend-platform-vi/analytics';
import { getAuthenticatedUser } from 'frontend-platform-vi/auth';
import { injectIntl, intlShape } from 'frontend-platform-vi/i18n';
import { Hyperlink } from '@edx/paragon';

import messages from './messages';
import { useModel } from '../../../generic/model-store';

function RelatedLinks({ intl }) {
  const {
    courseId,
  } = useSelector(state => state.courseHome);
  const {
    org,
  } = useModel('courseHomeMeta', courseId);

  const { administrator } = getAuthenticatedUser();
  const logLinkClicked = (linkName) => {
    sendTrackEvent('edx.ui.lms.course_progress.related_links.clicked', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
      link_clicked: linkName,
    });
  };

  return (
    <section className="mb-4 x-small">
      <h3 className="h4">{intl.formatMessage(messages.relatedLinks)}</h3>
      <ul className="pl-4">
        <li>
          <Hyperlink destination={`/course/${courseId}/dates`} onClick={() => logLinkClicked('dates')}>
            {intl.formatMessage(messages.datesCardLink)}
          </Hyperlink>
          <p>{intl.formatMessage(messages.datesCardDescription)}</p>
        </li>
        <li>
          <Hyperlink destination={`/course/${courseId}/home`} onClick={() => logLinkClicked('course_outline')}>
            {intl.formatMessage(messages.outlineCardLink)}
          </Hyperlink>
          <p>{intl.formatMessage(messages.outlineCardDescription)}</p>
        </li>
      </ul>
    </section>
  );
}

RelatedLinks.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RelatedLinks);
