import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export default function FilterChip({ label, isActive, onPress }: FilterChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-2 border ${
        isActive
          ? "bg-blue-500 border-blue-500"
          : "bg-slate-800 border-slate-700"
      }`}
    >
      <Text
        className={`text-sm font-medium ${
          isActive ? "text-white" : "text-slate-400"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}