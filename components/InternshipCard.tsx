import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Internship } from "@/data/internships";

interface InternshipCardProps {
  internship: Internship;
  onApply?: (id: string) => void;
  variant?: "default" | "compact";
}

export default function InternshipCard({
  internship,
  onApply,
  variant = "default",
}: InternshipCardProps) {
  const { company, role, location, type, duration, stipend, logo, tags, postedDaysAgo, companyColor } = internship;

  const typeColor =
    type === "Remote"
      ? "text-green-400"
      : type === "Hybrid"
      ? "text-blue-400"
      : "text-amber-400";

  const typeBg =
    type === "Remote"
      ? "bg-green-500/10"
      : type === "Hybrid"
      ? "bg-blue-500/10"
      : "bg-amber-500/10";

  return (
    <View className="bg-slate-800/80 rounded-2xl p-4 mb-3 border border-slate-700/50">
      {/* Header */}
      <View className="flex-row items-start justify-between mb-3">
        <View className="flex-row items-center flex-1">
          {/* Company Logo */}
          <View
            className="w-12 h-12 rounded-xl items-center justify-center mr-3"
            style={{ backgroundColor: companyColor === "#000000" ? "#1e293b" : companyColor + "22" }}
          >
            <Text
              className="text-lg font-bold"
              style={{ color: companyColor === "#000000" ? "#94a3b8" : companyColor }}
            >
              {logo}
            </Text>
          </View>

          <View className="flex-1">
            <Text className="text-slate-100 font-semibold text-base leading-tight" numberOfLines={1}>
              {role}
            </Text>
            <Text className="text-slate-400 text-sm mt-0.5">{company}</Text>
          </View>
        </View>

        {/* Bookmark */}
        <TouchableOpacity className="w-8 h-8 items-center justify-center">
          <Ionicons name="bookmark-outline" size={18} color="#64748b" />
        </TouchableOpacity>
      </View>

      {/* Meta info */}
      <View className="flex-row items-center gap-x-3 mb-3">
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={13} color="#64748b" />
          <Text className="text-slate-500 text-xs ml-1">{location}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="time-outline" size={13} color="#64748b" />
          <Text className="text-slate-500 text-xs ml-1">{duration}</Text>
        </View>
      </View>

      {/* Tags */}
      <View className="flex-row flex-wrap gap-2 mb-4">
        <View className={`px-2.5 py-1 rounded-full ${typeBg}`}>
          <Text className={`text-xs font-medium ${typeColor}`}>{type}</Text>
        </View>
        {tags.slice(0, 2).map((tag) => (
          <View key={tag} className="px-2.5 py-1 rounded-full bg-slate-700/60">
            <Text className="text-slate-400 text-xs">{tag}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-blue-400 font-bold text-base">{stipend}</Text>
          <Text className="text-slate-600 text-xs">
            {postedDaysAgo === 1 ? "Posted yesterday" : `Posted ${postedDaysAgo}d ago`}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => onApply?.(internship.id)}
          className="bg-blue-500 px-5 py-2.5 rounded-xl active:bg-blue-600"
        >
          <Text className="text-white font-semibold text-sm">Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}