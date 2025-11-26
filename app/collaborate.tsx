
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function CollaborateScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const collaborationTypes = [
    { id: 'producer', label: 'Producer', icon: 'music-note' },
    { id: 'brand', label: 'Brand', icon: 'business' },
    { id: 'media', label: 'Media', icon: 'newspaper' },
    { id: 'artist', label: 'Artist', icon: 'person' },
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, type: selectedType });
    // Here you would integrate with your email service or backend
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
        <Text style={styles.headerTitle}>Collaborate</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)}>
          <View style={styles.introCard}>
            <Text style={styles.introTitle}>Let&apos;s Create Together</Text>
            <Text style={styles.introText}>
              Interested in working with f3dRaL? Whether you&apos;re a producer, brand, 
              media outlet, or fellow artist, let&apos;s explore collaboration opportunities.
            </Text>
          </View>
        </Animated.View>

        {/* Collaboration Type */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>I&apos;m a...</Text>
          <View style={styles.typesGrid}>
            {collaborationTypes.map((type, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[
                    styles.typeCard,
                    selectedType === type.id && styles.typeCardActive,
                  ]}
                  onPress={() => setSelectedType(type.id)}
                  activeOpacity={0.7}
                >
                  <IconSymbol
                    ios_icon_name={type.icon}
                    android_material_icon_name={type.icon}
                    size={28}
                    color={selectedType === type.id ? colors.text : colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.typeLabel,
                      selectedType === type.id && styles.typeLabelActive,
                    ]}
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        </Animated.View>

        {/* Form */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Your Information</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor={colors.textSecondary}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email *</Text>
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor={colors.textSecondary}
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Company / Project</Text>
            <TextInput
              style={styles.input}
              placeholder="Optional"
              placeholderTextColor={colors.textSecondary}
              value={formData.company}
              onChangeText={(text) => setFormData({ ...formData, company: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us about your collaboration idea..."
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              value={formData.message}
              onChangeText={(text) => setFormData({ ...formData, message: text })}
            />
          </View>
        </Animated.View>

        {/* File Upload Placeholder */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Attachments (Optional)</Text>
          <TouchableOpacity style={styles.uploadButton} activeOpacity={0.8}>
            <IconSymbol
              ios_icon_name="paperclip"
              android_material_icon_name="attach-file"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.uploadText}>Attach Files</Text>
            <Text style={styles.uploadSubtext}>Beats, proposals, media kits, etc.</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Submit Button */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Send Message</Text>
            <IconSymbol
              ios_icon_name="paperplane.fill"
              android_material_icon_name="send"
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>
        </Animated.View>

        {/* Contact Info */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactInfoText}>
              Or reach out directly at{' '}
              <Text style={styles.contactEmail}>collab@f3dral.com</Text>
            </Text>
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
  introCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  introText: {
    fontSize: 15,
    color: colors.textSecondary,
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
  typesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  typeCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  typeCardActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  typeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  typeLabelActive: {
    color: colors.text,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  textArea: {
    height: 120,
    paddingTop: 16,
  },
  uploadButton: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.highlight,
    borderStyle: 'dashed',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 12,
  },
  uploadSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  contactInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  contactInfoText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  contactEmail: {
    color: colors.primary,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 40,
  },
});
