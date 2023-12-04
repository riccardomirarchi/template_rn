import { addEventListener, fetch } from '@react-native-community/netinfo';
import NetworkError from '@src/navigation/Screens/NetworkError/NetworkError';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';

/* 
  The SCNetworkReachability API used in iOS does not send events to the app in 
  the background, so switching from one Wi-Fi network to another when your App 
  was in background will not send an event and your network state will be out 
  of sync with device state. To be sure you have up to date status when your 
  app is in foreground again, you should re-fetch state each time when App comes
  to foreground -> https://github.com/react-native-netinfo/react-native-netinfo#switching-between-different-wi-fi-does-not-send-events-in-ios
*/

const NetworkProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const subAppState = AppState.addEventListener('change', async (state) => {
      if (Platform.OS === 'ios' && state == 'active') {
        const { isConnected } = await fetch();
        setIsConnected(isConnected);
      }
    });

    const unsubNetState = addEventListener(({ isConnected }) => {
      setIsConnected(isConnected);
    });

    return () => {
      subAppState.remove();
      unsubNetState();
    };
  }, []);

  if (isConnected) return children;

  return <NetworkError />;
};

export default NetworkProvider;
