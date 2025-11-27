
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { t } from "@/utils/i18n";

export default function AboutScreen() {
  const router = useRouter();

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
        <Text style={styles.headerTitle}>{t('about.title')}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
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
          <Text style={styles.sectionTitle}>{t('about.originTitle')}</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              {t('about.origin')}
            </Text>
          </View>
        </Animated.View>

        {/* Creative Journey */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.journeyTitle')}</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              {t('about.journey')}
            </Text>
          </View>
        </Animated.View>

        {/* Vision & Innovation */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.visionTitle')}</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              {t('about.vision')}
            </Text>
          </View>
        </Animated.View>

        {/* Creative Pillars */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.pillarsTitle')}</Text>
          <View style={styles.pillarsContainer}>
            {[
              { icon: 'music.note', androidIcon: 'music-note', label: t('about.pillars.production') },
              { icon: 'network', androidIcon: 'share', label: t('about.pillars.networking') },
              { icon: 'calendar', androidIcon: 'event', label: t('about.pillars.events') },
              { icon: 'paintbrush', androidIcon: 'palette', label: t('about.pillars.direction') },
            ].map((pillar, index) => (
              <React.Fragment key={index}>
                <View style={styles.pillarCard}>
                  <IconSymbol
                    ios_icon_name={pillar.icon}
                    android_material_icon_name={pillar.androidIcon}
                    size={32}
                    color={colors.primary}
                  />
                  <Text style={styles.pillarText}>{pillar.label}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Artistic Themes */}
        <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.themesTitle')}</Text>
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
                <View style={styles.themeTag}>
                  <Text style={styles.themeText}>{theme}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Social Feeds */}
        <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>{t('common.follow')}</Text>
          
          <TouchableOpacity style={styles.socialFeedCard} activeOpacity={0.9}>
            <View style={styles.socialFeedHeader}>
              <IconSymbol
                ios_icon_name="music.note"
                android_material_icon_name="music-note"
                size={24}
                color={colors.accent}
              />
              <View style={styles.socialFeedInfo}>
                <Text style={styles.socialFeedPlatform}>TikTok</Text>
                <Text style={styles.socialFeedHandle}>@f3dral</Text>
              </View>
              <IconSymbol
                ios_icon_name="arrow.up.right"
                android_material_icon_name="open-in-new"
                size={20}
                color={colors.textSecondary}
              />
            </View>
            <Text style={styles.socialFeedDescription}>
              {t('about.socialFeeds.tiktokDesc')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialFeedCard} activeOpacity={0.9}>
            <View style={styles.socialFeedHeader}>
              <IconSymbol
                ios_icon_name="photo"
                android_material_icon_name="photo-camera"
                size={24}
                color={colors.primary}
              />
              <View style={styles.socialFeedInfo}>
                <Text style={styles.socialFeedPlatform}>Instagram</Text>
                <Text style={styles.socialFeedHandle}>@f3dtext</Text>
              </View>
              <IconSymbol
                ios_icon_name="arrow.up.right"
                android_material_icon_name="open-in-new"
                size={20}
                color={colors.textSecondary}
              />
            </View>
            <Text style={styles.socialFeedDescription}>
              {t('about.socialFeeds.instagramDesc')}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Call to Action */}
        <Animated.View entering={FadeInDown.delay(900).duration(600)} style={styles.section}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>{t('about.ctaTitle')}</Text>
            <Text style={styles.ctaText}>{t('about.ctaText')}</Text>
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
    height: 100,
  },
  nameContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  artistName: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 1,
    marginBottom: 4,
    textAlign: 'center',
  },
  artistAka: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  artistTagline: {
    fontSize: 16,
    color: colors.textSecondary,
    letterSpacing: 1,
    marginBottom: 12,
  },
  locationBadge: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  bioCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  bioText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  pillarsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  pillarCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  pillarText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
    textAlign: 'center',
  },
  themesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  themeTag: {
    backgroundColor: colors.primary + '30',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  themeText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  socialFeedCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  socialFeedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  socialFeedInfo: {
    flex: 1,
    marginLeft: 12,
  },
  socialFeedPlatform: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  socialFeedHandle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  socialFeedDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  ctaCard: {
    backgroundColor: colors.primary + '20',
    borderRadius: 16,
    padding: 24,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomPadding: {
    height: 40,
  },
});
