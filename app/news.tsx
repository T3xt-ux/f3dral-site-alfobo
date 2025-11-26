
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { useLanguage } from "@/contexts/LanguageContext";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export default function NewsScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('news.filter.all') },
    { id: 'releases', label: t('news.filter.releases') },
    { id: 'shows', label: t('news.filter.shows') },
    { id: 'merch', label: t('news.filter.merch') },
    { id: 'collabs', label: t('news.filter.collabs') },
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'New Single "Midnight Dreams" Out Now',
      date: 'Dec 15, 2024',
      category: 'releases',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
      excerpt: 'The latest single from f3dRaL is now available on all streaming platforms.',
    },
    {
      id: '2',
      title: 'Limited Edition Merch Drop',
      date: 'Dec 10, 2024',
      category: 'merch',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
      excerpt: 'New exclusive merchandise collection launching this week.',
    },
    {
      id: '3',
      title: 'Collaboration with Producer X',
      date: 'Dec 5, 2024',
      category: 'collabs',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80',
      excerpt: 'Exciting new collaboration announced with renowned producer.',
    },
    {
      id: '4',
      title: 'Live Performance at Festival',
      date: 'Nov 28, 2024',
      category: 'shows',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
      excerpt: 'f3dRaL to headline major music festival next month.',
    },
  ];

  const filteredNews = selectedFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedFilter);

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
        <Text style={styles.headerTitle}>{t('news.title')}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersScroll}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((filter, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter.id && styles.filterTextActive,
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>{t('news.latest')}</Text>

        {filteredNews.map((item, index) => (
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
                      <Text style={styles.newsDate}>{item.date}</Text>
                      <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>{item.category}</Text>
                      </View>
                    </View>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsExcerpt}>{item.excerpt}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </React.Fragment>
        ))}

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
  filtersScroll: {
    marginBottom: 20,
  },
  filtersContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  filterTextActive: {
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 20,
  },
  newsCard: {
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: colors.card,
  },
  newsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  newsDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  categoryBadge: {
    backgroundColor: colors.primary + '40',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.text,
    textTransform: 'uppercase',
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
  bottomPadding: {
    height: 40,
  },
});
