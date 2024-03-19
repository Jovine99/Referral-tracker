import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const UserActionScreen = () => {
  // Dummy data for demonstration
  const userActions = [
    { id: '1', action: 'Downloaded the app', timestamp: '2024-03-19 09:30' },
    { id: '2', action: 'Onboarded', timestamp: '2024-03-19 10:15' },
    { id: '3', action: 'Added money to wallet', timestamp: '2024-03-19 11:05' },
    { id: '4', action: 'sent money', timestamp: '2024-03-19 11:05' },
    { id: '5', action: 'Bill pay', timestamp: '2024-03-19 11:05' },
    { id: '6', action: 'Did mobile recharge', timestamp: '2024-03-19 11:05' },
    // Add more user actions as needed
  ];

  // Render item for FlatList
  const renderUserAction = ({ item }) => (
    <View style={styles.actionItem}>
      <Text style={styles.actionText}>{item.action}</Text>
      <Text style={styles.timestampText}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Actions</Text>
      <FlatList
        data={userActions}
        renderItem={renderUserAction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  actionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  actionText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default UserActionScreen;
