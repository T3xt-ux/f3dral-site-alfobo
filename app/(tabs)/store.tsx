
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { useLanguage } from "@/contexts/LanguageContext";
import Animated, { FadeInDown } from "react-native-reanimated";

const { width } = Dimensions.get('window');

interface Product {
  id: string;
  nameKey: string;
  price: number;
  image: string;
  category: string;
}

export default function StoreScreen() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: '1',
      nameKey: 'hoodie',
      price: 65,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80',
      category: 'apparel',
    },
    {
      id: '2',
      nameKey: 'tshirt',
      price: 35,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
      category: 'apparel',
    },
    {
      id: '3',
      nameKey: 'poster',
      price: 25,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
      category: 'prints',
    },
    {
      id: '4',
      nameKey: 'hat',
      price: 30,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80',
      category: 'accessories',
    },
    {
      id: '5',
      nameKey: 'vinyl',
      price: 45,
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&q=80',
      category: 'music',
    },
    {
      id: '6',
      nameKey: 'tourPoster',
      price: 20,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
      category: 'prints',
    },
  ];

  const categories = [
    { id: 'all', label: t('store.all') },
    { id: 'apparel', label: t('store.apparel') },
    { id: 'prints', label: t('store.prints') },
    { id: 'accessories', label: t('store.accessories') },
    { id: 'music', label: t('store.musicCategory') },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <SafeAreaView style={commonStyles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('store.title')}</Text>
        <TouchableOpacity style={styles.cartButton}>
          <IconSymbol
            ios_icon_name="cart"
            android_material_icon_name="shopping-cart"
            size={24}
            color={colors.text}
          />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>0</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.categoryTextActive,
                ]}
              >
                {category.label}
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
        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <IconSymbol
            ios_icon_name="info.circle"
            android_material_icon_name="info"
            size={20}
            color={colors.secondary}
          />
          <Text style={styles.infoBannerText}>
            {t('store.infoBanner')}
          </Text>
        </View>

        {/* Products Grid */}
        <View style={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Animated.View entering={FadeInDown.delay(index * 50).duration(400)}>
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName} numberOfLines={2}>
                      {t(`store.products.${product.nameKey}`)}
                    </Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                  </View>
                  <TouchableOpacity style={styles.addToCartButton}>
                    <IconSymbol
                      ios_icon_name="plus"
                      android_material_icon_name="add"
                      size={20}
                      color={colors.text}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Animated.View>
            </React.Fragment>
          ))}
        </View>

        {/* Integration Info */}
        <View style={styles.integrationInfo}>
          <Text style={styles.integrationTitle}>{t('store.integrationTitle')}</Text>
          <Text style={styles.integrationText}>
            {t('store.integrationText')}
          </Text>
          <TouchableOpacity style={styles.setupButton}>
            <Text style={styles.setupButtonText}>{t('store.setupPrintful')}</Text>
          </TouchableOpacity>
          <Text style={styles.integrationNote}>
            {t('store.integrationNote')}
          </Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 0,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.accent,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
  },
  categoriesScroll: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  categoryTextActive: {
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  productCard: {
    width: (width - 56) / 2,
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  productImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    minHeight: 36,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  integrationInfo: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
    marginBottom: 20,
  },
  integrationTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  integrationText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  setupButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  setupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  integrationNote: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 120,
  },
});
