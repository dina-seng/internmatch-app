import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Notification {
  id: string;
  type: "match" | "shortlist" | "deadline" | "interview";
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "match",
    title: "New Match Found 🎯",
    body: "Stripe is looking for a Software Engineer Intern matching your profile.",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    type: "shortlist",
    title: "You've been shortlisted!",
    body: "Figma has moved you to the next round for Product Design Intern.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "interview",
    title: "Interview Scheduled",
    body: "Your technical interview with Linear is scheduled for tomorrow at 3PM.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: "4",
    type: "deadline",
    title: "Application Deadline",
    body: "Vercel internship application closes in 2 days. Don't miss out!",
    time: "Yesterday",
    read: true,
  },
  {
    id: "5",
    type: "match",
    title: "5 New Internships",
    body: "New opportunities matching 'Frontend Engineer' have been posted.",
    time: "2 days ago",
    read: true,
  },
];

const notifIcon = (type: Notification["type"]) => {
  switch (type) {
    case "match":
      return { icon: "sparkles" as const, bg: "bg-blue-500/15", color: "#3b82f6" };
    case "shortlist":
      return { icon: "star" as const, bg: "bg-indigo-500/15", color: "#6366f1" };
    case "interview":
      return { icon: "calendar" as const, bg: "bg-green-500/15", color: "#22c55e" };
    case "deadline":
      return { icon: "alarm" as const, bg: "bg-amber-500/15", color: "#f59e0b" };
  }
};

export default function ModalScreen() {
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      {/* Handle */}
      <View className="items-center pt-3 pb-1">
        <View className="w-10 h-1 bg-slate-700 rounded-full" />
      </View>

      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <View>
          <Text className="text-slate-100 text-xl font-bold">Notifications</Text>
          {unreadCount > 0 && (
            <Text className="text-slate-400 text-sm mt-0.5">
              {unreadCount} unread
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 bg-slate-800 rounded-full items-center justify-center"
        >
          <Ionicons name="close" size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        {NOTIFICATIONS.map((notif, index) => {
          const { icon, bg, color } = notifIcon(notif.type);
          return (
            <TouchableOpacity
              key={notif.id}
              className={`flex-row p-4 rounded-2xl mb-2.5 border ${
                notif.read
                  ? "bg-slate-800/40 border-slate-700/30"
                  : "bg-slate-800 border-slate-700/60"
              }`}
            >
              {/* Icon */}
              <View
                className={`w-10 h-10 ${bg} rounded-xl items-center justify-center mr-3 flex-shrink-0`}
              >
                <Ionicons name={icon} size={18} color={color} />
              </View>

              {/* Content */}
              <View className="flex-1">
                <View className="flex-row items-start justify-between">
                  <Text
                    className={`font-semibold text-sm flex-1 pr-2 ${
                      notif.read ? "text-slate-400" : "text-slate-100"
                    }`}
                  >
                    {notif.title}
                  </Text>
                  {!notif.read && (
                    <View className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  )}
                </View>
                <Text className="text-slate-500 text-xs mt-1 leading-relaxed">
                  {notif.body}
                </Text>
                <Text className="text-slate-600 text-xs mt-2">{notif.time}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Mark all read */}
        <TouchableOpacity className="items-center mt-3 py-3">
          <Text className="text-blue-400 text-sm font-medium">
            Mark all as read
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}