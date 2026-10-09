import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 20,
    paddingBottom: 100,
  },

  /* Header */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  /* Sections */

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  viewAll: {
    fontSize: 13,
    color: "#777",
  },

  /* Overview Cards */

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },

  cardTitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 8,
  },

  number: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  /* Recent Orders */

  ordersContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginBottom: 25,
  },

  order: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  orderName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
  },

  orderDetails: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },

  completed: {
    fontSize: 11,
    color: "#333",
    backgroundColor: "#eeeeee",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },

  pending: {
    fontSize: 11,
    color: "#777",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },

  /* Button */

  actionButton: {
    backgroundColor: "#222",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  /* Bottom Navigation */

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
  },

  icon: {
    fontSize: 20,
    color: "#888",
  },

  activeIcon: {
    fontSize: 20,
    color: "#222",
  },

  navText: {
    fontSize: 10,
    color: "#888",
    marginTop: 2,
  },

  activeText: {
    fontSize: 10,
    color: "#222",
    fontWeight: "bold",
    marginTop: 2,
  },
});

export default styles;