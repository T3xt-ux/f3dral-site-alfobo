
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, RefreshControl, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeIn, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface PillarCardProps {
  icon: string;
  androidIcon: string;
  label: string;
  delay: number;
}

function PillarCard({ icon, androidIcon, label, delay }: PillarCardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(delay).duration(600)}
      style={[styles.pillarCard, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
    >
      <View style={styles.pillarIconContainer}>
        <IconSymbol
          ios_icon_name={icon}
          android_material_icon_name={androidIcon}
          size={32}
          color={colors.primary}
        />
      </View>
      <Text style={styles.pillarText}>{label}</Text>
    </AnimatedTouchable>
  );
}

interface SocialCardProps {
  platform: string;
  handle: string;
  description: string;
  icon: string;
  androidIcon: string;
  iconColor: string;
  url: string;
  delay: number;
}

function SocialCard({ platform, handle, description, icon, androidIcon, iconColor, url, delay }: SocialCardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const handlePressIn = () => {
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(delay).duration(600)}
      style={[styles.socialFeedCard, animatedStyle]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
    >
      <View style={styles.socialFeedHeader}>
        <View style={styles.socialIconWrapper}>
          <IconSymbol
            ios_icon_name={icon}
            android_material_icon_name={androidIcon}
            size={24}
            color={iconColor}
          />
        </View>
        <View style={styles.socialFeedInfo}>
          <Text style={styles.socialFeedPlatform}>{platform}</Text>
          <Text style={styles.socialFeedHandle}>{handle}</Text>
        </View>
        <IconSymbol
          ios_icon_name="arrow.up.right"
          android_material_icon_name="open-in-new"
          size={20}
          color={colors.textSecondary}
        />
      </View>
      <Text style={styles.socialFeedDescription}>{description}</Text>
    </AnimatedTouchable>
  );
}

export default function AboutScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <SafeAreaView style={commonStyles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <IconSymbol
            ios_icon_name="chevron.left"
            android_material_icon_name="arrow-back"
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('about.title')}</Text>
        <LanguageSelector />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
      >
        {/* Hero Image */}
        <Animated.View entering={FadeIn.duration(600)} style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['transparent', colors.background]}
            style={styles.heroGradient}
          />
        </Animated.View>

        {/* Artist Name */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.nameContainer}>
          <Text style={styles.artistName}>f3dRaL Spandexx TeXTfuLL</Text>
          <Text style={styles.artistAka}>a.k.a. f3d</Text>
          <Text style={styles.artistTagline}>{t('about.tagline')}</Text>
          <View style={styles.locationBadge}>
            <Text style={styles.locationText}>📍 {t('about.location')}</Text>
          </View>
        </Animated.View>

        {/* Origin Story */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="sparkles"
                android_material_icon_name="auto-awesome"
                size={20}
                color={colors.primary}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('about.originTitle')}</Text>
          </View>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{t('about.origin')}</Text>
          </View>
        </Animated.View>

        {/* Creative Journey */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="map"
                android_material_icon_name="explore"
                size={20}
                color={colors.secondary}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('about.journeyTitle')}</Text>
          </View>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{t('about.journey')}</Text>
          </View>
        </Animated.View>

        {/* Vision & Innovation */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="eye"
                android_material_icon_name="visibility"
                size={20}
                color={colors.accent}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('about.visionTitle')}</Text>
          </View>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{t('about.vision')}</Text>
          </View>
        </Animated.View>

        {/* Creative Pillars */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="square.grid.2x2"
                android_material_icon_name="grid-view"
                size={20}
                color={colors.primary}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('about.pillarsTitle')}</Text>
          </View>
          <View style={styles.pillarsContainer}>
            <PillarCard
              icon="music.note"
              androidIcon="music-note"
              label={t('about.pillars.production')}
              delay={650}
            />
            <PillarCard
              icon="network"
              androidIcon="share"
              label={t('about.pillars.networking')}
              delay={700}
            />
            <PillarCard
              icon="calendar"
              androidIcon="event"
              label={t('about.pillars.events')}
              delay={750}
            />
            <PillarCard
              icon="paintbrush"
              androidIcon="palette"
              label={t('about.pillars.direction')}
              delay={800}
            />
          </View>
        </Animated.View>

        {/* Artistic Themes */}
        <Animated.View entering={FadeInDown.delay(850).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="star.fill"
                android_material_icon_name="star"
                size={20}
                color={colors.accent}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('about.themesTitle')}</Text>
          </View>
          <View style={styles.themesContainer}>
            {[
              t('about.themes.aestheticVisuals'),
              t('about.themes.avantGarde'),
              t('about.themes.augmentedReality'),
              t('about.themes.virtualReality'),
              t('about.themes.trendsetter'),
              t('about.themes.infiniteCreativity')
            ].map((theme, index) => (
              <React.Fragment key={index}>
                <Animated.View
                  entering={FadeInDown.delay(900 + index * 50).duration(400)}
                  style={styles.themeTag}
                >
                  <Text style={styles.themeText}>{theme}</Text>
                </Animated.View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Social Feeds */}
        <Animated.View entering={FadeInDown.delay(1200).duration(600)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconWrapper}>
              <IconSymbol
                ios_icon_name="person.2"
                android_material_icon_name="people"
                size={20}
                color={colors.secondary}
              />
            </View>
            <Text style={styles.sectionTitle}>{t('common.follow')}</Text>
          </View>
          
          <SocialCard
            platform="TikTok"
            handle="@f3dral"
            description={t('about.socialFeeds.tiktokDesc')}
            icon="music.note"
            androidIcon="music-note"
            iconColor={colors.accent}
            url="https://www.tiktok.com/@f3dral"
            delay={1250}
          />

          <SocialCard
            platform="Instagram"
            handle="@f3dtext"
            description={t('about.socialFeeds.instagramDesc')}
            icon="photo"
            androidIcon="photo-camera"
            iconColor={colors.primary}
            url="https://www.instagram.com/f3dtext"
            delay={1300}
          />
        </Animated.View>

        {/* Call to Action */}
        <Animated.View entering={FadeInDown.delay(1350).duration(600)} style={styles.section}>
          <LinearGradient
            colors={[colors.primary + '30', colors.secondary + '30']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.ctaCard}
          >
            <View style={styles.ctaIconContainer}>
              <IconSymbol
                ios_icon_name="location.fill"
                android_material_icon_name="location-on"
                size={32}
                color={colors.text}
              />
            </View>
            <Text style={styles.ctaTitle}>{t('about.ctaTitle')}</Text>
            <Text style={styles.ctaText}>{t('about.ctaText')}</Text>
          </LinearGradient>
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
    borderBottomWidth: 1,
    borderBottomColor: colors.highlight,
  },
  backButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: colors.card,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  nameContainer: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  artistName: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 1,
    marginBottom: 6,
    textAlign: 'center',
  },
  artistAka: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 12,
  },
  artistTagline: {
    fontSize: 15,
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 16,
    textAlign: 'center',
  },
  locationBadge: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.5,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.5,
  },
  bioCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.highlight,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
    elevation: 4,
  },
  bioText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  pillarsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  pillarCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
    elevation: 4,
  },
  pillarIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  pillarText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  themesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  themeTag: {
    backgroundColor: colors.primary + '25',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  themeText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.3,
  },
  socialFeedCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
    elevation: 4,
  },
  socialFeedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  socialIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialFeedInfo: {
    flex: 1,
    marginLeft: 12,
  },
  socialFeedPlatform: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  socialFeedHandle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  socialFeedDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  ctaCard: {
    borderRadius: 24,
    padding: 32,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    boxShadow: '0px 6px 20px rgba(187, 134, 252, 0.3)',
    elevation: 6,
  },
  ctaIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary + '40',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  ctaText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  bottomPadding: {
    height: 100,
  },
});
