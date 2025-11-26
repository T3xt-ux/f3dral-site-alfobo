
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { useLanguage } from "@/contexts/LanguageContext";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function FanHubScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const benefits = [
    { key: 'earlyAccess', icon: 'star' },
    { key: 'exclusiveContent', icon: 'video-library' },
    { key: 'specialMerch', icon: 'local-offer' },
    { key: 'directUpdates', icon: 'notifications' },
  ];

  const freebies = [
    { title: t('fanhub.downloadWallpapers'), icon: 'wallpaper', color: colors.primary },
    { title: t('fanhub.downloadStems'), icon: 'music-note', color: colors.secondary },
  ];

  const handleSubscribe = () => {
    console.log('Email subscription:', email);
    // Here you would typically send this to your backend or email service
  };

  return (
    <SafeAreaView style={commonStyles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <IconSymbol
            ios_icon_name="chevron.left"
            android_material_icon_name="arrow-back"
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('fanhub.title')}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.headerSection}>
          <Text style={styles.title}>{t('fanhub.joinCommunity')}</Text>
          <Text style={styles.description}>{t('fanhub.description')}</Text>
        </Animated.View>

        {/* Email Signup */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('fanhub.emailSignup')}</Text>
          <View style={styles.signupCard}>
            <TextInput
              style={styles.emailInput}
              placeholder={t('fanhub.emailPlaceholder')}
              placeholderTextColor={colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe} activeOpacity={0.8}>
              <Text style={styles.subscribeButtonText}>{t('fanhub.subscribe')}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Benefits */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('fanhub.benefits')}</Text>
          <View style={styles.benefitsContainer}>
            {benefits.map((benefit, index) => (
              <React.Fragment key={index}>
                <View style={styles.benefitCard}>
                  <View style={styles.benefitIconContainer}>
                    <IconSymbol
                      ios_icon_name={benefit.icon}
                      android_material_icon_name={benefit.icon}
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.benefitText}>
                    {t(`fanhub.benefitsList.${benefit.key}`)}
                  </Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Digital Freebies */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('fanhub.freebies')}</Text>
          <Text style={styles.freebiesDesc}>{t('fanhub.freebiesDesc')}</Text>
          <View style={styles.freebiesContainer}>
            {freebies.map((freebie, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity style={styles.freebieCard} activeOpacity={0.8}>
                  <IconSymbol
                    ios_icon_name={freebie.icon}
                    android_material_icon_name={freebie.icon}
                    size={32}
                    color={freebie.color}
                  />
                  <Text style={styles.freebieTitle}>{freebie.title}</Text>
                  <IconSymbol
                    ios_icon_name="arrow.down.circle"
                    android_material_icon_name="download"
                    size={24}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 0,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  headerSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  signupCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  emailInput: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.highlight,
    marginBottom: 16,
  },
  subscribeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  subscribeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  benefitsContainer: {
    gap: 12,
  },
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  benefitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  benefitText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  freebiesDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  freebiesContainer: {
    gap: 12,
  },
  freebieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  freebieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  bottomPadding: {
    height: 40,
  },
});
