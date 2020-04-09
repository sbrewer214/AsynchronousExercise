<?php
    $stateAbbrev = trim($_POST["state"]);

    if ($stateAbbrev == "NJ") {
        print json_encode("New Jersey");
    }
?>