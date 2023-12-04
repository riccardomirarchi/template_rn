import TranslationProvider from '@providers/TranslationProvider';
import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { BottomTabsNavigator } from '@src/navigation/MainNavigator';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NetworkProvider from './providers/NetworkProvider';
import store, { persistor } from './state/store';

const App = (): JSX.Element => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <TranslationProvider>
            <NetworkProvider>
              <BottomTabsNavigator />
            </NetworkProvider>
          </TranslationProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
