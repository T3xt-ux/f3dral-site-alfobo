
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function FanHubScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const perks = [
    { icon: 'music-note', title: 'Early Access', description: 'Be the first to hear new releases' },
    { icon: 'local-offer', title: 'Exclusive Merch', description: 'Limited edition drops for subscribers' },
    { icon: 'event', title: 'Show Alerts', description: 'Never miss a live performance' },
    { icon: 'card-giftcard', title: 'Free Downloads', description: 'Exclusive wallpapers and stems' },
  ];

  const freebies = [
    { title: 'Desktop Wallpaper Pack', size: '4K', type: 'Images' },
    { title: 'Mobile Wallpapers', size: 'HD', type: 'Images' },
    { title: 'Exclusive Stems', size: '50MB', type: 'Audio' },
  ];

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    setSubscribed(true);
    // Here you would integrate with your email service
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
        <Text style={styles.headerTitle}>Fan Hub</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)}>
          <View style={styles.heroCard}>
            <IconSymbol
              ios_icon_name="heart.fill"
              android_material_icon_name="favorite"
              size={48}
              color={colors.accent}
            />
            <Text style={styles.heroTitle}>Join the Community</Text>
            <Text style={styles.heroText}>
              Get exclusive access to new music, merch drops, and behind-the-scenes content
            </Text>
          </View>
        </Animated.View>

        {/* Perks */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Member Perks</Text>
          <View style={styles.perksGrid}>
            {perks.map((perk, index) => (
              <React.Fragment key={index}>
                <View style={styles.perkCard}>
                  <View style={styles.perkIconContainer}>
                    <IconSymbol
                      ios_icon_name={perk.icon}
                      android_material_icon_name={perk.icon}
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.perkTitle}>{perk.title}</Text>
                  <Text style={styles.perkDescription}>{perk.description}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Email Signup */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Stay Updated</Text>
          {!subscribed ? (
            <View style={styles.signupCard}>
              <Text style={styles.signupText}>
                Subscribe to get the latest news, releases, and exclusive content
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.emailInput}
                  placeholder="your@email.com"
                  placeholderTextColor={colors.textSecondary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <TouchableOpacity
                  style={styles.subscribeButton}
                  onPress={handleSubscribe}
                  activeOpacity={0.8}
                >
                  <Text style={styles.subscribeButtonText}>Subscribe</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.privacyText}>
                We respect your privacy. Unsubscribe anytime.
              </Text>
            </View>
          ) : (
            <View style={styles.successCard}>
              <IconSymbol
                ios_icon_name="checkmark.circle.fill"
                android_material_icon_name="check-circle"
                size={48}
                color={colors.secondary}
              />
              <Text style={styles.successTitle}>You&apos;re In!</Text>
              <Text style={styles.successText}>
                Check your email for a welcome message and your first exclusive download
              </Text>
            </View>
          )}
        </Animated.View>

        {/* Free Downloads */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Free Downloads</Text>
          {freebies.map((freebie, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity style={styles.freebieCard} activeOpacity={0.9}>
                <View style={styles.freebieInfo}>
                  <Text style={styles.freebieTitle}>{freebie.title}</Text>
                  <Text style={styles.freebieDetails}>
                    {freebie.type} • {freebie.size}
                  </Text>
                </View>
                <IconSymbol
                  ios_icon_name="arrow.down.circle"
                  android_material_icon_name="download"
                  size={28}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </Animated.View>

        {/* Community Stats */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Community</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>10K+</Text>
              <Text style={styles.statLabel}>Subscribers</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>50+</Text>
              <Text style={styles.statLabel}>Countries</Text>
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
    paddingHorizontal: 20,
  },
  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
  },
  heroText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
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
  perksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  perkCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  perkIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  perkTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  perkDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  signupCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  signupText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 12,
  },
  emailInput: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: colors.text,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
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
  privacyText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  successCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
  },
  successText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  freebieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  freebieInfo: {
    flex: 1,
  },
  freebieTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  freebieDetails: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bottomPadding: {
    height: 40,
  },
});
