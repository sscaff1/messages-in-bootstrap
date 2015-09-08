Package.describe({
  name: 'sscaff1:messages',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A simple package to display success and error messages to the user',
  // URL to the Git repository containing the source code for this package.
 // git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('mongo');
  api.use([
    'twbs:bootstrap@3.3.5',
    'templating'
  ], 'client');

  api.addFiles([
    'message_list.js',
    'message_list.html',
  ], 'client');

  if (api.export) {
    api.export('Messages');
  }
});
