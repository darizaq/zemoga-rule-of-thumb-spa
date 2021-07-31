module.exports = {
  src_folders: ['e2e-out-tsc/tests'],
  live_output: true,
  output_folder: 'e2e-results',
  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:4000/',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless', '--no-sandbox']
        },
        loggingPrefs: {
          driver: 'INFO',
          server: 'OFF',
          browser: 'INFO'
        }
      }
    }
  }
};
