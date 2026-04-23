import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import StatsBar from "@/components/StatsBar";
import SettingsRow from "@/components/SettingsRow";

const USER = {
  name: "Alex Johnson",
  role: "CS Student · Junior Year",
  university: "UC Berkeley",
  email: "alex.johnson@berkeley.edu",
  avatar: "AJ",
  avatarBg: "#1e3a8a",
  avatarColor: "#60a5fa",
};

const STATS = [
  { id: "applied", value: "12", label: "Applied" },
  { id: "shortlisted", value: "4", label: "Shortlisted" },
  { id: "interviews", value: "2", label: "Interviews" },
];

const SKILLS = ["React Native", "TypeScript", "Python", "Figma", "SQL"];

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => {
          // TODO: Implement actual sign-out flow
          // 1. Call useAuth().signOut() or useAuthStore().logout()
          // 2. Clear any stored tokens/session data
          // 3. Navigate to login screen via router.replace("/login")
          // For now, this is a placeholder until auth hook is created
        },
      },
    ]);
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
          <Text className="text-slate-100 text-2xl font-bold">Profile</Text>
          <TouchableOpacity className="w-10 h-10 bg-slate-800 rounded-full items-center justify-center border border-slate-700">
            <Ionicons name="create-outline" size={18} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        {/* Avatar & Identity */}
        <View className="items-center pb-6 px-5">
          <View className="relative mb-4">
            {/* Avatar */}
            <View
              className="w-24 h-24 rounded-3xl items-center justify-center"
              style={{ backgroundColor: USER.avatarBg }}
            >
              <Text
                className="text-3xl font-bold"
                style={{ color: USER.avatarColor }}
              >
                {USER.avatar}
              </Text>
            </View>
            {/* Online dot */}
            <View className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-950" />
          </View>

          <Text className="text-slate-100 text-xl font-bold">{USER.name}</Text>
          <Text className="text-slate-400 text-sm mt-1">{USER.role}</Text>

          <View className="flex-row items-center mt-2">
            <Ionicons name="school-outline" size={14} color="#64748b" />
            <Text className="text-slate-500 text-sm ml-1.5">{USER.university}</Text>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity className="mt-4 flex-row items-center bg-blue-500/10 border border-blue-500/30 px-5 py-2.5 rounded-xl">
            <Ionicons name="pencil-outline" size={14} color="#3b82f6" />
            <Text className="text-blue-400 text-sm font-semibold ml-2">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="px-5 mb-5">
          <StatsBar stats={STATS} />
        </View>

        {/* Skills */}
        <View className="px-5 mb-5">
          <Text className="text-slate-100 font-bold text-base mb-3">Skills</Text>
          <View className="flex-row flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <View
                key={skill}
                className="bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1.5 rounded-full"
              >
                <Text className="text-indigo-300 text-sm font-medium">{skill}</Text>
              </View>
            ))}
            <TouchableOpacity className="bg-slate-800 border border-slate-700 border-dashed px-3.5 py-1.5 rounded-full flex-row items-center">
              <Ionicons name="add" size={14} color="#64748b" />
              <Text className="text-slate-500 text-sm ml-1">Add Skill</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Resume Banner */}
        <View className="mx-5 mb-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex-row items-center">
          <View className="w-10 h-10 bg-indigo-500/20 rounded-xl items-center justify-center mr-3">
            <Ionicons name="document-text-outline" size={20} color="#818cf8" />
          </View>
          <View className="flex-1">
            <Text className="text-slate-200 font-semibold text-sm">Resume Uploaded</Text>
            <Text className="text-slate-500 text-xs mt-0.5">alex_johnson_resume.pdf · 2.1 MB</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="cloud-upload-outline" size={20} color="#6366f1" />
          </TouchableOpacity>
        </View>

        {/* Account Settings */}
        <View className="px-5 mb-4">
          <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            Account
          </Text>
          <View className="bg-slate-800/60 rounded-2xl border border-slate-700/50 overflow-hidden">
            <SettingsRow
              icon="person-circle-outline"
              label="Personal Info"
              iconBg="bg-blue-500/15"
              iconColor="#3b82f6"
            />
            <SettingsRow
              icon="mail-outline"
              label="Email"
              value={USER.email.split("@")[0] + "…"}
              iconBg="bg-indigo-500/15"
              iconColor="#6366f1"
            />
            <SettingsRow
              icon="lock-closed-outline"
              label="Change Password"
              iconBg="bg-slate-700"
              iconColor="#94a3b8"
              isLast
            />
          </View>
        </View>

        {/* Preferences */}
        <View className="px-5 mb-4">
          <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            Preferences
          </Text>
          <View className="bg-slate-800/60 rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* Notifications toggle */}
            <View className="flex-row items-center py-3.5 px-4 border-b border-slate-700/50">
              <View className="w-9 h-9 bg-amber-500/15 rounded-xl items-center justify-center mr-3">
                <Ionicons name="notifications-outline" size={18} color="#f59e0b" />
              </View>
              <Text className="flex-1 text-slate-200 text-sm font-medium">
                Push Notifications
              </Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#334155", true: "#1d4ed8" }}
                thumbColor={notificationsEnabled ? "#3b82f6" : "#64748b"}
              />
            </View>
            <SettingsRow
              icon="briefcase-outline"
              label="Job Preferences"
              iconBg="bg-green-500/15"
              iconColor="#22c55e"
            />
            <SettingsRow
              icon="globe-outline"
              label="Location Preferences"
              iconBg="bg-cyan-500/15"
              iconColor="#06b6d4"
              isLast
            />
          </View>
        </View>

        {/* Support */}
        <View className="px-5 mb-4">
          <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            Support
          </Text>
          <View className="bg-slate-800/60 rounded-2xl border border-slate-700/50 overflow-hidden">
            <SettingsRow
              icon="help-circle-outline"
              label="Help & FAQ"
              iconBg="bg-slate-700"
              iconColor="#94a3b8"
            />
            <SettingsRow
              icon="shield-checkmark-outline"
              label="Privacy Policy"
              iconBg="bg-slate-700"
              iconColor="#94a3b8"
            />
            <SettingsRow
              icon="star-outline"
              label="Rate InternMatch"
              iconBg="bg-yellow-500/15"
              iconColor="#eab308"
              isLast
            />
          </View>
        </View>

        {/* Logout */}
        <View className="px-5 mb-2">
          <View className="bg-slate-800/60 rounded-2xl border border-slate-700/50 overflow-hidden">
            <SettingsRow
              icon="log-out-outline"
              label="Log Out"
              iconBg="bg-red-500/15"
              iconColor="#ef4444"
              onPress={handleLogout}
              danger
              isLast
            />
          </View>
        </View>

        {/* Version */}
        <Text className="text-center text-slate-700 text-xs mt-4">
          InternMatch v1.0.0 · Made with ❤️
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}