import * as actions from '../starred-repositories/starred-repositories.actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const repository =    {
  "id": 23096959,
  "node_id": "MDEwOlJlcG9zaXRvcnkyMzA5Njk1OQ==",
  "name": "go",
  "full_name": "golang/go",
  "private": false,
  "owner": {
    "login": "golang",
    "id": 4314092,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjQzMTQwOTI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/4314092?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/golang",
    "html_url": "https://github.com/golang",
    "followers_url": "https://api.github.com/users/golang/followers",
    "following_url": "https://api.github.com/users/golang/following{/other_user}",
    "gists_url": "https://api.github.com/users/golang/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/golang/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/golang/subscriptions",
    "organizations_url": "https://api.github.com/users/golang/orgs",
    "repos_url": "https://api.github.com/users/golang/repos",
    "events_url": "https://api.github.com/users/golang/events{/privacy}",
    "received_events_url": "https://api.github.com/users/golang/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/golang/go",
  "description": "The Go programming language",
  "fork": false,
  "url": "https://api.github.com/repos/golang/go",
  "forks_url": "https://api.github.com/repos/golang/go/forks",
  "keys_url": "https://api.github.com/repos/golang/go/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/golang/go/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/golang/go/teams",
  "hooks_url": "https://api.github.com/repos/golang/go/hooks",
  "issue_events_url": "https://api.github.com/repos/golang/go/issues/events{/number}",
  "events_url": "https://api.github.com/repos/golang/go/events",
  "assignees_url": "https://api.github.com/repos/golang/go/assignees{/user}",
  "branches_url": "https://api.github.com/repos/golang/go/branches{/branch}",
  "tags_url": "https://api.github.com/repos/golang/go/tags",
  "blobs_url": "https://api.github.com/repos/golang/go/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/golang/go/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/golang/go/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/golang/go/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/golang/go/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/golang/go/languages",
  "stargazers_url": "https://api.github.com/repos/golang/go/stargazers",
  "contributors_url": "https://api.github.com/repos/golang/go/contributors",
  "subscribers_url": "https://api.github.com/repos/golang/go/subscribers",
  "subscription_url": "https://api.github.com/repos/golang/go/subscription",
  "commits_url": "https://api.github.com/repos/golang/go/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/golang/go/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/golang/go/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/golang/go/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/golang/go/contents/{+path}",
  "compare_url": "https://api.github.com/repos/golang/go/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/golang/go/merges",
  "archive_url": "https://api.github.com/repos/golang/go/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/golang/go/downloads",
  "issues_url": "https://api.github.com/repos/golang/go/issues{/number}",
  "pulls_url": "https://api.github.com/repos/golang/go/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/golang/go/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/golang/go/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/golang/go/labels{/name}",
  "releases_url": "https://api.github.com/repos/golang/go/releases{/id}",
  "deployments_url": "https://api.github.com/repos/golang/go/deployments",
  "created_at": "2014-08-19T04:33:40Z",
  "updated_at": "2021-04-13T07:51:25Z",
  "pushed_at": "2021-04-13T00:37:33Z",
  "git_url": "git://github.com/golang/go.git",
  "ssh_url": "git@github.com:golang/go.git",
  "clone_url": "https://github.com/golang/go.git",
  "svn_url": "https://github.com/golang/go",
  "homepage": "https://golang.org",
  "size": 256625,
  "stargazers_count": 84400,
  "watchers_count": 84400,
  "language": "Go",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 12294,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 7032,
  "license": {
    "key": "other",
    "name": "Other",
    "spdx_id": "NOASSERTION",
    "url": null,
    "node_id": "MDc6TGljZW5zZTA="
  },
  "forks": 12294,
  "open_issues": 7032,
  "watchers": 84400,
  "default_branch": "master",
  "score": 1.0
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
