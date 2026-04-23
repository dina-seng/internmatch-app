import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SettingsRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  onPress?: () => void;
  iconBg?: string;
  iconColor?: string;
  isLast?: boolean;
  danger?: boolean;
}

export default function SettingsRow({
  icon,
  label,
  value,
  onPress,
  iconBg = "bg-slate-700",
  iconColor = "#94a3b8",
  isLast = false,
  danger = false,
}: SettingsRowProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center py-3.5 px-4 ${!isLast ? "border-b border-slate-700/50" : ""}`}
    >
      <View className={`w-9 h-9 rounded-xl items-center justify-center mr-3 ${iconBg}`}>
        <Ionicons name={icon} size={18} color={iconColor} />
      </View>
      <Text className={`flex-1 text-sm font-medium ${danger ? "text-red-400" : "text-slate-200"}`}>
        {label}
      </Text>
      {value && (
        <Text className="text-slate-500 text-sm mr-2">{value}</Text>
      )}
      <Ionicons name="chevron-forward" size={16} color="#475569" />
    </TouchableOpacity>
  );
}