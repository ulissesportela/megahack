import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20
    //paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  cartao: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48,
  },

  cartaoProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  cartaoValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  networkTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131A',
    lineHeight: 30,
  },

  networkDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#83DEA3',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})