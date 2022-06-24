import { getConfig } from 'frontend-platform-vi';
import { getAuthenticatedHttpClient, getAuthenticatedUser } from 'frontend-platform-vi/auth';

const bookmarksBaseUrl = `${getConfig().LMS_BASE_URL}/api/bookmarks/v1/bookmarks/`;

export async function createBookmark(usageId) {
  return getAuthenticatedHttpClient().post(bookmarksBaseUrl, { usage_id: usageId });
}

export async function deleteBookmark(usageId) {
  const { username } = getAuthenticatedUser();
  return getAuthenticatedHttpClient().delete(`${bookmarksBaseUrl}${username},${usageId}/`);
}
