
function pageLoad(url)
{
  const xhr=new XMLHttpRequest();

  xhr.open("GET",url,true);

  xhr.onload=function()
  {
    if(this.status===200)
    {
      // document.write(this.responseText);
      // document.body(this.responseText);
      // document.getElementsByTagName("body").innerHTML="";
      // document.getElementsByTagName("body").innerHTML=this.responseText;
      // document.getElementsByClassName('some').innerHTML=this.responseText;
      document.open();
      document.write(this.responseText);
      document.close();

      history.pushState(null,null,url);
    }
  }
  xhr.send();
}
