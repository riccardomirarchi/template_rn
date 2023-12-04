import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text } from 'react-native';
import Badge from '@assets/icons/badge.svg';
import colors from '@styles/colors.scss';
import styles from './ScssTest.scss';

const ScssTest = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.container_text, styles.container_text__green]}>{t('common:test')}</Text>
      <Badge width={100} height={100} color={colors['color-yellow-pale']} />
    </SafeAreaView>
  );
};

export default ScssTest;
