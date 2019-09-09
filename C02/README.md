## Challenge 02
* Download postman and get information for a superhero from Marvel API
* Access to https://developer.marvel.com/docs and do all steps to get an API key to get access
* Get information related to the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)
* Get a list of all stories when Agent X (Nijo) appears
* Generate JSON document with this information and push to GitHub repo
 
I had to register on the marvel website and request for an API key. Once I had a public and a private key I used a timestamp and a both keys to make a hash using the md5 algorithm.

 I was decide create two JSON files for those queries

### Challenge 02a.json

For the "Get information related to the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)" request.

In first place, I did a request at "http://gateway.marvel.com/v1/public/comics" using the API key and md5 hash, and the filters titleStartsWith,issueNumber. According to [Marvel API documentation] 

![]
### Challenge 02b.json
