# ListControl.js

## Overview

Unlike some other programming languages (like [PHP](http://www.php.net/)), JavaScript does not have an internal pointer for iterable objects. Though it is not a necessacity, it is a nice-to-have functionality is some situations.

ListControl.js aims to provide that functionality. It is extended from the native `Array` prototype, so you can use it like a normal Array with the internal pointer functionality attached.

## Installation

```
npm install listcontrol
```

## Usage

```javascript
const ListControl = require('listcontrol');

const list = new ListControl('a', 'b', 'c');
```

OR with HTML:

```html
<script src="path/to/listcontrol.min.js"></script>
<script>
const list = new ListControl('a', 'b', 'c');
</script>
```

## Property

### `.index`

The property is the main pointer. Though it is writable, you are highly discouraged from replacing the value of this property under most circumstances.

```javascript
list.index
// -> 0
```

## Methods

### `.current()`

Returns the current item of the instance.

```javascript
list.current()
// -> 'a'
```

### `.next()`

Increments the pointer index by 1 if there is a next item in the instance. Returns the next item if there is a next item or `undefined` otherwise.

```javascript
list.next()
// -> 'b'

list.index
// -> 1

list.next()
// -> 'c'

list.index
// -> 2

list.next()
// -> undefined

list.index
// -> 2
```

### `.previous`

Increments the pointer index by 1 if there is a previous item in the instance. Returns the previous item if there is a previous item or `undefined` otherwise.

```javascript
list.previous()
// -> 'b'

list.index
// -> 1

list.previous()
// -> 'a'

list.index
// -> 0

list.previous()
// -> undefined

list.index
// -> 0
```

### `.last()`

Moves the pointer index to the last and returns the last item in the instance.

```javascript
list.last()
// -> 'c'

list.index
// -> 2
```

### `.first()`

Moves the pointer index to the start and returns the first item in the instance.

```javascript
list.first()
// -> 'a'

list.index
// -> 0
```
