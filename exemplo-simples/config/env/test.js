module.exports = {
  karma: {
    browsers: ['Chrome'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'src/*.js': 'coverage',
      'test/**/*.html' : ['html2js']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: false,
    singleRun: true
  }
};