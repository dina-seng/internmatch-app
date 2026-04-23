import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Internship } from "@/data/internships";

interface FeaturedCardProps {
  internship: Internship;
  onApply?: (id: string) => void;
}

export default function FeaturedCard({ internship, onApply }: FeaturedCardProps) {
  const { company, role, location, stipend, logo, companyColor, duration } = internship;

  return (
    <View
      className="rounded-2xl p-5 mb-5 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #1e40af 0%, #312e81 100%)`,
        backgroundColor: "#1e3a8a",
      }}
    >
      {/* Background glow */}
      <View
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: companyColor }}
      />

      {/* Badge */}
      <View className="flex-row items-center mb-4">
        <View className="bg-blue-400/20 px-3 py-1 rounded-full flex-row items-center">
          <Ionicons name="star" size={11} color="#60a5fa" />
          <Text className="text-blue-300 text-xs font-semibold ml-1">Featured Opportunity</Text>
        </View>
      </View>

      {/* Company & Role */}
      <View className="flex-row items-center mb-2">
        <View
          className="w-14 h-14 rounded-2xl items-center justify-center mr-3"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <Text className="text-white text-xl font-bold">{logo}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-white font-bold text-xl leading-tight">{role}</Text>
          <Text className="text-blue-200 text-sm mt-0.5">{company}</Text>
        </View>
      </View>

      {/* Divider */}
      <View className="h-px bg-white/10 my-3" />

      {/* Details row */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-x-4">
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={14} color="#93c5fd" />
            <Text className="text-blue-200 text-xs ml-1">{location}</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={14} color="#93c5fd" />
            <Text className="text-blue-200 text-xs ml-1">{duration}</Text>
          </View>
        </View>
        <Text className="text-white font-bold text-base">{stipend}</Text>
      </View>

      {/* Apply Button */}
      <TouchableOpacity
        onPress={() => onApply?.(internship.id)}
        className="mt-4 bg-white rounded-xl py-3 items-center active:bg-blue-50"
      >
        <Text className="text-blue-700 font-bold text-sm">Apply to {company}</Text>
      </TouchableOpacity>
    </View>
  );
}