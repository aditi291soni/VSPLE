<?php 
session_start(); 
mysql_connect("localhost","root","") ;
mysql_select_db("yugsite");

$uname=$_POST["uname"];
$password=$_POST["password"];

$sql="select * from admin_login where username='$uname' and password='$password'";
$res =mysql_query($sql);
if(mysql_num_rows($res)!=""){
	$arr= mysql_fetch_array($res);
	$_SESSION["username"] =$arr["username"];

	$admin_uname = $_SESSION["username"];
	print("<script language='javascript'>location.href='banner.php'</script>");
}else{
	print("<script language='javascript'>location.href='index.html'</script>");
}
?>