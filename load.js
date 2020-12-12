function onPage(url)
{
  let url=encodeURI(url);
  console.log(url);
  $("body").load(url);
  history.pushState(null,null,url);
}
