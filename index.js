/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AuthenticatedProvider } from './src/hooks/authenticatedContext';

export default function Main() {
    return (
        <AuthenticatedProvider>
            <App />
        </AuthenticatedProvider>                
    );
}

AppRegistry.registerComponent(appName, () => Main);
