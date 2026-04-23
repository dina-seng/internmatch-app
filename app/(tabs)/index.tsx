import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";



import InternshipCard from "@/components/InternshipCard";
import FeaturedCard from "@/components/FeaturedCard";
import FilterChip from "@/components/FilterChip";
import { INTERNSHIPS, FEATURED_INTERNSHIP, FILTER_CHIPS } from "@/data/internships";

// Category-to-role-keyword mappings for filtering by job type
const CATEGORY_ROLE_KEYWORDS: Record<string, string[]> = {
  Engineering: ["Engineer", "DevOps", "Developer"],
  Design: ["Design", "Designer"],
  Data: ["Data", "ML", "Analytics"],
  Marketing: ["Marketing", "Growth"],
};

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInternships =
    activeCategory === "All"
      ? INTERNSHIPS
      : INTERNSHIPS.filter((i) => {
          // Match by type (location-based)
          if (i.type === activeCategory) return true;

          // Match by role using category keyword mapping
          const keywords = CATEGORY_ROLE_KEYWORDS[activeCategory];
          if (keywords) {
            return keywords.some((kw) =>
              i.role.toLowerCase().includes(kw.toLowerCase())
            );
          }

          // Match by tag substring (for backward compatibility)
          return i.tags.some((t) =>
            t.toLowerCase().includes(activeCategory.toLowerCase())
          );
        });

  const handleApply = (id: string) => {
    const internship = INTERNSHIPS.find((i) => i.id === id);
    Alert.alert(
      "Application Submitted! 🎉",
      `Your application to ${internship?.company} for ${internship?.role} has been submitted.`,
      [{ text: "Great!", style: "default" }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-4 pb-5">
          <View>
            <Text className="text-slate-400 text-sm">Good morning 👋</Text>
            <Text className="text-slate-100 text-2xl font-bold mt-0.5">
              Find Your Internship
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/modal")}
            className="w-10 h-10 bg-slate-800 rounded-full items-center justify-center border border-slate-700"
          >
            <Ionicons name="notifications-outline" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats Banner */}
        <View className="flex-row mx-5 mb-5 gap-x-3">
          {[
            { icon: "briefcase-outline" as const, value: "1,240+", label: "Internships" },
            { icon: "business-outline" as const, value: "380+", label: "Companies" },
          ].map((stat) => (
            <View
              key={stat.label}
              className="flex-1 bg-slate-800/60 rounded-2xl p-3.5 flex-row items-center border border-slate-700/40"
            >
              <View className="w-9 h-9 bg-blue-500/15 rounded-xl items-center justify-center mr-3">
                <Ionicons name={stat.icon} size={18} color="#3b82f6" />
              </View>
              <View>
                <Text className="text-slate-100 font-bold text-base">{stat.value}</Text>
                <Text className="text-slate-500 text-xs">{stat.label}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Featured Card */}
        <View className="px-5 mb-2">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-slate-100 font-bold text-lg">Featured</Text>
            <TouchableOpacity>
              <Text className="text-blue-400 text-sm">See all</Text>
            </TouchableOpacity>
          </View>
          <FeaturedCard internship={FEATURED_INTERNSHIP} onApply={handleApply} />
        </View>

        {/* Category Filters */}
        <View className="mb-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 4 }}
          >
            {FILTER_CHIPS.map((cat) => (
              <FilterChip
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onPress={() => setActiveCategory(cat)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Job Feed */}
        <View className="px-5">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-slate-100 font-bold text-lg">
              Latest Openings
            </Text>
            <Text className="text-slate-500 text-sm">
              {filteredInternships.length} found
            </Text>
          </View>

          {filteredInternships.length === 0 ? (
            <View className="py-16 items-center">
              <Ionicons name="search-outline" size={48} color="#334155" />
              <Text className="text-slate-500 text-base mt-4">
                No internships found
              </Text>
              <Text className="text-slate-600 text-sm mt-1 text-center">
                Try a different category filter
              </Text>
            </View>
          ) : (
            filteredInternships.map((internship) => (
              <InternshipCard
                key={internship.id}
                internship={internship}
                onApply={handleApply}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}