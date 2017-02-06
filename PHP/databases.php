<?php
  // 1. Luodaan database connection
  $dbhost = "localhost";
  $dbuser = "user";
  $dbpass = "password";
  $dbname = "db_name";
  $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
  // testataan onnistuiko connection
  if(mysqli_connect_errno()) {
    die("Database connection failed: " . 
         mysqli_connect_error() . 
         " (" . mysqli_connect_errno() . ")"
    );
  }
?>
<?php
	// 2. db query
	$query  = "SELECT * ";
	$query .= "FROM table";
	$result = mysqli_query($connection, $query);
	// Testaillaan onnistuiko
	if (!$result) {
		die("Database query failed.");
	}
?>

<html lang="en">
	<head>
		<title>Databases</title>
	</head>
	<body>
		
		<ul>
		<?php
			// 3. Katsotaan mitä query palautti takaisin
			while($row = mysqli_fetch_assoc($result)) {
				// tulostetaan data jokaiselta riviltä
				?><li><?php echo $row["menu_name"] . "<br />";
				} ?></li>
		<?php
		
		  // 4. vapautetaan data
		  mysqli_free_result($result);
		?></ul>
	</body>
</html>

<?php
  // 5. Suljetaan yhteys
  mysqli_close($connection);
?>