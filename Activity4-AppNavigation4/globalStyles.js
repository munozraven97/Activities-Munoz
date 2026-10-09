import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  listContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  movieCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  movieTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  movieInfo: {
    fontSize: 15,
    color: '#666',
    marginBottom: 8,
  },

  rating: {
    fontSize: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },

  smallButton: {
    backgroundColor: '#222',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  detailsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  detailsInfo: {
    fontSize: 17,
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555',
    marginTop: 15,
    marginBottom: 30,
  },

});

export default styles;