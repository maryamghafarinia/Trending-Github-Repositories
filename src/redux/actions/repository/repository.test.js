import * as actions from '../../actions/repository/repository.actions'
import * as types from '../../constants/repository/repository.constants'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import moment from 'moment'

const lastWeekDate = moment().subtract(7,'days').format('YYYY-MM-DD');
const URL = `https://api.github.com/search/repositories?sort=stars&order=desc&q=created:%3E${lastWeekDate}&`;
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('repositories', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates REPOSITORIES_FETCH_SUCCESS when fetching repositories has been done', () => {

    fetchMock.getOnce(URL, {
      body: { items: [] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.REPOSITORIES_FETCH_REQUEST },
      { type: types.REPOSITORIES_FETCH_SUCCESS,  payload: [] }
    ]
    const store = mockStore({ payload: [] })

    return store.dispatch(actions.fetchRepositories()).then((res) => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REPOSITORIES_FETCH_FAIL and catch error if api call fails', () => {
 
    const errorMessage = 'unknown error' 
    fetchMock.getOnce(URL, {
			throws: {
				status: 500,
				message: errorMessage
			}}
		);
    

    const expectedActions = [
      { type: types.REPOSITORIES_FETCH_REQUEST },
      { type: types.REPOSITORIES_FETCH_FAIL,  payload: errorMessage }
    ]
    const store = mockStore({ payload: [] })

    return store.dispatch(actions.fetchRepositories()).then((res) => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})