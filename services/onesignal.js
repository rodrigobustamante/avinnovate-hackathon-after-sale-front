import OneSignal from 'react-onesignal';

const serviceWorkerPath = 'onesignal/';

/**
 * @name loadOneSignal
 * @description Function to init OneSignal service.
 * @param {string} appId - Id to init OneSignal Service
 * @param {string} userId - userId
 * @param {func} t - function to translate
 * @return {void}
 */
const loadOneSignal = async (userId) => {
  await OneSignal.init({
    appId: 'da278e23-9d1d-4ce2-855a-48887866b4c0',
    allowLocalhostAsSecureOrigin: true,
    path: serviceWorkerPath,
    serviceWorkerParam: { scope: `/${serviceWorkerPath}` },
    serviceWorkerPath: 'OneSignalSDKWorker.js',
    serviceWorkerUpdaterPath: 'OneSignalSDKUpdaterWorker.js',
    promptOptions: {
      actionMessage: 'We want to inform you about an exciting opportunity to stay informed about all our events and activities. To receive notifications and not miss any updates, simply click on the "Accept" button below!',
      acceptButton: 'Accept',
      acceptButtonText: 'Accept',
      cancelButtonText: 'Cancel',
    },
    welcomeNotification: {
      disable: true
    }
  });

  OneSignal.showHttpPrompt();
  OneSignal.setExternalUserId(userId);
};

export { loadOneSignal };
