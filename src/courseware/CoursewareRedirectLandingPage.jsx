import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { getConfig } from 'frontend-platform-vi';
import { FormattedMessage } from 'frontend-platform-vi/i18n';
import { PageRoute } from 'frontend-platform-vi/react';

import PageLoading from '../generic/PageLoading';

export default () => {
  const { path } = useRouteMatch();
  return (
    <div className="flex-grow-1">
      <PageLoading srMessage={(
        <FormattedMessage
          id="learn.redirect.interstitial.message"
          description="The screen-reader message when a page is about to redirect"
          defaultMessage="Redirecting..."
        />
      )}
      />

      <Switch>
        <PageRoute
          path={`${path}/survey/:courseId`}
          render={({ match }) => {
            global.location.assign(`${getConfig().LMS_BASE_URL}/courses/${match.params.courseId}/survey`);
          }}
        />
        <PageRoute
          path={`${path}/dashboard`}
          render={({ location }) => {
            global.location.assign(`${getConfig().LMS_BASE_URL}/dashboard${location.search}`);
          }}
        />
      </Switch>
    </div>
  );
};
