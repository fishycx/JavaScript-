/**
 * Created by yuchuanxing on 2017/6/17.
 */
var x = 2;
var y = 3;
var z = x + y;
/*大小写敏感*/
/*您可以在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可：
 */
/*Value = undefined
 在计算机程序中，经常会声明无值的变量。未使用值来声明的变量，其值实际上是 undefined。
 在执行过以下语句后，变量 carname 的值将是 undefined：
 */
/*重新声明 JavaScript 变量
 如果重新声明 JavaScript 变量，该变量的值不会丢失：
 在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：
 */


/*-----------------------------------------------------------------------------*/


/*数据类型*/
/*JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：
 */
var  x ; var x = 6; var x = "Bill"

//javaScript 函数
/*向未声明的 JavaScript 变量来分配值
 如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
 */


//javaScript错误-Throw、Try和catch
/*try 语句测试代码块的错误。
 catch 语句处理错误。
 throw 语句创建自定义错误。
 */
try
{
    //在这里运行代码
}
catch(err)
{
    //在这里处理错误
}

/*javaScript HTML DOM
* 1.改变HTML输入流
* 2.改变HTML内容
* 3.改变HTML的属性
* */


/*改变CSS
* 1.改变HTML样式
* document.getElementById(id).style.property=new style
*
 * */

/*
* DOM事件
*HTML DOM 允许您通过使用 JavaScript 来向 HTML 元素分配事件：
*
 * */

/*
* onload and onunload
* onload 和 onunload 事件会在用户进入或离开页面时被触发。
* onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
* onload 和 onunload 事件可用于处理 cookie。
 * */

/*
* onchange
* onchange 事件常结合对输入字段的验证来使用。
 * */

/*
* onmouseover onmouseout
* onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
 * */

/*
* dom 元素
* */

/*javaScript对象
* JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
* 此外，JavaScript 允许自定义对象。
*创建新对象有两种不同的方法：
* 定义并创建对象的实例
*使用函数来定义对象，然后创建新的对象实例
*JavaScript 是面向对象的语言，但 JavaScript 不使用类。
* 在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。
* JavaScript 基于 prototype，而不是基于类的。
 * */


/*Number 对象
* JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。
* JavaScript 中的所有数字都存储为根为 10 的 64 位（8 比特），浮点数。
* 精度
 *
*
* */

/*
* 数组
*
*
* */
/*
* 正则表达式
* 什么是 RegExp？
*  RegExp 是正则表达式的缩写。
*  当您检索某个文本时，可以使用一种模式来描述要检索的内容。RegExp 就是这种模式。
*  简单的模式可以是一个单独的字符。
*  更复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。
*  您可以规定字符串中的检索位置，以及要检索的字符类型，等等。
*  var patt1=new RegExp("e");
*  RegExp 对象有 3 个方法：test()、exec() 以及 compile()。
*  test() 方法检索字符串中的指定值。返回值是 true 或 false。
*  exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
* compile() 既可以改变检索模式，也可以添加或删除第二个参数。
*
 *
 * */

/*
* 可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。

 * */

/*
* javaScript 计时
* 通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。
 * */

/*
* javaScript Cookie
*
* */

/*
* javaScript库
* JavaScript 库 - jQuery、Prototype、MooTools。
*
*
*
*
 * */