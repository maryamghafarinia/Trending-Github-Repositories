import * as actions from '../starred-repositories/starred-repositories.actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const repository = {
  id: 127754768,
  node_id: "MDEwOlJlcG9zaXRvcnkxMjc3NTQ3Njg=",
  name: "advanced-react-patterns-v2",
  full_name: "kentcdodds/advanced-react-patterns-v2",
  private: false,
  owner: {
    login: "kentcdodds",
    id: 1500684,
    node_id: "MDQ6VXNlcjE1MDA2ODQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kentcdodds",
    html_url: "https://github.com/kentcdodds",
    followers_url: "https://api.github.com/users/kentcdodds/followers",
    following_url: "https://api.github.com/users/kentcdodds/following{/other_user}",
    gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
    starred_url: "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kentcdodds/subscriptions",
    organizations_url: "https://api.github.com/users/kentcdodds/orgs",
    repos_url: "https://api.github.com/users/kentcdodds/repos",
    events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
    received_events_url: "https://api.github.com/users/kentcdodds/received_events",
    type: "User",
    site_admin: false
}
}
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})


describe('favorites', () => {
  
  it('should add starred repository to localStorage', () => {
    store.dispatch(actions.addFavoriteRepository(repository))
    const expectedRepository =JSON.parse(localStorage.getItem(repository.id))
    expect(expectedRepository).toEqual(repository)
  })

  it('should remove unstarred repository from localStorage', () => {
    store.dispatch(actions.removeFavoriteRepository(repository))
    const expectedRepository =JSON.parse(localStorage.getItem(repository.id))
    expect(expectedRepository).toEqual(null)
  })
})
