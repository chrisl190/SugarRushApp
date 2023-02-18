import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthenticatedProvider} from './src/hooks/authenticatedContext';
import {Provider} from 'react-redux';
import {store} from './src/state';

export default function Main() {
  if (!store) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthenticatedProvider>
        <App />
      </AuthenticatedProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
