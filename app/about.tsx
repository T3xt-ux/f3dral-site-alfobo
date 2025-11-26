
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

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
        <Text style={styles.headerTitle}>About</Text>
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
            source={{ uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['transparent', colors.background]}
            style={styles.heroGradient}
          />
        </Animated.View>

        {/* Artist Name */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.nameContainer}>
          <Text style={styles.artistName}>f3dRaL</Text>
          <Text style={styles.artistTagline}>Artist • Producer • Visionary</Text>
        </Animated.View>

        {/* Short Bio */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              f3dRaL is a boundary-pushing artist and producer creating immersive sonic 
              experiences that blend cutting-edge production with raw emotion. Known for 
              genre-defying tracks and captivating visual aesthetics.
            </Text>
          </View>
        </Animated.View>

        {/* Long Bio */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>The Story</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              Emerging from the underground music scene, f3dRaL has carved out a unique 
              space where experimental sounds meet mainstream appeal. With a background 
              in both music production and visual arts, every release is a carefully 
              crafted multimedia experience.
              {'\n\n'}
              Drawing inspiration from diverse genres including electronic, hip-hop, and 
              ambient music, f3dRaL&apos;s sound is constantly evolving while maintaining a 
              distinctive sonic signature. The artist&apos;s work has been featured across 
              major streaming platforms and has garnered attention from both critics and 
              fans worldwide.
              {'\n\n'}
              Beyond music, f3dRaL is committed to pushing creative boundaries through 
              collaborations with visual artists, fashion designers, and fellow musicians, 
              creating a holistic artistic vision that extends far beyond the studio.
            </Text>
          </View>
        </Animated.View>

        {/* Key Themes */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Artistic Themes</Text>
          <View style={styles.themesContainer}>
            {['Innovation', 'Emotion', 'Technology', 'Authenticity'].map((theme, index) => (
              <React.Fragment key={index}>
                <View style={styles.themeTag}>
                  <Text style={styles.themeText}>{theme}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Social Feeds */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Follow</Text>
          
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
              Latest clips, behind-the-scenes, and exclusive content
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
              Visual art, photography, and creative projects
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Stats */}
        <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>50K+</Text>
              <Text style={styles.statLabel}>Monthly Listeners</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100K+</Text>
              <Text style={styles.statLabel}>Social Followers</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>25+</Text>
              <Text style={styles.statLabel}>Releases</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>10+</Text>
              <Text style={styles.statLabel}>Collaborations</Text>
            </View>
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
    fontSize: 40,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 2,
    marginBottom: 8,
  },
  artistTagline: {
    fontSize: 16,
    color: colors.textSecondary,
    letterSpacing: 1,
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
  themesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  themeTag: {
    backgroundColor: colors.primary + '30',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  themeText: {
    fontSize: 14,
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottomPadding: {
    height: 40,
  },
});
