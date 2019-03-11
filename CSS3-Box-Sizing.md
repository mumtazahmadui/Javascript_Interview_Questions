# CSS3 Box Sizing

The CSS3 ```box-sizing``` property allows us to include the padding and border in an element's total width and height.

### ```Without``` the CSS3 box-sizing Property

By default, the width and height of an element is calculated like this:

width + padding + border = actual ```width``` of an element

height + padding + border = actual ```height``` of an element

The following sample shows two ```<div>``` elements with the same specified width and height:

![image](https://user-images.githubusercontent.com/6780840/29966321-080ad732-8f2f-11e7-904b-1820d5daf165.png)

![image](https://user-images.githubusercontent.com/6780840/29966336-1747606c-8f2f-11e7-9d2b-220b44281830.png)

The two ```<div>``` elements above end up with different sizes in the result (because div2 has a padding specified):

```css
.div1 {
    width: 200px;
    height: 100px;
    border: 1px solid #25DA01;
    box-sizing: content-box;
}

.div2 {
    width: 200px;
    height: 100px;
    padding: 30px;
    border: 1px solid #2BE1FB;
    box-sizing: content-box;
}
```

So, for a long time web developers have specified a smaller width value than they wanted, because they had to subtract out the padding and borders.

With CSS3, the ```box-sizing``` property solves this problem.

### ```With``` the CSS3 box-sizing Property

The CSS3 ```box-sizing``` property allows us to include the padding and border in an element's total width and height.

If you set ```box-sizing: border-box;``` on an element padding and border are included in the width and height:


![image](https://user-images.githubusercontent.com/6780840/29966520-e2eae7d4-8f2f-11e7-9b89-0f7c0693cd7f.png)

Here is the same example as above, with ```box-sizing: border-box;``` added to both ```<div>``` elements:

```css
.div1 {
    width: 200px;
    height: 100px;
    border: 1px solid #25DA01;
    box-sizing: border-box;
}

.div2 {
    width: 200px;
    height: 100px;
    padding: 30px;
    border: 1px solid #2BE1FB;
    box-sizing: border-box;
}
```

Applying this to all elements is safe and wise:

#### Examlple

```css
* {
    box-sizing: border-box;
}
```
