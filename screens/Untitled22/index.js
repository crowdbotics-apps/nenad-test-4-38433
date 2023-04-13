import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
const users = [{
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  image: require('../assets/user1.png')
}, {
  id: '2',
  name: 'Jane Smith',
  email: 'janesmith@example.com',
  image: require('../assets/user2.png')
}, {
  id: '3',
  name: 'Bob Johnson',
  email: 'bobjohnson@example.com',
  image: require('../assets/user3.png')
}, {
  id: '4',
  name: 'Alice Lee',
  email: 'alicelee@example.com',
  image: require('../assets/user4.png')
}, {
  id: '5',
  name: 'Mike Brown',
  email: 'mikebrown@example.com',
  image: require('../assets/user5.png')
}];

const AdminUserListScreen = () => {
  const renderUserItem = ({
    item
  }) => <View style={styles.userItemContainer}>
      <Image source={item.image} style={styles.userImage} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={users} renderItem={renderUserItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContainer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  userItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userInfoContainer: {
    flex: 1
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 16,
    color: '#666'
  }
});
export default AdminUserListScreen;