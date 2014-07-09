NY Citibike Data
---

Grab Data
===
Dataset is too big for github so hosting it on DropBox.
From here: 
[](https://www.dropbox.com/s/6zuhiprdt043spi/citibikedata.csv)

Installation
===

Install dependencies:
```
bower install && npm install
```

Start mongoDB process:
```
mongod
```

Grunt:
```
grunt serve
```

Useful mongoDB commands
===

After running 
```
mongo
```

Import CSV to mongoDB database:

```
mongoimport -d nydata-dev -c trips --type csv --file citibikedata.csv --headerline
```

Use a nydata-dev table:

```
use nydata-dev
```

Find rows in different collections:

```
db.trips.find({ bikeid : 18940 })
db.trips.find({ "start station name" : "Broadway & E 14 St" })
```