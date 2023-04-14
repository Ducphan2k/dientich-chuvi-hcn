const COE = 2
let width = prompt('nhap chieu rong');
let length = prompt('nhap chieu dai');
let acreage = width * length ;
let perimeter = (Number(width) + Number(length)) * COE;

document.write(`
<pre>
  chieu rong la: ${width}

  chieu dai la: ${length}

  dien tich hinh chu nhat la: ${acreage}

  chu vi hinh chu nhat la: ${perimeter}
</pre>
`);






