# ghpages-test.github.io

Twinoid API test

How to use:

Scope: The scope of your query (see https://twinoid.com/developers/api for reference, field cannot be empty)\n
URL: The URL of your query, without "https://twinoid.com/graph/" (see https://twinoid.com/developers/api for reference)

Example: Scope=`contacts` and URL=`user/63244?fields=name,birthday` would return
`{
  "name": "Bravz",
  "id": 63244,
  "birthday": "2000-12-27"
}`

As stated before, the "scope" field cannot be left blank, even if no scope is needed.

The code's pretty bad and 95% of the CSS is unnecesary, lol
