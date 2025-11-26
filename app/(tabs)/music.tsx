
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get('window');

export default function MusicScreen() {
  const [selectedTab, setSelectedTab] = useState<'music' | 'visuals'>('music');

  const releases = [
    {
      title: 'Midnight Dreams',
      type: 'Single',
      year: '2024',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
    },
    {
      title: 'Neon Nights',
      type: 'EP',
      year: '2023',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    },
    {
      title: 'Digital Horizons',
      type: 'Album',
      year: '2023',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
    },
  ];

  const visuals = [
    { title: 'Live Performance', thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400' },
    { title: 'Music Video', thumbnail: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400' },
    { title: 'Behind The Scenes', thumbnail: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400' },
    { title: 'Studio Session', thumbnail: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400' },
  ];

  return (
    <SafeAreaView style={commonStyles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Music & Visuals</Text>
      </View>

      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'music' && styles.tabActive]}
          onPress={() => setSelectedTab('music')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, selectedTab === 'music' && styles.tabTextActive]}>
            Music
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'visuals' && styles.tabActive]}
          onPress={() => setSelectedTab('visuals')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, selectedTab === 'visuals' && styles.tabTextActive]}>
            Visuals
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {selectedTab === 'music' ? (
          <>
            {/* Streaming Platforms */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Listen Now</Text>
              <View style={styles.platformsContainer}>
                {['Spotify', 'Apple Music', 'SoundCloud', 'YouTube'].map((platform, index) => (
                  <React.Fragment key={index}>
                    <Animated.View entering={FadeInDown.delay(index * 50).duration(400)}>
                      <TouchableOpacity style={styles.platformButton} activeOpacity={0.8}>
                        <IconSymbol
                          ios_icon_name="music.note"
                          android_material_icon_name="music-note"
                          size={24}
                          color={colors.primary}
                        />
                        <Text style={styles.platformText}>{platform}</Text>
                      </TouchableOpacity>
                    </Animated.View>
                  </React.Fragment>
                ))}
              </View>
            </View>

            {/* Releases */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Releases</Text>
              {releases.map((release, index) => (
                <React.Fragment key={index}>
                  <Animated.View entering={FadeInDown.delay(index * 100).duration(500)}>
                    <TouchableOpacity style={styles.releaseCard} activeOpacity={0.9}>
                      <Image source={{ uri: release.cover }} style={styles.releaseCover} />
                      <View style={styles.releaseInfo}>
                        <Text style={styles.releaseTitle}>{release.title}</Text>
                        <Text style={styles.releaseSubtitle}>
                          {release.type} • {release.year}
                        </Text>
                      </View>
                      <IconSymbol
                        ios_icon_name="play.circle.fill"
                        android_material_icon_name="play-circle"
                        size={32}
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </Animated.View>
                </React.Fragment>
              ))}
            </View>

            {/* Embedded Player Placeholder */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Featured Track</Text>
              <View style={styles.playerPlaceholder}>
                <IconSymbol
                  ios_icon_name="music.note"
                  android_material_icon_name="music-note"
                  size={48}
                  color={colors.primary}
                />
                <Text style={styles.playerText}>Embedded Player</Text>
                <Text style={styles.playerSubtext}>
                  Connect to Spotify/SoundCloud API for live playback
                </Text>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Visual Gallery */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Visual Gallery</Text>
              <View style={styles.visualsGrid}>
                {visuals.map((visual, index) => (
                  <React.Fragment key={index}>
                    <Animated.View entering={FadeInDown.delay(index * 80).duration(500)}>
                      <TouchableOpacity style={styles.visualCard} activeOpacity={0.9}>
                        <Image source={{ uri: visual.thumbnail }} style={styles.visualImage} />
                        <LinearGradient
                          colors={['transparent', 'rgba(18, 18, 18, 0.9)']}
                          style={styles.visualOverlay}
                        >
                          <Text style={styles.visualTitle}>{visual.title}</Text>
                          <IconSymbol
                            ios_icon_name="play.circle.fill"
                            android_material_icon_name="play-circle"
                            size={40}
                            color={colors.text}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </Animated.View>
                  </React.Fragment>
                ))}
              </View>
            </View>

            {/* Video Player Placeholder */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Latest Video</Text>
              <View style={styles.videoPlaceholder}>
                <IconSymbol
                  ios_icon_name="play.rectangle.fill"
                  android_material_icon_name="play-arrow"
                  size={64}
                  color={colors.primary}
                />
                <Text style={styles.playerText}>Video Player</Text>
                <Text style={styles.playerSubtext}>
                  Embed YouTube or Vimeo videos here
                </Text>
              </View>
            </View>
          </>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 0,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.card,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  tabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
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
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  platformButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  platformText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  releaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  releaseCover: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  releaseInfo: {
    flex: 1,
    marginLeft: 12,
  },
  releaseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  releaseSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  playerPlaceholder: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  playerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
  },
  playerSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  visualsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  visualCard: {
    width: (width - 52) / 2,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  visualImage: {
    width: '100%',
    height: '100%',
  },
  visualOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 12,
  },
  visualTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  videoPlaceholder: {
    backgroundColor: colors.card,
    borderRadius: 16,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  bottomPadding: {
    height: 120,
  },
});
