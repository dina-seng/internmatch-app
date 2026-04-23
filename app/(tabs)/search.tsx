import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import InternshipCard from "@/components/InternshipCard";
import FilterChip from "@/components/FilterChip";
import { INTERNSHIPS, FILTER_CHIPS } from "@/data/internships";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = INTERNSHIPS.filter((item) => {
    const matchesQuery =
      query.trim() === "" ||
      item.role.toLowerCase().includes(query.toLowerCase()) ||
      item.company.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));

    const matchesFilter =
      activeFilter === "All" ||
      item.type === activeFilter ||
      item.tags.some((t) =>
        t.toLowerCase().includes(activeFilter.toLowerCase())
      );

    return matchesQuery && matchesFilter;
  });

  const handleApply = (id: string) => {
    const internship = INTERNSHIPS.find((i) => i.id === id);
    Alert.alert(
      "Application Submitted! 🎉",
      `Your application to ${internship?.company} has been submitted.`,
      [{ text: "Great!", style: "default" }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      {/* Header */}
      <View className="px-5 pt-4 pb-4">
        <Text className="text-slate-100 text-2xl font-bold mb-1">Search</Text>
        <Text className="text-slate-400 text-sm">
          Explore {INTERNSHIPS.length}+ internship opportunities
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-5 mb-4">
        <View
          className={`flex-row items-center bg-slate-800 rounded-2xl px-4 py-3 border ${
            isFocused ? "border-blue-900" : "border-slate-700/50"
          }`}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={isFocused ? "#3b82f6" : "#64748b"}
          />
          <TextInput
            className="flex-1 ml-3 text-slate-100 text-base"
            placeholder="Role, company, or skill..."
            placeholderTextColor="#475569"
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            returnKeyType="search"
            autoCorrect={false}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={20} color="#475569" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filter Chips */}
      <View className="mb-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 2 }}
        >
          {FILTER_CHIPS.map((chip) => (
            <FilterChip
              key={chip}
              label={chip}
              isActive={activeFilter === chip}
              onPress={() => setActiveFilter(chip)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Results Count */}
      <View className="flex-row items-center justify-between px-5 mb-3">
        <Text className="text-slate-400 text-sm">
          <Text className="text-slate-100 font-semibold">{filtered.length}</Text>{" "}
          results found
        </Text>
        <TouchableOpacity className="flex-row items-center bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
          <Ionicons name="options-outline" size={14} color="#94a3b8" />
          <Text className="text-slate-400 text-xs ml-1.5 font-medium">Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Results List */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
      >
        {filtered.length === 0 ? (
          <View className="py-20 items-center">
            <View className="w-20 h-20 bg-slate-800 rounded-full items-center justify-center mb-4">
              <Ionicons name="search-outline" size={36} color="#334155" />
            </View>
            <Text className="text-slate-300 text-lg font-semibold">
              No results found
            </Text>
            <Text className="text-slate-500 text-sm mt-2 text-center px-8">
              Try a different search term or adjust your filters
            </Text>
            <TouchableOpacity
              className="mt-5 bg-blue-500/10 px-5 py-2.5 rounded-xl border border-blue-500/30"
              onPress={() => {
                setQuery("");
                setActiveFilter("All");
              }}
            >
              <Text className="text-blue-400 text-sm font-medium">
                Clear Filters
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          filtered.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              onApply={handleApply}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}