
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const quickLinks = [
    { title: 'Latest Release', icon: 'album', route: '/(tabs)/music', color: colors.primary },
    { title: 'Merch Store', icon: 'shopping-bag', route: '/(tabs)/store', color: colors.accent },
    { title: 'Press Kit', icon: 'description', route: '/presskit', color: colors.secondary },
    { title: 'Collaborate', icon: 'handshake', route: '/collaborate', color: colors.primary },
  ];

  const socialLinks = [
    { platform: 'TikTok', handle: '@f3dral', icon: 'music-note' },
    { platform: 'Instagram', handle: '@f3dtext', icon: 'photo-camera' },
    { platform: 'Spotify', handle: 'f3dRaL', icon: 'album' },
  ];

  return (
    <View style={commonStyles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Animated.View entering={FadeIn.duration(800)} style={styles.heroSection}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800' }}
            style={styles.heroBackground}
            imageStyle={styles.heroImage}
          >
            <LinearGradient
              colors={['rgba(18, 18, 18, 0.3)', 'rgba(18, 18, 18, 0.95)']}
              style={styles.heroGradient}
            >
              <View style={styles.heroContent}>
                <Text style={styles.artistName}>f3dRaL</Text>
                <Text style={styles.tagline}>Artist • Producer • Visionary</Text>
                <View style={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                    <React.Fragment key={index}>
                      <View style={styles.socialIcon}>
                        <IconSymbol
                          ios_icon_name={social.icon}
                          android_material_icon_name={social.icon}
                          size={24}
                          color={colors.text}
                        />
                      </View>
                    </React.Fragment>
                  ))}
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>

        {/* Quick Links */}
        <View style={styles.quickLinksSection}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickLinksGrid}>
            {quickLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Animated.View entering={FadeInDown.delay(index * 100).duration(600)}>
                  <TouchableOpacity
                    style={[styles.quickLinkCard, { borderColor: link.color }]}
                    onPress={() => router.push(link.route as any)}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={[colors.card, colors.highlight]}
                      style={styles.quickLinkGradient}
                    >
                      <IconSymbol
                        ios_icon_name={link.icon}
                        android_material_icon_name={link.icon}
                        size={32}
                        color={link.color}
                      />
                      <Text style={styles.quickLinkText}>{link.title}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </Animated.View>
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Latest Updates */}
        <View style={styles.updatesSection}>
          <Text style={styles.sectionTitle}>Latest Updates</Text>
          <Animated.View entering={FadeInDown.delay(400).duration(600)}>
            <TouchableOpacity 
              style={styles.updateCard}
              onPress={() => router.push('/news')}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600' }}
                style={styles.updateImage}
                imageStyle={styles.updateImageStyle}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(18, 18, 18, 0.95)']}
                  style={styles.updateGradient}
                >
                  <View style={styles.updateContent}>
                    <Text style={styles.updateTitle}>New Single Out Now</Text>
                    <Text style={styles.updateDescription}>
                      Check out the latest release on all streaming platforms
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* About Preview */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About f3dRaL</Text>
          <Animated.View entering={FadeInDown.delay(500).duration(600)}>
            <View style={styles.aboutCard}>
              <Text style={styles.aboutText}>
                Pushing boundaries in music and visual art. Creating immersive experiences 
                that blend sound, technology, and emotion.
              </Text>
              <TouchableOpacity
                style={styles.learnMoreButton}
                onPress={() => router.push('/about')}
              >
                <Text style={styles.learnMoreText}>Learn More</Text>
                <IconSymbol
                  ios_icon_name="arrow.right"
                  android_material_icon_name="arrow-forward"
                  size={16}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>

        {/* Bottom Padding for Tab Bar */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 48,
  },
  heroSection: {
    width: '100%',
    height: height * 0.5,
    marginBottom: 24,
  },
  heroBackground: {
    width: '100%',
    height: '100%',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroContent: {
    padding: 24,
    alignItems: 'center',
  },
  artistName: {
    fontSize: 48,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 2,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
    letterSpacing: 1,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  quickLinksSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickLinkCard: {
    width: (width - 52) / 2,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
  },
  quickLinkGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  quickLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  updatesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  updateCard: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  updateImage: {
    width: '100%',
    height: '100%',
  },
  updateImageStyle: {
    resizeMode: 'cover',
  },
  updateGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  updateContent: {
    padding: 20,
  },
  updateTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  updateDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  aboutSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  aboutCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  aboutText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  learnMoreText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  bottomPadding: {
    height: 120,
  },
});
