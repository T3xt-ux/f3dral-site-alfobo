
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TabLayout() {
  const { t } = useLanguage();

  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'home',
      label: t('common.home'),
    },
    {
      name: 'music',
      route: '/(tabs)/music',
      icon: 'music-note',
      label: t('common.music'),
    },
    {
      name: 'store',
      route: '/(tabs)/store',
      icon: 'shopping-bag',
      label: t('common.store'),
    },
    {
      name: 'more',
      route: '/(tabs)/more',
      icon: 'menu',
      label: t('common.more'),
    },
  ];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="music" name="music" />
        <Stack.Screen key="store" name="store" />
        <Stack.Screen key="more" name="more" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
