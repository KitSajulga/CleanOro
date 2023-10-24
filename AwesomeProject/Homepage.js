import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PagerView from "react-native-pager-view";
import { FlatGrid } from "react-native-super-grid";
import PersonDetails from "./HousekeeperCategory.js";
import Profile from "./Profile.js";

const Stack = createStackNavigator();

const data = [
  { id: "1", name: "Housekeeper" },
  { id: "2", name: "Condo/Airbnb Cleaner" },
  { id: "3", name: "Commercial/Office Cleaner" },
  { id: "4", name: "Hotel Cleaner" },
  { id: "5", name: "Residential Cleaner" },
  { id: "6", name: "Window Cleaner" },
  { id: "7", name: "Carpet Cleaner" },
  { id: "8", name: "Janitor" },
  { id: "9", name: "House Cleaner" },
  { id: "10", name: "Maid" },
  { id: "11", name: "Janitorial Supervisor" },
  { id: "12", name: "Deep Cleaner" },
  { id: "13", name: "Sanitation Worker" },
  { id: "14", name: "Room Attendant" },
  // Add more job titles as needed
];

<Stack.Navigator>
  <Stack.Screen name="MyNewPage" component={MyNewPage} />
  <Stack.Screen name="PersonDetails" component={PersonDetails} />
  <Stack.Screen name="Housekeeper" component={PersonDetails} />
  <Stack.Screen name="Profile" component={Profile} />
</Stack.Navigator>;

const itemsPerPage = 8; // 4 items per page

const MyNewPage = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile"); // 'Profile' should be the name of you profile screen in the the navigation stack
  };

  const [currentPage, setCurrentPage] = useState(0);

  const pageData = [];

  const dataLength = data.length;

  for (let i = 0; i < dataLength; i += itemsPerPage) {
    const pageItems = data.slice(i, i + itemsPerPage);
    pageData.push(pageItems);
  }

  const pageCount = pageData.length;

  const navigateToItemDetails = (item) => {
    // Navigate to the individual item details screen.
    navigation.navigate(item.name, { itemId: item.id });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [...Array(pageCount).keys()];
    return pageNumbers.map((page) => (
      <TouchableOpacity
        key={page}
        style={[
          styles.pageNumberLink,
          currentPage === page && styles.currentPageNumber,
        ]}
        onPress={() => setCurrentPage(page)}
      >
        <Text style={styles.pageNumberText}>{page + 1}</Text>
      </TouchableOpacity>
    ));
  };

  const renderPage = () => {
    const page = pageData[currentPage];
    return (
      <FlatGrid
        itemDimension={120}
        data={page}
        style={styles.grid}
        spacing={8}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigateToItemDetails(item)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Type</Text>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={({ nativeEvent }) =>
          setCurrentPage(nativeEvent.position)
        }
      >
        {renderPage()}
      </PagerView>
      <View style={styles.pageNumbersContainer}>{renderPageNumbers()}</View>
      <Button
        title="Post a Job"
        color="#D89F00"
        onPress={() => navigation.goBack()}
        accessibilityLabel="Go back to the previous screen"
      />
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => Alert.alert("Home button clicked")}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.navigationButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("Profile")}
          accessibilityLabel="Navigate to Profile"
        >
          <Text style={styles.navigationButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pagerView: {
    flex: 1,
  },
  grid: {
    flex: 1,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "lightgray",
    height: 150,
  },
  cardContent: {
    padding: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  pageNumbersContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pageNumberLink: {
    padding: 8,
  },
  pageNumberText: {
    fontSize: 16,
  },
  currentPageNumber: {
    backgroundColor: "#D89F00",
    borderRadius: 4,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  navigationButton: {
    padding: 8,
    backgroundColor: "#D89F00",
    borderRadius: 8,
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default MyNewPage;
const Housekeeper = ({ route }) => {
  // Fetch and display details based on route.params.itemId
  return (
    <View>
      <Text>Details for Housekeeper ID: {route.params.itemId}</Text>
      {/* Display Housekeeper details here */}
    </View>
  );
};

const CondoAirbnbCleaner = ({ route }) => {
  // Fetch and display details based on route.params.itemId
  return (
    <View>
      <Text>Details for Condo/Airbnb Cleaner ID: {route.params.itemId}</Text>
      {/* Display Condo/Airbnb Cleaner details here */}
    </View>
  );
};

const CommercialOfficeCleaner = ({ route }) => {
  // Fetch and display details based on route.params.itemId
  return (
    <View>
      <Text>
        Details for Commercial/Office Cleaner ID: {route.params.itemId}
      </Text>
      {/* Display Commercial/Office Cleaner details here */}
    </View>
  );
};

// Define screens for other items in your data array similarly

// Create a stack navigator with screens for each item
const ItemDetailsNavigator = createStackNavigator();

const ItemDetails = () => {
  return (
    <ItemDetailsNavigator.Navigator>
      <ItemDetailsNavigator.Screen name="Housekeeper" component={Housekeeper} />
      <ItemDetailsNavigator.Screen
        name="Condo/Airbnb Cleaner"
        component={CondoAirbnbCleaner}
      />
      <ItemDetailsNavigator.Screen
        name="Commercial/Office Cleaner"
        component={CommercialOfficeCleaner}
      />
      {/* Add screens for other items in your data array */}
    </ItemDetailsNavigator.Navigator>
  );
};
