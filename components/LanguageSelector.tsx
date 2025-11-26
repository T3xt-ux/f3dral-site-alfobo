
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <Animated.View entering={FadeIn.duration(400)} style={styles.container}>
      <View style={styles.languageButtons}>
        <TouchableOpacity
          style={[styles.languageButton, language === 'en' && styles.languageButtonActive]}
          onPress={() => setLanguage('en')}
          activeOpacity={0.7}
        >
          <Text style={[styles.languageText, language === 'en' && styles.languageTextActive]}>
            EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, language === 'fr' && styles.languageButtonActive]}
          onPress={() => setLanguage('fr')}
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
    gap: 8,
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
  },
  languageButtonActive: {
    backgroundColor: colors.primary,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  languageTextActive: {
    color: colors.text,
  },
});
