import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#d36c6c",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 10,
  },

  addButtonText: {
    color: "#996161",
    fontSize: 16,
    fontWeight: "bold",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e8dfdf",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginTop: 30,
  },
});

export default styles;