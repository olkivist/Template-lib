<?php
	// Redirectaus uudelle sivulle
	function redirect_to($new_location) {
		header("Location: . $new_location");
		exit;
	}

	// Ohjaa uudelle sivulle sen perusteella onko käyttäjä kirjautunut sisään vai ei
	$logged_in = $_GET['logged_in'];
	if ($logged_in == "1") {
		redirect_to("some_site.php");
	}	else {
		redirect_to("other_site.php");
	}

	redirect_to("other_site.php");
?>

<html>
<head>
	<TITLE>Redirect</TITLE>
</head>
<body>

<?php

	

?>

</body>
</html>