import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Welcome back, Mr. Ravens</Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileText}>A</Text>
          </View>
        </View>

        {/* Overview */}
        <Text style={styles.sectionTitle}>Overview</Text>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Products</Text>
            <Text style={styles.number}>128</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Orders</Text>
            <Text style={styles.number}>24</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Revenue</Text>
            <Text style={styles.number}>₱24,580</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pending</Text>
            <Text style={styles.number}>8</Text>
          </View>
        </View>

        {/* Recent Orders */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.ordersContainer}>

          <View style={styles.order}>
            <View>
              <Text style={styles.orderName}>Order #1001</Text>
              <Text style={styles.orderDetails}>
                 Headphones
              </Text>
            </View>

            <Text style={styles.completed}>Completed</Text>
          </View>

          <View style={styles.order}>
            <View>
              <Text style={styles.orderName}>Order #1002</Text>
              <Text style={styles.orderDetails}>
                Sneakers
              </Text>
            </View>

            <Text style={styles.pending}>Pending</Text>
          </View>

          <View style={styles.order}>
            <View>
              <Text style={styles.orderName}>Order #1003</Text>
              <Text style={styles.orderDetails}>
                Backpack
              </Text>
            </View>

            <Text style={styles.completed}>Completed</Text>
          </View>

        </View>

        {/* Quick Action */}
        <Text style={styles.sectionTitle}>Quick Action</Text>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>
            + Add New Product
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <View style={styles.navItem}>
          <Text style={styles.activeIcon}>⌂</Text>
          <Text style={styles.activeText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.icon}>□</Text>
          <Text style={styles.navText}>Orders</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.icon}>+</Text>
          <Text style={styles.navText}>Add</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.icon}>○</Text>
          <Text style={styles.navText}>Profile</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}