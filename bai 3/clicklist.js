var $=document.querySelector.bind(document);
var list=$('#container')
var tt1=$('#click1');
var tt2=$('#click2');
var tt3=$('#click3');
var tt4=$('#click4');

var listjs=`
<table border="1" cellpadding="0" cellspacing="0">
<caption>list language</caption>
<thead>
   <tr>
    <th>Index</th>
    <th>Name language</th>
    <th>Công dụng</th>
    <th>Đối tượng sử dụng</th>
    <th>Information</th>
   </tr>


</thead>
<tbody align="center">
   <tr>
    <td>1</td>
    <td>HTML</td>
    <td>Sieu văn bản</td>
    <td>Lập trình viên web</td>
   <td>
   <button type="button" id="click1" onclick=function(){
       alert('letuananh')
   }>HTML</button>
   </td>
   </tr>
   <tr>
    <td>2</td>
    <td>CSS</td>
    <td>Trang trí cho siêu bản trở nên đẹp hơn</td>
    <td>lập trình viên web</td>

    <td>
    <button type="button" id="click2">CSS</button> 
    </td>
   </tr>
   <tr>
    <td>3</td>
    <td>Javascript</td>
    <td>Thực hiện các lo gic trên trang web</td>
    <td>Lập trình viên web</td>
    <td>
   <button type="button" id="click3">Javascript</button>

    </td>
   </tr>
   <tr>
    <td>4</td>
    <td>PHP</td>
    <td>Sử lý cơ sở dữ liệu</td>
    <td>Lập trình viên web</td>
    <td>
   <button type="button" id="click4">PHP</button>

    </td>
   </tr>

</table>

`
list.innerHTML=listjs
