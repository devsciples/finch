package host.exp.exponent;


import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

import expo.core.interfaces.Package;
import expo.loaders.provider.interfaces.AppLoaderPackagesProviderInterface;
import expo.modules.ads.admob.AdMobPackage;
import expo.modules.analytics.segment.SegmentPackage;
import expo.modules.appauth.AppAuthPackage;
import expo.modules.backgroundfetch.BackgroundFetchPackage;
import expo.modules.barcodescanner.BarCodeScannerPackage;
import expo.modules.camera.CameraPackage;
import expo.modules.constants.ConstantsPackage;
import expo.modules.contacts.ContactsPackage;
import expo.modules.facedetector.FaceDetectorPackage;
import expo.modules.filesystem.FileSystemPackage;
import expo.modules.font.FontLoaderPackage;
import expo.modules.gl.GLPackage;
import expo.modules.google.signin.GoogleSignInPackage;
import expo.modules.localauthentication.LocalAuthenticationPackage;
import expo.modules.localization.LocalizationPackage;
import expo.modules.location.LocationPackage;
import expo.modules.medialibrary.MediaLibraryPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.print.PrintPackage;
import expo.modules.sensors.SensorsPackage;
import expo.modules.sms.SMSPackage;
import expo.modules.taskManager.TaskManagerPackage;
import expolib_v1.okhttp3.OkHttpClient;

// for expo firebase
import expo.modules.firebase.app.FirebaseAppPackage; // This should be here for all Expo Firebase features.
import expo.modules.firebase.firestore.FirebaseFirestorePackage;

// Needed for `react-native link`
// import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
// optional packages - add/remove as appropriate
/*
import io.invertase.firebase.admob.RNFirebaseAdMobPackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.functions.RNFirebaseFunctionsPackage;
import io.invertase.firebase.instanceid.RNFirebaseInstanceIdPackage;
import io.invertase.firebase.invites.RNFirebaseInvitesPackage;
import io.invertase.firebase.links.RNFirebaseLinksPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.perf.RNFirebasePerformancePackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage;
*/

import com.oblador.vectoricons.VectorIconsPackage;
import expo.adapters.react.ModuleRegistryAdapter;

public class MainApplication extends ExpoApplication implements AppLoaderPackagesProviderInterface<ReactPackage> {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        // Add your own packages here!
        // TODO: add native modules!

        // Needed for `react-native link`
        // new MainReactPackage(),
            new RNFirebasePackage(),
            // add/remove these packages as appropriate
            /*
            new RNFirebaseAdMobPackage(),
            new RNFirebaseAnalyticsPackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseRemoteConfigPackage(),
            new RNFirebaseCrashlyticsPackage(),
            new RNFirebaseDatabasePackage(),
            new RNFirebaseFirestorePackage(),
            new RNFirebaseFunctionsPackage(),
            new RNFirebaseInstanceIdPackage(),
            new RNFirebaseInvitesPackage(),
            new RNFirebaseLinksPackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseNotificationsPackage(),
            new RNFirebasePerformancePackage(),
            new RNFirebaseStoragePackage(),
            */
        
            new VectorIconsPackage(),
            new ModuleRegistryAdapter()
    );
  }

  public List<Package> getExpoPackages() {
    return Arrays.<Package>asList(
        new CameraPackage(),
        new ConstantsPackage(),
        new SensorsPackage(),
        new FileSystemPackage(),
        new FaceDetectorPackage(),
        new GLPackage(),
        new GoogleSignInPackage(),
        new PermissionsPackage(),
        new SMSPackage(),
        new PrintPackage(),
        new ConstantsPackage(),
        new MediaLibraryPackage(),
        new SegmentPackage(),
        new FontLoaderPackage(),
        new LocationPackage(),
        new ContactsPackage(),
        new BarCodeScannerPackage(),
        new AdMobPackage(),
        new LocalAuthenticationPackage(),
        new LocalizationPackage(),
        new AppAuthPackage(),
        new TaskManagerPackage(),
        new BackgroundFetchPackage(),
        // firebase stuff
        new FirebaseAppPackage(), // This should be here for all Expo Firebase features.
        new FirebaseFirestorePackage() // Include this.
    );
  }

  @Override
  public String gcmSenderId() {
    return getString(R.string.gcm_defaultSenderId);
  }

  @Override
  public boolean shouldUseInternetKernel() {
    return BuildVariantConstants.USE_INTERNET_KERNEL;
  }

  public static OkHttpClient.Builder okHttpClientBuilder(OkHttpClient.Builder builder) {
    // Customize/override OkHttp client here
    return builder;
  }
}
