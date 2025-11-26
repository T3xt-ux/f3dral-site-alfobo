
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import Animated, { FadeInDown } from "react-native-reanimated";

interface MenuItem {
  title: string;
  icon: string;
  route: string;
  description: string;
  color: string;
}

export default function MoreScreen() {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      title: 'About',
      icon: 'person',
      route: '/about',
      description: 'Learn about f3dRaL',
      color: colors.primary,
    },
    {
      title: 'Press Kit',
      icon: 'description',
      route: '/presskit',
      description: 'Download press materials',
      color: colors.secondary,
    },
    {
      title: 'Collaborate',
      icon: 'handshake',
      route: '/collaborate',
      description: 'Work with f3dRaL',
      color: colors.accent,
    },
    {
      title: 'Fan Hub',
      icon: 'favorite',
      route: '/fanhub',
      description: 'Join the community',
      color: colors.primary,
    },
    {
      title: 'News',
      icon: 'newspaper',
      route: '/news',
      description: 'Latest updates',
      color: colors.secondary,
    },
  ];

  const socialLinks = [
    { platform: 'TikTok', handle: '@f3dral', icon: 'music-note', color: colors.accent },
    { platform: 'Instagram', handle: '@f3dtext', icon: 'photo-camera', color: colors.primary },
    { platform: 'Spotify', handle: 'f3dRaL', icon: 'album', color: colors.secondary },
    { platform: 'YouTube', handle: 'f3dRaL', icon: 'play-circle', color: colors.accent },
  ];

  return (
    <SafeAreaView style={commonStyles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Menu Items */}
        <View style={styles.section}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Animated.View entering={FadeInDown.delay(index * 50).duration(400)}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => router.push(item.route as any)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.menuIconContainer, { backgroundColor: item.color + '20' }]}>
                    <IconSymbol
                      ios_icon_name={item.icon}
                      android_material_icon_name={item.icon}
                      size={24}
                      color={item.color}
                    />
                  </View>
                  <View style={styles.menuTextContainer}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuDescription}>{item.description}</Text>
                  </View>
                  <IconSymbol
                    ios_icon_name="chevron.right"
                    android_material_icon_name="chevron-right"
                    size={20}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              </Animated.View>
            </React.Fragment>
          ))}
        </View>

        {/* Social Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect</Text>
          <View style={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <React.Fragment key={index}>
                <Animated.View entering={FadeInDown.delay(300 + index * 50).duration(400)}>
                  <TouchableOpacity style={styles.socialCard} activeOpacity={0.8}>
                    <View style={[styles.socialIconContainer, { backgroundColor: social.color + '20' }]}>
                      <IconSymbol
                        ios_icon_name={social.icon}
                        android_material_icon_name={social.icon}
                        size={28}
                        color={social.color}
                      />
                    </View>
                    <Text style={styles.socialPlatform}>{social.platform}</Text>
                    <Text style={styles.socialHandle}>{social.handle}</Text>
                  </TouchableOpacity>
                </Animated.View>
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Animated.View entering={FadeInDown.delay(500).duration(400)}>
            <View style={styles.contactCard}>
              <Text style={styles.contactText}>
                For business inquiries, collaborations, or press requests:
              </Text>
              <TouchableOpacity style={styles.emailButton}>
                <IconSymbol
                  ios_icon_name="envelope"
                  android_material_icon_name="email"
                  size={20}
                  color={colors.text}
                />
                <Text style={styles.emailText}>contact@f3dral.com</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>f3dRaL © 2024</Text>
          <Text style={styles.footerSubtext}>All rights reserved</Text>
        </View>

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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  menuIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  socialCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  socialIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  socialPlatform: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  socialHandle: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  contactCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  contactText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  bottomPadding: {
    height: 120,
  },
});
