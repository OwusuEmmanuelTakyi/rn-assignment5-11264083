import React from 'react';
import { View, Text, TouchableOpacity, Switch, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SettingItem = ({ label }) => (
  <TouchableOpacity style={styles.settingItem}>
    <Text style={styles.settingLabel}>{label}</Text>
    <FontAwesomeIcon icon={faChevronRight} size={16} style={styles.icon} />
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Settings</Text>

        <SettingItem label="Language" />
        <SettingItem label="My Profile" />
        <SettingItem label="Contact Us" />
        <SettingItem label="Change Password" />
        <SettingItem label="Privacy Policy" />

        <View style={styles.themeContainer}>
          <Text style={styles.settingLabel}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingLabel: {
    fontSize: 16,
    color: '#1f2937',
  },
  icon: {
    color: '#9ca3af',
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 16,
  },
});
