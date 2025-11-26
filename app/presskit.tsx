
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function PresskitScreen() {
  const router = useRouter();

  const presskitSections = [
    { title: 'Short Bio', icon: 'description', type: 'text' },
    { title: 'Long Bio', icon: 'article', type: 'text' },
    { title: 'Press Photos', icon: 'photo-library', type: 'images' },
    { title: 'Logo Files', icon: 'image', type: 'files' },
    { title: 'Color Palette', icon: 'palette', type: 'colors' },
    { title: 'Press Quotes', icon: 'format-quote', type: 'text' },
  ];

  const pressPhotos = [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
  ];

  const colorPalette = [
    { name: 'Primary', color: colors.primary },
    { name: 'Secondary', color: colors.secondary },
    { name: 'Accent', color: colors.accent },
    { name: 'Background', color: colors.background },
  ];

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
        <Text style={styles.headerTitle}>Press Kit</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Download All Button */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)}>
          <TouchableOpacity style={styles.downloadAllButton} activeOpacity={0.8}>
            <IconSymbol
              ios_icon_name="arrow.down.circle.fill"
              android_material_icon_name="download"
              size={24}
              color={colors.text}
            />
            <Text style={styles.downloadAllText}>Download Complete Press Kit</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Bio Section */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Short Bio</Text>
          <View style={styles.contentCard}>
            <Text style={styles.bioText}>
              f3dRaL is a boundary-pushing artist and producer creating immersive sonic 
              experiences that blend cutting-edge production with raw emotion. Known for 
              genre-defying tracks and captivating visual aesthetics.
            </Text>
            <TouchableOpacity style={styles.copyButton}>
              <IconSymbol
                ios_icon_name="doc.on.doc"
                android_material_icon_name="content-copy"
                size={16}
                color={colors.primary}
              />
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Press Photos */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Press Photos</Text>
          <View style={styles.photosGrid}>
            {pressPhotos.map((photo, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity style={styles.photoCard} activeOpacity={0.9}>
                  <Image source={{ uri: photo }} style={styles.photoImage} />
                  <View style={styles.photoOverlay}>
                    <IconSymbol
                      ios_icon_name="arrow.down.circle"
                      android_material_icon_name="download"
                      size={32}
                      color={colors.text}
                    />
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Color Palette */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Brand Colors</Text>
          <View style={styles.colorsContainer}>
            {colorPalette.map((item, index) => (
              <React.Fragment key={index}>
                <View style={styles.colorCard}>
                  <View style={[styles.colorSwatch, { backgroundColor: item.color }]} />
                  <Text style={styles.colorName}>{item.name}</Text>
                  <Text style={styles.colorHex}>{item.color}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Press Quotes */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Press Quotes</Text>
          <View style={styles.quoteCard}>
            <IconSymbol
              ios_icon_name="quote.opening"
              android_material_icon_name="format-quote"
              size={32}
              color={colors.primary}
            />
            <Text style={styles.quoteText}>
              &quot;f3dRaL is redefining the boundaries of modern music production with 
              an innovative approach that captivates audiences worldwide.&quot;
            </Text>
            <Text style={styles.quoteSource}>- Music Magazine</Text>
          </View>
        </Animated.View>

        {/* Contact Info */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Media Contact</Text>
          <View style={styles.contactCard}>
            <View style={styles.contactRow}>
              <IconSymbol
                ios_icon_name="envelope"
                android_material_icon_name="email"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.contactText}>press@f3dral.com</Text>
            </View>
            <View style={styles.contactRow}>
              <IconSymbol
                ios_icon_name="link"
                android_material_icon_name="link"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.contactText}>www.f3dral.com</Text>
            </View>
          </View>
        </Animated.View>

        {/* Social Links */}
        <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Social Media</Text>
          <View style={styles.socialLinksCard}>
            <Text style={styles.socialLink}>TikTok: @f3dral</Text>
            <Text style={styles.socialLink}>Instagram: @f3dtext</Text>
            <Text style={styles.socialLink}>Spotify: f3dRaL</Text>
            <Text style={styles.socialLink}>YouTube: f3dRaL</Text>
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
  downloadAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 32,
  },
  downloadAllText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
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
  contentCard: {
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
    marginBottom: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoCard: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  photoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  colorName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  colorHex: {
    fontSize: 12,
    color: colors.textSecondary,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  quoteCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  quoteText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    fontStyle: 'italic',
    marginVertical: 16,
  },
  quoteSource: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  contactCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    fontSize: 15,
    color: colors.text,
  },
  socialLinksCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  socialLink: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  bottomPadding: {
    height: 40,
  },
});
