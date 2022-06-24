/* eslint-disable import/prefer-default-export */

import { getConfig } from 'frontend-platform-vi';
import { getAuthenticatedHttpClient } from 'frontend-platform-vi/auth';

// Does not block on answer
export function postCelebrationComplete(courseId, data) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/courseware/celebration/${courseId}`);
  getAuthenticatedHttpClient().post(url.href, data);
}
