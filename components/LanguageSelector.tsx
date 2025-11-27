
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/styles/commonStyles';
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    if (lang !== language) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setLanguage(lang);
    }
  };

  return (
    <Animated.View entering={FadeIn.duration(400)} style={styles.container}>
      <View style={styles.languageButtons}>
        <TouchableOpacity
          style={[styles.languageButton, language === 'en' && styles.languageButtonActive]}
          onPress={() => handleLanguageChange('en')}
          activeOpacity={0.7}
        >
          <Text style={[styles.languageText, language === 'en' && styles.languageTextActive]}>
            EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, language === 'fr' && styles.languageButtonActive]}
          onPress={() => handleLanguageChange('fr')}
          activeOpacity={0.7}
        >
          <Text style={[styles.languageText, language === 'fr' && styles.languageTextActive]}>
            FR
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButtons: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 4,
    gap: 4,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  languageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    minWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButtonActive: {
    backgroundColor: colors.primary,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  languageTextActive: {
    color: colors.text,
  },
});
