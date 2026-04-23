import React from "react";
import { View, Text } from "react-native";

interface StatItem {
  id: string;
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <View className="flex-row bg-slate-800/60 rounded-2xl p-4 border border-slate-700/50">
      {stats.map((stat, index) => (
        <View key={stat.id} className={`flex-1 items-center ${index < stats.length - 1 ? "border-r border-slate-700" : ""}`}>
          <Text className="text-blue-400 font-bold text-xl">{stat.value}</Text>
          <Text className="text-slate-500 text-xs mt-0.5">{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}