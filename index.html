<!DOCTYPE html>
<html>
<head>
	<title>Extract Excel/PDF Links</title>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript">
		function extractLinks() {
			$.post("<?php echo $_SERVER['PHP_SELF']; ?>", { url: $('#url').val() }, function(data) {
				console.log(data);
			});
		}
	</script>
</head>
<body>
	<label for="url">Enter Website URL:</label>
	<input type="text" id="url" name="url"><br><br>
	<button onclick="extractLinks()">Extract Links</button>
</body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$url = $_POST["url"];
	$response = file_get_contents($url);

	$dom = new DOMDocument();
	@$dom->loadHTML($response);

	$links = array();
	foreach($dom->getElementsByTagName("a") as $link) {
	    $href = $link->getAttribute("href");
	    if (strpos($href, ".xls") !== false || strpos($href, ".xlsx") !== false || strpos($href, ".pdf") !== false) {
	        $links[] = $href;
	    }
	}

	echo "<script>console.log(".json_encode($links).");</script>";
}
?>
</html>
