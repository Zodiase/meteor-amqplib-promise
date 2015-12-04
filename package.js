var libVersion = '0.4.0';

Package.describe({
  name: 'zodiase:amqplib-promise',
  version: libVersion,
  // Brief, one-line summary of the package.
  summary: 'Wrapped amqplib promise API.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-amqplib-promise.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('amqplib.js', 'server');
  api.export('amqplib', 'server');
});

Npm.depends({
  'amqplib': libVersion
});
