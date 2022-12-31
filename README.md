# GITHUB API CHALLENGE

### This API makes requests to the GITHUB API returning specific information for each endpoint

## Accepted endpoints

```
/ - Returns the default user list and the link to the next page.
```

```
/users?since={number} - Returns a list of GitHub users since {since=number} and the link to the next page.
```

```
/users/:username/details - Return the details of a GitHub user
```

```
/users/:username/repos - Return a list with all user repositories
```
