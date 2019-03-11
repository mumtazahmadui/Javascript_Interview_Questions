### What is the difference between call and apply?

> CALL

Call a function with the specified arguments. You can use call, if you know how many argument are going to pass to the functions.

>APPLY

Call a function with <b>argument provided as an array</b>. You can use apply if you don't know how many argument are going to pass to the functions.

Both (call and apply) are using to call a functions.

Here is an advantage over apply and call. The .call() method is little bit faster than .apply() method.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>The Difference Between Call and Apply in JavaScript</title>
    <script>
        var var1 = {myName: "ABC", };

        var var2 = {myName: "XYZ"};

        function preview(par1, par2) {
            alert(this.myName + '-' + par1 + '-' + par2);
            console.log(this.myName, par1, par2);
        }
		
        //using call as given below
        preview.call(var1, "First", "Second"); //output: ABC First Second

        //using apply as given below
        preview.apply(var2, ["First", "Second"]); //output: XYZ First Second

        //using basic as given below
        preview("First", "Second");//output: undefined "First", "Second"
    </script>
</head>
<body>
    <div>
        <h3>Refresh the page and see the alert result or go to console window and see the result.</h3>
    </div>
</body>
</html>
```

>![ScreenShot](https://cloud.githubusercontent.com/assets/6780840/26689832/af6b7698-4714-11e7-928b-68d81f697bcd.png)
