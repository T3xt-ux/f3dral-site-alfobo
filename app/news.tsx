
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function NewsScreen() {
  const router = useRouter();

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'New Single "Midnight Dreams" Out Now',
      category: 'Release',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
      excerpt: 'The highly anticipated new single is now available on all streaming platforms.',
    },
    {
      id: '2',
      title: 'Limited Edition Merch Drop',
      category: 'Merch',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
      excerpt: 'Exclusive hoodies and tees available for a limited time only.',
    },
    {
      id: '3',
      title: 'Collaboration with Producer XYZ',
      category: 'Collaboration',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600',
      excerpt: 'Exciting new collaboration announced with renowned producer.',
    },
    {
      id: '4',
      title: 'Live Performance at Music Festival',
      category: 'Show',
      date: '3 weeks ago',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600',
      excerpt: 'Catch f3dRaL live at the upcoming summer music festival.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'release':
        return colors.primary;
      case 'merch':
        return colors.accent;
      case 'collaboration':
        return colors.secondary;
      case 'show':
        return colors.primary;
      default:
        return colors.textSecondary;
    }
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
        <Text style={styles.headerTitle}>News & Updates</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {newsItems.map((item, index) => (
          <React.Fragment key={index}>
            <Animated.View entering={FadeInDown.delay(index * 100).duration(500)}>
              <TouchableOpacity style={styles.newsCard} activeOpacity={0.9}>
                <Image source={{ uri: item.image }} style={styles.newsImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(18, 18, 18, 0.95)']}
                  style={styles.newsGradient}
                >
                  <View style={styles.newsContent}>
                    <View style={styles.newsHeader}>
                      <View
                        style={[
                          styles.categoryBadge,
                          { backgroundColor: getCategoryColor(item.category) + '30' },
                        ]}
                      >
                        <Text
                          style={[
                            styles.categoryText,
                            { color: getCategoryColor(item.category) },
                          ]}
                        >
                          {item.category}
                        </Text>
                      </View>
                      <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsExcerpt}>{item.excerpt}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </React.Fragment>
        ))}

        {/* CMS Info */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <View style={styles.cmsInfo}>
            <IconSymbol
              ios_icon_name="info.circle"
              android_material_icon_name="info"
              size={24}
              color={colors.secondary}
            />
            <Text style={styles.cmsInfoText}>
              This news feed is ready for CMS integration. Connect your content management 
              system to easily update posts without coding.
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
  newsCard: {
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: colors.card,
  },
  newsImage: {
    width: '100%',
    height: '100%',
  },
  newsGradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  newsContent: {
    padding: 20,
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  newsExcerpt: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  cmsInfo: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginBottom: 20,
  },
  cmsInfoText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  bottomPadding: {
    height: 40,
  },
});
