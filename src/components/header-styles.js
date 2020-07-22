import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  menu: {
    height: 24,
    width: 24,
  },
  searchContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 18,
    alignItems: 'center',
    width: '100%',
    marginLeft: 8,
  },
  filter: {
    height: 34,
    width: 34,
  },
});
export default styles;
