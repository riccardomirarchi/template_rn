import '@src/translations';
import { PropsWithChildren, useEffect } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { getLocales } from 'react-native-localize';

const TranslationProvider = ({ i18n, children }: PropsWithChildren<WithTranslation>) => {
  useEffect(() => {
    const { languageCode } = getLocales()[0];

    i18n.changeLanguage(languageCode);
  }, []);

  return children;
};

export default withTranslation()(TranslationProvider);
