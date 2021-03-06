export default {
  contact: {
    EMAIL: process.env.REACT_APP_EMAIL || 'codingcoachio@gmail.com',
    SLACK_URL:
      process.env.REACT_APP_SLACK_URL ||
      'https://join.slack.com/t/coding-coach/shared_invite/enQtNDMyMzUzNjAxODQyLTUwYTFkMzZmNGFhMzZjYTQwOWE2YWFjOGJhNzYyOGIxNDM5Zjc1YWQ4NjMwN2U5YzBlNjkwMTI2ZDNiOWQyMzM',
  },
  social: {
    FB_URL: process.env.REACT_APP_FACEBOOK_URL || 'https://www.facebook.com/codingcoachio/',
    INSTA_URL: process.env.REACT_APP_INSTA_URL || 'https://www.instagram.com/',
    TWITTER_URL: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/codingcoach_io',
  },
};
