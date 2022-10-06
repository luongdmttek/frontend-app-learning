/* eslint-disable import/prefer-default-export */
import { getAuthenticatedHttpClient } from 'frontend-platform-vi/auth';
import { getConfig } from 'frontend-platform-vi';

export async function postCourseEnrollment(courseId) {
  const url = `${getConfig().LMS_BASE_URL}/api/enrollment/v1/enrollment`;
  const { data } = await getAuthenticatedHttpClient().post(url, { course_details: { course_id: courseId } });
  return data;
}
