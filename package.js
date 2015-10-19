Package.describe({
  name: 'sscaff1:messages',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'A simple package to display success and error messages to the user',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sscaff1/messages-in-bootstrap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'twbs:bootstrap',
    'minimongo',
    'mongo-livedata',
    'templating'
  ], 'client');

  api.addFiles([
    'messages.js',
    'message_list.css',
    'message_list.html',
    'message_list.js',
  ], 'client');

  if (api.export) {
    api.export('Messages');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sscaff1:messages');
  api.addFiles('messages_test.js');
});
