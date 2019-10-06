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

In first place, I did a request at "http://gateway.marvel.com/v1/public/comics" using the API key, timestamp=1 and md5 hash, and the filters titleStartsWith="Cable & Deadpool",issueNumber="46", for obtain the comic id.


![Query 1](https://github.com/emrszon/JS-School/blob/master/C02/query1.png)

Then, with the comic id "21845", we proceed to make a request at "http://gateway.marvel.com/v1/public/comics/21845/characters" to obtain the required data, the list of characters of that comic.

![Query 1 and filter by characters](https://github.com/emrszon/JS-School/blob/master/C02/query1characters.png)

### Challenge 02b.json

For the "Get a list of all stories when Agent X (Nijo) appears" request.

I did a request at "http://gateway.marvel.com/v1/public/characters" using the API key, timestamp=1 and md5 hash, and the filter nameStartsWith=AgentX, for obtain the character id.

![Query 2](https://github.com/emrszon/JS-School/blob/master/C02/query2.png)

When I had the character id"1011031", I did a request at "http://gateway.marvel.com/v1/public/characters/1011031/stories" for obtain list of all stories when Agent X (Nijo) appears.

![Query 2 filter by Stories](https://github.com/emrszon/JS-School/blob/master/C02/query2series.png)
